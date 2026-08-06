import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export const dynamic = 'force-dynamic';

const LEADS_FILE_PATH = path.join(process.cwd(), 'data', 'leads.json');

/**
 * Helper to read leads from data/leads.json safely
 */
function getLeadsFromFile() {
  try {
    if (!fs.existsSync(LEADS_FILE_PATH)) {
      return [];
    }
    const fileData = fs.readFileSync(LEADS_FILE_PATH, 'utf-8');
    return JSON.parse(fileData);
  } catch (error) {
    console.error('Error reading leads.json:', error);
    return [];
  }
}

/**
 * GET /api/leads
 * Returns all captured leads with full attribution data for CRM/External integration
 */
export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const sourceFilter = searchParams.get('source')?.toLowerCase();
    const limitParam = searchParams.get('limit');
    
    let leads = getLeadsFromFile();

    // Filter by source if requested (e.g. ?source=google)
    if (sourceFilter) {
      leads = leads.filter((item: any) => 
        (item.source || '').toLowerCase().includes(sourceFilter) ||
        (item.raw_source || '').toLowerCase().includes(sourceFilter)
      );
    }

    // Apply limit if requested (e.g. ?limit=10)
    if (limitParam && !isNaN(parseInt(limitParam, 10))) {
      const limit = parseInt(limitParam, 10);
      leads = leads.slice(0, limit);
    }

    return NextResponse.json({
      success: true,
      total_leads: leads.length,
      leads: leads,
    });
  } catch (error: any) {
    console.error('API /api/leads error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch leads data.' },
      { status: 500 }
    );
  }
}
