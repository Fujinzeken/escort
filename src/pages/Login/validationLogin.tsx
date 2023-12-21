interface validationLoginProp {
  values: {
    email: string;
    password: string;
    username: string;
    // Add other fields if needed
  };
}

function validationLogin({ values }: validationLoginProp) {
  let errors: Record<string, string> = {};

  if (typeof values.username !== 'string') {
    errors.Loginusername = 'Username should be a string';
  } else if (values.username === '') {
    errors.Loginusername = 'Username should not be empty';
  } else if (values.username.length < 5) {
    errors.Loginusername = 'Username must be more than 5 characters';
  }

  if (values.password === '') {
    errors.password = 'Password should not be empty';
  } else if (values.password.length < 9) {
    errors.password = 'Password must be more than 8 characters';
  }

  return errors;
}

export default validationLogin;
