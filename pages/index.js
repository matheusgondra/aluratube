import config from "../config.json";
import { CSSReset } from "../src/components/CssReset";
import Header from "../src/components/Header";
import Menu from "../src/components/Menu";
import Timeline from "../src/components/Timeline";

function HomePage() {
	return (
		<>
			<CSSReset />
			<div style={{
				display: "flex",
				flexDirection: "column",
				flex: 1
			}}>
				<Menu />
				<Header />
				<Timeline
					playlists={config.playlists}
					favorites={config.favorites}
				/>
			</div>
		</>
	);
}

export default HomePage;