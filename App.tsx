import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import { PaperProvider } from 'react-native-paper';
import { theme } from './src/theme/theme';
import { supabase } from './src/lib/supabase';
import MainStack from './src/navigation/MainStack';
import LoginStack from './src/navigation/LoginStack';
import { Session } from '@supabase/supabase-js';

export default function App() {
  const [session, setSession] = useState<Session | null>(null);

  useEffect(() => {
    // Get the current session
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    // Listen for changes in authentication state
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    // Cleanup subscription on unmount
    return () => {
      subscription?.unsubscribe();
    };
  }, []);

  return (
    <PaperProvider theme={theme}>
      <View style={{ flex: 1 }}>
        {session && session.user ? (<MainStack />) : (<LoginStack />)}
      </View>
    </PaperProvider>
  );
}
