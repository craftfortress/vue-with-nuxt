/**
 * Custom environment here like a API Url
 * will auto declare on config index
 * @param environment {string} is environment type
 * @returns {{}}
 */
module.exports = function (environment) {
  let ENV = {}
  if (environment === 'development') {
    ENV.API_URL = 'http://192.168.0.9:8080/plunq-api/'
    ENV.LOGIN_API = ENV.API_URL + 'do-login'
  } else if (environment === 'production') {
    ENV.API_URL = 'http://192.168.0.9:8080/plunq-api/'
    ENV.LOGIN_API = ENV.API_URL + 'do-login'
  } else if (environment === 'testing') {
    ENV.API_URL = 'http://192.168.0.9:8080/plunq-api/'
    ENV.LOGIN_API = ENV.API_URL + 'do-login'
  }

  return ENV
}
