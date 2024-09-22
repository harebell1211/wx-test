import { entry } from './entry';

entry(() =>
    import('./main').then((res) => {
        res.createGame();
    })
);
