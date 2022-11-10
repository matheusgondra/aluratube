import { useState } from "react";
import config from "../config.json";
import Header from "../src/components/Header";
import Menu from "../src/components/Menu";
import Timeline from "../src/components/Timeline";

function HomePage() {
	const [valorDoFiltro, setValorDoFiltro] = useState("");

	return (
		<>
			<div style={{
				display: "flex",
				flexDirection: "column",
				flex: 1
			}}>
				<Menu
					valorDoFiltro={valorDoFiltro}
					setValorDoFiltro={setValorDoFiltro}
				/>
				<Header />
				<Timeline
					playlists={config.playlists}
					favorites={config.favorites}
					searchValue={valorDoFiltro}
				/>
			</div>
		</>
	);
}

export default HomePage;