
var playlist = {"Elvis": "Hound Dog", "Volbeat":"Warriors Call"};

function updatePlaylist(playlist, artistName, songTitle){
  return object.assign({}, playlist, { artistName: [songTitle]});
}
