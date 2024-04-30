
function makealbum (artist: string, title: string): {artist: string; title: string} {
    const dictionaries = {
        artist: artist.charAt(0).toUpperCase() +artist.slice(1),
        title: title.charAt(0).toUpperCase() +title.slice(1)
    };
    return dictionaries;

}

let album = makealbum("ali","light")
console.log(album)

album = makealbum("noman","red wave")
console.log(album)

album = makealbum("qasim","seenbreez")
console.log(album)