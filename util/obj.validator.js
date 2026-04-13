
/**
 * @typedef {Object} ValidationResponse
 * @property {boolean} valid
 * @property {string} description
 */

class ObjectValidator {

  /**
   * @returns {ValidationResponse} validationResp
   */
  validate (payload) {
    return {
      valid: true
    }
  }

}

exports.ObjectValidator = ObjectValidator;