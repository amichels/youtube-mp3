var fs = require('fs');
var youtubedl = require('youtube-dl');
var filename;
var options = ['--extract-audio', '--prefer-ffmpeg', '--audio-format=mp3'];
var video = youtubedl('https://www.youtube.com/watch?v=okF5gOTX9uM',
  // Optional arguments passed to youtube-dl.
  options,
  // Additional options can be given for calling `child_process.execFile()`.
  { cwd: __dirname }); 
// Will be called when the download starts.
video.on('info', function(info) {
  filename = info.filename;
  console.log('Download started');
  console.log('filename: ' + info.filename);
  console.log('size: ' + info.size);
});

video.pipe(fs.createWriteStream('audio/'+filename+'.mp3'));