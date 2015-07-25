const path = require('path');
const Camera = require('camerapi');
const moment = require('moment');

const camera = new Camera();
camera.baseFolder(path.join(__dirname, '/photographs'));

camera.timeout(150)
  .width(1024)
  .height(768)
  .quality(75)
  .takePicture(generateFileName(), pictureCallback);

function generateFileName() {
  return moment().format('YYYY-MM-DD-HH-mm-ss-SSS[.jpg]');
}

function pictureCallback(file, error) {
  if (error) { console.error('Error', error); }
  if (file) { console.log('File saved at: ' + file); }
}
