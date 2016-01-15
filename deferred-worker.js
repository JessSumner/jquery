self.postMessage('READY');
sleep(5000);
self.postMessage('COMPLETED')

function sleep(miliseconds) {
  var startTime = new Date().getTime();
  var stopTime = startTime + miliseconds;

  while (stopTime >= new Date().getTime()) {}
};
