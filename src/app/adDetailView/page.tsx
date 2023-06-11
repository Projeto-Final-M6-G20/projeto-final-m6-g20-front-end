const AdDetailView = () => {
  const carro =
    'https://i.pinimg.com/564x/d5/1c/07/d51c074264dc22c6b3b49fae2d2b8019.jpg';

  return (
    <main className="flex min-h-screen min-w-full items-start justify-center backgroundImage bg-no-repeat py-6">
      <section className="flex items-start justify-between w-4/5 ">
        <section className="flex flex-col w-3/6 justify-center gap-6 ">
          <div className="bg-white h-60 flex justify-center ">
            <img className=" w-3/6 object-contain " src={carro} alt="" />
          </div>
          <div className="grid justify-items-start gap-6  bg-white p-8">
            <h2 className="text-lg font-semibold">
              Mercedes Benz A 200 CGI ADVANCE SEDAN Mercedes Benz A 200
            </h2>
            <div className="flex w-full gap-3 justify-between">
              <div className="flex gap-2">
                <span className="text-brand-1 font-bold">O KM</span>
                <span className="text-brand-1 font-bold">2019</span>
              </div>

              <span className="font-bold">R$ 00.000,00</span>
            </div>
            <button
              type="button"
              className="text-white bg-brand-1 hover:bg-brand-2 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5"
            >
              Comprar
            </button>
          </div>

          <div className="grid justify-items-start gap-6  bg-white p-8">
            <h2 className="text-lg font-semibold">Descrição</h2>
            <p className="mb-3 text-gray-500">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </div>
        </section>

        <section className="flex flex-col w-2/6 justify-center gap-6 ">
          <div className="flex flex-col justify-items-center gap-4 bg-white p-8 h-64">
            <h2 className="text-lg font-semibold">Fotos</h2>
            <div className="flex flex-wrap gap-2 gap-y-6">
              <img className=" w-16 object-contain " src={carro} alt="" />
              <img className=" w-16 object-contain " src={carro} alt="" />
              <img className=" w-16 object-contain " src={carro} alt="" />
              <img className=" w-16 object-contain " src={carro} alt="" />
              <img className=" w-16 object-contain " src={carro} alt="" />
            </div>
          </div>

          <div className="grid justify-items-center gap-6 bg-white p-8">
            <div className="rounded-full bg-brand-1 w-20 h-20"></div>
            <h1 className="text-lg font-bold">Samuel Leão</h1>
            <p className="mb-3 text-gray-500">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's
            </p>
            <button
              type="button"
              className="text-white bg-primary hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5"
            >
              Ver todos anuncios
            </button>
          </div>
        </section>
      </section>
    </main>
  );
};

export default AdDetailView;
