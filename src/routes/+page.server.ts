export const load = async ({ url }) => {
	const biblioteca = ['cereza', 'lima', 'baya', 'ensalada'];

	// your search logic goes here
	const buscar_sabor = url.searchParams.get('buscar_sabor');
	const buscar_tipo = url.searchParams.get('buscar_tipo');
	const buscar_paginacion = url.searchParams.get('buscar_paginacion');

	//datos que recibo del buscador
	console.log(buscar_sabor, buscar_tipo, buscar_paginacion);

	const lista_sabores = biblioteca.filter((el) => el.includes(buscar_sabor ?? ''));

	return {
		lista_sabores
	};
};
