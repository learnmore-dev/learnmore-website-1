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
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to submit enrollment request');
      }

      setSubmitted(true);
      if (onSuccess) onSuccess();
      
      setTimeout(() => {
        setSubmitted(false);
        onClose();
        setFormData({ name: '', email: '', countryCode: '+91', phone: '', program: courseName || '' });
      }, 1500);
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Failed to send request. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 bg-black/70 flex items-center justify-center z-[1000] p-3" 
      onClick={onClose}
    >
      <div 
        className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl max-w-sm w-full shadow-xl border border-gray-700"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header - Compact */}
        <div className="bg-gradient-to-r from-slate-900 to-indigo-950 px-5 py-4 rounded-t-xl border-b border-indigo-900/20">
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-bold text-white">Request a Call Back</h3>
            <button onClick={onClose} className="text-white/70 hover:text-white text-xl leading-none">&times;</button>
          </div>
          <p className="text-indigo-200/80 text-xs mt-0.5">Leave your details, our counselor will call you</p>
        </div>
        
        {submitted ? (
          <div className="text-center py-8 px-5">
            <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
              <i className="fas fa-check-circle text-green-500 text-2xl"></i>
            </div>
            <h4 className="text-base font-semibold text-white mb-1">Thank You!</h4>
            <p className="text-gray-400 text-xs">Our counselor will contact you shortly.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-4 space-y-3">
            {/* Name */}
            <div>
              <label className="block text-gray-300 text-xs font-medium mb-1">Name <span className="text-red-400">*</span></label>
              <input 
                type="text" 
                name="name" 
                value={formData.name} 
                onChange={handleChange} 
                required 
                className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white text-sm focus:outline-none focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/20" 
                placeholder="Full name" 
              />
            </div>
            
            {/* Email */}
            <div>
              <label className="block text-gray-300 text-xs font-medium mb-1">Email <span className="text-red-400">*</span></label>
              <input 
                type="email" 
                name="email" 
                value={formData.email} 
                onChange={handleChange} 
                required 
                className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white text-sm focus:outline-none focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/20" 
                placeholder="Email address" 
              />
            </div>
            
            {/* Phone with Country Code */}
            <div>
              <label className="block text-gray-300 text-xs font-medium mb-1">Phone <span className="text-red-400">*</span></label>
              <div className="flex gap-2">
                <div className="relative">
                  <button 
                    type="button" 
                    onClick={() => setIsCountryDropdownOpen(!isCountryDropdownOpen)} 
                    className="flex items-center gap-1 px-2 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white text-sm"
                  >
                    <span className="text-base">{countries.find(c => c.dialCode === formData.countryCode)?.flag || '🇮🇳'}</span>
                    <span className="font-medium text-xs">{formData.countryCode}</span>
                    <i className="fas fa-chevron-down text-gray-400 text-[10px]"></i>
                  </button>
                  {isCountryDropdownOpen && (
                    <div className="absolute bottom-full left-0 mb-1 w-48 bg-gray-800 border border-gray-700 rounded-lg shadow-lg z-50 max-h-40 overflow-y-auto">
                      {countries.map((country) => (
                        <button 
                          key={country.code} 
                          type="button" 
                          onClick={() => handleCountrySelect(country)} 
                          className="w-full flex items-center gap-2 px-3 py-1.5 hover:bg-gray-700 transition text-left text-sm"
                        >
                          <span>{country.flag}</span>
                          <span className="text-white">{country.name}</span>
                          <span className="text-gray-400 text-xs ml-auto">{country.dialCode}</span>
                        </button>
                      ))}
                    </div>
                  )}
                </div>
                <input 
                  type="tel" 
                  name="phone" 
                  value={formData.phone} 
                  onChange={handleChange} 
                  required 
                  className="flex-1 px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white text-sm focus:outline-none focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/20" 
                  placeholder="Phone number" 
                />
              </div>
            </div>
            
            {/* Program */}
            <div>
              <label className="block text-gray-300 text-xs font-medium mb-1">Program <span className="text-red-400">*</span></label>
              <select 
                name="program" 
                value={formData.program} 
                onChange={handleChange} 
                required 
                className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white text-sm focus:outline-none focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/20"
              >
                {programs.map((program, idx) => <option key={idx} value={program}>{program}</option>)}
              </select>
            </div>
            
            {/* Privacy Policy */}
            <div className="flex items-start gap-1.5">
              <input type="checkbox" id="privacyPolicy" required className="mt-0.5 w-3.5 h-3.5 text-indigo-500 rounded bg-gray-700 border-gray-600 focus:ring-indigo-500/20" />
              <label htmlFor="privacyPolicy" className="text-gray-400 text-[10px] leading-tight">
                By submitting, you agree to our <a href="#" className="text-indigo-400 hover:underline">Privacy Policy</a>
              </label>
            </div>
            
            {/* Submit Button */}
            <button 
              type="submit" 
              disabled={isSubmitting} 
              className="w-full bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-500 hover:to-blue-500 text-white py-2.5 rounded-xl font-semibold hover:shadow-[0_4px_20px_rgba(79,70,229,0.35)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 text-sm"
            >
              {isSubmitting ? <span className="flex items-center justify-center gap-2"><i className="fas fa-spinner fa-spin text-sm"></i> Sending...</span> : 'Submit'}
            </button>
            
            <p className="text-center text-gray-500 text-[10px]">We'll contact you within 24 hours</p>
          </form>
        )}
      </div>
    </div>
  );
}