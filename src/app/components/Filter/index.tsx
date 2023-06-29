'use client';

import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { BsArrowRightShort } from 'react-icons/bs';

import { iAdvertisements } from 'context/AdvertisementsContext';

interface CarFilterProps {
  advertisements: iAdvertisements | null | undefined;
  setAdvertisements: Dispatch<
    SetStateAction<iAdvertisements | null | undefined>
  >;
  concatenatedValues: string;
  setConcatenatedValues: React.Dispatch<React.SetStateAction<string>>;
  hideClass: string;
}

const CarFilter = ({
  advertisements,
  concatenatedValues,
  setConcatenatedValues,
  hideClass
}: CarFilterProps) => {
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);
  const [minimaMileage, setMinimaMileage] = useState('0');
  const [maximaMileage, setMaximaMileage] = useState('0');
  const [minimaPrice, setMinimaPrice] = useState('0');
  const [maximaPrice, setMaximaPrice] = useState('0');

  useEffect(() => {
    const filtersByTitle = selectedFilters.reduce(
      (acc: Record<string, string[]>, filter: string) => {
        const [title, value] = filter.split(':');
        const key = encodeURIComponent(title);
        const filterValue = encodeURIComponent(value);

        if (acc[key]) {
          delete acc[key];
        }

        acc[key] = [filterValue];

        return acc;
      },
      {}
    );

    const combinedFilters = Object.entries(filtersByTitle)
      .map(([key, filters]) => `&${key}=${filters.join(`&${key}=`)}`)
      .join('');

    setConcatenatedValues(combinedFilters);
  }, [selectedFilters]);

  const handleFilterClick = (filter: string, title: string) => {
    const isSelected = selectedFilters.includes(`${title}:${filter}`);

    if (isSelected) {
      setSelectedFilters(
        selectedFilters.filter((selected) => selected !== `${title}:${filter}`)
      );
    } else {
      setSelectedFilters([...selectedFilters, `${title}:${filter}`]);
    }
  };

  const handleChangeFunctions = {
    handleMinimaMileageChange: (event: {
      target: { value: SetStateAction<string> };
    }) => {
      setMinimaMileage(event.target.value);
    },
    handleMaximaMileageChange: (event: {
      target: { value: SetStateAction<string> };
    }) => {
      setMaximaMileage(event.target.value);
    },
    handleMinimaPriceChange: (event: {
      target: { value: SetStateAction<string> };
    }) => {
      setMinimaPrice(event.target.value);
    },
    handleMaximaPriceChange: (event: {
      target: { value: SetStateAction<string> };
    }) => {
      setMaximaPrice(event.target.value);
    }
  };
  const clearFilter = () => {
    setSelectedFilters([]);
    setMinimaMileage('0');
    setMaximaMileage('0');
    setMinimaPrice('0');
    setMaximaPrice('0');
  };

  return (
    <aside className={hideClass}>
      <div className="flex flex-col p-4 gap-2">
        <h3 className="font-extrabold">Marcas</h3>
        {concatenatedValues === '' ? (
          <div className="flex flex-col items-start gap-0 text-gray-500 p-2">
            {advertisements?.filtersTypes.brands.map((filter) => (
              <button
                key={filter}
                onClick={() => handleFilterClick(filter, 'brand')}
                className={`filter-button ${
                  selectedFilters.includes(`brand:${filter}`) ? 'selected' : ''
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-start gap-0 text-gray-500 p-2">
            {advertisements?.filtersTypesThisSearch.brands.map((filter) => (
              <button
                key={filter}
                onClick={() => handleFilterClick(filter, 'brand')}
                className={`filter-button ${
                  selectedFilters.includes(`brand:${filter}`) ? 'selected' : ''
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        )}
      </div>
      <div className="flex flex-col p-4 gap-2">
        <h3 className="font-extrabold">Modelos</h3>
        {concatenatedValues === '' ? (
          <div className="flex flex-col items-start gap-0 text-gray-500 p-2">
            {advertisements?.filtersTypes.models.map((filter) => (
              <button
                key={filter}
                onClick={() => handleFilterClick(filter, 'model')}
                className={`filter-button ${
                  selectedFilters.includes(`model:${filter}`) ? 'selected' : ''
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-start gap-0 text-gray-500 p-2">
            {advertisements?.filtersTypesThisSearch.models.map((filter) => (
              <button
                key={filter}
                onClick={() => handleFilterClick(filter, 'model')}
                className={`filter-button ${
                  selectedFilters.includes(`model:${filter}`) ? 'selected' : ''
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        )}
      </div>
      <div className="flex flex-col p-4 gap-2">
        <h3 className="font-extrabold">Cores</h3>
        {concatenatedValues === '' ? (
          <div className="flex flex-col items-start gap-0 text-gray-500 p-2">
            {advertisements?.filtersTypes.colors.map((filter) => (
              <button
                key={filter}
                onClick={() => handleFilterClick(filter, 'color')}
                className={`filter-button ${
                  selectedFilters.includes(`color:${filter}`) ? 'selected' : ''
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-start gap-0 text-gray-500 p-2">
            {advertisements?.filtersTypesThisSearch.colors.map((filter) => (
              <button
                key={filter}
                onClick={() => handleFilterClick(filter, 'color')}
                className={`filter-button ${
                  selectedFilters.includes(`color:${filter}`) ? 'selected' : ''
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        )}
      </div>
      <div className="flex flex-col p-4 gap-2">
        <h3 className="font-extrabold">Ano</h3>
        {concatenatedValues === '' ? (
          <div className="flex flex-col items-start gap-0 text-gray-500 p-2">
            {advertisements?.filtersTypes.years.map((filter) => (
              <button
                key={filter}
                onClick={() => handleFilterClick(filter, 'year')}
                className={`filter-button ${
                  selectedFilters.includes(`year:${filter}`) ? 'selected' : ''
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-start gap-0 text-gray-500 p-2">
            {advertisements?.filtersTypesThisSearch.years.map((filter) => (
              <button
                key={filter}
                onClick={() => handleFilterClick(filter, 'year')}
                className={`filter-button ${
                  selectedFilters.includes(`year:${filter}`) ? 'selected' : ''
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        )}
      </div>
      <div className="flex flex-col p-4 gap-2">
        <h3 className="font-extrabold">Combustível</h3>
        {concatenatedValues === '' ? (
          <div className="flex flex-col items-start gap-0 text-gray-500 p-2">
            {advertisements?.filtersTypes.fuel_type.map((filter) => (
              <button
                key={filter}
                onClick={() => handleFilterClick(filter, 'fuel_type')}
                className={`filter-button ${
                  selectedFilters.includes(`fuel_type:${filter}`)
                    ? 'selected'
                    : ''
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-start gap-0 text-gray-500 p-2">
            {advertisements?.filtersTypesThisSearch.fuel_type.map((filter) => (
              <button
                key={filter}
                onClick={() => handleFilterClick(filter, 'fuel_type')}
                className={`filter-button ${
                  selectedFilters.includes(`fuel_type:${filter}`)
                    ? 'selected'
                    : ''
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        )}
      </div>
      <div className="flex flex-col p-4 gap-2">
        <h3 className="font-extrabold">Quilometragem</h3>
        <div className="flex gap-2 text-gray-500 p-2">
          <div>
            <label className="text-xs">Mínimo</label>
            <div className="flex">
              <input
                className="w-24 outline-slate-300 text-center bg-slate-300"
                type="number"
                placeholder="Miníma"
                value={minimaMileage}
                onChange={handleChangeFunctions.handleMinimaMileageChange}
              />
              <button
                className="text-brand-1 font-bold"
                onClick={() =>
                  handleFilterClick(minimaMileage, 'minimaMileage')
                }
              >
                <BsArrowRightShort />
              </button>
            </div>
          </div>
          <div>
            <label className="text-xs">Máximo</label>
            <div className="flex">
              <input
                className="w-24 outline-slate-300 text-center bg-slate-300"
                type="number"
                placeholder="Máxima"
                value={maximaMileage}
                onChange={handleChangeFunctions.handleMaximaMileageChange}
              />
              <button
                className="text-brand-1 font-bold"
                onClick={() => {
                  handleFilterClick(maximaMileage, 'maximaMileage');
                }}
              >
                <BsArrowRightShort />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col p-4 gap-2">
        <h3 className="font-extrabold">Preço</h3>
        <div className="flex gap-2 text-gray-500 p-2">
          <div>
            <label className="text-xs">Mínimo</label>
            <div className="flex">
              <input
                className="w-24 outline-slate-300 text-center bg-slate-300"
                type="number"
                placeholder="Miníma"
                value={minimaPrice}
                onChange={handleChangeFunctions.handleMinimaPriceChange}
              />
              <button
                className="text-brand-1 font-bold"
                onClick={() => handleFilterClick(minimaPrice, 'minimaPrice')}
              >
                <BsArrowRightShort />
              </button>
            </div>
          </div>
          <div>
            <label className="text-xs">Máximo</label>
            <div className="flex">
              <input
                className="w-24 outline-slate-300 text-center bg-slate-300"
                type="number"
                placeholder="Máxima"
                value={maximaPrice}
                onChange={handleChangeFunctions.handleMaximaPriceChange}
              />
              <button
                className="text-brand-1 font-bold"
                onClick={() => {
                  handleFilterClick(maximaPrice, 'maximaPrice');
                }}
              >
                <BsArrowRightShort />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="flex w-full justify-center">
        {selectedFilters && (
          <button
            className="bg-brand-1 text-white rounded py-[12px] px-[28px] self-center font-semibold"
            onClick={() => {
              clearFilter();
            }}
          >
            Limpar Filtro
          </button>
        )}
      </div>
    </aside>
  );
};

export default CarFilter;
