<script lang="ts">
	import { navigating, page } from '$app/stores';

	export let data;

	function debounce(func: any, delay: number) {
		let timeoutId: any;
		return function (...args: any) {
			clearTimeout(timeoutId);
			timeoutId = setTimeout(() => {
				// @ts-ignore
				func.apply(this, args);
			}, delay);
		};
	}

	const search = (e: any) => {
		const form = document.getElementById('your-form-id') as HTMLFormElement;
		form?.requestSubmit();
		// e.target.form.requestSubmit();
	};

	const debounceSearch = debounce(search, 400);

	let varPaginacion = $page.url.searchParams.get('buscar_paginacion') || 1;
	let varSabor = $page.url.searchParams.get('buscar_sabor') || '';

	function sumaPag() {
		varPaginacion = Number(varPaginacion) + 1;
	}
</script>

<h1>Encuentra algunos sabores!</h1>

<button
	type="button"
	on:click={() => {
		sumaPag();
		debounceSearch();
	}}>Paginación</button
>
<hr />

<form data-sveltekit-keepfocus data-sveltekit-replacestate method="GET" id="your-form-id">
	<label for="buscar-input"> Encuentra un sabor </label>
	<input autocomplete="off" on:input={debounceSearch} id="buscar-input" name="buscar_sabor" type="search" value={varSabor} />
	<label for="select"> Encuentra un sabor </label>
	<select id="select" name="buscar_tipo" on:change={debounceSearch}>
		<option value="frutas" selected>Frutas</option>
		<option value="ensaladas">Ensaladas</option>
	</select>

	<label for="buscar-paginacion"> Encuentra un sabor </label>
	<input autocomplete="off" on:input={debounceSearch} id="buscar-paginacion" name="buscar_paginacion" type="search" value={varPaginacion} />

	<button>Buscar</button>
	{#if $navigating}
		Cargando...
	{/if}
</form>

<h2>Sabores</h2>
<ul>
	{#each data.lista_sabores as sabor}
		<li>{sabor}</li>
	{:else}
		<li>(Sin resultados)</li>
	{/each}
</ul>
