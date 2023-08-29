<script lang="ts">
	import { navigating, page } from '$app/stores';

	export let data;

	function debounce(func: any, delay: number) {
		let timeoutId: number;

		return function (...args: any) {
			clearTimeout(timeoutId);

			timeoutId = setTimeout(() => {
				// @ts-ignore
				func.apply(this, args);
			}, delay);
		};
	}

	const search = (e: any) => {
		e.target.form.requestSubmit();
	};

	const debounceSearch = debounce(search, 400);
</script>

<h1>Encuentra algunos sabores!</h1>
<form data-sveltekit-keepfocus data-sveltekit-replacestate method="GET">
	<label for="buscar-input"> Encuentra un sabor </label>
	<input autocomplete="off" on:input={debounceSearch} id="buscar-input" name="buscar_sabor" type="search" value={$page.url.searchParams.get('buscar_sabor')} />
	<label for="select"> Encuentra un sabor </label>
	<select id="select" name="buscar_tipo" on:change={debounceSearch}>
		<option value="frutas" selected>Frutas</option>
		<option value="ensaladas">Ensaladas</option>
	</select>
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
