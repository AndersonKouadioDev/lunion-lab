import ServicesItem from "./services-items";

export const Services = () => {
  return (
    <div className="bg-black text-white py-[72px] sm:py-24">
      <div className="container">
        <h2 className="text-center font-bold text-5xl sm:text-6xl tracking-tighter">
          Nos Services
        </h2>
        <div className="max-w-xl mx-auto">
          <p className="text-center mt-5 text-xl text-white/70">
            Boostez votre entreprise avec nos services digitaux personnalisés,
            conçus pour répondre à vos besoins spécifiques et accélérer votre
            succès dans le monde numérique.
          </p>
        </div>
        <div className="flex flex-col items-center justify-center sm:flex-row gap-4 mt-32">
          <ServicesItem />
        </div>
      </div>
    </div>
  );
};
