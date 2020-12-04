export const updateObject = (oldObject, updatedProperties) => {
  return {
    ...oldObject,
    ...updatedProperties,
  };
};

export const checkValidity = (value, rules) => {
  if (rules.required && value.trim() === '') return false;
  if (rules.minLength && value.length < rules.minLength) return false;
  if (rules.maxLength && value.length > rules.maxLength) return false;

  const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
  if (rules.isEmail) {
    return pattern.test(value);
  }
  const pattern2 = /^\d+$/;
  if (rules.isNumeric) {
    return pattern2.test(value);
  }

  return true;
};
