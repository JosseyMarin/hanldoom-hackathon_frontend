import { createClient } from '@supabase/supabase-js';


const supabaseUrl = "https://timdqtdlkfytkhreyqbg.supabase.co";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRpbWRxdGRsa2Z5dGtocmV5cWJnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTQxMjQ4NDAsImV4cCI6MjA2OTcwMDg0MH0.sO0u6C_FsrikeSI4K59jiLK8bj47ykYXNlB0fJMpEvk";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
