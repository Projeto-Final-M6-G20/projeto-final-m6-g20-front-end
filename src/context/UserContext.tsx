'use client';
import { Dispatch, SetStateAction, createContext, useState } from 'react';

import instanceKenzieCars from 'service/kenzie_cars';

interface AuthProviderProps {
  children: React.ReactNode;
}

interface UserValue {
  getCarBrands: () => Promise<void>;
  getCarModels: () => Promise<void>;
  setSelectedBrand: Dispatch<SetStateAction<string>>;
  selectedBrand: string;
  setSelectedModel: Dispatch<SetStateAction<string>>;
  selectedModel: string;
  brands: string[];
  models: [];
}

export const UserContext = createContext<UserValue>({} as UserValue);

export const UserProvider = ({ children }: AuthProviderProps) => {
  const [brands, setBrands] = useState<string[]>([]);
  const [models, setModels] = useState<[]>([]);
  const [selectedBrand, setSelectedBrand] = useState<string>('');
  const [selectedModel, setSelectedModel] = useState<string>('');

  const getCarBrands = async () => {
    try {
      const response = await instanceKenzieCars.get('/cars');
      const brandsCars = Object.keys(response.data);
      setBrands(brandsCars);
    } catch (error) {
      console.log(error);
    }
  };

  const getCarModels = async () => {
    if (selectedBrand) {
      try {
        const response = await instanceKenzieCars.get(
          `/cars?brand=${selectedBrand}`
        );
        setModels(response.data);
        console.log(response.data);
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <UserContext.Provider
      value={{
        getCarBrands,
        brands,
        models,
        getCarModels,
        setSelectedBrand,
        selectedBrand,
        selectedModel,
        setSelectedModel
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
