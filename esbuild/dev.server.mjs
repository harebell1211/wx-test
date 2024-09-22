import esbuildServe from "esbuild-serve";
import inlineImage from "esbuild-plugin-inline-image";
import { basicConfig } from "./config.mjs";

esbuildServe(
    {
        ...basicConfig,
        logLevel: "info",
        bundle: true,
        sourcemap: true,
        outfile: "public/game.js",
        plugins: [inlineImage()],
        define: {
            DEBUG: 'true'
        }
    },
    { root: "public", port: 8080 },
);