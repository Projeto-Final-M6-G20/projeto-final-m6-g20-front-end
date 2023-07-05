'use client';
import { useContext, useEffect, useState } from 'react';
import {
  MdOutlineKeyboardArrowRight,
  MdOutlineKeyboardArrowLeft
} from 'react-icons/md';

import Banner from './components/Banner';
import Card from './components/Card';
import Container from './components/Container/container';
import CarFilter from './components/Filter';
import DrawerFilter from './components/FilterMobile';

import { useDisclosure } from '@chakra-ui/react';
import { useAdvertisements } from 'context/AdvertisementsContext';
import { UserContext } from 'context/UserContext';

export default function Home() {
  const { advertisements, setAdvertisements, getAdvertisements } =
    useAdvertisements();
  const { getUser } = useContext(UserContext);
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
    getUser();
  }, [concatenatedValues]);

  if (!advertisements) {
    return <p>Loading...</p>;
  }
  const handleNextPage = (currentPage: number) => {
    if (!advertisements?.pagination.nextPageLink) return null;
    const fetchData = async () => {
      const data = await getAdvertisements({
        limit: 12,
        page: currentPage + 1,
        filters: concatenatedValues
      });
      setAdvertisements(data);
    };
    fetchData();
  };
  const handlePreviousPage = (currentPage: number) => {
    if (!advertisements?.pagination.previousPageLink) return null;
    const fetchData = async () => {
      const data = await getAdvertisements({
        limit: 12,
        page: currentPage - 1,
        filters: concatenatedValues
      });
      setAdvertisements(data);
    };
    fetchData();
  };

  return (
    <main className="flex min-h-screen bg-white flex-col items-center justify-between">
      <Container>
        <Banner />
        <section className="w-full h-full  flex m-14  max-lg:m-4">
          <CarFilter
            advertisements={advertisements}
            setAdvertisements={setAdvertisements}
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
            {advertisements.pagination.previousPageLink ? (
              <button
                onClick={() =>
                  handlePreviousPage(advertisements.pagination.pageNumber)
                }
                className="text-brand-1 font-bold flex items-center justify-center px"
              >
                <MdOutlineKeyboardArrowLeft className="text-xl" /> Anterior
              </button>
            ) : null}
            {advertisements.pagination.pageNumber ===
            advertisements.pagination.totalPages ? (
              <p
                onClick={() =>
                  handlePreviousPage(advertisements.pagination.pageNumber)
                }
                className="text-xl text-gray-400"
              >
                {advertisements.pagination.pageNumber - 1}
              </p>
            ) : (
              <p className="text-xl text-gray-500">
                {advertisements.pagination.pageNumber}
              </p>
            )}
            {advertisements.pagination.pageNumber ===
            advertisements.pagination.totalPages ? (
              <p className="text-xl text-gray-500">
                {advertisements.pagination.totalPages}
              </p>
            ) : (
              <p
                onClick={() =>
                  handleNextPage(advertisements.pagination.pageNumber)
                }
                className="text-xl text-gray-400"
              >
                {advertisements.pagination.totalPages}
              </p>
            )}
          </div>
          {advertisements.pagination.nextPageLink ? (
            <button
              onClick={() =>
                handleNextPage(advertisements.pagination.pageNumber)
              }
              className="text-brand-1 font-bold flex items-center justify-center px"
            >
              Seguinte <MdOutlineKeyboardArrowRight className="text-xl" />{' '}
            </button>
          ) : null}
        </div>
      </Container>

      <DrawerFilter isOpen={isOpen} onClose={onClose}>
        <CarFilter
          advertisements={advertisements}
          setAdvertisements={setAdvertisements}
          concatenatedValues={concatenatedValues}
          setConcatenatedValues={setConcatenatedValues}
          hideClass="w-full px-[12px]"
        />
      </DrawerFilter>
    </main>
  );
}
