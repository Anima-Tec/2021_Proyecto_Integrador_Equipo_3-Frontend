import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';

import { isStoredSession, getSession } from 'helpers/session';
import httpClient from 'networking/httpClient';
import {
  applyInterceptors,
  clearInterceptors,
} from 'networking/authMiddleware';

export const initialState = {
  user: null,
  token: null,
  isAuthenticated: false,
};

export const AuthContext = createContext(initialState);

const loadState = () => {
  const storedSession = getSession();

  if (isStoredSession) {
    return { ...initialState, ...storedSession, isAuthenticated: true };
  }

  return initialState;
};

export const AuthProvider = ({ children }) => {
  const [{ user, token, isAuthenticated }, setState] = useState(
    loadState || initialState
  );

  const clearSession = useCallback(async () => {
    setState(initialState);
  }, []);

  useEffect(() => {
    const interceptors = applyInterceptors(httpClient, token, clearSession);

    return () => clearInterceptors(httpClient, interceptors);
  }, [token, clearSession]);

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, setState }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
