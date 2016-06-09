var fs = require('fs');
var	youtubedl = require('youtube-dl');
var	ffmpeg = require('fluent-ffmpeg');
var url = 'https://www.youtube.com/watch?v=okF5gOTX9uM';
var video = youtubedl(url);

var mp3;

// Will be called when the download starts.
video.on('info', function(info) {
  console.log('Download started');
});

var proc = new ffmpeg({source:video});
proc.setFfmpegPath('/Applications/ffmpeg/ffmpeg');
proc.save(mp3 + '.mp3');