'use client';

interface LocationSeoContentBlockProps {
  courseName?: string;
  locationName?: string;
}

export default function LocationSeoContentBlock({
  courseName = 'IT Training',
  locationName = 'Bangalore'
}: LocationSeoContentBlockProps) {
  const displayCourse = courseName.replace(/ Training$/i, '');

  return (
    <section className="py-16 bg-slate-50 border-t border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Block 1: Book Your Course Batch Seat */}
        <div className="bg-gradient-to-r from-red-600 via-rose-600 to-red-700 rounded-3xl p-8 sm:p-10 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6 border border-red-400/30">
          <div className="text-center md:text-left space-y-2">
            <span className="inline-block bg-white/20 text-white text-xs font-black uppercase px-3 py-1 rounded-full tracking-wider mb-1">
              Limited Batch Seats
            </span>
            <h3 className="text-2xl sm:text-3xl font-black tracking-tight">
              Book Your {displayCourse} Batch Seat in {locationName}
            </h3>
            <p className="text-white/90 text-sm sm:text-base max-w-2xl">
              Get personalized mentor attention with small batch sizes (4-5 students). Reserve your seat now before slots fill up!
            </p>
          </div>
          <div className="flex-shrink-0">
            <a
              href="https://learnmoretechnologies.in/contact-us/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white hover:bg-slate-100 text-red-600 font-extrabold px-8 py-4 rounded-2xl shadow-2xl transition transform hover:scale-105 active:scale-95 inline-flex items-center gap-2 text-base"
            >
              <i className="fas fa-paper-plane text-red-500"></i> Join Now
            </a>
          </div>
        </div>

        {/* Grid for Location Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Block 2: Course Training in URL Location */}
          <div className="bg-white rounded-3xl p-8 shadow-md border border-slate-200/90 hover:shadow-xl transition flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-2xl bg-blue-100 text-blue-600 flex items-center justify-center text-xl font-bold">
                  <i className="fas fa-map-marker-alt"></i>
                </div>
                <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 leading-snug">
                  {displayCourse} training in {locationName}
                </h3>
              </div>
              
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Yes, we offer a wide selection of courses including Python training and Data Science Training in {locationName}, along with other popular courses like DevOps, AWS Cloud services, Selenium, Linux, and {displayCourse} training in {locationName}. Our trainers have extensive experience in their fields. Also, every class comes with recorded sessions, individual scoring, and other features. Each batch has 4-5 students, which lets the trainer give personal attention to everyone.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500 font-semibold">
              <span className="flex items-center gap-1.5 text-emerald-600 font-bold">
                <i className="fas fa-check-circle text-xs"></i> 4-5 Students Per Batch
              </span>
              <a
                href="https://www.google.com/maps/place/Learn+More+Technologies+-+Python+Training+in+Bangalore/@12.9559771,77.716602,15z/data=!4m6!3m5!1s0x3bae132d7d94763f:0xc8c89ff3abe8a472!8m2!3d12.9559771!4d77.716602!16s%2Fg%2F11t5jfvj2q?entry=ttu"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 font-bold hover:underline"
              >
                View on Google Maps <i className="fas fa-arrow-right text-[10px] ml-0.5"></i>
              </a>
            </div>
          </div>

          {/* Block 3: Course Training & Career in URL Location */}
          <div className="bg-white rounded-3xl p-8 shadow-md border border-slate-200/90 hover:shadow-xl transition flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-600 flex items-center justify-center text-xl font-bold">
                  <i className="fas fa-graduation-cap"></i>
                </div>
                <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 leading-snug">
                  {displayCourse} classes in {locationName}
                </h3>
              </div>
              
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Even in today’s tech scene, {displayCourse} stands out as one of the top skill tracks you should know well. While other technical domains exist in the field, the need for {displayCourse} classes in {locationName} and people with {displayCourse} skills keeps growing every day. Taking the best {displayCourse} courses in {locationName} will boost your chances of getting picked by leading IT companies.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500 font-semibold">
              <span className="flex items-center gap-1.5 text-blue-600 font-bold">
                <i className="fas fa-briefcase text-xs"></i> 100% Career Assistance
              </span>
              <a
                href="https://learnmoretechnologies.in/contact-us/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-red-600 font-bold hover:underline"
              >
                Enquire Now <i className="fas fa-arrow-right text-[10px] ml-0.5"></i>
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
