<script lang="ts">
	import { onMount } from 'svelte';
	import edjsHTML from 'editorjs-html';
    // @ts-ignore
    // import Marker from '@editorjs/marker';
    // const Marker = require('@editorjs/marker');

	const edjsParser = edjsHTML();

	let EditorJS: any;
	let editor: any;
	onMount(async () => {
		EditorJS = (await import('@editorjs/editorjs')).default;
        // @ts-ignore
        const Marker = (await import('@editorjs/marker')).default;
		editor = new EditorJS({
			holderId: 'editorjs',
			data: {
				blocks: [
					{
						type: 'paragraph',
						data: {
							text: 'DE:'
						}
					},
					{
						type: 'paragraph',
						data: {
							text: 'CITE:'
						}
					}
				]
			},
			tools: {
				// header: Header,
				// image: SimpleImage,
				// list: List,
				// checklist: Checklist,
				// quote: Quote,
				// warning: Warning,
				marker: Marker,
				// code: CodeTool,
				// delimiter: Delimiter,
				// inlineCode: InlineCode,
				// linkTool: LinkTool,
				// embed: Embed,
				// table: Table
			},
			/**
			 * Internationalzation config
			 */
			i18n: {
				messages: {
					ui: {
						blockTunes: {
							toggler: {
								'Click to tune': 'Haga clic para personalizar',
								'or drag to move': 'o arrastrar'
							}
						},
						inlineToolbar: {
							converter: {
								'Convert to': 'Convertir a'
							}
						},
						toolbar: {
							toolbox: {
								Add: 'Agregar'
							}
						}
					},
					toolNames: {
						Text: 'Párrafo',
						Heading: 'Encabezamiento',
						List: 'Lista',
						Warning: 'Nota',
						Checklist: 'Lista de Verificación',
						Quote: 'Cita',
						Code: 'El código',
						Delimiter: 'Delimitador',
						'Raw HTML': 'fragmento HTML',
						Table: 'Tabla',
						Link: 'Enlace',
						Marker: 'Marcador',
						Bold: 'Atrevido',
						Italic: 'Cursiva',
						InlineCode: 'monoespacio'
					},
					tools: {
						warning: {
							Title: 'Nombre',
							Message: 'Mensaje'
						},
						link: {
							'Add a link': 'Insertar el link'
						},
						stub: {
							'The block can not be displayed correctly.': 'El bloque no se puede mostrar'
						}
					},
					blockTunes: {
						delete: {
							Delete: 'Borrar'
						},
						moveUp: {
							'Move up': 'Mover arriba'
						},
						moveDown: {
							'Move down': 'Mover abajo'
						}
					}
				}
			}
		});
	});
	let arrayHtml: any = '';
	async function GuardarTexto() {
		const editorData = await editor.save();
        console.log(editorData);
        
		arrayHtml = edjsParser.parse(editorData);
		console.log(arrayHtml);
	}

	async function CargarHTML() {
		const htmlArray = ['<p>PRUEBA DE EDICION:</p>', '<p>PRUEBA DE EDICION 2:</p>'];
		const blocks = htmlArray.map((html) => ({
			type: 'paragraph',
			data: {
				text: html
			}
		}));
		const editorData = {
			blocks: blocks
		};
		editor = new EditorJS({
			holderId: 'editorjs',
			data: editorData
			// ... your other editor configurations
		});
	}
</script>

<h1>EDITOR JS</h1>

<div id="editorjs" contenteditable="true" />
<button type="button" on:click={GuardarTexto}>Guardar</button>

<h1>Preview del codigo obtenido:</h1>

{#each arrayHtml as html}
	{@html html}
{/each}

<button type="button" on:click={CargarHTML}>Cargar HTML</button>
