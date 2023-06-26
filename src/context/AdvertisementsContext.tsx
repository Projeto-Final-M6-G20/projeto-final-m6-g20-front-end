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
  User: {
    id: string;
    fullname: string;
    email: string;
    description: string;
    cpf: string;
    cellphone: string;
    is_advertiser: boolean;
    birth_date: string;
  };
}

export interface iAdvertisements {
  pagination: {
    totalCount?: number;
    pageNumber: number;
    limitNumber: number;
    nextPageLink: number | null | undefined;
    previousPageLink: number | null | undefined;
    totalPages: number;
  };
  filtersTypes: {
    brands: string[];
    colors: string[];
    fuel_type: string[];
    models: string[];
    years: string[];
  };
  filtersTypesThisSearch: {
    brands: string[];
    colors: string[];
    fuel_type: string[];
    models: string[];
    years: string[];
  };
  data: Array<iAdvertisement>;
}

interface AdvertisementsProviderProps {
  children: React.ReactNode;
}

interface AdvertisementsValues {
  getAdvertisements: (params: {
    limit: number;
    page: number;
    filters?: string;
  }) => Promise<any>;
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
    page,
    filters
  }: {
    limit: number;
    page: number;
    filters?: string;
  }) => {
    try {
      const url = `/advertisements?limit=${limit}&page=${page}${filters}`;
      const response = await api.get(url);
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
