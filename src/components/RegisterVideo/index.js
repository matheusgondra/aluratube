import { useState } from "react";
import { useForm } from "../hooks/useForm";
import { StyledRegisterVideo } from "./styles";

export default function RegisterVideo() {
	const formCadastro = useForm({
		initalValues: { titulo: "Aula 4 - Imersão React", url: "https://www.youtube.com/watch?v=6hBZo9UR-k0&t=191s" }
	});
	const [formVisivel, setFormVisivel] = useState(true);

	return (
		<StyledRegisterVideo>
			<button
				className="add-video"
				onClick={() => setFormVisivel(true)}
			>
				+
			</button>
			{formVisivel && (
				<form onSubmit={e => {
					e.preventDefault();
					setFormVisivel(false);
					formCadastro.clearForm();
				}}>
					<div>
						<button
							type="button"
							className="close-modal"
							onClick={() => setFormVisivel(false)}
						>
							X
						</button>
						<input
							placeholder="Titulo do vídeo"
							name="titulo"
							value={formCadastro.values.titulo}
							onChange={formCadastro.handleChange}
						/>
						<input
							placeholder="URL"
							name="url"
							value={formCadastro.values.url}
							onChange={formCadastro.handleChange}
						/>
						<button type="submit">Cadastrar</button>
					</div>
				</form>
			)}
		</StyledRegisterVideo>
	);
}