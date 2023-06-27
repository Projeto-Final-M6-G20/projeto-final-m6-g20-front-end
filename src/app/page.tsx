'use client';
import { useEffect, useState } from 'react';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';

import Banner from './components/Banner';
import Card from './components/Card';
import CarFilter from './components/Filter';
import DrawerFilter from './components/FilterMobile';

import { useDisclosure } from '@chakra-ui/react';
import { useAdvertisements } from 'context/AdvertisementsContext';

export default function Home() {
  const { advertisements, setAdvertisements, getAdvertisements } =
    useAdvertisements();
  const [concatenatedValues, setConcatenatedValues] = useState('');
  const { isOpen, onOpen, onClose } = useDisclosure();

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
  console.log(advertisements);
  return (
    <main className="flex min-h-screen bg-white flex-col items-center justify-between">
      <div className="flex flex-col min-h-screen justify-center items-center  max-sm:w-screen max-[1024px]:w-full max-[1560px]:w-full max-[2560px]:w-3/5  max-[3440px]:w-3/6 ">
        <Banner />
        <section className="w-full h-full  flex m-14  max-lg:m-4">
          <CarFilter
            advertisements={advertisements}
            concatenatedValues={concatenatedValues}
            setConcatenatedValues={setConcatenatedValues}
            hideClass="w-[30%] max-lg:hidden lg:block px-[12px]"
          />

          <Card advertisements={advertisements} />
        </section>

        <div className="w-full flex justify-center items-center lg:hidden ">
          <button
            onClick={onOpen}
            className="flex btn-primary relative top-0 left-0 items-center"
          >
            Filtros
          </button>
        </div>
        <div className="flex w-full h-48 items-center justify-center gap-4">
          <div className="flex gap-2">
            <p className="text-xl text-gray-500">
              {advertisements?.pagination.pageNumber}
            </p>
            <p className="text-xl text-gray-400">
              {advertisements?.pagination.totalPages}
            </p>
          </div>
          <button className="text-brand-1 font-bold flex items-center justify-center px">
            Seguinte <MdOutlineKeyboardArrowRight className="text-xl" />{' '}
          </button>
        </div>
      </div>
      <DrawerFilter isOpen={isOpen} onClose={onClose}>
        <CarFilter
          advertisements={advertisements}
          concatenatedValues={concatenatedValues}
          setConcatenatedValues={setConcatenatedValues}
          hideClass="w-full px-[12px]"
        />
      </DrawerFilter>
    </main>
  );
}
