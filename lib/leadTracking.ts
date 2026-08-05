/**
 * Lead Tracking & Attribution Utility for LearnMore Technologies
 * 
 * Captures UTM parameters, Click IDs (GCLID, FBCLID, MSCLKID), Referrer, Device Type,
 * and maintains First-Touch and Last-Touch attribution across 90-day persistence.
 */

export interface LeadTrackingData {
  // First Touch Attribution (original channel that brought user)
  first_utm_source: string;
  first_utm_medium: string;
  first_utm_campaign: string;
  first_utm_term: string;
  first_utm_content: string;
  first_gclid: string;
  first_fbclid: string;
  first_msclkid: string;
  first_landing_page: string;
  first_referrer: string;
  first_visit_time: string;

  // Last Touch Attribution (channel directly prior to submission)
  last_utm_source: string;
  last_utm_medium: string;
  last_utm_campaign: string;
  last_utm_term: string;
  last_utm_content: string;
  last_gclid: string;
  last_fbclid: string;
  last_msclkid: string;
  last_landing_page: string;
  last_referrer: string;
  last_visit_time: string;

  // Environment Meta
  device_type: string;
  user_agent: string;
  browser_language: string;
}

const STORAGE_KEY = 'lmt_lead_attribution_v1';
const COOKIE_NAME = 'lmt_lead_attr';
const EXPIRY_DAYS = 90;

/**
 * Cookie Helper: Set cookie with expiry
 */
function setCookie(name: string, value: string, days: number) {
  if (typeof document === 'undefined') return;
  const date = new Date();
  date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
  const expires = `expires=${date.toUTCString()}`;
  document.cookie = `${name}=${encodeURIComponent(value)}; ${expires}; path=/; SameSite=Lax`;
}

/**
 * Cookie Helper: Get cookie by name
 */
function getCookie(name: string): string | null {
  if (typeof document === 'undefined') return null;
  const nameEQ = `${name}=`;
  const ca = document.cookie.split(';');
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) === ' ') c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) === 0) return decodeURIComponent(c.substring(nameEQ.length, c.length));
  }
  return null;
}

/**
 * Detect device type (Mobile, Tablet, Desktop)
 */
function detectDeviceType(): string {
  if (typeof navigator === 'undefined') return 'Unknown';
  const ua = navigator.userAgent;
  if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)) {
    return 'Tablet';
  }
  if (/Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(ua)) {
    return 'Mobile';
  }
  return 'Desktop';
}

/**
 * Derive organic/fallback source when no UTM parameters exist in URL
 */
function deriveOrganicSource(referrer: string, gclid: string, fbclid: string, msclkid: string): { source: string; medium: string } {
  if (gclid) return { source: 'google', medium: 'cpc' };
  if (fbclid) return { source: 'facebook', medium: 'paid_social' };
  if (msclkid) return { source: 'bing', medium: 'cpc' };

  if (!referrer) return { source: 'direct', medium: 'none' };

  const ref = referrer.toLowerCase();
  if (ref.includes('google.')) return { source: 'google', medium: 'organic' };
  if (ref.includes('bing.')) return { source: 'bing', medium: 'organic' };
  if (ref.includes('yahoo.')) return { source: 'yahoo', medium: 'organic' };
  if (ref.includes('duckduckgo.')) return { source: 'duckduckgo', medium: 'organic' };
  if (ref.includes('facebook.com') || ref.includes('fb.me')) return { source: 'facebook', medium: 'social' };
  if (ref.includes('instagram.com')) return { source: 'instagram', medium: 'social' };
  if (ref.includes('linkedin.com')) return { source: 'linkedin', medium: 'social' };
  if (ref.includes('t.co') || ref.includes('twitter.com') || ref.includes('x.com')) return { source: 'twitter', medium: 'social' };
  if (ref.includes('youtube.com')) return { source: 'youtube', medium: 'social' };

  try {
    const url = new URL(referrer);
    return { source: url.hostname, medium: 'referral' };
  } catch {
    return { source: 'referral', medium: 'referral' };
  }
}

/**
 * Capture URL parameters & storage on initial load or navigation
 */
export function captureLeadData(): LeadTrackingData {
  if (typeof window === 'undefined') {
    return createEmptyLeadData();
  }

  // 1. Read URL Parameters
  const urlParams = new URLSearchParams(window.location.search);
  const rawUtmSource = urlParams.get('utm_source') || '';
  const rawUtmMedium = urlParams.get('utm_medium') || '';
  const utmCampaign = urlParams.get('utm_campaign') || '';
  const utmTerm = urlParams.get('utm_term') || urlParams.get('utm_keyword') || '';
  const utmContent = urlParams.get('utm_content') || urlParams.get('utm_ad') || '';
  const gclid = urlParams.get('gclid') || '';
  const fbclid = urlParams.get('fbclid') || '';
  const msclkid = urlParams.get('msclkid') || '';

  const referrer = document.referrer || '';
  const currentPath = window.location.pathname + window.location.search;
  const nowIso = new Date().toISOString();

  // Fallback source & medium calculation
  const fallback = deriveOrganicSource(referrer, gclid, fbclid, msclkid);
  const utmSource = rawUtmSource || fallback.source;
  const utmMedium = rawUtmMedium || fallback.medium;

  // 2. Read existing saved data
  let existingData: LeadTrackingData | null = null;
  try {
    const localVal = localStorage.getItem(STORAGE_KEY);
    const cookieVal = getCookie(COOKIE_NAME);
    const jsonStr = localVal || cookieVal;
    if (jsonStr) {
      existingData = JSON.parse(jsonStr);
    }
  } catch (err) {
    console.warn('LMT LeadTracker: Error reading stored tracking data', err);
  }

  const isFirstVisit = !existingData || !existingData.first_visit_time;

  // 3. Assemble New Lead Tracking Data
  const updatedData: LeadTrackingData = {
    // First Touch (Keep if already exists, else set)
    first_utm_source: isFirstVisit ? utmSource : existingData!.first_utm_source,
    first_utm_medium: isFirstVisit ? utmMedium : existingData!.first_utm_medium,
    first_utm_campaign: isFirstVisit ? utmCampaign : existingData!.first_utm_campaign,
    first_utm_term: isFirstVisit ? utmTerm : existingData!.first_utm_term,
    first_utm_content: isFirstVisit ? utmContent : existingData!.first_utm_content,
    first_gclid: isFirstVisit ? gclid : existingData!.first_gclid,
    first_fbclid: isFirstVisit ? fbclid : existingData!.first_fbclid,
    first_msclkid: isFirstVisit ? msclkid : existingData!.first_msclkid,
    first_landing_page: isFirstVisit ? currentPath : existingData!.first_landing_page,
    first_referrer: isFirstVisit ? referrer : existingData!.first_referrer,
    first_visit_time: isFirstVisit ? nowIso : existingData!.first_visit_time,

    // Last Touch (Update on new session or whenever new parameters exist)
    last_utm_source: rawUtmSource ? rawUtmSource : (existingData?.last_utm_source || utmSource),
    last_utm_medium: rawUtmMedium ? rawUtmMedium : (existingData?.last_utm_medium || utmMedium),
    last_utm_campaign: utmCampaign ? utmCampaign : (existingData?.last_utm_campaign || utmCampaign),
    last_utm_term: utmTerm ? utmTerm : (existingData?.last_utm_term || utmTerm),
    last_utm_content: utmContent ? utmContent : (existingData?.last_utm_content || utmContent),
    last_gclid: gclid ? gclid : (existingData?.last_gclid || gclid),
    last_fbclid: fbclid ? fbclid : (existingData?.last_fbclid || fbclid),
    last_msclkid: msclkid ? msclkid : (existingData?.last_msclkid || msclkid),
    last_landing_page: currentPath,
    last_referrer: referrer || (existingData?.last_referrer || ''),
    last_visit_time: nowIso,

    // Meta
    device_type: detectDeviceType(),
    user_agent: typeof navigator !== 'undefined' ? navigator.userAgent : '',
    browser_language: typeof navigator !== 'undefined' ? navigator.language : '',
  };

  // 4. Save to localStorage & Cookie
  try {
    const jsonStr = JSON.stringify(updatedData);
    localStorage.setItem(STORAGE_KEY, jsonStr);
    setCookie(COOKIE_NAME, jsonStr, EXPIRY_DAYS);
  } catch (err) {
    console.warn('LMT LeadTracker: Error persisting tracking data', err);
  }

  return updatedData;
}

/**
 * Retrieve current stored tracking data
 */
export function getStoredLeadData(): LeadTrackingData {
  if (typeof window === 'undefined') return createEmptyLeadData();

  try {
    const localVal = localStorage.getItem(STORAGE_KEY);
    const cookieVal = getCookie(COOKIE_NAME);
    const jsonStr = localVal || cookieVal;
    if (jsonStr) {
      return JSON.parse(jsonStr);
    }
  } catch {
    // Ignore error
  }

  return captureLeadData();
}

/**
 * Helper to create empty tracking structure
 */
function createEmptyLeadData(): LeadTrackingData {
  return {
    first_utm_source: '',
    first_utm_medium: '',
    first_utm_campaign: '',
    first_utm_term: '',
    first_utm_content: '',
    first_gclid: '',
    first_fbclid: '',
    first_msclkid: '',
    first_landing_page: '',
    first_referrer: '',
    first_visit_time: '',
    last_utm_source: '',
    last_utm_medium: '',
    last_utm_campaign: '',
    last_utm_term: '',
    last_utm_content: '',
    last_gclid: '',
    last_fbclid: '',
    last_msclkid: '',
    last_landing_page: '',
    last_referrer: '',
    last_visit_time: '',
    device_type: 'Unknown',
    user_agent: '',
    browser_language: '',
  };
}

/**
 * GA4 & GTM Event Tracker Helper
 */
export function trackGtmEvent(eventName: string, eventParams: Record<string, any> = {}) {
  if (typeof window === 'undefined') return;

  const leadData = getStoredLeadData();
  const payload = {
    event: eventName,
    ...eventParams,
    utm_source: leadData.last_utm_source || leadData.first_utm_source,
    utm_medium: leadData.last_utm_medium || leadData.first_utm_medium,
    utm_campaign: leadData.last_utm_campaign || leadData.first_utm_campaign,
    gclid: leadData.last_gclid || leadData.first_gclid,
    landing_page: leadData.last_landing_page,
    device_type: leadData.device_type,
  };

  // DataLayer Push
  (window as any).dataLayer = (window as any).dataLayer || [];
  (window as any).dataLayer.push(payload);

  // gtag call if function exists
  if (typeof (window as any).gtag === 'function') {
    (window as any).gtag('event', eventName, payload);
  }
}
