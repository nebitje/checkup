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
                info: resolve(__dirname, 'src/info/index.html'),
                checkup: resolve(__dirname, 'src/checkup/index.html'),
                dokters: resolve(__dirname, 'src/dokters/index.html'),
                beheer: resolve(__dirname, 'src/beheer/index.html'),
                addData: resolve(__dirname, 'src/beheer/addData/index.html'),
                diagnose: resolve(__dirname, 'src/beheer/addData/diagnose/index.html'),
                dokter: resolve(__dirname, 'src/beheer/addData/dokter/index.html')

            },
        },
    },
});
