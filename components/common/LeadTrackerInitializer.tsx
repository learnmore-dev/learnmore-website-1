'use client';

import { useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import { captureLeadData, trackGtmEvent } from '@/lib/leadTracking';

export default function LeadTrackerInitializer() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // Run capture lead data on route / search parameter changes
  useEffect(() => {
    captureLeadData();
  }, [pathname, searchParams]);

  // Global listener for Call & WhatsApp clicks
  useEffect(() => {
    const handleLinkClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest('a');
      if (!target) return;

      const href = target.getAttribute('href') || '';

      // Phone call tracking (tel:...)
      if (href.startsWith('tel:')) {
        const phoneNumber = href.replace('tel:', '');
        trackGtmEvent('call_click', {
          phone_number: phoneNumber,
          link_text: target.innerText || 'Call Button',
        });
      }

      // WhatsApp tracking (wa.me or api.whatsapp.com)
      if (href.includes('wa.me') || href.includes('api.whatsapp.com') || href.includes('whatsapp.com')) {
        trackGtmEvent('whatsapp_click', {
          link_url: href,
          link_text: target.innerText || 'WhatsApp Button',
        });
      }
    };

    document.addEventListener('click', handleLinkClick);
    return () => {
      document.removeEventListener('click', handleLinkClick);
    };
  }, []);

  return null;
}
