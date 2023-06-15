'use client';
import { LoginData } from 'app/login/components/FormLogin/validator';
import { setCookie } from 'nookies';
import { useRouter } from 'next/navigation';
import api from 'service/api';
import { createContext } from 'react';

interface AuthProviderProps {
  children: React.ReactNode;
}

interface AuthValue {
  LoginFunction: (data: LoginData) => void;
  RegisterFunction: (data: any) => void;
}

export const AuthContext = createContext<AuthValue>({} as AuthValue);

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const router = useRouter();

  const RegisterFunction = async (data: any) => {
    try {
      const response = await api.post('', data);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  const LoginFunction = async (data: LoginData) => {
    try {
      const response = await api.post('/login', data);
      const { token } = response.data;

      api.defaults.headers.common.authorization = `Bearer ${token}`;

      setCookie(null, 'user.Token', token, {
        maxAge: 60 * 1500,
        path: '/'
      });

      //   setTimeout(() => {
      //     router.push('/');
      //   }, 2000);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <AuthContext.Provider value={{ LoginFunction, RegisterFunction }}>
      {children}
    </AuthContext.Provider>
  );
};
