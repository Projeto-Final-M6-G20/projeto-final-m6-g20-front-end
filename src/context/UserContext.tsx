'use client';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import {
  Dispatch,
  SetStateAction,
  createContext,
  useEffect,
  useState
} from 'react';

import Toast from 'app/components/Toast';
import { UserData } from 'app/register/components/FormRegister/validator';
import { NewAdData } from 'app/user_profile/components/CreateAdForm/validator';

import jwt from 'jsonwebtoken';
import { parseCookies } from 'nookies';
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

export interface Address {
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
  description: string;
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
  adv: NewAdData[] | undefined;
  setAdv: Dispatch<SetStateAction<NewAdData[]>>;
  updateUser: (data: UserData) => Promise<void>;
  updateUserAddress: (data: Address) => Promise<void>;
  deleteUser: () => Promise<void>;
  adData: NewAdData | undefined;
  setAdData: Dispatch<SetStateAction<NewAdData | undefined>>;
  getAd: (id: string) => Promise<void>;
  updateAdv: (data?: NewAdData, id?: string) => Promise<void>;
  deleteAd: (id: string) => Promise<void>;
}

export const UserContext = createContext<UserValue>({} as UserValue);

export const UserProvider = ({ children }: AuthProviderProps) => {
  const [brands, setBrands] = useState<string[]>([]);
  const [models, setModels] = useState<iModel[]>([]);
  const [selectedBrand, setSelectedBrand] = useState<string>('');
  const [selectedModel, setSelectedModel] = useState<string>('');
  const [user, setUser] = useState<iUser>();
  const [mode, setMode] = useState('');
  const [adv, setAdv] = useState<NewAdData[]>([]);
  const [adData, setAdData] = useState<NewAdData>();
  const router = useRouter();

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
      // console.log(error);
    }
  };

  const getCarModels = async () => {
    if (selectedBrand) {
      try {
        const response = await instanceKenzieCars.get(
          `/cars?brand=${selectedBrand}`
        );
        setModels(response.data);
        // console.log(response.data);
      } catch (error) {
        // console.log(error);
      }
    }
  };

  const getUser = async () => {
    try {
      const decodedToken = jwt.decode(cookies['user.Token']);

      const id = decodedToken ? decodedToken.sub : null;
      console.log(id);
      const response = await api.get(`users/${id}`, {
        headers: {
          Authorization: `Bearer ${cookies['user.Token']}`
        }
      });
      setUser(response.data);
    } catch (error) {
      // console.log(error);
    }
  };

  const getUserAd = async () => {
    try {
      const response = await api.get(`/advertisements/user`);
      setAdv(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const createCarAd = async (data: NewAdData) => {
    try {
      const response = await api.post('/advertisements/', data);

      console.log(response);
      getUserAd();
    } catch (error) {
      console.log(error);
    }
  };

  const updateUser = async (data: UserData) => {
    try {
      const decodedToken = jwt.decode(cookies['user.Token']);

      const id = decodedToken ? decodedToken.sub : null;
      const response = await api.patch(`users/${id}`, data);
      console.log(response.data);
      Toast({
        message: 'Atualizado com sucesso!',
        isSucess: true
      });
      getUser();
    } catch (error) {
      Toast({
        message: 'Algo deu errado!',
        isSucess: false
      });
    }
  };

  const updateUserAddress = async (data: Address) => {
    try {
      const decodedToken = jwt.decode(cookies['user.Token']);

      const id = decodedToken ? decodedToken.sub : null;
      const response = await api.patch(`address/user/${id}`, data);
      Toast({
        message: 'Atualizado com sucesso!',
        isSucess: true
      });
      getUser();
    } catch (error) {
      Toast({
        message: 'Algo deu errado!',
        isSucess: false
      });
    }
  };

  const deleteUser = async () => {
    try {
      const decodedToken = jwt.decode(cookies['user.Token']);

      const id = decodedToken ? decodedToken.sub : null;
      const response = await api.delete(`users/${id}`);
      Toast({
        message: 'Deletado com sucesso!',
        isSucess: true
      });

      router.push('/');
    } catch (error) {
      console.log(error);
    }
  };

  const getAd = async (id: string) => {
    try {
      const response = await api.get(`/advertisements/${id}`);
      console.log(response.data);
      setAdData(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const updateAdv = async (data?: NewAdData, id?: string) => {
    try {
      const response = await api.patch(`advertisements/${id}`, data);
      Toast({
        message: 'Atualizado com sucesso!',
        isSucess: true
      });
      getUserAd();
    } catch (error) {
      Toast({
        message: 'Algo deu errado!',
        isSucess: false
      });
    }
  };

  const deleteAd = async (id: string) => {
    try {
      const response = await api.delete(`advertisements/${id}`);
      Toast({
        message: 'Deletado com sucesso!',
        isSucess: true
      });
      getUserAd();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUser();
    getUserAd();
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
        getUser,
        adv,
        setAdv,
        updateUser,
        updateUserAddress,
        deleteUser,
        adData,
        setAdData,
        getAd,
        updateAdv,
        deleteAd
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
