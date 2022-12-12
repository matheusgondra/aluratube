import { useEffect, useState } from "react";
import config from "../config.json";
import Header from "../src/components/Header";
import Menu from "../src/components/Menu";
import { videoService } from "../src/services/videoService";
import Timeline from "../src/components/Timeline";

function HomePage() {
	const service = videoService();
	const [valorDoFiltro, setValorDoFiltro] = useState("");
	const [playlists, setPlaylists] = useState({});
	
	useEffect(() => {
		service
			.getAllVideos()
			.then(({ data }) => {
				const newPlaylist = { ...playlists };
				data.forEach((video) => {
					if (!newPlaylist[video.playlist]) {
						newPlaylist[video.playlist] = [];
					}
					newPlaylist[video.playlist].push(video);
				});
				setPlaylists(newPlaylist);
			});
	}, []);

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
					playlists={playlists}
					favorites={config.favorites}
					searchValue={valorDoFiltro}
				/>
			</div>
		</>
	);
}

export default HomePage;