import { build, context } from 'esbuild';
import clean from 'esbuild-plugin-clean';
import copy from 'esbuild-plugin-copy';
import inlineImage from 'esbuild-plugin-inline-image';
import argsParser from 'args-parser'
import { basicConfig } from './config.mjs';

const args = argsParser(process.argv);

let msgPhaser = {
    name: 'msg-phaser',
    setup(build) {
        build.onEnd(() => {
            const line = "---------------------------------------------------------";
            const msg = `❤️❤️❤️ build success! ❤️❤️❤️`;
            process.stdout.write(`${line}\n${msg}\n${line}\n`);

            process.stdout.write(`✨ Done ✨\n`);
        });
    },
}

const config = {
    ...basicConfig,
    bundle: true,
    minify: true,
    sourcemap: true,
    outfile: './dist/game.js',
    plugins: [
        clean({
            patterns: ['./dist/*'],
        }),
        inlineImage({
            namespace: 'assets',
        }),
        copy({
            assets: [
                { from: './wx/**', to: './' },
                // { from: './wx/.eslintrc.js', to: './' }
            ],
        }),
        msgPhaser
    ],
    define: {
        DEBUG: 'false'
    }
}

const builderWatch = async () => {
    const ctx = await context(config);
    await ctx.watch();
};

const builder = async () => {
    await build(config)
}


if (args.watch) {
    builderWatch()
} else {
    builder();
}

