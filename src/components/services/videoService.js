import { createClient } from "@supabase/supabase-js";

const PROJECT_URL = "https://fsdstnlghkgbktoobnux.supabase.co"
const PUBLIC_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZzZHN0bmxnaGtnYmt0b29ibnV4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjgxODIwMzEsImV4cCI6MTk4Mzc1ODAzMX0._m41bbFoMGT6a-8y0B9LZ186YR8nB8a0XZFmLV8tpGY"
const supabase = createClient(PROJECT_URL, PUBLIC_KEY);

export function videoService() {
	return {
		getAllVideos: () => {
			return supabase.from("video").select("*");
		},
	};
}
