'use client';
import { useEffect, useState } from 'react';

import { Button } from '@chakra-ui/react';
import { type } from 'os';

interface iCar {
  id: number;
  image: string;
  model: string;
  userName: string;
  brand: string;
  km: number;
  isActive: boolean;
  price: number;
  fuel: string;
  color: string;
  year: string;
}

const carArray: iCar[] = [
  {
    id: 1,
    image:
      'https://i.pinimg.com/736x/da/40/6d/da406db7a58751aa594e8ae36916b44f.jpg',
    model: 'Toyota Camry',
    userName: 'John Smith',
    brand: 'General Motors',
    km: 5000,
    isActive: true,
    price: 25000,
    fuel: 'Diesel',
    color: 'Blue',
    year: '2020'
  },
  {
    id: 2,
    image:
      'https://i.pinimg.com/564x/08/2f/7f/082f7ff6a8721f4d36a4b017011eee22.jpg',
    model: 'Honda Civic',
    userName: 'Emily Johnson',
    brand: 'General Motors',
    km: 8000,
    isActive: true,
    price: 22000,
    fuel: 'Diesel',
    color: 'Blue',
    year: '2020'
  },
  {
    id: 3,
    image:
      'https://i.pinimg.com/564x/33/95/77/3395770abda07fa452da041305519e9a.jpg',
    model: 'Masserati',
    userName: 'Michael Brown',
    brand: 'General Motors',
    km: 3000,
    isActive: true,
    price: 35000,
    fuel: 'Diesel',
    color: 'Blue',
    year: '2020'
  },
  {
    id: 4,
    image:
      'https://i.pinimg.com/564x/7d/72/76/7d7276b663438f33d7fbf1292e0361eb.jpg',
    model: 'Chevrolet Corvette',
    userName: 'Sophia Davis',
    brand: 'General Motors',
    km: 2000,
    isActive: true,
    price: 45000,
    fuel: 'Diesel',
    color: 'Blue',
    year: '2020'
  },
  {
    id: 5,
    image:
      'https://i.pinimg.com/564x/55/c7/e7/55c7e7818fc58a9e740a8527cb3d11b5.jpg',
    model: 'BMW 3 Series',
    userName: 'Daniel Wilson',
    brand: 'General Motors',
    km: 6000,
    isActive: true,
    price: 30000,
    fuel: 'Gas',
    color: 'Blue',
    year: '2020'
  },
  {
    id: 6,
    image:
      'https://i.pinimg.com/564x/cb/a5/7a/cba57a095ad59c031ffff5aab9e26dcc.jpg',
    model: 'Audi A1',
    userName: 'Olivia Thompson',
    brand: 'General Motors',
    km: 4000,
    isActive: false,
    price: 28000,
    fuel: 'Diesel',
    color: 'Blue',
    year: '2020'
  },
  {
    id: 7,
    image:
      'https://i.pinimg.com/564x/c5/72/49/c572495a735f8c9a42c9419524c90b23.jpg',
    model: 'Mercedes-Benz C-Class',
    userName: 'David Martinez',
    brand: 'General Motors',
    km: 10000,
    isActive: true,
    price: 32000,
    fuel: 'Electric',
    color: 'Blue',
    year: '2020'
  },
  {
    id: 8,
    image:
      'https://i.pinimg.com/564x/62/8d/e8/628de8483d7cf057885246ebdfad2fe2.jpg',
    model: 'Volkswagen Golf',
    userName: 'Emma Anderson',
    brand: 'General Motors',
    km: 1500,
    isActive: false,
    price: 18000,
    fuel: 'Gas',
    color: 'Blue',
    year: '2022'
  },
  {
    id: 9,
    image:
      'https://i.pinimg.com/564x/80/fe/ce/80feceebd41999278f2eb2f5d5792c1b.jpg',
    model: 'Tesla Model S',
    userName: 'Noah Taylor',
    brand: 'General Motors',
    km: 100,
    isActive: true,
    price: 15000,
    fuel: 'Diesel',
    color: 'Blue',
    year: '2020'
  },
  {
    id: 12,
    image:
      'https://i.pinimg.com/564x/d0/08/53/d00853120ee040ae6c1f3cb60d5b57be.jpg',
    model: 'Hyundai Santa fe',
    userName: 'Cintya Jhonson',
    brand: 'Hyundai',
    km: 4000,
    isActive: true,
    price: 35000,
    fuel: 'Diesel',
    color: 'Blue',
    year: '2021'
  },
  {
    id: 13,
    image:
      'https://i.pinimg.com/564x/68/08/2a/68082af4427fbbc513f2bf72b4dc2bd6.jpg',
    model: 'Mitsubishi',
    userName: 'Ava Wilson',
    brand: 'Hyundai',
    km: 9000,
    isActive: false,
    price: 16000,
    fuel: 'Diesel',
    color: 'Blue',
    year: '2022'
  }
];

const CarFilter = () => {
  const [brands, setBrands] = useState<string[]>([]);
  const [models, setModels] = useState<string[]>([]);
  const [colors, setColors] = useState<string[]>([]);
  const [years, setYears] = useState<string[]>([]);
  const [fuels, setFuels] = useState<string[]>([]);
  const [selectedBrand, setSelectedBrand] = useState<string>('');
  const [selectedModel, setSelectedModel] = useState<string>('');
  const [selectedColor, setSelectedColor] = useState<string>('');
  const [selectedYear, setSelectedYear] = useState<string>('');
  const [selectedFuel, setSelectedFuel] = useState<string>('');
  const [minKm, setMinKm] = useState<number>(0);
  const [maxKm, setMaxKm] = useState<number>(0);
  const [minPrice, setMinPrice] = useState<number>(0);
  const [maxPrice, setMaxPrice] = useState<number>(0);
  const [filteredAds, setFilteredAds] = useState<iCar[]>([] as iCar[]);
  const [isFiltered, setIsFiltered] = useState<boolean>(false);
  const [changeFilters, setChangeFilters] = useState<boolean>(true);

  const setFilterOptions = () => {
    const colorTemp: string[] = [];
    const modelTemp: string[] = [];
    const yearTemp: string[] = [];
    const fuelTemp: string[] = [];
    const brandTemp: string[] = [];

    if (isFiltered) {
      filteredAds.forEach((car) => {
        if (!brandTemp.includes(car.brand)) {
          brandTemp.push(car.brand);
        }

        if (!modelTemp.includes(car.model)) {
          modelTemp.push(car.model);
        }

        if (!colorTemp.includes(car.color)) {
          colorTemp.push(car.color);
        }

        if (!yearTemp.includes(car.year)) {
          yearTemp.push(car.year);
        }

        if (!fuelTemp.includes(car.fuel)) {
          fuelTemp.push(car.fuel);
        }
      });
    } else {
      carArray.forEach((car) => {
        if (!brandTemp.includes(car.brand)) {
          brandTemp.push(car.brand);
        }

        if (!colorTemp.includes(car.color)) {
          colorTemp.push(car.color);
        }

        if (!modelTemp.includes(car.model)) {
          modelTemp.push(car.model);
        }

        if (!yearTemp.includes(car.year)) {
          yearTemp.push(car.year);
        }

        if (!fuelTemp.includes(car.fuel)) {
          fuelTemp.push(car.fuel);
        }
      });
    }

    setBrands(brandTemp);
    setColors(colorTemp);
    setFuels(fuelTemp);
    setModels(modelTemp);
    setYears(yearTemp.sort((a, b) => +b - +a));
  };

  const clearFilter = () => {
    setSelectedBrand('');
    setSelectedModel('');
    setSelectedYear('');
    setSelectedColor('');
    setSelectedFuel('');
    setIsFiltered(false);
    setChangeFilters(!changeFilters);
  };

  const filterBrand = () => {
    if (isFiltered) {
      setFilteredAds(filteredAds.filter((car) => car.brand == selectedBrand));
    } else {
      setFilteredAds(carArray.filter((car) => car.brand == selectedBrand));
      setIsFiltered(true);
    }
    setChangeFilters(!changeFilters);
  };

  const filterModel = () => {
    if (isFiltered) {
      setFilteredAds(filteredAds.filter((car) => car.model == selectedModel));
    } else {
      setFilteredAds(carArray.filter((car) => car.model == selectedModel));
      setIsFiltered(true);
    }
    setChangeFilters(!changeFilters);
  };

  const filterColor = () => {
    if (isFiltered) {
      setFilteredAds(filteredAds.filter((car) => car.color == selectedColor));
    } else {
      setFilteredAds(carArray.filter((car) => car.color == selectedColor));
      setIsFiltered(true);
    }
    setChangeFilters(!changeFilters);
  };

  const filterYear = () => {
    if (isFiltered) {
      setFilteredAds(filteredAds.filter((car) => car.year == selectedYear));
    } else {
      setFilteredAds(carArray.filter((car) => car.year == selectedYear));
      setIsFiltered(true);
    }
    setChangeFilters(!changeFilters);
  };

  const filterFuel = () => {
    if (isFiltered) {
      setFilteredAds(filteredAds.filter((car) => car.fuel == selectedFuel));
    } else {
      setFilteredAds(carArray.filter((car) => car.fuel == selectedFuel));
      setIsFiltered(true);
    }
    setChangeFilters(!changeFilters);
  };

  const filterMinKm = () => {
    if (isFiltered) {
      setFilteredAds(filteredAds.filter((car) => car.km >= minKm));
    } else {
      setFilteredAds(carArray.filter((car) => car.km >= minKm));
      setIsFiltered(true);
    }
    setChangeFilters(!changeFilters);
  };

  const filterMaxKm = () => {
    if (isFiltered) {
      setFilteredAds(filteredAds.filter((car) => car.km <= maxKm));
    } else {
      setFilteredAds(carArray.filter((car) => car.km <= maxKm));
      setIsFiltered(true);
    }
    setChangeFilters(!changeFilters);
  };

  const filterMinPrice = () => {
    if (isFiltered) {
      setFilteredAds(filteredAds.filter((car) => car.price >= minPrice));
    } else {
      setFilteredAds(carArray.filter((car) => car.price >= minPrice));
      setIsFiltered(true);
    }
    setChangeFilters(!changeFilters);
  };

  const filterMaxPrice = () => {
    if (isFiltered) {
      setFilteredAds(filteredAds.filter((car) => car.price <= maxPrice));
    } else {
      setFilteredAds(carArray.filter((car) => car.price <= maxPrice));
      setIsFiltered(true);
    }
    setChangeFilters(!changeFilters);
  };

  useEffect(() => {
    setFilterOptions();
  }, [changeFilters]);

  useEffect(() => {
    if (selectedBrand) {
      filterBrand();
    }
  }, [selectedBrand]);

  useEffect(() => {
    if (selectedModel) {
      filterModel();
    }
  }, [selectedModel]);

  useEffect(() => {
    if (selectedColor) {
      filterColor();
    }
  }, [selectedColor]);

  useEffect(() => {
    if (selectedYear) {
      filterYear();
    }
  }, [selectedYear]);

  useEffect(() => {
    if (selectedFuel) {
      filterFuel();
    }
  }, [selectedFuel]);

  useEffect(() => {
    if (minKm) {
      filterMinKm();
    }
  }, [minKm]);

  useEffect(() => {
    if (maxKm) {
      filterMaxKm();
    }
  }, [maxKm]);

  useEffect(() => {
    if (minPrice) {
      filterMinPrice();
    }
  }, [minPrice]);

  useEffect(() => {
    if (maxPrice) {
      filterMaxPrice();
    }
  }, [maxPrice]);

  return (
    <aside className="w-1/2 max-lg:hidden lg:block px-[12px]">
      <div className="flex flex-col p-4 gap-2">
        <h3 className="font-extrabold">Marcas</h3>
        <div className="flex flex-col p-4 gap-2 text-gray-500">
          {brands.map((brand) => {
            return (
              <span
                onClick={() => {
                  setSelectedBrand(brand);
                }}
                key={brand}
              >
                {brand}
              </span>
            );
          })}
        </div>
      </div>

      <div className="flex flex-col p-4 gap-2">
        <h3 className="font-extrabold">Modelos</h3>
        <div className="flex flex-col gap-0 text-gray-500 p-2">
          {models.map((model) => {
            return (
              <span
                onClick={() => {
                  setSelectedModel(model);
                }}
                key={model}
              >
                {model}
              </span>
            );
          })}
        </div>
      </div>
      <div className="flex flex-col p-4 gap-2">
        <h3 className="font-extrabold">Cor</h3>
        <div className="flex flex-col gap-0 text-gray-500 p-2">
          {colors.map((color) => {
            return (
              <span
                key={color}
                onClick={() => {
                  setSelectedColor(color);
                }}
              >
                {color}
              </span>
            );
          })}
        </div>
      </div>

      <div className="flex flex-col p-4 gap-2">
        <h3 className="font-extrabold">Ano</h3>
        <div className="flex flex-col gap-0 text-gray-500 p-2">
          {years.map((year) => {
            return (
              <span
                key={year}
                onClick={() => {
                  setSelectedYear(year);
                }}
              >
                {year}
              </span>
            );
          })}
        </div>
      </div>

      <div className="flex flex-col p-4 gap-2">
        <h3 className="font-extrabold">Combustivel</h3>
        <div className="flex flex-col gap-0 text-gray-500 p-2">
          {fuels.map((fuel) => {
            return (
              <span
                key={fuel}
                onClick={() => {
                  setSelectedFuel(fuel);
                }}
              >
                {fuel}
              </span>
            );
          })}
        </div>
      </div>

      <div className="flex flex-col p-4 gap-2">
        <h3 className="font-extrabold">Quilometragem</h3>
        <div className="flex  gap-6 text-gray-500 p-2">
          <input
            className="w-28 outline-slate-300 text-center  bg-slate-300 "
            type="number"
            placeholder="Miníma"
            onChange={(event) => {
              setMinKm(event.target.value);
            }}
          />
          <input
            className="w-28 outline-slate-300 text-center  bg-slate-300 "
            type="text"
            placeholder="Máxima"
            onChange={(event) => {
              setMaxKm(event.target.value);
            }}
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
            onChange={(event) => {
              setMinPrice(event.target.value);
            }}
          />
          <input
            className="w-28 outline-slate-300 text-center  bg-slate-300 "
            type="text"
            placeholder="Máxima"
            onChange={(event) => {
              setMaxPrice(event.target.value);
            }}
          />
        </div>
      </div>

      <div className="flex w-full justify-center">
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
      </div>
    </aside>
  );
};

export default CarFilter;
