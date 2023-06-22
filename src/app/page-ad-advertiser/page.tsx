'use client';

import ListAds from "./components/ListAd";

const PageAdAdvertiser = () => {
  return (
    <main className="flex flex-col gap-10 pt-28 min-w-full items-center backgroundImage bg-no-repeat mb-8">
      <section className="bg-gray-50 w-8/12 p-10 flex flex-col gap-5">
        <figure className="rounded-full bg-brand-1 w-20 h-20">
          <img src="" alt="Foto perfil"/>
        </figure>

        <div className="flex items-center">
          <h2 className="heading-3-500">Samuel Leão</h2>
          <span className="bg-brand-4 text-brand-1 p-2 rounded-md">Anunciante</span>
        </div>

        <div>
          <p className="text-gray-500">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
          </p>
        </div>
      </section>

      <div className="w-10/12 mb-8">
        <h2 className="font-bold heading-3-500 my-4">Anuncios</h2>
        <ListAds/>
      </div>
    </main>
  );
};

export default PageAdAdvertiser;
