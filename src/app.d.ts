// See https://svelte.dev/docs/kit/types#app.d.ts
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}
	}
}

export interface SongInfo {
	"id": string, "title": string, "place": string, "meaning": boolean, "music": boolean, "legend": boolean
}

export { };
