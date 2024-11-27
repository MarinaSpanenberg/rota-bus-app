import React, { createContext, useContext, useEffect, useState } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { supabase } from "../services/supabase";

// Criar o contexto de autenticação
export const AuthContext = createContext();

// Fornecer o AuthContext para os componentes
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const checkSession = async () => {
      const { data } = await supabase.auth.getSession();
      if (data?.session) {
        setUser(data.session.user);
      } else {
        const storedSession = await AsyncStorage.getItem('@userSession');
        if (storedSession) {
          setUser(JSON.parse(storedSession));
        }
      }
    };

    checkSession();
  }, []);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth deve ser usado dentro de um AuthProvider");
  }
  return context;
};
