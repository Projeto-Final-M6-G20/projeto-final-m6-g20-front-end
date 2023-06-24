'use client';
import FilterSection from '../FiltersSection';

import { iAdvertisements } from 'context/AdvertisementsContext';

interface CarFilterProps {
  advertisements: iAdvertisements | null | undefined;
}
const CarFilter = ({ advertisements }: CarFilterProps) => {
  return (
    <aside className="w-1/2 max-lg:hidden lg:block px-[12px]">
      <FilterSection
        title="Marcas"
        filters={advertisements?.filtersTypes.brands || []}
      />

      <FilterSection
        title="Modelos"
        filters={advertisements?.filtersTypes.models || []}
      />

      <FilterSection
        title="Cor"
        filters={advertisements?.filtersTypes.colors || []}
      />

      <FilterSection
        title="Ano"
        filters={advertisements?.filtersTypes.years || []}
      />

      <FilterSection
        title="Combustível"
        filters={advertisements?.filtersTypes.fuel_type || []}
      />

      <div className="flex flex-col p-4 gap-2">
        <h3 className="font-extrabold">Quilometragem</h3>
        <div className="flex  gap-6 text-gray-500 p-2">
          <input
            className="w-28 outline-slate-300 text-center  bg-slate-300 "
            type="number"
            placeholder="Miníma"
            /*  onChange={(event) => {
              setMinKm(event.target.value);
            }} */
          />
          <input
            className="w-28 outline-slate-300 text-center  bg-slate-300 "
            type="text"
            placeholder="Máxima"
            /* onChange={(event) => {
              setMaxKm(event.target.value);
            }} */
          />
        </div>
      </div>

      <div className="flex flex-col p-4 gap-2">
        <h3 className="font-extrabold">Preço</h3>
        <div className="flex  gap-6 text-gray-500 p-2">
          <input
            className="w-28 outline-slate-300 text-center  bg-slate-300 "
            type="number"
            placeholder="Miníma"
            /* onChange={(event) => {
              setMinPrice(event.target.value);
            }} */
          />
          <input
            className="w-28 outline-slate-300 text-center  bg-slate-300 "
            type="text"
            placeholder="Máxima"
            /* onChange={(event) => {
              setMaxPrice(event.target.value);
            }} */
          />
        </div>
      </div>

      {/*  <div className="flex w-full justify-center">
        {isFiltered && (
          <button
            className="bg-brand-1 text-white rounded py-[12px] px-[28px] self-center font-semibold"
            onClick={() => {
              clearFilter();
            }}
          >
            Limpar Filtro
          </button>
        )}
      </div> */}
    </aside>
  );
};

export default CarFilter;
