import { StyledTimeline } from "./styles";

export default function Timeline({ playlists, favorites }) {
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