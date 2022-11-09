import config from "../../../config.json";
import { StyledBanner } from "../Menu/styles";
import { StyledHeader } from "./styles";

export default function Header() {
	return (
		<StyledHeader>
			<StyledBanner bg={config.bg} />
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