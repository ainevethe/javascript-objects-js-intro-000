
var playlist = {artist:"song"};

function updatePlaylist(playlist, artist, title){
  object.assign({}, playlist, {artist: [title]});
  return playlist;
}
