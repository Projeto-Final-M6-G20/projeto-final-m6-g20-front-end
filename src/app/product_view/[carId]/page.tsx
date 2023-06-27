'use client';
import { useEffect } from 'react';

import Container from 'app/components/Container/container';

import { Spinner } from '@chakra-ui/react';
import { useAdvertisements } from 'context/AdvertisementsContext';

const AdDetailView = ({ params }: { params: { carId: string } }) => {
  const { getAdvertisementById, car } = useAdvertisements();
  useEffect(() => {
    const id = params.carId;
    getAdvertisementById(id);
  }, []);

  if (!car) {
    return <Spinner color="blue" />;
  }

  return (
    <main className="flex min-h-screen min-w-full items-start justify-center backgroundImage bg-cover bg-no-repeat py-6">
      <Container>
        <section className="flex items-start justify-between w-4/5 ">
          <section className="flex flex-col w-3/6 justify-center gap-6 ">
            <div className="bg-white h-60 flex justify-center ">
              <img
                className=" w-3/6 object-contain "
                src={car.images[0].url}
                alt=""
              />
            </div>
            <div className="grid justify-items-start gap-6  bg-white p-8">
              <h2 className="text-lg font-semibold">{car.title}</h2>
              <div className="flex w-full gap-3 justify-between">
                <div className="flex gap-2">
                  <span className="text-brand-1 font-bold">{car.mileage}</span>
                  <span className="text-brand-1 font-bold">{car.year}</span>
                </div>

                <span className="font-bold">R$ {car.price}</span>
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
              <p className="mb-3 text-gray-500">{car.description}</p>
            </div>
          </section>

          <section className="flex flex-col w-2/6 justify-center gap-6 ">
            <div className="flex flex-col justify-items-center gap-4 bg-white p-8 h-64">
              <h2 className="text-lg font-semibold">Fotos</h2>
              <div className="flex flex-wrap gap-2 gap-y-6">
                <img className=" w-16 object-contain " src="" alt="" />
                <img className=" w-16 object-contain " src="" alt="" />
                <img className=" w-16 object-contain " src="" alt="" />
                <img className=" w-16 object-contain " src="" alt="" />
                <img className=" w-16 object-contain " src="" alt="" />
              </div>
            </div>

            <div className="grid justify-items-center gap-6 bg-white p-8">
              <div className="rounded-full bg-brand-1 w-20 h-20"></div>
              <h1 className="text-lg font-bold">Samuel Leão</h1>
              <p className="mb-3 text-gray-500">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industrys
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
      </Container>
    </main>
  );
};

export default AdDetailView;
