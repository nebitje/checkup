import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
// omdat index.html, entry point van de app, nu in 'src' zit
    root: 'src',
// omdat de root nu in src zit is het pad naar de publicDir nu ../public
    publicDir: '../public',
    envDir: '../',

// voor in geval je de dist niet in de root van je webserver plaatst
    base: './',

    build: {
        // overschrijven, omdat de root nu "src" is,
        // anders komt de dist map ook in src en dat is... raar
        outDir: '../dist',
        emptyOutDir: true,

        rollupOptions: {
            input: {
                // een entrypoint voor elke HTML pagina
                // uiteraard is dat altijd index.html
                // om goed te kunnen werken heb ik alle content in de 'src' folder gestopt
                // dat is netter
                main: resolve(__dirname, 'src/index.html'),
                vraag: resolve(__dirname, 'src/vraag/index.html'),
                summary: resolve(__dirname, 'src/summary/index.html'),
            },
        },
    },
});
