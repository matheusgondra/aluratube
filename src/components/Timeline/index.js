import { StyledTimeline } from "./styles";

export default function Timeline({ playlists, favorites, searchValue }) {
	const playlistNames = Object.keys(playlists);
	const aluraTubeFavorites = favorites;

	return (
		<StyledTimeline>
			{playlistNames.map(playlistName => {
				const videos = playlists[playlistName];
				return (
					<section key={playlistName}>
						<h2>{playlistName}</h2>
						<div>
							{videos
								.filter(video => {
									const titleNormalize = video.title.toLowerCase();
									const searchValueNormalize = searchValue.toLowerCase();
									return titleNormalize.includes(searchValueNormalize);
								})
								.map(video => {
								return (
									<a 
										href={video.url} 
										target="blank"
										key={video.id}
									>
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
							<figure key={favorite.id}>
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