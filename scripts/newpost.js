
var spawn = require('child_process').exec;
hexo.on('new', function(data){
  spawn('start  "C:\Users\55018\AppData\Local\Programs\Microsoft VS Code.exe" ' + data.path);
});





