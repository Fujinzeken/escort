interface ValidationPageProps {
    values: {
      email: string;
      password: string;
      confirmpassword: string;
      lastName: string,
      firstName: string,
      username: String
      // Add other fields if needed
    };
  }
  
  function validation({ values }: ValidationPageProps) {
    let errors: Record<string, string> = {};
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
    if (values.email === '') {
      errors.email = 'Email should not be empty';
    } else if (!emailPattern.test(values.email)) {
      errors.email = 'Invalid email format';
    }

    if (values.firstName === '') {
      errors.firstName = 'Name should not be empty';
    }

    if (values.lastName === '') {
      errors.lastName = 'Name should not be empty';
    }

    if (values.username === '') {
      errors.username = 'username should not be empty';
    }
  
    if (values.password === '') {
      errors.password = 'Password should not be empty';
    } else if (values.password.length < 9) {
      errors.password = 'Password must be more than 8 characters';
    }
  
    if (values.confirmpassword === '' || values.confirmpassword !== values.password) {
      errors.confirmpassword = 'Password does not match';
    }
  
    return errors;
  }
  
  export default validation;
  