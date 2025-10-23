// supabase-config.js
// Updated with your provided credentials

const SUPABASE_URL = 'https://nlzneuelzgbrkevcbcxw.supabase.co'; 
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5sem5ldWVsemdicmtldmNiY3h3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTg4MTU2MDIsImV4cCI6MjA3NDM5MTYwMn0.iEdXK9g3_gsL-HyGNhmL69_huo0R3PFm-zU4qYM-9XM';

// Initialize the Supabase Client
window.supabaseClient = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// Verification: You can uncomment the line below to check if the connection object is created
// console.log('Supabase Client Initialized:', !!window.supabaseClient);
