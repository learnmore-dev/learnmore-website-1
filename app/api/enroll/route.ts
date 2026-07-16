import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const { name, email, phone, program } = await request.json();

    if (!name || !email || !phone || !program) {
      return NextResponse.json(
        { error: 'All fields (name, email, phone, program) are required.' },
        { status: 400 }
      );
    }

    // Create a transporter using Gmail SMTP
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Email options
    const mailOptions = {
      from: `"${name}" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_TO || process.env.EMAIL_USER,
      replyTo: email,
      subject: `New Course Enrollment Request: ${program}`,
      text: `New Enrollment Details:\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\nProgram/Course: ${program}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 8px;">
          <h2 style="color: #d32f2f; border-bottom: 2px solid #d32f2f; padding-bottom: 10px; margin-top: 0;">New Enrollment Request</h2>
          <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #f0f0f0; font-weight: bold; width: 30%;">Full Name</td>
              <td style="padding: 10px; border-bottom: 1px solid #f0f0f0;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #f0f0f0; font-weight: bold;">Email Address</td>
              <td style="padding: 10px; border-bottom: 1px solid #f0f0f0;"><a href="mailto:${email}">${email}</a></td>
            </tr>
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #f0f0f0; font-weight: bold;">Phone Number</td>
              <td style="padding: 10px; border-bottom: 1px solid #f0f0f0;">${phone}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #f0f0f0; font-weight: bold;">Program</td>
              <td style="padding: 10px; border-bottom: 1px solid #f0f0f0; font-weight: bold; color: #1976d2;">${program}</td>
            </tr>
          </table>
          <p style="margin-top: 30px; font-size: 11px; color: #888888; text-align: center;">
            This email was automatically generated from the Learnmore Technologies website enrollment form.
          </p>
        </div>
      `,
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
