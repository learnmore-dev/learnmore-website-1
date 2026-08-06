'use client';

import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { useEnroll } from '@/context/EnrollContext';
import { useLeadTracking } from '@/hooks/useLeadTracking';
import { trackGtmEvent } from '@/lib/leadTracking';

// Complete countries list with all dial codes
const countries = [
  // Top Countries
  { code: 'IN', name: 'India', dialCode: '+91', flag: '🇮🇳' },
  { code: 'US', name: 'United States', dialCode: '+1', flag: '🇺🇸' },
  { code: 'GB', name: 'United Kingdom', dialCode: '+44', flag: '🇬🇧' },
  { code: 'AU', name: 'Australia', dialCode: '+61', flag: '🇦🇺' },
  { code: 'CA', name: 'Canada', dialCode: '+1', flag: '🇨🇦' },
  { code: 'SG', name: 'Singapore', dialCode: '+65', flag: '🇸🇬' },
  { code: 'AE', name: 'UAE', dialCode: '+971', flag: '🇦🇪' },
  { code: 'SA', name: 'Saudi Arabia', dialCode: '+966', flag: '🇸🇦' },
  { code: 'QA', name: 'Qatar', dialCode: '+974', flag: '🇶🇦' },
  { code: 'KW', name: 'Kuwait', dialCode: '+965', flag: '🇰🇼' },
  { code: 'OM', name: 'Oman', dialCode: '+968', flag: '🇴🇲' },
  { code: 'BH', name: 'Bahrain', dialCode: '+973', flag: '🇧🇭' },
  
  // Europe
  { code: 'DE', name: 'Germany', dialCode: '+49', flag: '🇩🇪' },
  { code: 'FR', name: 'France', dialCode: '+33', flag: '🇫🇷' },
  { code: 'IT', name: 'Italy', dialCode: '+39', flag: '🇮🇹' },
  { code: 'ES', name: 'Spain', dialCode: '+34', flag: '🇪🇸' },
  { code: 'NL', name: 'Netherlands', dialCode: '+31', flag: '🇳🇱' },
  { code: 'CH', name: 'Switzerland', dialCode: '+41', flag: '🇨🇭' },
  { code: 'SE', name: 'Sweden', dialCode: '+46', flag: '🇸🇪' },
  { code: 'NO', name: 'Norway', dialCode: '+47', flag: '🇳🇴' },
  { code: 'DK', name: 'Denmark', dialCode: '+45', flag: '🇩🇰' },
  { code: 'FI', name: 'Finland', dialCode: '+358', flag: '🇫🇮' },
  { code: 'BE', name: 'Belgium', dialCode: '+32', flag: '🇧🇪' },
  { code: 'AT', name: 'Austria', dialCode: '+43', flag: '🇦🇹' },
  { code: 'PL', name: 'Poland', dialCode: '+48', flag: '🇵🇱' },
  { code: 'RU', name: 'Russia', dialCode: '+7', flag: '🇷🇺' },
  { code: 'TR', name: 'Turkey', dialCode: '+90', flag: '🇹🇷' },
  { code: 'GR', name: 'Greece', dialCode: '+30', flag: '🇬🇷' },
  { code: 'PT', name: 'Portugal', dialCode: '+351', flag: '🇵🇹' },
  { code: 'IE', name: 'Ireland', dialCode: '+353', flag: '🇮🇪' },
  { code: 'CZ', name: 'Czech Republic', dialCode: '+420', flag: '🇨🇿' },
  { code: 'HU', name: 'Hungary', dialCode: '+36', flag: '🇭🇺' },
  { code: 'RO', name: 'Romania', dialCode: '+40', flag: '🇷🇴' },
  { code: 'UA', name: 'Ukraine', dialCode: '+380', flag: '🇺🇦' },
  
  // Asia
  { code: 'CN', name: 'China', dialCode: '+86', flag: '🇨🇳' },
  { code: 'JP', name: 'Japan', dialCode: '+81', flag: '🇯🇵' },
  { code: 'KR', name: 'South Korea', dialCode: '+82', flag: '🇰🇷' },
  { code: 'MY', name: 'Malaysia', dialCode: '+60', flag: '🇲🇾' },
  { code: 'ID', name: 'Indonesia', dialCode: '+62', flag: '🇮🇩' },
  { code: 'PH', name: 'Philippines', dialCode: '+63', flag: '🇵🇭' },
  { code: 'TH', name: 'Thailand', dialCode: '+66', flag: '🇹🇭' },
  { code: 'VN', name: 'Vietnam', dialCode: '+84', flag: '🇻🇳' },
  { code: 'PK', name: 'Pakistan', dialCode: '+92', flag: '🇵🇰' },
  { code: 'BD', name: 'Bangladesh', dialCode: '+880', flag: '🇧🇩' },
  { code: 'LK', name: 'Sri Lanka', dialCode: '+94', flag: '🇱🇰' },
  { code: 'NP', name: 'Nepal', dialCode: '+977', flag: '🇳🇵' },
  { code: 'MM', name: 'Myanmar', dialCode: '+95', flag: '🇲🇲' },
  { code: 'KH', name: 'Cambodia', dialCode: '+855', flag: '🇰🇭' },
  { code: 'LA', name: 'Laos', dialCode: '+856', flag: '🇱🇦' },
  { code: 'BN', name: 'Brunei', dialCode: '+673', flag: '🇧🇳' },
  { code: 'MN', name: 'Mongolia', dialCode: '+976', flag: '🇲🇳' },
  { code: 'AF', name: 'Afghanistan', dialCode: '+93', flag: '🇦🇫' },
  { code: 'IR', name: 'Iran', dialCode: '+98', flag: '🇮🇷' },
  { code: 'IQ', name: 'Iraq', dialCode: '+964', flag: '🇮🇶' },
  { code: 'IL', name: 'Israel', dialCode: '+972', flag: '🇮🇱' },
  { code: 'JO', name: 'Jordan', dialCode: '+962', flag: '🇯🇴' },
  { code: 'LB', name: 'Lebanon', dialCode: '+961', flag: '🇱🇧' },
  { code: 'SY', name: 'Syria', dialCode: '+963', flag: '🇸🇾' },
  { code: 'YE', name: 'Yemen', dialCode: '+967', flag: '🇾🇪' },
  
  // Africa
  { code: 'ZA', name: 'South Africa', dialCode: '+27', flag: '🇿🇦' },
  { code: 'EG', name: 'Egypt', dialCode: '+20', flag: '🇪🇬' },
  { code: 'NG', name: 'Nigeria', dialCode: '+234', flag: '🇳🇬' },
  { code: 'KE', name: 'Kenya', dialCode: '+254', flag: '🇰🇪' },
  { code: 'GH', name: 'Ghana', dialCode: '+233', flag: '🇬🇭' },
  { code: 'MA', name: 'Morocco', dialCode: '+212', flag: '🇲🇦' },
  { code: 'DZ', name: 'Algeria', dialCode: '+213', flag: '🇩🇿' },
  { code: 'TN', name: 'Tunisia', dialCode: '+216', flag: '🇹🇳' },
  { code: 'LY', name: 'Libya', dialCode: '+218', flag: '🇱🇾' },
  { code: 'SD', name: 'Sudan', dialCode: '+249', flag: '🇸🇩' },
  { code: 'ET', name: 'Ethiopia', dialCode: '+251', flag: '🇪🇹' },
  { code: 'SO', name: 'Somalia', dialCode: '+252', flag: '🇸🇴' },
  { code: 'TZ', name: 'Tanzania', dialCode: '+255', flag: '🇹🇿' },
  { code: 'UG', name: 'Uganda', dialCode: '+256', flag: '🇺🇬' },
  { code: 'RW', name: 'Rwanda', dialCode: '+250', flag: '🇷🇼' },
  { code: 'ZM', name: 'Zambia', dialCode: '+260', flag: '🇿🇲' },
  { code: 'ZW', name: 'Zimbabwe', dialCode: '+263', flag: '🇿🇼' },
  { code: 'MW', name: 'Malawi', dialCode: '+265', flag: '🇲🇼' },
  { code: 'MZ', name: 'Mozambique', dialCode: '+258', flag: '🇲🇿' },
  { code: 'AO', name: 'Angola', dialCode: '+244', flag: '🇦🇴' },
  { code: 'CM', name: 'Cameroon', dialCode: '+237', flag: '🇨🇲' },
  { code: 'CI', name: 'Ivory Coast', dialCode: '+225', flag: '🇨🇮' },
  { code: 'SN', name: 'Senegal', dialCode: '+221', flag: '🇸🇳' },
  
  // North America
  { code: 'MX', name: 'Mexico', dialCode: '+52', flag: '🇲🇽' },
  { code: 'GT', name: 'Guatemala', dialCode: '+502', flag: '🇬🇹' },
  { code: 'SV', name: 'El Salvador', dialCode: '+503', flag: '🇸🇻' },
  { code: 'HN', name: 'Honduras', dialCode: '+504', flag: '🇭🇳' },
  { code: 'NI', name: 'Nicaragua', dialCode: '+505', flag: '🇳🇮' },
  { code: 'CR', name: 'Costa Rica', dialCode: '+506', flag: '🇨🇷' },
  { code: 'PA', name: 'Panama', dialCode: '+507', flag: '🇵🇦' },
  { code: 'CU', name: 'Cuba', dialCode: '+53', flag: '🇨🇺' },
  { code: 'JM', name: 'Jamaica', dialCode: '+1876', flag: '🇯🇲' },
  { code: 'DO', name: 'Dominican Republic', dialCode: '+1809', flag: '🇩🇴' },
  { code: 'PR', name: 'Puerto Rico', dialCode: '+1787', flag: '🇵🇷' },
  
  // South America
  { code: 'BR', name: 'Brazil', dialCode: '+55', flag: '🇧🇷' },
  { code: 'AR', name: 'Argentina', dialCode: '+54', flag: '🇦🇷' },
  { code: 'CL', name: 'Chile', dialCode: '+56', flag: '🇨🇱' },
  { code: 'PE', name: 'Peru', dialCode: '+51', flag: '🇵🇪' },
  { code: 'CO', name: 'Colombia', dialCode: '+57', flag: '🇨🇴' },
  { code: 'VE', name: 'Venezuela', dialCode: '+58', flag: '🇻🇪' },
  { code: 'EC', name: 'Ecuador', dialCode: '+593', flag: '🇪🇨' },
  { code: 'BO', name: 'Bolivia', dialCode: '+591', flag: '🇧🇴' },
  { code: 'PY', name: 'Paraguay', dialCode: '+595', flag: '🇵🇾' },
  { code: 'UY', name: 'Uruguay', dialCode: '+598', flag: '🇺🇾' },
  { code: 'GY', name: 'Guyana', dialCode: '+592', flag: '🇬🇾' },
  { code: 'SR', name: 'Suriname', dialCode: '+597', flag: '🇸🇷' },
  
  // Oceania
  { code: 'NZ', name: 'New Zealand', dialCode: '+64', flag: '🇳🇿' },
  { code: 'FJ', name: 'Fiji', dialCode: '+679', flag: '🇫🇯' },
  { code: 'PG', name: 'Papua New Guinea', dialCode: '+675', flag: '🇵🇬' },
  { code: 'SB', name: 'Solomon Islands', dialCode: '+677', flag: '🇸🇧' },
  { code: 'VU', name: 'Vanuatu', dialCode: '+678', flag: '🇻🇺' },
  { code: 'NC', name: 'New Caledonia', dialCode: '+687', flag: '🇳🇨' },
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

export default function GlobalEnrollModal() {
  const router = useRouter();
  const { isEnrollModalOpen, closeEnrollModal, enrollCourseName, openEnrollModal } = useEnroll();
  const trackingData = useLeadTracking();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    countryCode: '+91',
    phone: '',
    program: enrollCourseName || '',
    trainingMode: 'Yes, am Interested in Online Training',
    city: 'Select Your City',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [isCountryDropdownOpen, setIsCountryDropdownOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const hasAutoPopped = useRef(false);

  // Auto Popup after 5 seconds (only once)
  useEffect(() => {
    if (!isEnrollModalOpen && !hasAutoPopped.current) {
      const timer = setTimeout(() => {
        openEnrollModal();
        hasAutoPopped.current = true;
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [openEnrollModal, isEnrollModalOpen]);

  // Update program when enrollCourseName changes
  useEffect(() => {
    if (enrollCourseName) {
      setFormData(prev => ({ ...prev, program: enrollCourseName }));
    }
  }, [enrollCourseName]);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isEnrollModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isEnrollModalOpen]);

  const filteredCountries = countries.filter(country =>
    country.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    country.dialCode.includes(searchTerm)
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCountrySelect = (country: typeof countries[0]) => {
    setFormData({ ...formData, countryCode: country.dialCode });
    setIsCountryDropdownOpen(false);
    setSearchTerm('');
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
        form_name: 'Global Enrollment Modal',
      });

      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        closeEnrollModal();
        setFormData({ name: '', email: '', countryCode: '+91', phone: '', program: enrollCourseName || '', trainingMode: 'Classroom', city: '', message: '' });
        router.push('/thank-you');
      }, 1000);
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Failed to send request. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isEnrollModalOpen) return null;

  return (
    <div className="fixed inset-0 bg-slate-950/60 backdrop-blur-sm flex items-center justify-center z-[10000] p-4" onClick={closeEnrollModal}>
      <div className="bg-white rounded-2xl max-w-sm w-full shadow-2xl p-6 relative text-slate-800 border-2 border-blue-100/80 overflow-hidden transform transition-all" onClick={(e) => e.stopPropagation()}>
        {/* Header - LearnMore Brand Style */}
        <div className="pb-4 mb-4 border-b border-slate-100 text-center relative">
          <button 
            onClick={closeEnrollModal} 
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
                    <div className="absolute bottom-full left-0 mb-1 w-56 bg-white border border-slate-200 rounded-xl shadow-2xl z-50 max-h-52 overflow-hidden text-left">
                      <div className="p-1.5 border-b border-slate-100 bg-slate-50">
                        <input 
                          type="text" 
                          placeholder="Search country..." 
                          value={searchTerm} 
                          onChange={(e) => setSearchTerm(e.target.value)} 
                          className="w-full px-2 py-1 bg-white border border-slate-200 rounded-lg text-slate-800 text-xs focus:outline-none focus:border-blue-500"
                        />
                      </div>
                      <div className="max-h-40 overflow-y-auto">
                        {filteredCountries.map((country) => (
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
              <input type="checkbox" id="privacyPolicyModal" required defaultChecked className="w-3.5 h-3.5 text-blue-600 rounded border-slate-300 focus:ring-blue-500" />
              <label htmlFor="privacyPolicyModal" className="text-slate-500 text-[11px]">
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