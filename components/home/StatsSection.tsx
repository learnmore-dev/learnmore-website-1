export default function StatsSection() {
  const stats = [
    {
      label: 'Live Classes Monthly',
      number: '700+',
      bg: 'bg-blue-100/70',
      numberColor: 'text-blue-600',
      borderColor: 'hover:border-blue-300 hover:shadow-blue-500/10',
      icon: (
        <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
          <path d="M21 4H3c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-1 12H4c-.55 0-1-.45-1-1V7c0-.55.45-1 1-1h16c.55 0 1 .45 1 1v8c0 .55-.45 1-1 1z"/>
          <path d="M10 9a2 2 0 100 4 2 2 0 000-4zm-4 7c0-1.5 3-2.25 4.5-2.25s4.5.75 4.5 2.25v.75H6V16z"/>
        </svg>
      )
    },
    {
      label: 'Learning Solutions',
      number: '550+',
      bg: 'bg-purple-100/70',
      numberColor: 'text-purple-600',
      borderColor: 'hover:border-purple-300 hover:shadow-purple-500/10',
      icon: (
        <svg className="w-8 h-8 text-purple-600" fill="currentColor" viewBox="0 0 24 24">
          <path d="M21 5c-1.11-.35-2.33-.5-3.5-.5-1.95 0-4.05.4-5.5 1.5-1.45-1.1-3.55-1.5-5.5-1.5-1.17 0-2.39.15-3.5.5C2.34 5.36 2 6.09 2 6.92v11.75c0 1.14.99 2 2.05 1.76C5.12 20.2 6.31 20 7.5 20c1.95 0 4.05.4 5.5 1.5 1.45-1.1 3.55-1.5 5.5-1.5 1.19 0 2.38.2 3.45.43 1.06.24 2.05-.62 2.05-1.76V6.92c0-.83-.34-1.56-1.05-1.92zM11 18.5c-1.1-.65-2.48-1-3.5-1-1.15 0-2.34.17-3.35.48V7.27c.95-.27 2.07-.42 3.35-.42 1.3 0 2.7.4 3.5 1.15v10.5zm10 .48c-1.01-.31-2.2-.48-3.35-.48-1.02 0-2.4.35-3.5 1V8c.8-.75 2.2-1.15 3.5-1.15 1.28 0 2.4.15 3.35.42v11.71z"/>
        </svg>
      )
    },
    {
      label: 'Hands-on Projects',
      number: '100+',
      bg: 'bg-indigo-100/70',
      numberColor: 'text-indigo-600',
      borderColor: 'hover:border-indigo-300 hover:shadow-indigo-500/10',
      icon: (
        <svg className="w-8 h-8 text-indigo-600" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20 18c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2H0v2h24v-2h-4zM4 6h16v10H4V6z"/>
          <path d="M9.5 9L7 11.5 9.5 14M14.5 9l2.5 2.5-2.5 2.5"/>
        </svg>
      )
    },
    {
      label: 'Job Assistance',
      number: '100%',
      bg: 'bg-emerald-100/70',
      numberColor: 'text-emerald-600',
      borderColor: 'hover:border-emerald-300 hover:shadow-emerald-500/10',
      icon: (
        <svg className="w-8 h-8 text-emerald-600" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-6 0h-4V4h4v2z"/>
        </svg>
      )
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className={`bg-white rounded-3xl p-6 sm:p-8 text-center shadow-md shadow-slate-100/70 border border-slate-100 ${stat.borderColor} hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col items-center justify-center`}
            >
              <div className={`w-16 h-16 ${stat.bg} rounded-full flex items-center justify-center mx-auto mb-5 shrink-0`}>
                {stat.icon}
              </div>
              <div className={`text-4xl sm:text-5xl font-extrabold ${stat.numberColor} mb-2 tracking-tight`}>
                {stat.number}
              </div>
              <div className="text-slate-600 text-sm sm:text-base font-bold leading-snug">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}