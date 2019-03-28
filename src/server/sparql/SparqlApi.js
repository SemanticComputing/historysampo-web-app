//import fetch from 'node-fetch';
import axios from 'axios';
// const { URLSearchParams } = require('url');

const defaultSelectHeaders = {
  'Content-Type': 'application/x-www-form-urlencoded',
  'Accept': 'application/sparql-results+json; charset=utf-8'
};
const defaultConstructHeaders = {
  'Content-Type': 'application/x-www-form-urlencoded',
  'Accept': 'text/turtle'
};

class SparqlApi {

  constructor({ endpoint }) {
    this.endpoint = endpoint;
  }

  // query(query, { headers }) {
  //   return new Promise((resolve, reject) => {
  //     const params = new URLSearchParams();
  //     params.append('query', query);
  //     fetch(this.endpoint, {
  //       method: 'post',
  //       body:    params,
  //       headers: headers,
  //     })
  //       .then(res => {
  //         if (res.ok) { // res.status >= 200 && res.status < 300
  //           return resolve(res.text());
  //         } else {
  //           return reject(res.statusText);
  //         }
  //       });
  //   });
  // }

  selectQuery = async query => {
    try {
      const response = await axios({
        method: 'post',
        headers: defaultSelectHeaders,
        url: this.endpoint,
        data: { query }
      });
      return JSON.parse(response);
    } catch(error) {
      console.error(error);
    }
  }

  // selectQuery(query, params = { headers: defaultSelectHeaders }) {
  //   return this.query(query, params).then(data => {
  //     return JSON.parse(data);
  //   });
  // }
  //
  // constructQuery(query, params = { headers: defaultConstructHeaders }) {
  //   return this.query(query, params);
  // }
}

export default SparqlApi;
