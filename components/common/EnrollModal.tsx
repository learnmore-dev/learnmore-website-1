'use client';

import { useState, useEffect } from 'react';

interface EnrollModalProps {
  isOpen: boolean;
  onClose: () => void;
  courseName?: string;
  onSuccess?: () => void;
}

// Countries with dial codes
const countries = [
  { code: 'US', name: 'United States', dialCode: '+1', flag: '🇺🇸' },
  { code: 'GB', name: 'United Kingdom', dialCode: '+44', flag: '🇬🇧' },
  { code: 'AU', name: 'Australia', dialCode: '+61', flag: '🇦🇺' },
  { code: 'IN', name: 'India', dialCode: '+91', flag: '🇮🇳' },
  { code: 'SA', name: 'Saudi Arabia', dialCode: '+966', flag: '🇸🇦' },
  { code: 'AE', name: 'United Arab Emirates', dialCode: '+971', flag: '🇦🇪' },
  { code: 'CA', name: 'Canada', dialCode: '+1', flag: '🇨🇦' },
  { code: 'SG', name: 'Singapore', dialCode: '+65', flag: '🇸🇬' },
  { code: 'CH', name: 'Switzerland', dialCode: '+41', flag: '🇨🇭' },
  { code: 'ZA', name: 'South Africa', dialCode: '+27', flag: '🇿🇦' },
  { code: 'DE', name: 'Germany', dialCode: '+49', flag: '🇩🇪' },
  { code: 'FR', name: 'France', dialCode: '+33', flag: '🇫🇷' },
  { code: 'JP', name: 'Japan', dialCode: '+81', flag: '🇯🇵' },
  { code: 'CN', name: 'China', dialCode: '+86', flag: '🇨🇳' },
  { code: 'BR', name: 'Brazil', dialCode: '+55', flag: '🇧🇷' },
  { code: 'MX', name: 'Mexico', dialCode: '+52', flag: '🇲🇽' },
  { code: 'KR', name: 'South Korea', dialCode: '+82', flag: '🇰🇷' },
  { code: 'RU', name: 'Russia', dialCode: '+7', flag: '🇷🇺' },
  { code: 'IT', name: 'Italy', dialCode: '+39', flag: '🇮🇹' },
  { code: 'ES', name: 'Spain', dialCode: '+34', flag: '🇪🇸' },
  { code: 'NL', name: 'Netherlands', dialCode: '+31', flag: '🇳🇱' },
  { code: 'SE', name: 'Sweden', dialCode: '+46', flag: '🇸🇪' },
  { code: 'NO', name: 'Norway', dialCode: '+47', flag: '🇳🇴' },
  { code: 'DK', name: 'Denmark', dialCode: '+45', flag: '🇩🇰' },
  { code: 'FI', name: 'Finland', dialCode: '+358', flag: '🇫🇮' },
  { code: 'BE', name: 'Belgium', dialCode: '+32', flag: '🇧🇪' },
  { code: 'AT', name: 'Austria', dialCode: '+43', flag: '🇦🇹' },
  { code: 'PL', name: 'Poland', dialCode: '+48', flag: '🇵🇱' },
  { code: 'TR', name: 'Turkey', dialCode: '+90', flag: '🇹🇷' },
  { code: 'EG', name: 'Egypt', dialCode: '+20', flag: '🇪🇬' },
  { code: 'NG', name: 'Nigeria', dialCode: '+234', flag: '🇳🇬' },
  { code: 'PK', name: 'Pakistan', dialCode: '+92', flag: '🇵🇰' },
  { code: 'BD', name: 'Bangladesh', dialCode: '+880', flag: '🇧🇩' },
  { code: 'LK', name: 'Sri Lanka', dialCode: '+94', flag: '🇱🇰' },
  { code: 'NP', name: 'Nepal', dialCode: '+977', flag: '🇳🇵' },
  { code: 'MY', name: 'Malaysia', dialCode: '+60', flag: '🇲🇾' },
  { code: 'ID', name: 'Indonesia', dialCode: '+62', flag: '🇮🇩' },
  { code: 'PH', name: 'Philippines', dialCode: '+63', flag: '🇵🇭' },
  { code: 'TH', name: 'Thailand', dialCode: '+66', flag: '🇹🇭' },
  { code: 'VN', name: 'Vietnam', dialCode: '+84', flag: '🇻🇳' },
  { code: 'NZ', name: 'New Zealand', dialCode: '+64', flag: '🇳🇿' },
];

const programs = [
  'Select Program',
  'Python Fullstack Master Program',
  'Data Analytics Master Program',
  'Cloud DevOps Master Program',
  'Software Testing Master Program',
  'Data Engineering Master Program',
  'Data Science with AI Master Program',
  'Java Full Stack Training',
  'Python Full Stack Training',
  'AWS Training',
  'Microsoft Azure Training',
  'DevOps Training',
];

export default function EnrollModal({ isOpen, onClose, courseName, onSuccess }: EnrollModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    countryCode: '+91',
    phone: '',
    program: courseName || '',
    learnerType: 'individual'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [isCountryDropdownOpen, setIsCountryDropdownOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

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
      if (onSuccess) {
        onSuccess();
      }
      setTimeout(() => {
        setSubmitted(false);
        onClose();
        setFormData({ name: '', email: '', countryCode: '+91', phone: '', program: courseName || '', learnerType: 'individual' });
      }, 2000);
    }, 1500);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-[1000] p-4" onClick={onClose}>
      <div className="bg-white rounded-2xl max-w-md w-full max-h-[90vh] overflow-y-auto shadow-2xl" onClick={(e) => e.stopPropagation()}>
        {/* Header - Red Gradient */}
        <div className="bg-gradient-to-r from-red-600 to-red-800 p-6 rounded-t-2xl">
          <div className="flex justify-between items-center">
            <h3 className="text-2xl font-bold text-white">Request a Call Back</h3>
            <button onClick={onClose} className="text-white/80 hover:text-white text-2xl transition">&times;</button>
          </div>
          <p className="text-red-100 text-sm mt-1">Leave your details and Our training consultant will get back to you</p>
        </div>
        
        {submitted ? (
          <div className="text-center py-12 px-6">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <i className="fas fa-check-circle text-green-500 text-3xl"></i>
            </div>
            <h4 className="text-xl font-semibold text-gray-800 mb-2">Thank You!</h4>
            <p className="text-gray-500">Our training consultant will contact you shortly.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 space-y-4">
            {/* Name Field */}
            <div>
              <label className="block text-gray-700 font-medium mb-1">Name <span className="text-red-500">*</span></label>
              <input 
                type="text" 
                name="name" 
                value={formData.name} 
                onChange={handleChange} 
                required 
                className="w-full px-4 py-2.5 bg-gray-50 border border-gray-300 rounded-lg text-gray-800 focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-100 transition" 
                placeholder="Enter your full name" 
              />
            </div>
            
            {/* Email Field */}
            <div>
              <label className="block text-gray-700 font-medium mb-1">Email <span className="text-red-500">*</span></label>
              <input 
                type="email" 
                name="email" 
                value={formData.email} 
                onChange={handleChange} 
                required 
                className="w-full px-4 py-2.5 bg-gray-50 border border-gray-300 rounded-lg text-gray-800 focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-100 transition" 
                placeholder="Enter your email address" 
              />
            </div>
            
            {/* Phone Number with Country Code */}
            <div>
              <label className="block text-gray-700 font-medium mb-1">Phone Number <span className="text-red-500">*</span></label>
              <div className="flex gap-2">
                <div className="relative">
                  <button 
                    type="button" 
                    onClick={() => setIsCountryDropdownOpen(!isCountryDropdownOpen)} 
                    className="flex items-center gap-2 px-3 py-2.5 bg-gray-50 border border-gray-300 rounded-lg text-gray-800 hover:border-red-500 transition"
                  >
                    <span className="text-xl">{countries.find(c => c.dialCode === formData.countryCode)?.flag || '🇮🇳'}</span>
                    <span className="font-medium">{formData.countryCode}</span>
                    <i className={`fas fa-chevron-${isCountryDropdownOpen ? 'up' : 'down'} text-gray-400 text-xs`}></i>
                  </button>
                  {isCountryDropdownOpen && (
                    <div className="absolute top-full left-0 mt-1 w-72 bg-white border border-gray-200 rounded-xl shadow-lg z-50 max-h-80 overflow-hidden">
                      <div className="p-2 border-b border-gray-100">
                        <input 
                          type="text" 
                          placeholder="Search country..." 
                          value={searchTerm} 
                          onChange={(e) => setSearchTerm(e.target.value)} 
                          className="w-full px-3 py-1.5 bg-gray-50 border border-gray-200 rounded-md text-gray-800 text-sm focus:outline-none focus:border-red-500" 
                        />
                      </div>
                      <div className="max-h-64 overflow-y-auto">
                        {filteredCountries.map((country) => (
                          <button 
                            key={country.code} 
                            type="button" 
                            onClick={() => handleCountrySelect(country)} 
                            className="w-full flex items-center gap-3 px-3 py-2 hover:bg-gray-50 transition text-left"
                          >
                            <span className="text-xl">{country.flag}</span>
                            <span className="flex-1 text-sm text-gray-700">{country.name}</span>
                            <span className="text-gray-400 text-sm">{country.dialCode}</span>
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
                  className="flex-1 px-4 py-2.5 bg-gray-50 border border-gray-300 rounded-lg text-gray-800 focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-100 transition" 
                  placeholder="Phone Number" 
                />
              </div>
            </div>
            
            {/* Select Program */}
            <div>
              <label className="block text-gray-700 font-medium mb-1">Select Program <span className="text-red-500">*</span></label>
              <select 
                name="program" 
                value={formData.program} 
                onChange={handleChange} 
                required 
                className="w-full px-4 py-2.5 bg-gray-50 border border-gray-300 rounded-lg text-gray-800 focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-100 transition"
              >
                {programs.map((program, idx) => <option key={idx} value={program}>{program}</option>)}
              </select>
            </div>
            
            {/* Learner Type */}
            <div>
              <label className="block text-gray-700 font-medium mb-1">I'm a</label>
              <div className="flex gap-6">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input 
                    type="radio" 
                    name="learnerType" 
                    value="individual" 
                    checked={formData.learnerType === 'individual'} 
                    onChange={handleChange} 
                    className="w-4 h-4 text-red-500 focus:ring-red-500" 
                  />
                  <span className="text-gray-700">Individual learner</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input 
                    type="radio" 
                    name="learnerType" 
                    value="corporate" 
                    checked={formData.learnerType === 'corporate'} 
                    onChange={handleChange} 
                    className="w-4 h-4 text-red-500 focus:ring-red-500" 
                  />
                  <span className="text-gray-700">Corporate / Business</span>
                </label>
              </div>
            </div>
            
            {/* Privacy Policy Checkbox */}
            <div className="flex items-start gap-2">
              <input 
                type="checkbox" 
                id="privacyPolicy" 
                required 
                className="mt-1 w-4 h-4 text-red-500 rounded border-gray-300 focus:ring-red-500" 
              />
              <label htmlFor="privacyPolicy" className="text-gray-500 text-sm">
                By providing your contact details, you agree to our <a href="#" className="text-red-500 hover:underline">Privacy Policy</a>
              </label>
            </div>
            
            {/* Submit Button */}
            <button 
              type="submit" 
              disabled={isSubmitting} 
              className="w-full bg-gradient-to-r from-red-600 to-red-800 text-white py-2.5 rounded-lg font-semibold hover:shadow-lg transition disabled:opacity-50"
            >
              {isSubmitting ? <span className="flex items-center justify-center gap-2"><i className="fas fa-spinner fa-spin"></i> Submitting...</span> : 'Submit'}
            </button>
            
            <p className="text-center text-gray-400 text-xs">Our team will contact you within 24 hours</p>
          </form>
        )}
      </div>
    </div>
  );
}