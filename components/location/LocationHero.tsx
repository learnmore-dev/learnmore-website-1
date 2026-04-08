interface LocationHeroProps {
  name: string;
  address: string;
}

export default function LocationHero({ name, address }: LocationHeroProps) {
  return (
    <section className="bg-gradient-to-r from-red-500 to-red-600 text-white py-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">{name}</h1>
        <p className="text-xl">{address}</p>
      </div>
    </section>
  );
}