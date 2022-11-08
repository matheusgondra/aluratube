import styled from "styled-components";
import config from "../config.json";
import { CSSReset } from "../src/components/CssReset";
import Menu from "../src/components/Menu";
import { StyledTimeline } from "../src/components/Timeline";

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

const StyledHeader = styled.div`
	.banner {
		width: 100%;
		height: 230px;
		img {
			object-fit: cover;
		}
	}
	.user-info {
		img {
			width: 80px;
			height: 80px;
			border-radius: 50%;
		}
		margin-top: 16px;
		display: flex;
		align-items: center;
		width: 100%;
		padding: 16px 32px;
		gap: 16px;
	} 
`;

function Header() {
	return (
		<StyledHeader>
			<div className="banner">
				<img className="banner" src="https://images.unsplash.com/photo-1518057111178-44a106bad636?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80" alt="banner" />
			</div>
			<section className="user-info">
				<img src={`https://github.com/${config.github}.png`} alt="foto de perfil" />
				<div>
					<h2>{config.name}</h2>
					<p>{config.job}</p>
				</div>
			</section>
		</StyledHeader>
	);
}


function Timeline({ playlists, favorites }) {
	const playlistNames = Object.keys(playlists);
	const aluraTubeFavorites = favorites;

	return (
		<StyledTimeline>
			{playlistNames.map(playlistName => {
				const videos = playlists[playlistName];
				console.log(videos)
				return (
					<section>
						<h2>{playlistName}</h2>
						<div>
							{videos.map(video => {
								return (
									<a href={video.url} target="blank">
										<img src={video.thumb} alt="thumb do video" />
										<span>{video.title}</span>
									</a>
								);
							})}
						</div>
					</section>
				);
			})}
			<section className="favorites">
				<h2>AluraTubes Favoritos</h2>
				<div>
					{aluraTubeFavorites.map(favorite => {
						return (
							<figure>
								<a href={favorite.url} target="blank">
									<img src={`https://github.com/${favorite.github}.png`} alt="foto de perfil do github" />
								</a>
									<figcaption>@{favorite.github}</figcaption>
							</figure>
						);
					})}
				</div>
			</section>
		</StyledTimeline>
	);
}