'use client';

export default function CourseComparisonTable() {
  const comparisonItems = [
    {
      feature: '100% Practical Real-World Projects',
      lmt: '✅ 5+ Live Projects & Capstone',
      others: '❌ Only Basic Theory',
      videos: '❌ Code Along Videos Only'
    },
    {
      feature: 'Daily 1-on-1 Trainer Mentorship',
      lmt: '✅ Dedicated Daily Support',
      others: '⚠️ Large Batches (No 1-on-1)',
      videos: '❌ Zero Mentor Interaction'
    },
    {
      feature: '100% Guaranteed Placement Support',
      lmt: '✅ Dedicated Placement Cell & Calls',
      others: '⚠️ Generic Job Portal Access',
      videos: '❌ No Job Placement Support'
    },
    {
      feature: 'Bangalore Offline Lab Access',
      lmt: '✅ High-Speed Wi-Fi & Workstations',
      others: '❌ No Physical Lab Facilities',
      videos: '❌ Online Only'
    },
    {
      feature: 'Mock Interviews & Resume Preparation',
      lmt: '✅ Unlimited Mock Reviews with HR',
      others: '⚠️ Basic Template Provided',
      videos: '❌ No Interview Assistance'
    },
    {
      feature: 'Flexible Batch Timings & Easy EMI',
      lmt: '✅ Weekday / Weekend & 0% EMI',
      others: '⚠️ Rigid Timings',
      videos: '⚠️ Self-Paced (Low Completion Rate)'
    }
  ];

  return (
    <section className="py-12 bg-white text-slate-900 border-y border-slate-200">
      <div className="container mx-auto px-4 max-w-5xl">
        
        <div className="text-center mb-8">
          <span className="bg-red-50 text-red-700 border border-red-200 text-xs font-extrabold px-3 py-1 rounded-full uppercase tracking-wider">
            Why Choose Us
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mt-2">
            Why LearnMore Technologies Stands Out
          </h2>
          <p className="text-slate-600 text-sm mt-1 max-w-xl mx-auto">
            Compare our career-focused master programs with self-paced videos and generic institutes.
          </p>
        </div>

        {/* Comparison Table */}
        <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-lg bg-white">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-100 border-b border-slate-200 text-xs uppercase tracking-wider text-slate-700">
                <th className="p-4 sm:p-5 font-bold text-slate-800">Key Features</th>
                <th className="p-4 sm:p-5 font-black text-red-700 bg-red-50/70 border-x border-red-200 text-sm">
                  🏆 LearnMore Technologies
                </th>
                <th className="p-4 sm:p-5 font-semibold text-slate-500 hidden sm:table-cell">Other Institutes</th>
                <th className="p-4 sm:p-5 font-semibold text-slate-500">Self-Paced Courses</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 text-xs sm:text-sm">
              {comparisonItems.map((item, idx) => (
                <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-slate-50/60'}>
                  <td className="p-4 font-bold text-slate-900">
                    {item.feature}
                  </td>
                  <td className="p-4 font-extrabold text-emerald-700 bg-red-50/30 border-x border-red-100">
                    {item.lmt}
                  </td>
                  <td className="p-4 text-slate-500 hidden sm:table-cell">
                    {item.others}
                  </td>
                  <td className="p-4 text-slate-500">
                    {item.videos}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </div>
    </section>
  );
}
