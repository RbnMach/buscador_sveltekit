<script lang="ts">
	import SveltyPicker, { config } from 'svelty-picker';
	import { es } from '$lib/es_datepicker';
	config.i18n = es;
</script>

<SveltyPicker inputId="rango_fecha" name="rango_fecha" mode="date" format="dd-M-yyyy" theme="datepicker-svelte" placeholder="Fechas" isRange={true} />
