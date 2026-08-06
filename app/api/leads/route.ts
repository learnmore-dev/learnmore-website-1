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

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, Authorization, x-api-key',
};

export async function OPTIONS() {
  return NextResponse.json({}, { headers: corsHeaders });
}

/**
 * GET /api/leads
 * Returns all captured leads with full attribution data for CRM/External integration
 */
export async function GET(request: Request) {
  try {
    const url = new URL(request.url);
    const { searchParams } = url;
    
    // Check API token authentication
    const authHeader = request.headers.get('authorization');
    const xApiKey = request.headers.get('x-api-key');
    const tokenParam = searchParams.get('token') || searchParams.get('api_key');

    let providedToken = tokenParam;
    if (!providedToken && xApiKey) {
      providedToken = xApiKey;
    }
    if (!providedToken && authHeader) {
      providedToken = authHeader.startsWith('Bearer ')
        ? authHeader.substring(7).trim()
        : authHeader.trim();
    }

    const expectedToken = process.env.LEADS_API_SECRET_KEY || 'lmt_secret_token_2026';

    if (!providedToken || providedToken !== expectedToken) {
      return NextResponse.json(
        {
          success: false,
          error: 'Unauthorized access. Valid API token is required to view leads data.',
        },
        { status: 401, headers: corsHeaders }
      );
    }

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
    }, { headers: corsHeaders });
  } catch (error: any) {
    console.error('API /api/leads error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch leads data.' },
      { status: 500, headers: corsHeaders }
    );
  }
}

