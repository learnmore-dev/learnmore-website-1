export default function WhyChoose() {
  const reasons = [
    { icon: "fas fa-user-tie", title: "Industry Expert Trainers" },
    { icon: "fas fa-laptop-code", title: "80% Practical Training" },
    { icon: "fas fa-clock", title: "Flexible Learning Modes" },
    { icon: "fas fa-wallet", title: "Affordable Fees" },
    { icon: "fas fa-users", title: "Small Batches" }
  ];

  return (
    <section className="why-choose py-16 bg-gray-50">
      <div className="container text-center">
        <h2 className="text-3xl font-bold mb-12">Why Choose Us?</h2>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
          {reasons.map((reason, idx) => (
            <div key={idx} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition text-center">
              <i className={`${reason.icon} text-red-500 text-4xl mb-3`}></i>
              <p className="font-semibold">{reason.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}