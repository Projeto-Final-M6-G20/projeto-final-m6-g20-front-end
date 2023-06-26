'use client';
import { useEffect, useState } from 'react';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';

import Banner from './components/Banner';
import Card from './components/Card';
import CarFilter from './components/Filter';

import { useAdvertisements } from 'context/AdvertisementsContext';

export default function Home() {
  const { advertisements, setAdvertisements, getAdvertisements } =
    useAdvertisements();
  const [concatenatedValues, setConcatenatedValues] = useState('');

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

  return (
    <main className="flex min-h-screen bg-white flex-col items-center justify-between">
      <div className="flex flex-col min-h-screen justify-center items-center  max-sm:w-screen max-[1024px]:w-full max-[1560px]:w-full max-[2560px]:w-3/5 ">
        <Banner />
        <section className="w-full h-full  flex m-14  max-lg:m-4">
          <CarFilter
            advertisements={advertisements}
            concatenatedValues={concatenatedValues}
            setConcatenatedValues={setConcatenatedValues}
          />

          <Card advertisements={advertisements} />
        </section>

        <div className="w-full flex justify-center items-center lg:hidden ">
          <button className="flex btn-primary relative top-0 left-0 items-center">
            Filtros
          </button>
        </div>
        <div className="flex w-full h-48 items-center justify-center gap-4">
          <div className="flex gap-2">
            <p className="text-xl text-gray-500">1 </p>
            <p className="text-xl text-gray-400"> de 2</p>
          </div>
          <button className="text-brand-1 font-bold flex items-center justify-center">
            Seguinte <MdOutlineKeyboardArrowRight className="text-xl" />{' '}
          </button>
        </div>
      </div>
    </main>
  );
}
