import { createContext, useState } from "react";

export const ColorModeContext = createContext({
	mode: "",
	setMode: () => { alert("Você precisa me configurar primeiro") },
	toggleMode: () => { alert("Você precisa me configurar primeiro") }
});

export default function ColorModeProvider({ children, initialMode }) {
	const [mode, setMode] = useState(initialMode);

	function toggleMode() {
		if(mode === "dark") {
			setMode("light");
		}
		if(mode === "light") {
			setMode("dark");
		}
	}

	return (
		<ColorModeContext.Provider value={{ mode: mode, setMode: setMode, toggleMode: toggleMode }}>
			{children} 
		</ColorModeContext.Provider>
	);
}