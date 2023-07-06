/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import { useRouter } from 'next/navigation';
import { Dispatch, SetStateAction, createContext, useState } from 'react';
import 'react-toastify/dist/ReactToastify.css';

import Toast from 'app/components/Toast';
import { LoginData } from 'app/login/components/FormLogin/validator';
import { UserData } from 'app/register/components/FormRegister/validator';
import {
  ResetPasswordData,
  SendEmailResetPasswordData
} from 'app/resetPassword/components/FormResetPassword/validator';

import jwt from 'jsonwebtoken';
import { setCookie } from 'nookies';
import api from 'service/api';

interface AuthProviderProps {
  children: React.ReactNode;
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

interface AuthValue {
  LoginFunction: (data: LoginData) => void;
  RegisterFunction: (data: any) => void;
  is_advertiser: () => void;
  isModal: boolean;
  sendEmail: (sendEmailResetPasswordData: SendEmailResetPasswordData) => void;
  resetPassword: (resetPasswordData: ResetPasswordData, token: string) => void;
  newUser: iUser | undefined;
  setNewUser: Dispatch<SetStateAction<iUser | undefined>>;
}

export const AuthContext = createContext<AuthValue>({} as AuthValue);

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const router = useRouter();
  const [isModal, setIsModal] = useState(true);
  const [newUser, setNewUser] = useState<iUser>();
  const is_advertiser = () => {
    const radios: any = document.getElementById('is_advertiser');

    return radios.checked;
  };

  const RegisterFunction = async (data: UserData) => {
    try {
      data.is_advertiser = is_advertiser();

      await api.post('/users', data);
      setIsModal(!isModal);
    } catch (error) {
      setIsModal(false);
      console.log(error);
    }
  };

  const LoginFunction = async (data: LoginData) => {
    try {
      const response = await api.post('/login', data);
      const { token } = response.data;

      api.defaults.headers.common.authorization = `Bearer ${token}`;

      const getUser = async () => {
        try {
          const decodedToken = jwt.decode(token);

          const id = decodedToken ? decodedToken.sub : null;
          const response = await api.get(`users/${id}`, {
            headers: {
              Authorization: `Bearer ${token}`
            }
          });
          setNewUser(response.data);
        } catch (error) {
          // console.log(error);
        }
      };
      getUser();

      setCookie(null, 'user.Token', token, {
        maxAge: 60 * 1500,
        path: '/'
      });
      Toast({ message: 'Login efetuado com sucesso!', isSucess: true });

      setTimeout(() => {
        router.push('/');
      }, 1000);
    } catch (error) {
      Toast({ message: 'E-mail ou senha invalidos!' });

      console.log(error);
    }
  };

  const sendEmail = (
    sendEmailResetPasswordData: SendEmailResetPasswordData
  ) => {
    api
      .post('/users/resetPassword', sendEmailResetPasswordData)
      .then(() => {
        Toast({ message: 'Email enviado com sucesso!', isSucess: true });
        router.push('/');
      })
      .catch((err) => {
        Toast({
          message: 'Verifique se o e-mail informado é válido!',
          isSucess: false
        });
        console.log(err);
      });
  };
  const resetPassword = (
    resetPasswordData: ResetPasswordData,
    token: string
  ) => {
    api
      .patch(`/users/resetPassword/${token}`, {
        password: resetPasswordData.password
      })
      .then(() => {
        Toast({ message: 'Senha atualizada com sucesso !', isSucess: true });
        router.push('/login');
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <AuthContext.Provider
      value={{
        LoginFunction,
        RegisterFunction,
        is_advertiser,
        isModal,
        sendEmail,
        resetPassword,
        newUser,
        setNewUser
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
