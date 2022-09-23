import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
  "https://qyhzhikahbkkafrfkdsi.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InF5aHpoaWthaGJra2FmcmZrZHNpIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjM3NDA4ODcsImV4cCI6MTk3OTMxNjg4N30.8B1zzTYp07Dtx_INiiiGspSomvW0iFwtKWyKiEPY-7s"
);
