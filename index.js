const img = document.getElementById('Cover'),
title = document.getElementById('msuic-title'),
artist = document.getElementById('music-artist'),
currentTimeEl = document.getElementById('current-time'),
durationEl = document.getElementById('duration'),
progress = document.getElementById('progress'),
playerProgress = document.getElementById('player-progress'),
prevBtn = document.getElementById('prev'),
nextBtn = document.getElementById('next'),
playBtn = document.getElementById('play'),
background = dodcument.getElementById('bg-img');

const music = new Audio()

const songs = [
    {
        path: 'images/lilbaby-scarred',
        displayName: 'Emotionally Scarred',
        cover: 'images/lilbaby-scarred',
        artist: 'Lil Baby',
    },
]


