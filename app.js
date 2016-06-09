var mp3;

var fs = require('fs');
var	youtubedl = require('youtube-dl');
var	ffmpeg = require('fluent-ffmpeg');
var video = youtubedl('https://www.youtube.com/watch?v=okF5gOTX9uM');

// Will be called when the download starts.
video.on('info', function(info) {
  console.log('Download started');
  console.log('filename: ' + info._filename);
  console.log('size: ' + info.size);
  mp3 = info._filename;
});

var proc = new ffmpeg({source:video});
proc.setFfmpegPath('/Applications/ffmpeg/ffmpeg');
proc.save(mp3 + '.mp3');