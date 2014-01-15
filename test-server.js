var http = require('http');
var spawn = require('child_process').spawn;
var path = require('path');
var backend = require('git-http-backend');

module.exports = function() {
  var server = http.createServer(function (req, res) {
      var repo = req.url.split('/')[1];
      var dir = path.join(__dirname, 'repos', repo);
      
      var bs = backend(req.url, function (err, service) {
          if (err) return res.end(err + '\n');

          if (service.action === 'info') {
            res.setHeader('Content-Type', 'application/x-git-receive-pack-advertisement')
            var sb = service.createBand()
            sb.write('tacos')
            sb.end()
          }

          var ps = spawn(service.cmd, service.args.concat(dir));
          ps.stdout.pipe(service.createStream()).pipe(ps.stdin);
      })
      req.pipe(bs).pipe(res);
  });
  
  return server
}