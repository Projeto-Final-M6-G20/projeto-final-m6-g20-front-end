'use client';
import { usePathname, useRouter } from 'next/navigation';
import { useContext, useEffect } from 'react';

import CommentForm from '../components/CommentForm';
import CommentCard from '../components/CommentsCard';
import Container from 'app/components/Container/container';

import { Spinner } from '@chakra-ui/react';
import {
  AdvertisementsContext,
  useAdvertisements
} from 'context/AdvertisementsContext';

const AdDetailView = ({ params }: { params: { carId: string } }) => {
  const { getAdvertisementById, car } = useAdvertisements();

  const { getComment } = useContext(AdvertisementsContext);

  const router = useRouter();

  const pathname = usePathname();
  const id = pathname.split('/')[2];

  getComment(id);

  const capitalizeFirstLetter = (str: string) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  useEffect(() => {
    const id = params.carId;
    getAdvertisementById(id);
  }, []);

  if (!car) {
    return <Spinner color="blue" />;
  }

  const getInitials = (name: string) => {
    const initials = name
      .split(' ')
      .map((word) => word.charAt(0))
      .join('');

    return initials;
  };
  const handleSellerId = (sellerId: string) => {
    router.push(`/seller_advertisers/${sellerId}`);
  };

  return (
    <main className="flex min-h-screen min-w-full items-start justify-center backgroundImage bg-cover bg-no-repeat">
      <Container>
        <section className="flex flex-col items-center lg:flex-row lg:items-start justify-between w-full  ">
          <section className="flex flex-col w-[90%] lg:w-[63%] justify-center gap-6 ">
            <div className="bg-white h-[380px] flex justify-center ">
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

            <div className="flex flex-col w-[600px] justify-items-start p-8">
              <h2 className="text-lg font-semibold">Comentários</h2>
              <div className="flex flex-col w-full">
                <CommentCard />
              </div>

              <CommentForm />
            </div>
          </section>

          <section className="flex flex-col w-[90%] lg:w-35% lg:w-2/6 justify-center gap-6">
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
              <div className="rounded-full bg-brand-1 w-20 h-20">
                <p className="w-full h-full flex justify-center items-center  text-white text-4xl">
                  {getInitials(car.User.fullname).toLocaleUpperCase()}
                </p>
              </div>
              <h1 className="text-lg font-bold">
                {capitalizeFirstLetter(car.User.fullname)}
              </h1>
              <p className="mb-3 text-gray-500">{car.User.description}</p>
              <button
                onClick={() => handleSellerId(car.User.id)}
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
