'use client';

import {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useState
} from 'react';

import api from 'service/api';
export interface iAdvertisement {
  id: string;
  title: string;
  price: number;
  description: string;
  year: number;
  model: string;
  fuel_type: string;
  brand: boolean;
  mileage: string;
  color: string;
  fipe_price: number;
  is_available: boolean;
  userId: string;
}

export interface iAdvertisements {
  totalCount: number;
  pageNumber: number;
  limitNumber: number;
  data: Array<iAdvertisement>;
}

interface AdvertisementsProviderProps {
  children: React.ReactNode;
}

interface AdvertisementsValues {
  getAdvertisements: (params: { limit: number; page: number }) => Promise<any>;
  advertisements: iAdvertisements | null | undefined;
  setAdvertisements: Dispatch<
    SetStateAction<iAdvertisements | null | undefined>
  >;
}

export const AdvertisementsContext = createContext<AdvertisementsValues>(
  {} as AdvertisementsValues
);

export const AdvertisementsProvider = ({
  children
}: AdvertisementsProviderProps) => {
  const [advertisements, setAdvertisements] =
    useState<iAdvertisements | null>();

  const getAdvertisements = async ({
    limit,
    page
  }: {
    limit: number;
    page: number;
  }) => {
    try {
      const response = await api.get('/advertisements', {
        params: {
          limit,
          page
        }
      });
      return response.data;
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <AdvertisementsContext.Provider
      value={{ getAdvertisements, advertisements, setAdvertisements }}
    >
      {children}
    </AdvertisementsContext.Provider>
  );
};

export const useAdvertisements = () => useContext(AdvertisementsContext);
