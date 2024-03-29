'use client';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useContext, useEffect } from 'react';

import CommentForm from '../components/CommentForm';
import CommentCard from '../components/CommentsCard';
import Container from 'app/components/Container/container';
import CustomModal from 'app/components/Modal';

import { useDisclosure } from '@chakra-ui/react';
import { Spinner } from '@chakra-ui/react';
import {
  AdvertisementsContext,
  useAdvertisements
} from 'context/AdvertisementsContext';
import { parseCookies } from 'nookies';

const AdDetailView = ({ params }: { params: { carId: string } }) => {
  const { getAdvertisementById, car } = useAdvertisements();

  const { getComment } = useContext(AdvertisementsContext);

  const { isOpen, onOpen, onClose } = useDisclosure();

  const router = useRouter();

  const cookies = parseCookies();

  const capitalizeFirstLetter = (str: string) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  useEffect(() => {
    const id = params.carId;
    getComment(id);
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
    <main className="flex min-h-screen min-w-full items-start justify-center backgroundImage  bg-cover bg-no-repeat">
      <Container>
        <section className="flex flex-col items-center lg:flex-row lg:items-start justify-between w-full p-14 max-sm:flex-col-reverse max-sm:p-0 max-sm:my-6">
          <section className="flex flex-col w-[90%] lg:w-[63%] justify-center gap-6 ">
            <div className="bg-white h-[380px] flex justify-center ">
              <img
                className=" w-3/6 object-contain "
                src={car.images[0]?.url ? car.images[0]?.url : ''}
                alt=""
                onClick={() => onOpen()}
              />
            </div>
            <div className="grid justify-items-start gap-6  bg-white p-8">
              <h2 className="text-lg font-semibold">{car.model}</h2>
              <div className="flex w-full gap-3 justify-between">
                <div className="flex gap-2">
                  <span className="text-brand-1 font-bold">{car.mileage}</span>
                  <span className="text-brand-1 font-bold">{car.year}</span>
                </div>

                <span className="font-bold">R$ {car.price}</span>
              </div>
              <Link
                href={'https://api.whatsapp.com/send?phone=5549999267818'}
                type="button"
                className="text-white bg-brand-1 hover:bg-brand-2 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5"
              >
                Comprar
              </Link>
            </div>

            <div className="grid justify-items-start gap-6  bg-white p-8">
              <h2 className="text-lg font-semibold">Descrição</h2>
              <p className="mb-3 text-gray-500">{car.description}</p>
            </div>

            <div className="flex flex-col justify-items-start p-8 bg-white">
              <h2 className="text-lg font-semibold mb-1">Comentários</h2>
              <div className="flex flex-col w-full">
                <CommentCard />
              </div>

              {cookies['user.Token'] ? (
                <>
                  <CommentForm />
                </>
              ) : (
                <></>
              )}
            </div>
          </section>

          <section className="flex flex-col w-[90%] lg:w-35% lg:w-2/6 justify-center gap-6">
            <div className="flex flex-col justify-items-center gap-4 bg-white p-8 h-64">
              <h2 className="text-lg font-semibold">Fotos</h2>
              <div className="flex flex-wrap gap-2 gap-y-6">
                {car.images.map(() => {
                  return (
                    <img
                      className="w-16 object-contain "
                      src={car.images[0].url}
                      alt=""
                      key={car.id}
                    />
                  );
                })}
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
      <CustomModal
        MaxWidthBody="90%"
        MaxWidthHeader="90%"
        widthBody="600px"
        widthHeader="600px"
        isOpen={isOpen}
        onClose={onClose}
      >
        <div className="w-full flex flex-col justify-between items-center gap-3">
          <div className="w-full flex items-start">
            <h2 className="text-lg font-semibold">{car.title}</h2>
          </div>
          <figure>
            <img className="object-cover " src={car.images[0].url} alt="" />
          </figure>
        </div>
      </CustomModal>
    </main>
  );
};

export default AdDetailView;
