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
		// @ts-ignore
		// const Header = (await import('@editorjs/header')).default;
		// @ts-ignore
		const Quote = (await import('@editorjs/quote')).default;
		// @ts-ignore
		const Warning = (await import('@editorjs/warning')).default;
		// @ts-ignore
		const Delimiter = (await import('@editorjs/delimiter')).default;
		// @ts-ignore
		const Alert = (await import('editorjs-alert')).default;
		// @ts-ignore
		const Header = (await import('editorjs-header-with-alignment')).default;
		// @ts-ignore
		const Paragraph = (await import('editorjs-paragraph-with-alignment')).default;
		// @ts-ignore
		const ToggleBlock = (await import('editorjs-toggle-block')).default;
		// @ts-ignore
		// const List = (await import('@editorjs/list')).default;
		const List = (await import('@editorjs/nested-list')).default;
		// @ts-ignore
		const Checklist = (await import('@editorjs/checklist')).default;
		// @ts-ignore
		const editorjsNestedChecklist = (await import('@calumk/editorjs-nested-checklist')).default;
		// @ts-ignore
		// const SimpleImage = (await import('@editorjs/simple-image')).default;
		// const LinkTool = (await import('@editorjs/link')).default;
		// const AttachesTool = (await import('@editorjs/attaches')).default;
		// const Embed = (await import('@editorjs/embed')).default;
		const SimpleImage = (await import('simple-image-editorjs')).default;
		// @ts-ignore
		const EJLaTeX = (await import('editorjs-latex')).default;
		// @ts-ignore
		const ImageGallery = (await import('@rodrigoodhin/editorjs-image-gallery')).default;
		// @ts-ignore
		// const TelegramPost = (await import('editorjs-telegram-post')).default;
		// @ts-ignore
		const Table = (await import('@editorjs/table')).default;
		// @ts-ignore
		const ColorPlugin = (await import('editorjs-text-color-plugin')).default;
		// @ts-ignore
		const Strikethrough = (await import('@sotaproject/strikethrough')).default;
		// @ts-ignore
		const ChangeCase = (await import('editorjs-change-case')).default;

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
				paragraph: {
					class: Paragraph,
					inlineToolbar: true
				},
				toggle: {
					class: ToggleBlock,
					inlineToolbar: true
				},
				header: Header,
				alert: Alert,
				image: SimpleImage,
				imageGallery: ImageGallery,
				nestedchecklist: editorjsNestedChecklist,
				list: {
					class: List,
					inlineToolbar: true
				},
				checklist: {
					class: Checklist,
					inlineToolbar: true
				},
				quote: {
					class: Quote,
					inlineToolbar: true
				},
				warning: {
					class: Warning,
					inlineToolbar: true
				},
				marker: {
					class: Marker,
					inlineToolbar: true
				},
				// code: CodeTool,
				delimiter: {
					class: Delimiter,
					inlineToolbar: true
				},
				Math: {
					class: EJLaTeX
				},
				strikethrough: Strikethrough,
				changeCase: {
					class: ChangeCase,
					config: {
						showLocaleOption: true, // enable locale case options
						locale: 'tr' // or ['tr', 'TR', 'tr-TR']
					}
				},
				// inlineCode: InlineCode,
				// linkTool: LinkTool,
				// embed: Embed,
				table: Table,
				Color: {
					class: ColorPlugin, // if load from CDN, please try: window.ColorPlugin
					config: {
						colorCollections: ['#EC7878', '#9C27B0', '#673AB7', '#3F51B5', '#0070FF', '#03A9F4', '#00BCD4', '#4CAF50', '#8BC34A', '#CDDC39', '#FFF'],
						defaultColor: '#FF1300',
						type: 'text',
						customPicker: true // add a button to allow selecting any colour
					}
				},
				Marker: {
					class: ColorPlugin, // if load from CDN, please try: window.ColorPlugin
					config: {
						defaultColor: '#FFBF00',
						type: 'marker',
						icon: `<svg fill="#000000" height="200px" width="200px" version="1.1" id="Icons" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 32 32" xml:space="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path d="M17.6,6L6.9,16.7c-0.2,0.2-0.3,0.4-0.3,0.6L6,23.9c0,0.3,0.1,0.6,0.3,0.8C6.5,24.9,6.7,25,7,25c0,0,0.1,0,0.1,0l6.6-0.6 c0.2,0,0.5-0.1,0.6-0.3L25,13.4L17.6,6z"></path> <path d="M26.4,12l1.4-1.4c1.2-1.2,1.1-3.1-0.1-4.3l-3-3c-0.6-0.6-1.3-0.9-2.2-0.9c-0.8,0-1.6,0.3-2.2,0.9L19,4.6L26.4,12z"></path> </g> <g> <path d="M28,29H4c-0.6,0-1-0.4-1-1s0.4-1,1-1h24c0.6,0,1,0.4,1,1S28.6,29,28,29z"></path> </g> </g></svg>`
					}
				}
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
						// list: {
						// 	Ordered: 'Numerado',
						// 	Unordered: 'Marcado'
						// }
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
		console.log(editorData); // este es el resultado que devuelve editorJs

		arrayHtml = edjsParser.parse(editorData);
		console.log(arrayHtml); // este es el resultado de editorJs convertido en array html
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

<div id="editorjs" />
<button type="button" on:click={GuardarTexto}>Guardar</button>

<h1>Preview del codigo obtenido:</h1>

{#each arrayHtml as html}
	{@html html}
{/each}

<button type="button" on:click={CargarHTML}>Cargar HTML</button>
