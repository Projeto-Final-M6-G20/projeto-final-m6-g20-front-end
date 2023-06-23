'use client';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';

import Banner from './components/Banner';
import Card from './components/Card';
import CarFilter from './components/Filter';

import AdDetailView from './adDetailView/page';

export default function Home() {
  return (
    <main className="flex min-h-screen bg-white flex-col items-center justify-between">
      <div className="flex flex-col min-h-screen justify-center items-center  max-sm:w-screen max-[1024px]:w-full max-[1560px]:w-full max-[2560px]:w-3/5 max-[1560px]:w-1/2">
        <Banner />
        <section className="w-full h-full  flex m-14  max-lg:m-4">
          <CarFilter />
          <Card />
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
