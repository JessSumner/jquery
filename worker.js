self.addEventListener('message', function (e) {
  var message = e.data;

  self.postMessage(e.data + ' - Processed!');
});

self.postMessage('READY');
