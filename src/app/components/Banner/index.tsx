const Banner = () => {
  const bmw =
    'https://i.pinimg.com/736x/cc/d8/85/ccd8856d299d01b93af4f66f88069ff1.jpg';
  return (
    <section
      className="w-full md:h-screen bg-no-repeat bg-cover bg-center"
      style={{
        backgroundImage: `url(${bmw})`,
        height: '500px'
      }}
    >
      <div className="w-full h-full flex flex-col justify-center items-center gap-5 bg-gradient-to-t from-black to-transparent ">
        <h1 className="heading-1-700 text-4xl flex justify-center text-white relative bottom-9">
          Motors Shop
        </h1>
        <h2 className="heading-3-500 text-white w-full flex justify-center relative bottom-9 ">
          A melhor plataforma de anuncio de carros do país
        </h2>
      </div>
    </section>
  );
};

export default Banner;
