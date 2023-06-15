import { AuthContext } from 'context/AuthContext';
import { useContext } from 'react';

export const useAuth = () => {
  const authcontext = useContext(AuthContext);
  return authcontext;
};
