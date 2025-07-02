
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

console.log('Supabase Environment Check:', {
  hasUrl: !!supabaseUrl,
  hasKey: !!supabaseAnonKey,
  url: supabaseUrl ? 'Set' : 'Missing',
  key: supabaseAnonKey ? 'Set' : 'Missing'
});

// Create supabase client or dummy client
const createSupabaseClient = () => {
  if (!supabaseUrl || !supabaseAnonKey) {
    console.error('Missing Supabase environment variables:', {
      VITE_SUPABASE_URL: supabaseUrl ? 'Set' : 'Missing',
      VITE_SUPABASE_ANON_KEY: supabaseAnonKey ? 'Set' : 'Missing'
    });
    
    // Return a dummy client that won't cause crashes
    return {
      auth: {
        getSession: () => Promise.resolve({ data: { session: null }, error: new Error('Supabase not configured') }),
        onAuthStateChange: () => ({ data: { subscription: { unsubscribe: () => {} } } }),
        signUp: () => Promise.resolve({ error: new Error('Supabase not configured') }),
        signInWithPassword: () => Promise.resolve({ error: new Error('Supabase not configured') }),
        signOut: () => Promise.resolve({ error: new Error('Supabase not configured') })
      }
    };
  } else {
    console.log('Creating Supabase client...');
    const client = createClient(supabaseUrl, supabaseAnonKey);
    console.log('Supabase client created successfully');
    return client;
  }
};

export const supabase = createSupabaseClient();
