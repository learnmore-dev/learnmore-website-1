'use client';

import { useState, useEffect } from 'react';
import { getStoredLeadData, captureLeadData, LeadTrackingData } from '@/lib/leadTracking';

export function useLeadTracking(): LeadTrackingData {
  const [trackingData, setTrackingData] = useState<LeadTrackingData>(() => getStoredLeadData());

  useEffect(() => {
    // Capture on mount in client
    const updated = captureLeadData();
    setTrackingData(updated);
  }, []);

  return trackingData;
}
