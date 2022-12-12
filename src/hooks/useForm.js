import { useState } from "react";

export function useForm({ initalValues }) {
	const [values, setValues] = useState(initalValues);
	
	return { 
		values,
		handleChange: (event) => {
			const value = event.target.value;
			const name = event.target.name;
			setValues({
				...values,
				[name]: value
			});
		},
		clearForm: () => {
			setValues({});
		}
	};
}