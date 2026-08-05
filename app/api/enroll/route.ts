import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

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
    const firstTouchSource = attr.first_utm_source || 'Direct';
    const firstTouchMedium = attr.first_utm_medium || 'None';
    const firstTouchCampaign = attr.first_utm_campaign || 'N/A';

    const lastTouchSource = attr.last_utm_source || firstTouchSource;
    const lastTouchMedium = attr.last_utm_medium || firstTouchMedium;
    const lastTouchCampaign = attr.last_utm_campaign || firstTouchCampaign;
    const lastTouchKeyword = attr.last_utm_term || 'N/A';
    const lastGclid = attr.last_gclid || 'N/A';

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
Source          ${lastTouchSource}
Medium          ${lastTouchMedium}
Campaign        ${lastTouchCampaign}
Keyword         ${lastTouchKeyword}
Landing Page    ${landingPage}
Referrer        ${referrer}
GCLID           ${lastGclid}
Device          ${deviceType}
First Source    ${firstTouchSource} / ${firstTouchMedium}
First Campaign  ${firstTouchCampaign}
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
              <td style="padding: 10px 16px; border-bottom: 1px solid #e2e8f0; color: #0f172a; font-weight: 600;">${lastTouchSource}</td>
            </tr>
            <tr>
              <td style="padding: 10px 16px; border-bottom: 1px solid #e2e8f0; font-weight: 700; color: #334155; background-color: #f8fafc;">Medium</td>
              <td style="padding: 10px 16px; border-bottom: 1px solid #e2e8f0; color: #0f172a;">${lastTouchMedium}</td>
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
              <td style="padding: 10px 16px; border-bottom: 1px solid #e2e8f0; color: #64748b; font-size: 13px;">${firstTouchSource} / ${firstTouchMedium} (${firstTouchCampaign})</td>
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
      subject: `New Lead [${lastTouchSource.toUpperCase()}]: ${program} - ${name}`,
      text: plainTextBody,
      html: htmlBody,
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true, message: 'Enrollment email sent successfully' });
  } catch (error: any) {
    console.error('Enrollment email API error:', error);
    return NextResponse.json(
      { error: 'Failed to send enrollment email.' },
      { status: 500 }
    );
  }
}
