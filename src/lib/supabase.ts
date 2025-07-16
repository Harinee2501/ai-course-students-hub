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
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return {} as any;
  } else {
    console.log('Creating Supabase client...');
    const client = createClient(supabaseUrl, supabaseAnonKey);
    console.log('Supabase client created successfully');
    return client;
  }
};

export const supabase = createSupabaseClient();
