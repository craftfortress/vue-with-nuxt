const axios = require('axios')

/**
 * Class Base service, to provide usable method
 */
export default class {
  /**
   * Constructor method declaration API to make url
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
   * service method to Make an HTTP Request
   * base on XHR or familiar with ajax on JQUERY
   * @param type, type method to be send, GET PUT, POST etc
   * @param url, where this to be send, not allowed null
   * @param param, parameter data, can be null based on need
   *
   * usage: return this.service(type, 'http:localhost', param)
   * dont use from external base service
   */
  service (type, url, param) {
    const headers = {'Content-Type': 'application/json'}

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
