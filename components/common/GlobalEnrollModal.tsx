'use client';

import { useState, useEffect } from 'react';
import { useEnroll } from '@/context/EnrollContext';

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
  const { isEnrollModalOpen, closeEnrollModal, enrollCourseName, openEnrollModal } = useEnroll();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    countryCode: '+91',
    phone: '',
    program: enrollCourseName || '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [isCountryDropdownOpen, setIsCountryDropdownOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  // Auto Popup after 1 second
  useEffect(() => {
    if (!isEnrollModalOpen) {
      const timer = setTimeout(() => {
        openEnrollModal();
      }, 8000);
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
    setTimeout(() => {
      console.log('Form submitted:', formData);
      setIsSubmitting(false);
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        closeEnrollModal();
        setFormData({ name: '', email: '', countryCode: '+91', phone: '', program: enrollCourseName || '' });
      }, 1500);
    }, 1000);
  };

  if (!isEnrollModalOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-[10000] p-3" onClick={closeEnrollModal}>
      <div className="bg-white rounded-xl max-w-sm w-full shadow-xl" onClick={(e) => e.stopPropagation()}>
        {/* Header - Compact */}
        <div className="bg-gradient-to-r from-red-600 to-red-700 px-4 py-3 rounded-t-xl">
          <div className="flex justify-between items-center">
            <h3 className="text-base font-bold text-white">Request a Call Back</h3>
            <button onClick={closeEnrollModal} className="text-white/70 hover:text-white text-xl leading-none">&times;</button>
          </div>
          <p className="text-red-100 text-xs mt-0.5">Leave your details, our counselor will call you</p>
        </div>
        
        {submitted ? (
          <div className="text-center py-8 px-4">
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <i className="fas fa-check-circle text-green-500 text-2xl"></i>
            </div>
            <h4 className="text-base font-semibold text-gray-800 mb-1">Thank You!</h4>
            <p className="text-gray-500 text-xs">Our counselor will contact you shortly.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-4 space-y-3">
            {/* Name */}
            <div>
              <label className="block text-gray-700 text-xs font-medium mb-1">Name <span className="text-red-500">*</span></label>
              <input 
                type="text" 
                name="name" 
                value={formData.name} 
                onChange={handleChange} 
                required 
                className="w-full px-3 py-1.5 bg-gray-50 border border-gray-200 rounded-lg text-gray-800 text-sm focus:outline-none focus:border-red-400" 
                placeholder="Full name" 
              />
            </div>
            
            {/* Email */}
            <div>
              <label className="block text-gray-700 text-xs font-medium mb-1">Email <span className="text-red-500">*</span></label>
              <input 
                type="email" 
                name="email" 
                value={formData.email} 
                onChange={handleChange} 
                required 
                className="w-full px-3 py-1.5 bg-gray-50 border border-gray-200 rounded-lg text-gray-800 text-sm focus:outline-none focus:border-red-400" 
                placeholder="Email address" 
              />
            </div>
            
            {/* Phone with Country Code - With Search */}
            <div>
              <label className="block text-gray-700 text-xs font-medium mb-1">Phone <span className="text-red-500">*</span></label>
              <div className="flex gap-2">
                <div className="relative">
                  <button 
                    type="button" 
                    onClick={() => setIsCountryDropdownOpen(!isCountryDropdownOpen)} 
                    className="flex items-center gap-1 px-2 py-1.5 bg-gray-50 border border-gray-200 rounded-lg text-gray-800 text-sm"
                  >
                    <span className="text-base">{countries.find(c => c.dialCode === formData.countryCode)?.flag || '🇮🇳'}</span>
                    <span className="font-medium text-xs">{formData.countryCode}</span>
                    <i className="fas fa-chevron-down text-gray-400 text-[10px]"></i>
                  </button>
                  {isCountryDropdownOpen && (
                    <div className="absolute bottom-full left-0 mb-1 w-56 bg-white border border-gray-200 rounded-lg shadow-lg z-50 max-h-60 overflow-hidden">
                      <div className="p-2 border-b border-gray-100">
                        <input 
                          type="text" 
                          placeholder="Search country..." 
                          value={searchTerm} 
                          onChange={(e) => setSearchTerm(e.target.value)} 
                          className="w-full px-2 py-1 bg-gray-50 border border-gray-200 rounded-md text-gray-700 text-xs focus:outline-none focus:border-red-400"
                        />
                      </div>
                      <div className="max-h-48 overflow-y-auto">
                        {filteredCountries.map((country) => (
                          <button 
                            key={country.code} 
                            type="button" 
                            onClick={() => handleCountrySelect(country)} 
                            className="w-full flex items-center gap-2 px-3 py-1.5 hover:bg-gray-50 transition text-left text-xs"
                          >
                            <span className="text-sm">{country.flag}</span>
                            <span className="text-gray-700">{country.name}</span>
                            <span className="text-gray-400 text-[10px] ml-auto">{country.dialCode}</span>
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
                <input 
                  type="tel" 
                  name="phone" 
                  value={formData.phone} 
                  onChange={handleChange} 
                  required 
                  className="flex-1 px-3 py-1.5 bg-gray-50 border border-gray-200 rounded-lg text-gray-800 text-sm focus:outline-none focus:border-red-400" 
                  placeholder="Phone number" 
                />
              </div>
            </div>
            
            {/* Program */}
            <div>
              <label className="block text-gray-700 text-xs font-medium mb-1">Program <span className="text-red-500">*</span></label>
              <select 
                name="program" 
                value={formData.program} 
                onChange={handleChange} 
                required 
                className="w-full px-3 py-1.5 bg-gray-50 border border-gray-200 rounded-lg text-gray-800 text-sm focus:outline-none focus:border-red-400"
              >
                {programs.map((program, idx) => <option key={idx} value={program}>{program}</option>)}
              </select>
            </div>
            
            {/* Privacy Policy */}
            <div className="flex items-start gap-1.5">
              <input type="checkbox" id="privacyPolicy" required className="mt-0.5 w-3.5 h-3.5 text-red-500 rounded border-gray-300" />
              <label htmlFor="privacyPolicy" className="text-gray-400 text-[10px] leading-tight">
                By submitting, you agree to our <a href="#" className="text-red-400 hover:underline">Privacy Policy</a>
              </label>
            </div>
            
            {/* Submit Button */}
            <button 
              type="submit" 
              disabled={isSubmitting} 
              className="w-full bg-gradient-to-r from-red-600 to-red-700 text-white py-1.5 rounded-lg font-semibold hover:shadow-md transition text-sm"
            >
              {isSubmitting ? <span className="flex items-center justify-center gap-2"><i className="fas fa-spinner fa-spin text-sm"></i> Sending...</span> : 'Submit'}
            </button>
            
            <p className="text-center text-gray-400 text-[10px]">We'll contact you within 24 hours</p>
          </form>
        )}
      </div>
    </div>
  );
}