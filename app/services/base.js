const axios = require('axios')

/**
 * Class Base service, to provide usable method
 */
export default class {
  /**
   * Constructor method declaration API to make url
   * and available method service
   * @param api
   */
  constructor (api) {
    this.api = api
    this.method = {
      get: 'GET',
      post: 'POST',
      put: 'PUT',
      delete: 'DELETE'
    }
  }

  /**
   * save method for fetch(ajax) POST
   * @param param
   *
   * usage : this.save(param)
   * call from child class to send POST
   */
  save (param) {
    return this.service(this.method.post, this.api, param)
  }

  /**
   * main service method to Make an HTTP Request
   * base on XHR or familiar with ajax on JQUERY
   * this method will auto covert param to JSON stringify format
   * and if method is 'GET' will filter query on param
   * @param type, type method to be send, GET PUT, POST etc
   * @param url, where this to be send, not allowed null
   * @param param, parameter data, can be null based on need
   *
   * usage: return this.service(type, 'http:localhost', param)
   */
  service (type, url, param) {
    const headers = {'Content-Type': 'application/json'}
    // filter query on method is 'GET'
    if (type === this.method.get && typeof param === 'object' && param !== null) {
      let query = '?'
      let index = 0
      // loop param to add & at end param
      const objectLength = Object.keys(param).length
      for (let key in param) {
        if (param.hasOwnProperty(key)) {
          index = index + 1
          // if object is last not append '&' at end
          query = objectLength === index ? query + key + '=' + param[key] : query + key + '=' + param[key] + '&'
        }
      }

      url = url + query
      // handle when param is only string
    } else if (typeof param === 'string' && param !== null) {
      url = url + '/' + param
    }

    // function to handle formatting json
    function convertToStringify (param) {
      try {
        JSON.parse(param)
      } catch (e) {
        return JSON.stringify(param)
      }

      return param
    }

    // return sync result or error on request
    return new Promise(
      function (resolve, reject) {
        axios({
          method: type,
          url: url,
          headers: headers,
          data: convertToStringify(param)
        }).then(function (response) {
          resolve(response)
        }).catch(function (error) {
          reject(error)
        })
      })
  }
}
