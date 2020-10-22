const http = require('http')

const server = http.createServer((req, res) => {
  let content = " ";

  req.on("data", (data) => {
    content += data;
  });

  req.on("end", () => {
    res.write(content);
    res.end()
  });
  req.on("error", error => {
    console.log(error)
  })
})

server.listen(9090,'0.0.0.0')