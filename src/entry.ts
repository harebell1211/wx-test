declare global {
    const DEBUG: boolean;
}

export function entry(render: () => void) {
    if (!DEBUG) {
        import('./adapter/index.js').then(() => {
            render();
        });
    } else {
        document.body.style.margin = 0;
        render();
    }
}
