import { useState } from "react";
import { useForm } from "../hooks/useForm";
import { StyledRegisterVideo } from "./styles";
import { createClient } from '@supabase/supabase-js'

const PROJECT_URL = "https://fsdstnlghkgbktoobnux.supabase.co"
const PUBLIC_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZzZHN0bmxnaGtnYmt0b29ibnV4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjgxODIwMzEsImV4cCI6MTk4Mzc1ODAzMX0._m41bbFoMGT6a-8y0B9LZ186YR8nB8a0XZFmLV8tpGY"
const supabase = createClient(PROJECT_URL, PUBLIC_KEY);

function getYoutubeThumbnail(url) {
	return `https://img.youtube.com/vi/${url.split("v=")[1]}/0.jpg`;
}

export default function RegisterVideo() {
	const formCadastro = useForm({
		initalValues: { titulo: "", url: "", categoria: "" }
	});
	const [formVisivel, setFormVisivel] = useState(false);

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
					supabase.from("video").insert({
						title: formCadastro.values.titulo,
						url: formCadastro.values.url,
						thumb: getYoutubeThumbnail(formCadastro.values.url),
						playlist: formCadastro.values.categoria
					})
					.then(res => {
						console.log(res);
					})
					.catch(err => console.err(err));
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
						<input
							placeholder="Categoria"
							name="categoria"
							value={formCadastro.values.categoria}
							onChange={formCadastro.handleChange}
						/>
						<button type="submit">Cadastrar</button>
					</div>
				</form>
			)}
		</StyledRegisterVideo>
	);
}