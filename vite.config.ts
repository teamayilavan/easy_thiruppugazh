import tailwindcss from '@tailwindcss/vite';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import { enhancedImages } from '@sveltejs/enhanced-img';
import fs from 'fs'; // 1. Import the Node.js File System module
import path from 'path'; // Import the path module for cross-platform compatibility

const folderToExclude = 'data';

export default defineConfig({
	plugins: [tailwindcss(), enhancedImages(), sveltekit(), {
		name: 'exclude-folder-from-build',
		writeBundle(options) {
			// 5. Construct the full path to the folder in the output directory
			const outputDir = options.dir;
			const folderPath = path.join(outputDir, folderToExclude);

			// 6. Check if the folder exists and remove it
			if (fs.existsSync(folderPath)) {
				console.log(`\nExcluding '${folderToExclude}' from build...`);
				fs.rmSync(folderPath, { recursive: true, force: true });
				console.log(`Successfully removed '${folderToExclude}'.`);
			}
		}
	}]
});


// // 2. Define the name of the folder you want to exclude


// /** @type {import('vite').UserConfig} */
// const config = {
// 	plugins: [
// 		sveltekit(),
// 		// 3. Add your custom plugin here
// 		{
// 			name: 'exclude-folder-from-build',
// 			// 4. Use the `writeBundle` hook, which runs after the build is complete
// 			writeBundle(options) {
// 				// 5. Construct the full path to the folder in the output directory
// 				const outputDir = options.dir;
// 				const folderPath = path.join(outputDir, folderToExclude);

// 				// 6. Check if the folder exists and remove it
// 				if (fs.existsSync(folderPath)) {
// 					console.log(`\nExcluding '${folderToExclude}' from build...`);
// 					fs.rmSync(folderPath, { recursive: true, force: true });
// 					console.log(`Successfully removed '${folderToExclude}'.`);
// 				}
// 			}
// 		}
// 	]
// };

// export default config;