// app/api/generate-certificate/route.ts
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { certificateId, studentName, courseName } = await request.json();
    
    // For now, just return the original image as fallback
    // This avoids the canvas dependency issue
    const fs = require('fs');
    const path = require('path');
    
    const imagePath = path.join(process.cwd(), 'public', 'images', 'courses', 'certificate-sample.png');
    const imageBuffer = fs.readFileSync(imagePath);
    
    // Return the image as download
    return new NextResponse(imageBuffer, {
      status: 200,
      headers: {
        'Content-Type': 'image/png',
        'Content-Disposition': `attachment; filename="certificate-${certificateId}.png"`,
        'Cache-Control': 'no-cache, no-store, must-revalidate',
      },
    });
  } catch (error) {
    console.error('Certificate generation error:', error);
    return NextResponse.json(
      { error: 'Failed to generate certificate' },
      { status: 500 }
    );
  }
}