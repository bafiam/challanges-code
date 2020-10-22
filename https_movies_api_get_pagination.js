const { promises } = require("fs");
const https = require("https");

const baseUrl = "https://jsonmock.hackerrank.com/api/movies/";

const getMoviesApiPages = () => {
  return new Promise((resolve, reject) => {
    https.get(baseUrl, (res) => {
      let response = "";
      res.on("data", (data) => {
        response += JSON.parse(data).total_pages;
      });
      res.on("error", (error) => {
        reject(error);
      });
      res.on("end", () => {
        resolve(response);
      });
    });
  });
};
const getMoviesPerPage = (page) => {
  return new Promise((resolve, reject) => {
    let url = `${baseUrl}?&page=${page}`;
    https.get(url, (res) => {
      let response = "";
      res.on("data", (data) => {
        response = JSON.parse(data).data;
      });
      res.on("error", (error) => {
        reject(error);
      });
      res.on("end", () => {
        resolve(response);
      });
    });
  });
};

const run = () => {
  getMoviesApiPages()
    .then((data) => {
      const total_pages = parseInt(data);
      const movies = [];
      for (let index = 0; index < total_pages; index++) {
        movies.push(getMoviesPerPage(index));
      }
      Promise.all(movies)
      .then(data => {
        console.log(data)
      })
    })
    .catch((err) => {
      console.log(err);
    });
};
run();
