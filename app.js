var fs = require('fs');
var youtubedl = require('youtube-dl');

var url = 'https://www.youtube.com/watch?v=okF5gOTX9uM';
var options = ['--extract-audio', '--prefer-ffmpeg', '--audio-format=mp3'];
var video = youtubedl(url,
  // Optional arguments passed to youtube-dl.
  options,
  // Additional options can be given for calling `child_process.execFile()`.
  { cwd: __dirname });



// Will be called when the download starts.
video.on('info', function(info){
  console.log('Download started');
  video.pipe(fs.createWriteStream('audio/'+info.title+'.mp3'));
});