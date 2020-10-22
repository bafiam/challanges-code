const http = require("http");
const message = "sasa ndeko try";
const options = {
  method: "GET",
  hostname: "127.0.0.1",
  port: 9090,
  path: "/",
  headers: { 
    "content-type": "text/plain",
    "content-length": message.length
   },
};
const req = http.request(options, (res) => {
  let content = "";

  res.on("data", (data) => {
    content += data;
  });

  res.on("end", () => {
    console.log(content);
  });
  res.on("error", (error) => {
    console.log(error);
  });
});

req.write(message);
req.end();
