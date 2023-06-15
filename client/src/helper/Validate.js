import toast from "react-hot-toast";

// Validate login page username
export async function usernameValidate(values) {
  const errors = usernameVerify({}, values);
  return errors;
}

// Validate login page password
export async function passwordValidate(values) {
  const errors = passwordVerify({}, values);
  return errors;
}

// Validate username
function usernameVerify(error = {}, values) {
  if (!values.username) {
    error.username = "Username is required..!";
    toast.error(error.username);
  } else if (values.username.includes(" ")) {
    error.username = "Please enter a valid username";
    toast.error(error.username);
  }

  return error;
}

// Validate password
function passwordVerify(error = {}, values) {
  if (!values.password) {
    error.password = "Password is required..!";
    toast.error(error.password);
  } else if (values.password.length < 8) {
    error.password = "Password must be at least 8 characters long";
    toast.error(error.password);
  }

  return error;
}
