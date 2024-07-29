import React, { createContext, useState, useEffect, ReactNode, useContext } from 'react';
import { Session, AuthChangeEvent } from '@supabase/supabase-js';
import { supabase } from '../lib/supabase';
import { saveToStorage, loadFromStorage, removeFromStorage } from '../services/storageService';

interface AuthContextType {
  session: Session | null;
  setSession: React.Dispatch<React.SetStateAction<Session | null>>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [session, setSession] = useState<Session | null>(null);

  useEffect(() => {
    // Load session from AsyncStorage
    const loadSession = async () => {
      const savedSession = await loadFromStorage('session');
      if (savedSession) {
        setSession(savedSession);
      } else {
        // If no saved session, get the current session from supabase
        const { data: { session } } = await supabase.auth.getSession();
        setSession(session);
      }
    };
    loadSession();

    // Listen for changes in authentication state
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event: AuthChangeEvent, session: Session | null) => {
      setSession(session);
      if (session) {
        saveToStorage('session', session);
      } else {
        removeFromStorage('session');
      }
    });

    // Cleanup subscription on unmount
    return () => {
      subscription?.unsubscribe();
    };
  }, []);

  return (
    <AuthContext.Provider value={{ session, setSession }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
