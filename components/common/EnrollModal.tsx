'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useLeadTracking } from '@/hooks/useLeadTracking';
import { trackGtmEvent } from '@/lib/leadTracking';

interface EnrollModalProps {
  isOpen: boolean;
  onClose: () => void;
  courseName?: string;
  onSuccess?: () => void;
}

// Countries with dial codes
const countries = [
  { code: 'IN', name: 'India', dialCode: '+91', flag: '🇮🇳' },
  { code: 'US', name: 'United States', dialCode: '+1', flag: '🇺🇸' },
  { code: 'GB', name: 'United Kingdom', dialCode: '+44', flag: '🇬🇧' },
  { code: 'AU', name: 'Australia', dialCode: '+61', flag: '🇦🇺' },
  { code: 'CA', name: 'Canada', dialCode: '+1', flag: '🇨🇦' },
  { code: 'SG', name: 'Singapore', dialCode: '+65', flag: '🇸🇬' },
  { code: 'AE', name: 'UAE', dialCode: '+971', flag: '🇦🇪' },
  { code: 'SA', name: 'Saudi Arabia', dialCode: '+966', flag: '🇸🇦' },
];

const programs = [
  'Select Program',
  'Python Fullstack Master Program',
  'Data Analytics Master Program',
  'Cloud DevOps Master Program',
  'Software Testing Master Program',
  'Data Engineering Master Program',
  'Data Science with AI Master Program',
];

export default function EnrollModal({ isOpen, onClose, courseName, onSuccess }: EnrollModalProps) {
  const router = useRouter();
  const trackingData = useLeadTracking();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    countryCode: '+91',
    phone: '',
    program: courseName || '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [isCountryDropdownOpen, setIsCountryDropdownOpen] = useState(false);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCountrySelect = (country: typeof countries[0]) => {
    setFormData({ ...formData, countryCode: country.dialCode });
    setIsCountryDropdownOpen(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const response = await fetch('/api/enroll', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: `${formData.countryCode} ${formData.phone}`,
          program: formData.program,
          tracking: trackingData,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to submit enrollment request');
      }

      const apiResult = await response.json();
      console.log('✅ Lead API Response & Email Sent Data:', apiResult);

      trackGtmEvent('generate_lead', {
        program: formData.program,
        form_name: 'Course Enroll Modal',
      });

      setSubmitted(true);
      if (onSuccess) onSuccess();
      
      setTimeout(() => {
        setSubmitted(false);
        onClose();
        setFormData({ name: '', email: '', countryCode: '+91', phone: '', program: courseName || '' });
        router.push('/thank-you');
      }, 1000);
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Failed to send request. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-slate-950/60 backdrop-blur-sm flex items-center justify-center z-[10000] p-4" onClick={onClose}>
      <div className="bg-white rounded-2xl max-w-sm w-full shadow-2xl p-6 relative text-slate-800 border-2 border-blue-100/80 overflow-hidden transform transition-all" onClick={(e) => e.stopPropagation()}>
        {/* Header - LearnMore Brand Style */}
        <div className="pb-4 mb-4 border-b border-slate-100 text-center relative">
          <button 
            onClick={onClose} 
            className="absolute right-0 top-0 text-slate-400 hover:text-slate-700 text-xl leading-none transition p-1"
          >
            &times;
          </button>
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-blue-50 text-blue-700 text-[10px] font-extrabold uppercase tracking-wider mb-1.5 border border-blue-200/60">
            🔥 Fast-Track Career Callback
          </span>
          <h3 className="text-lg md:text-xl font-extrabold text-slate-900 leading-snug">
            Get Hired in Top IT MNCs
          </h3>
          <p className="text-slate-500 text-[11px] mt-0.5 font-medium">
            100% Placement Assistance • 1-on-1 Senior Mentorship
          </p>
        </div>
        
        {submitted ? (
          <div className="text-center py-8 px-3">
            <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-3 text-emerald-600">
              <i className="fas fa-check-circle text-2xl"></i>
            </div>
            <h4 className="text-lg font-bold text-slate-900 mb-1">Thank You!</h4>
            <p className="text-slate-600 text-xs">Our counselor will contact you shortly.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-3.5">
            {/* Hidden Lead Tracking Inputs */}
            <input type="hidden" name="utm_source" value={trackingData.last_utm_source || trackingData.first_utm_source || ''} />
            <input type="hidden" name="utm_medium" value={trackingData.last_utm_medium || trackingData.first_utm_medium || ''} />
            <input type="hidden" name="utm_campaign" value={trackingData.last_utm_campaign || trackingData.first_utm_campaign || ''} />
            <input type="hidden" name="utm_term" value={trackingData.last_utm_term || trackingData.first_utm_term || ''} />
            <input type="hidden" name="utm_content" value={trackingData.last_utm_content || trackingData.first_utm_content || ''} />
            <input type="hidden" name="gclid" value={trackingData.last_gclid || trackingData.first_gclid || ''} />
            <input type="hidden" name="fbclid" value={trackingData.last_fbclid || trackingData.first_fbclid || ''} />
            <input type="hidden" name="landing_page" value={trackingData.last_landing_page || trackingData.first_landing_page || ''} />
            <input type="hidden" name="referrer" value={trackingData.last_referrer || trackingData.first_referrer || ''} />
            
            {/* Name */}
            <div>
              <label className="block text-slate-700 text-xs font-bold uppercase tracking-wider mb-1">Full Name *</label>
              <div className="relative flex items-center">
                <i className="fas fa-user text-slate-400 text-xs absolute left-3 pointer-events-none"></i>
                <input 
                  type="text" 
                  name="name" 
                  value={formData.name} 
                  onChange={handleChange} 
                  required 
                  className="w-full pl-8 pr-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 text-xs focus:outline-none focus:bg-white focus:border-blue-600 focus:ring-4 focus:ring-blue-500/10 transition" 
                  placeholder="Enter your name"
                />
              </div>
            </div>
            
            {/* 10 Digit Mobile No with Country Flag */}
            <div>
              <label className="block text-slate-700 text-xs font-bold uppercase tracking-wider mb-1">Mobile Number *</label>
              <div className="flex gap-2 items-center">
                <div className="relative flex-shrink-0">
                  <button 
                    type="button" 
                    onClick={() => setIsCountryDropdownOpen(!isCountryDropdownOpen)} 
                    className="flex items-center gap-1 px-2.5 py-2 bg-slate-50 border border-slate-200 rounded-xl text-slate-800 text-xs font-semibold hover:bg-slate-100 transition"
                  >
                    <span>{countries.find(c => c.dialCode === formData.countryCode)?.flag || '🇮🇳'}</span>
                    <span>{formData.countryCode}</span>
                    <i className="fas fa-chevron-down text-slate-400 text-[9px]"></i>
                  </button>
                  {isCountryDropdownOpen && (
                    <div className="absolute bottom-full left-0 mb-1 w-48 bg-white border border-slate-200 rounded-xl shadow-2xl z-50 max-h-40 overflow-y-auto text-left">
                      {countries.map((country) => (
                        <button 
                          key={country.code} 
                          type="button" 
                          onClick={() => handleCountrySelect(country)} 
                          className="w-full flex items-center gap-2 px-2.5 py-1.5 hover:bg-blue-50 transition text-left text-xs"
                        >
                          <span className="text-sm">{country.flag}</span>
                          <span className="text-slate-800">{country.name}</span>
                          <span className="text-slate-400 text-[10px] ml-auto">{country.dialCode}</span>
                        </button>
                      ))}
                    </div>
                  )}
                </div>
                <div className="relative flex-1 flex items-center">
                  <i className="fas fa-phone text-slate-400 text-xs absolute left-3 pointer-events-none"></i>
                  <input 
                    type="tel" 
                    name="phone" 
                    value={formData.phone} 
                    onChange={handleChange} 
                    required 
                    maxLength={10}
                    className="w-full pl-8 pr-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 text-xs focus:outline-none focus:bg-white focus:border-blue-600 focus:ring-4 focus:ring-blue-500/10 transition" 
                    placeholder="10 digit phone number"
                  />
                </div>
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="block text-slate-700 text-xs font-bold uppercase tracking-wider mb-1">Email Address *</label>
              <div className="relative flex items-center">
                <i className="fas fa-envelope text-slate-400 text-xs absolute left-3 pointer-events-none"></i>
                <input 
                  type="email" 
                  name="email" 
                  value={formData.email} 
                  onChange={handleChange} 
                  required 
                  className="w-full pl-8 pr-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 text-xs focus:outline-none focus:bg-white focus:border-blue-600 focus:ring-4 focus:ring-blue-500/10 transition" 
                  placeholder="Enter your email"
                />
              </div>
            </div>
            
            {/* Program Selection */}
            <div>
              <label className="block text-slate-700 text-xs font-bold uppercase tracking-wider mb-1">Target Program *</label>
              <div className="relative flex items-center">
                <i className="fas fa-graduation-cap text-slate-400 text-xs absolute left-3 pointer-events-none"></i>
                <select 
                  name="program" 
                  value={formData.program} 
                  onChange={handleChange} 
                  required
                  className="w-full pl-8 pr-7 py-2 bg-slate-50 border border-slate-200 rounded-xl text-slate-800 text-xs focus:outline-none focus:bg-white focus:border-blue-600 focus:ring-4 focus:ring-blue-500/10 transition cursor-pointer appearance-none"
                >
                  {programs.map((program, idx) => <option key={idx} value={program}>{program}</option>)}
                </select>
                <i className="fas fa-chevron-down text-slate-400 text-[9px] absolute right-3 pointer-events-none"></i>
              </div>
            </div>

            {/* Privacy Checkbox */}
            <div className="flex items-center gap-2 pt-1">
              <input type="checkbox" id="privacyPolicyModal2" required defaultChecked className="w-3.5 h-3.5 text-blue-600 rounded border-slate-300 focus:ring-blue-500" />
              <label htmlFor="privacyPolicyModal2" className="text-slate-500 text-[11px]">
                I agree to the <a href="#" className="text-blue-600 font-medium hover:underline">Privacy Policy</a>
              </label>
            </div>
            
            {/* Submit Button */}
            <button 
              type="submit" 
              disabled={isSubmitting} 
              className="w-full bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 hover:from-blue-700 hover:to-indigo-700 text-white font-extrabold py-3 px-4 rounded-xl shadow-lg shadow-blue-500/25 transition transform hover:-translate-y-0.5 text-xs text-center tracking-wide flex items-center justify-center gap-1.5 mt-2"
            >
              {isSubmitting ? (
                <span><i className="fas fa-spinner fa-spin mr-1"></i> Submitting...</span>
              ) : (
                <>
                  <span>Book Free Counselling Session</span>
                  <i className="fas fa-arrow-right text-[10px]"></i>
                </>
              )}
            </button>
            <p className="text-center text-slate-400 text-[10px] flex items-center justify-center gap-1 pt-0.5">
              <i className="fas fa-shield-alt text-emerald-500"></i> ISO 9001:2015 Institute • 100% Data Privacy
            </p>
          </form>
        )}
      </div>
    </div>
  );
}