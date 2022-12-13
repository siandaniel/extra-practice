const createPlaylist = require ('../create-playlist');

describe('createPlaylist', () => {
    test('Has a name property that responds to what users passes in as argument', () => {
        const sianPlaylist1 = createPlaylist("Sian's Playlist 1");
        expect(sianPlaylist1.name).toBe("Sian's Playlist 1");
    })
    test('Has a tracks property that starts out as an empty array', () => {
        const sianPlaylist2 = createPlaylist("Sian's Playlist 2");
        expect(sianPlaylist2.tracks).toEqual([]);
    })
    test('Has an addTrack method that adds the track passed into the tracks property', () => {
        const sianPlaylist3 = createPlaylist("Sian's Playlist 3");
        sianPlaylist3.addTracks("Star Girl");
        expect(sianPlaylist3.tracks).toEqual(["Star Girl"]);

        sianPlaylist3.addTracks("All About You", "5 Colours In Her Hair");
        expect(sianPlaylist3.tracks).toEqual(["Star Girl", "All About You", "5 Colours In Her Hair"]);
    })
    test('addTrack can be called more than once to add multiple tracks to the tracks array', () => {
        const sianPlaylist4 = createPlaylist("Sian's Playlist 4");
        sianPlaylist4.addTracks("All Too Well");
        sianPlaylist4.addTracks("This Is Me Trying");
        expect(sianPlaylist4.tracks).toEqual(["All Too Well", "This Is Me Trying"]);
    })
    test('Has a currentTrack property that starts out at 0', () => {
        const sianPlaylist5 = createPlaylist("Sian's Playlist 5");
        expect(sianPlaylist5.currentTrack).toBe(0);
    })
    test('Has getCurrentTrack method that returns the song at currentTrack index of the tracks array in a string', () => {
        const sianPlaylist6 = createPlaylist("Sian's Playlist 6");
        sianPlaylist6.addTracks("We Don't Talk About Bruno");
        expect(sianPlaylist6.getCurrentTrack()).toBe("Now Playing: We Don't Talk About Bruno");
    })
    test('Has skipTrack method that increments the currentTrack property', () => {
        const sianPlaylist7 = createPlaylist("Sian's Playlist 6");
        sianPlaylist7.addTracks("Power", "No More Sad Songs", "Wasabi");
        sianPlaylist7.skipTrack();
        expect(sianPlaylist7.currentTrack).toBe(1);
        expect(sianPlaylist7.getCurrentTrack()).toBe("Now Playing: No More Sad Songs");
    })
})