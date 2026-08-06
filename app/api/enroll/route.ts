import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import fs from 'fs';
import path from 'path';

const LEADS_FILE_PATH = path.join(process.cwd(), 'data', 'leads.json');

function saveLeadToFile(newLead: any) {
  try {
    let leads = [];
    if (fs.existsSync(LEADS_FILE_PATH)) {
      const fileData = fs.readFileSync(LEADS_FILE_PATH, 'utf-8');
      leads = JSON.parse(fileData);
    }
    // Add unique ID and prepend at the top
    const leadRecord = {
      id: `lead_${Date.now()}`,
      ...newLead
    };
    leads.unshift(leadRecord);
    fs.writeFileSync(LEADS_FILE_PATH, JSON.stringify(leads, null, 2), 'utf-8');
    return leadRecord;
  } catch (err) {
    console.error('Error persisting lead to data/leads.json:', err);
    return newLead;
  }
}

function formatPrettySource(source: string, medium: string): string {
  if (!source) return 'Direct';
  const s = source.toLowerCase().trim();
  const m = (medium || '').toLowerCase().trim();
  const isAd = m.includes('cpc') || m.includes('ppc') || m.includes('paid') || m.includes('ad');

  if (s === 'ig' || s === 'igram' || s === 'instagram') {
    return isAd ? 'Instagram Ads' : 'Instagram Organic';
  }
  if (s === 'fb' || s === 'facebook') {
    return isAd ? 'Facebook Ads' : 'Facebook Organic';
  }
  if (s === 'google' || s === 'g') {
    return isAd ? 'Google Ads' : 'Google Organic';
  }
  if (s === 'bing' || s === 'msn') {
    return isAd ? 'Bing Ads' : 'Bing Organic';
  }
  if (s === 'li' || s === 'linkedin') {
    return isAd ? 'LinkedIn Ads' : 'LinkedIn Organic';
  }
  if (s === 'yt' || s === 'youtube') {
    return isAd ? 'YouTube Ads' : 'YouTube Organic';
  }
  if (s === 'tw' || s === 'twitter' || s === 'x') {
    return 'Twitter / X';
  }
  if (s === 'direct') return 'Direct';

  return source.charAt(0).toUpperCase() + source.slice(1);
}

function formatPrettyMedium(medium: string): string {
  if (!medium) return 'None';
  const m = medium.toLowerCase().trim();
  if (m === 'cpc' || m === 'ppc' || m === 'paid') return 'CPC (Paid Ads)';
  if (m === 'organic') return 'Organic Search';
  if (m === 'social' || m === 'paid_social') return 'Social Media';
  if (m === 'referral') return 'Referral';
  if (m === 'none' || m === 'direct') return 'None (Direct)';
  return medium.toUpperCase();
}

/**
 * GET Handler - Provides friendly API info when accessed directly in browser
 */
export async function GET() {
  return NextResponse.json({
    status: 'active',
    endpoint: '/api/enroll',
    method: 'POST',
    description: 'LearnMore Technologies Lead Enrollment & Attribution API Endpoint.',
    fetch_all_leads_endpoint: 'GET /api/leads',
    usage: 'Send a POST request with JSON payload containing name, email, phone, program, and tracking attributes.',
  });
}

/**
 * POST Handler - Processes Enrollment & Lead Attribution
 */
export async function POST(request: Request) {
  try {
    const { name, email, phone, program, tracking } = await request.json();

    if (!name || !email || !phone || !program) {
      return NextResponse.json(
        { error: 'All fields (name, email, phone, program) are required.' },
        { status: 400 }
      );
    }

    const attr = tracking || {};
    const rawFirstSource = attr.first_utm_source || 'Direct';
    const rawFirstMedium = attr.first_utm_medium || 'None';
    const firstTouchCampaign = attr.first_utm_campaign || 'N/A';

    const rawLastSource = attr.last_utm_source || rawFirstSource;
    const rawLastMedium = attr.last_utm_medium || rawFirstMedium;
    const lastTouchCampaign = attr.last_utm_campaign || firstTouchCampaign;
    const lastTouchKeyword = attr.last_utm_term || 'N/A';
    const lastGclid = attr.last_gclid || 'N/A';

    // Formatted pretty values
    const sourceDisplay = formatPrettySource(rawLastSource, rawLastMedium);
    const mediumDisplay = formatPrettyMedium(rawLastMedium);

    const firstSourceDisplay = formatPrettySource(rawFirstSource, rawFirstMedium);
    const firstMediumDisplay = formatPrettyMedium(rawFirstMedium);

    const deviceType = attr.device_type || 'Unknown';
    const landingPage = attr.last_landing_page || attr.first_landing_page || 'N/A';
    const referrer = attr.last_referrer || attr.first_referrer || 'Direct';

    // Current lead timestamp (IST / Local format)
    const now = new Date();
    const leadTime = now.toLocaleString('en-IN', {
      timeZone: 'Asia/Kolkata',
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: true,
    });

    // Complete Structured Lead Object
    const rawLeadData = {
      name,
      email,
      phone,
      program,
      source: sourceDisplay,
      raw_source: rawLastSource,
      medium: mediumDisplay,
      raw_medium: rawLastMedium,
      campaign: lastTouchCampaign,
      keyword: lastTouchKeyword,
      landing_page: landingPage,
      referrer: referrer,
      gclid: lastGclid,
      device: deviceType,
      first_touch_source: firstSourceDisplay,
      first_touch_campaign: firstTouchCampaign,
      lead_time: leadTime,
    };

    // Save lead record to data/leads.json
    const leadData = saveLeadToFile(rawLeadData);

    // Auto-sync with Alataf's Django CRM API in real-time
    try {
      fetch('http://localhost:8000/api/learnmore-leads/', { method: 'GET' }).catch(() => {});
    } catch (syncErr) {
      console.warn('Realtime CRM sync error:', syncErr);
    }

    // Log Lead Data in Terminal for instant debugging
    console.log('\n🔥 NEW LEAD CAPTURED BY API:');
    console.log(JSON.stringify(leadData, null, 2));
    console.log('----------------------------------------\n');

    // Create a transporter using Gmail SMTP
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const plainTextBody = `
NEW LEAD INQUIRY & ATTRIBUTION REPORT
=====================================================
Field           Value
-----------------------------------------------------
Name            ${name}
Phone           ${phone}
Email           ${email}
Program         ${program}
Source          ${sourceDisplay} (${rawLastSource})
Medium          ${mediumDisplay}
Campaign        ${lastTouchCampaign}
Keyword         ${lastTouchKeyword}
Landing Page    ${landingPage}
Referrer        ${referrer}
GCLID           ${lastGclid}
Device          ${deviceType}
First Touch     ${firstSourceDisplay} / ${firstMediumDisplay} (${firstTouchCampaign})
Lead Time       ${leadTime}
=====================================================
`;

    const htmlBody = `
      <div style="font-family: 'Segoe UI', Arial, sans-serif; max-width: 650px; margin: 0 auto; padding: 24px; border: 1px solid #cbd5e1; border-radius: 12px; background-color: #ffffff;">
        <div style="background: linear-gradient(135deg, #0f172a, #1e293b); padding: 18px 24px; border-radius: 8px 8px 0 0; margin: -24px -24px 20px -24px;">
          <h2 style="color: #ffffff; margin: 0; font-size: 20px; font-weight: 700;">🎯 New Lead Inquiry Received</h2>
          <p style="color: #94a3b8; font-size: 12px; margin: 4px 0 0 0;">LearnMore Technologies - End-to-End Attribution Report</p>
        </div>

        <table style="width: 100%; border-collapse: collapse; margin-top: 10px; font-size: 14px; border: 1px solid #cbd5e1; border-radius: 6px; overflow: hidden;">
          <thead>
            <tr style="background-color: #1e293b; color: #ffffff; text-align: left;">
              <th style="padding: 12px 16px; border-bottom: 2px solid #0f172a; width: 35%; font-size: 14px; font-weight: 700;">Field</th>
              <th style="padding: 12px 16px; border-bottom: 2px solid #0f172a; font-size: 14px; font-weight: 700;">Value</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style="padding: 10px 16px; border-bottom: 1px solid #e2e8f0; font-weight: 700; color: #334155; background-color: #f8fafc;">Name</td>
              <td style="padding: 10px 16px; border-bottom: 1px solid #e2e8f0; color: #0f172a; font-weight: 700;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 10px 16px; border-bottom: 1px solid #e2e8f0; font-weight: 700; color: #334155; background-color: #f8fafc;">Phone</td>
              <td style="padding: 10px 16px; border-bottom: 1px solid #e2e8f0; color: #0f172a; font-weight: 700;">${phone}</td>
            </tr>
            <tr>
              <td style="padding: 10px 16px; border-bottom: 1px solid #e2e8f0; font-weight: 700; color: #334155; background-color: #f8fafc;">Email</td>
              <td style="padding: 10px 16px; border-bottom: 1px solid #e2e8f0; color: #2563eb;"><a href="mailto:${email}" style="color: #2563eb; text-decoration: none;">${email}</a></td>
            </tr>
            <tr>
              <td style="padding: 10px 16px; border-bottom: 1px solid #e2e8f0; font-weight: 700; color: #334155; background-color: #f8fafc;">Program</td>
              <td style="padding: 10px 16px; border-bottom: 1px solid #e2e8f0; color: #4f46e5; font-weight: 700;">${program}</td>
            </tr>
            <tr>
              <td style="padding: 10px 16px; border-bottom: 1px solid #e2e8f0; font-weight: 700; color: #334155; background-color: #f8fafc;">Source</td>
              <td style="padding: 10px 16px; border-bottom: 1px solid #e2e8f0; color: #0f172a; font-weight: 600;">${sourceDisplay} <span style="font-[#64748b]; font-weight: normal; font-size: 12px;">(${rawLastSource})</span></td>
            </tr>
            <tr>
              <td style="padding: 10px 16px; border-bottom: 1px solid #e2e8f0; font-weight: 700; color: #334155; background-color: #f8fafc;">Medium</td>
              <td style="padding: 10px 16px; border-bottom: 1px solid #e2e8f0; color: #0f172a;">${mediumDisplay}</td>
            </tr>
            <tr>
              <td style="padding: 10px 16px; border-bottom: 1px solid #e2e8f0; font-weight: 700; color: #334155; background-color: #f8fafc;">Campaign</td>
              <td style="padding: 10px 16px; border-bottom: 1px solid #e2e8f0; color: #0f172a;">${lastTouchCampaign}</td>
            </tr>
            <tr>
              <td style="padding: 10px 16px; border-bottom: 1px solid #e2e8f0; font-weight: 700; color: #334155; background-color: #f8fafc;">Keyword</td>
              <td style="padding: 10px 16px; border-bottom: 1px solid #e2e8f0; color: #0f172a;">${lastTouchKeyword}</td>
            </tr>
            <tr>
              <td style="padding: 10px 16px; border-bottom: 1px solid #e2e8f0; font-weight: 700; color: #334155; background-color: #f8fafc;">Landing Page</td>
              <td style="padding: 10px 16px; border-bottom: 1px solid #e2e8f0; color: #0f172a;">${landingPage}</td>
            </tr>
            <tr>
              <td style="padding: 10px 16px; border-bottom: 1px solid #e2e8f0; font-weight: 700; color: #334155; background-color: #f8fafc;">Referrer</td>
              <td style="padding: 10px 16px; border-bottom: 1px solid #e2e8f0; color: #0f172a;">${referrer}</td>
            </tr>
            <tr>
              <td style="padding: 10px 16px; border-bottom: 1px solid #e2e8f0; font-weight: 700; color: #334155; background-color: #f8fafc;">GCLID</td>
              <td style="padding: 10px 16px; border-bottom: 1px solid #e2e8f0; color: #0f172a; font-family: monospace; font-size: 13px;">${lastGclid}</td>
            </tr>
            <tr>
              <td style="padding: 10px 16px; border-bottom: 1px solid #e2e8f0; font-weight: 700; color: #334155; background-color: #f8fafc;">First Touch</td>
              <td style="padding: 10px 16px; border-bottom: 1px solid #e2e8f0; color: #64748b; font-size: 13px;">${firstSourceDisplay} / ${firstMediumDisplay} (${firstTouchCampaign})</td>
            </tr>
            <tr>
              <td style="padding: 10px 16px; font-weight: 700; color: #334155; background-color: #f8fafc;">Lead Time</td>
              <td style="padding: 10px 16px; color: #0f172a; font-size: 13px;">${leadTime}</td>
            </tr>
          </tbody>
        </table>

        <p style="margin-top: 20px; font-size: 11px; color: #94a3b8; text-align: center;">
          Captured via LearnMore Technologies Web Lead Engine.
        </p>
      </div>
    `;

    // Email options
    const mailOptions = {
      from: `"${name}" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_TO || process.env.EMAIL_USER,
      replyTo: email,
      subject: `New Lead [${sourceDisplay.toUpperCase()}]: ${program} - ${name}`,
      text: plainTextBody,
      html: htmlBody,
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    // Optional CRM Webhook Forwarding
    if (process.env.CRM_WEBHOOK_URL) {
      try {
        await fetch(process.env.CRM_WEBHOOK_URL, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(leadData),
        });
      } catch (webhookErr) {
        console.warn('CRM Webhook delivery error:', webhookErr);
      }
    }

    return NextResponse.json({
      success: true,
      message: 'Enrollment request and lead attribution processed successfully',
      lead: leadData,
    });
  } catch (error: any) {
    console.error('Enrollment email API error:', error);
    return NextResponse.json(
      { error: 'Failed to send enrollment email.' },
      { status: 500 }
    );
  }
}
