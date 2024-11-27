import 'react-native-url-polyfill/auto';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { createClient } from '@supabase/supabase-js';
import { AppState } from 'react-native';

const SUPABASE_URL = 'https://fijbhaeyynmttobkfcsp.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZpamJoYWV5eW5tdHRvYmtmY3NwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzA3NjEzMTIsImV4cCI6MjA0NjMzNzMxMn0.DWy--CMDdynw4YbJEIheNfLgrFNYkrf8RBaTuluOi2A';

export const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);