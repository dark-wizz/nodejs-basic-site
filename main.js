import http from "http";
import fs from "fs";
import url from "url";

http
  .createServer(async (req, res) => {
    let pathname = url.parse(req.url).pathname;
    if (pathname == "/") {
      res.writeHead(200, { "Content-Type": "text/html" });
      return res.end(await fs.promises.readFile("index.html"));
    }
    let filename = `.${pathname}`;
    fs.readFile(filename, async (err, data) => {
      if (err) {
        res.writeHead(404, { "Content-Type": "text/html" });
        return res.end(await fs.promises.readFile("404.html"));
      } else {
        res.writeHead(200, { "Content-Type": "text/html" });
        return res.end(data);
      }
    });
  })
  .listen(8080);
