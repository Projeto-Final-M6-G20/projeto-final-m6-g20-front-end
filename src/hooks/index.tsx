import { useContext } from 'react';

import { AuthContext } from 'context/AuthContext';

export const useAuth = () => {
  const authcontext = useContext(AuthContext);
  return authcontext;
};
