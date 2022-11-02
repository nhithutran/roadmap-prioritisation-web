import { authContext } from '../context/auth.context';
import { useContext } from 'react';

export const useAuthContext = () => {
  const context = useContext(authContext);

  if (!context) {
    throw Error('useAuthContext must be within AuthContextProvider');
  }

  return context;
};
