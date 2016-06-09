var fs = require('fs'),
		youtubedl = require('youtube-dl'),
		ffmpeg = require('fluent-ffmpeg'),
		video = youtubedl('https://www.youtube.com/watch?v=okF5gOTX9uM');

// Will be called when the download starts.
video.on('info', function(info) {
  console.log('Download started');
  console.log('filename: ' + info._filename);
  console.log('size: ' + info.size);
});

var proc = new ffmpeg({source:video});
proc.setFfmpegPath('/Applications/ffmpeg/ffmpeg');
proc.save('audio.mp3');