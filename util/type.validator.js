
class TypeValidator {

  isBlank (value) {
    return value === undefined || value === null;
  }

  isNumber (value) {
    return typeof value === 'number';
  }

  isString (value) {
    return typeof value === 'string';
  }

  isList (value) {
    return Array.isArray(value);
  }
}

exports.TypeValidator = TypeValidator;