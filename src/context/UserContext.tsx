'use client';
import { NewAdData } from 'app/user_profile/components/CreateAdForm/validator';
import jwt from 'jsonwebtoken';
import { parseCookies } from 'nookies';
import {
  Dispatch,
  SetStateAction,
  createContext,
  useEffect,
  useState
} from 'react';

import api from 'service/api';
import instanceKenzieCars from 'service/kenzie_cars';

interface AuthProviderProps {
  children: React.ReactNode;
}

interface iModel {
  name: string;
  fuel: number;
  value: string;
  year: string;
}

interface Address {
  id: string;
  street: string;
  zip_code: string;
  number: string;
  city: string;
  state: string;
  complement: string;
}

interface iUser {
  email: string;
  fullname: string;
  cpf: string;
  cellphone: string;
  birth_date: string;
  is_advertiser: boolean;
  Address: Address;
}

interface UserValue {
  getCarBrands: () => Promise<void>;
  getCarModels: () => Promise<void>;
  setSelectedBrand: Dispatch<SetStateAction<string>>;
  selectedBrand: string;
  setSelectedModel: Dispatch<SetStateAction<string>>;
  selectedModel: string;
  brands: string[];
  models: iModel[];
  createCarAd: (data: NewAdData) => Promise<void>;
  user: iUser | undefined;
  mode: string;
  setMode: Dispatch<SetStateAction<string>>;
  getUser: () => Promise<void>;
}

export const UserContext = createContext<UserValue>({} as UserValue);

export const UserProvider = ({ children }: AuthProviderProps) => {
  const [brands, setBrands] = useState<string[]>([]);
  const [models, setModels] = useState<iModel[]>([]);
  const [selectedBrand, setSelectedBrand] = useState<string>('');
  const [selectedModel, setSelectedModel] = useState<string>('');
  const [user, setUser] = useState<iUser>();
  const [mode, setMode] = useState('');

  const cookies = parseCookies();
  if (cookies['user.Token']) {
    api.defaults.headers.common.authorization = `Bearer ${cookies['user.Token']}`;
  }

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

  const getUser = async () => {
    try {
      const decodedToken = jwt.decode(cookies['user.Token']);

      const id = decodedToken ? decodedToken.sub : null;
      const response = await api.get(`users/${id}`, {
        headers: {
          Authorization: `Bearer ${cookies['user.Token']}`
        }
      });
      setUser(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const createCarAd = async (data: NewAdData) => {
    try {
      const response = await api.post('/advertisements/', data);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUser();
  }, []);

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
        setSelectedModel,
        createCarAd,
        user,
        mode,
        setMode,
        getUser
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
