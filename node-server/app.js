/**
 * @author xiaoshan.yang
 * @email xiaoshan.yang@taotu-partner.com
 * @date 2019/8/6
 */
const http = require('http');
const urlModule = require('url');
const server = http.createServer();
server.on('request', function (req, res) {
  const {pathname: url, query} = urlModule.parse(req.url, true);
  if (url === '/getscript') {
    var data = {
      name: "Samoy",
      age: 27,
      gender: "男"
    };
    var scriptStr = `${query.callback}(${JSON.stringify(data)})`;
    return res.end(scriptStr);
  } else {
    res.end('404');
  }
});

server.listen(3000, function () {
  console.log('Server listen at http://127.0.0.1:3000');
});
