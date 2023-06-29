'use client';

import {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useEffect,
  useState
} from 'react';

import { usePathname } from 'next/navigation';

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
  images: [
    {
      url: string;
    }
  ];
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

export interface iComment {
  content: string;
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
  getAdvertisementById: (carId: string) => Promise<iAdvertisement>;
  car: iAdvertisement | undefined;
  comment: iComment[] | undefined;
  getComment: () => Promise<void>;
  createComment: (data: iComment, id: string) => Promise<void>;
}

export const AdvertisementsContext = createContext<AdvertisementsValues>(
  {} as AdvertisementsValues
);

export const AdvertisementsProvider = ({
  children
}: AdvertisementsProviderProps) => {
  const [advertisements, setAdvertisements] =
    useState<iAdvertisements | null>();

  const [car, setCar] = useState<iAdvertisement>();
  const [comment, setComment] = useState<iComment[]>([]);

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

  const getAdvertisementById = async (carId: string) => {
    try {
      const url = `/advertisements/${carId}`;
      const response = await api.get(url);
      setCar(response.data);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  };

  const getComment = async () => {
    try {
      const pathname = usePathname();
      const id = pathname.split('/')[2];
      const response = await api.get(`/comments/advertisement/${id}`);
      setComment(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const createComment = async (data: iComment, id: string) => {
    try {
      const response = await api.post(`/comments/advertisement/${id}`, data);
      console.log(response.data);
      getComment();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getComment();
  }, []);

  return (
    <AdvertisementsContext.Provider
      value={{
        getAdvertisements,
        advertisements,
        setAdvertisements,
        getAdvertisementById,
        car,
        comment,
        getComment,
        createComment
      }}
    >
      {children}
    </AdvertisementsContext.Provider>
  );
};

export const useAdvertisements = () => useContext(AdvertisementsContext);
