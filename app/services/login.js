import baseService from './base'

/**
 * Class Login service, to handle login
 * with extend base service
 */
export default class extends baseService {
  /**
   * Constructor method set super API url
   */
  constructor () {
    super(process.env.LOGIN_API)
  }
}
