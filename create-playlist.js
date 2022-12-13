function addTracks (...newtracks) {
    this.tracks.push(...newtracks);
}

function getCurrentTrack () {
    return `Now Playing: ${this.tracks[this.currentTrack]}`;
}

function skipTrack () {
    this.currentTrack++;
}

function createPlaylist (name) {
    const newPlaylist = {
        name: name,
        tracks: [],
        addTracks: addTracks,
        currentTrack: 0,
        getCurrentTrack: getCurrentTrack,
        skipTrack: skipTrack
    };
    return newPlaylist
}

module.exports = createPlaylist;