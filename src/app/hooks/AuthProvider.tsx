import { createContext, useState, ReactNode } from "react";

export type AuthUserT = {
  id: string;
  accessToken: string;
  firstName: string;
  lastName: string;
};

type AuthContextT = {
  auth: AuthUserT | null;
  setAuth: React.Dispatch<React.SetStateAction<AuthUserT | null>>;
  isAuthenticated: () => boolean;
  persist: string;
  setPersist: React.Dispatch<React.SetStateAction<string>>;
};

type AuthProviderProps = {
  children: ReactNode;
};

export const AuthContext = createContext<AuthContextT>({} as AuthContextT);

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [auth, setAuth] = useState<AuthUserT | null>(null);
  const [persist, setPersist] = useState<string>("true");

  const isAuthenticated = () => {
    return auth !== null;
  };

  return (
    <AuthContext.Provider
      value={{ auth, setAuth, isAuthenticated, persist, setPersist }}
    >
      {children}
    </AuthContext.Provider>
  );
};
