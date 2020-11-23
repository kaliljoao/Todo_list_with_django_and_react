import React, { createContext, useCallback, useState, useContext } from 'react';
import api from '../services/api';

interface User {
  id: string;
  name: string;
  email: string;
}

interface AuthState {
  token: string;
  user: User;
}

interface SignInCredentials {
  email: string;
  password: string;
}

interface AuthContextData {
  user: User;
  signIn(credentials : SignInCredentials): Promise<void>;
  signOut(): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<AuthState>(() => {
    const token = localStorage.getItem('@Working:token');
    const user = localStorage.getItem('@Working:user');

    if (token && user){
      api.defaults.headers.authorization = `Bearer ${token}`;

      return { token, user: JSON.parse(user) };
    } else {
      return {} as AuthState;
    }
  });


  const signIn = useCallback( async ({ email, password }) => {
    let response = await api.post('auth/token/', {
      username: email,
      password,
    });
  
    console.log(response.data)

    const { access } = response.data;

    api.defaults.headers.authorization = `Bearer ${access}`;

    response = await api.get('users/info/');

    console.log(response.data)

    const { user } = response.data;

    localStorage.setItem('@Working:token', access);
    localStorage.setItem('@Working:user', JSON.stringify(user));


    setData({ token: access, user });
  }, []);

  const signOut = useCallback( async () => {
    localStorage.removeItem('@Working:token');
    localStorage.removeItem('@Working:user');

    setData({} as AuthState);
  }, []);

  return (
    <AuthContext.Provider value={{ user: data.user, signIn, signOut}}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  } else {
    return context;
  }
}
