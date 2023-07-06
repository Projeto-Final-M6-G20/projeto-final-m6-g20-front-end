'use client';

import { useEffect, useState } from 'react';

import ListAds from './components/ListAd';

import { useAdvertisements } from 'context/AdvertisementsContext';

const PageAdAdvertiser = () => {
  const { advertisements, setAdvertisements, getAdvertisements } =
    useAdvertisements();
  const [concatenatedValues] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const data = await getAdvertisements({
        limit: 12,
        page: 1,
        filters: concatenatedValues
      });
      setAdvertisements(data);
    };
    fetchData();
  }, [concatenatedValues]);

  const getInitials = (name: string | undefined) => {
    if (name) {
      const initials = name
        .split(' ')
        .map((word) => word.charAt(0))
        .join('');

      return initials;
    }
  };

  return (
    <main className="flex flex-col gap-10 pt-28 min-w-full items-center backgroundImage bg-no-repeat mb-8">
      <section className="bg-gray-50 w-8/12 p-10 flex flex-col gap-5">
        {/* <div className="rounded-full bg-brand-1 w-20 h-20">
          
        </div> */}
        <div className="w-20 h-20 bg-brand-1 rounded-full">
          <p className="w-full h-full flex justify-center items-center  text-white">
            {getInitials(advertisements?.data[0].User.fullname)}
          </p>
        </div>

        <div className="flex items-center">
          <h2 className="heading-3-500">
            {advertisements?.data[0].User.fullname}
          </h2>

          {advertisements?.data[0].User.is_advertiser ? (
            <span className="bg-brand-4 text-brand-1 p-2 rounded-md">
              Anunciante
            </span>
          ) : (
            <span className="bg-brand-4 text-brand-1 p-2 rounded-md">
              Comprador
            </span>
          )}
        </div>

        <div>
          <p className="text-gray-500">
            {advertisements?.data[0].User.description}
          </p>
        </div>
      </section>

      <div className="w-10/12 mb-8">
        <h2 className="font-bold heading-3-500 my-4">Anuncios</h2>
        <ListAds advertisements={advertisements} />
      </div>
    </main>
  );
};

export default PageAdAdvertiser;
