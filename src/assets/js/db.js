// two ways to consider audio
const musictrack1 = new Audio('/src/assets/music/my-universe-147152.mp3');
const musictrack2 = '/src/assets/music/reflected-light-147979.mp3';

let tracksList = [
    {
        id: 1,
        title: 'my universe',
        trackURL: musictrack1,
        isFavourite: false,
    },
    {
        id: 2,
        title: 'reflected light',
        trackURL: musictrack2,
        isFavourite: true,
    },
];

export default tracksList;
