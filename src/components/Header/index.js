import config from "../../../config.json";
import { StyledHeader } from "./styles";

export default function Header() {
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