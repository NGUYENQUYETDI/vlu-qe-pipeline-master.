function login(username, password) {
  if (!username || !password) {
    throw new Error('Username và password không được để trống');
  }

  if (username === 'locked_user') {
    throw new Error('Tài khoản đã bị khóa');
  }

  const specialCharRegex = /[!@#$%^&*(),.?":{}|<>]/;
  if (specialCharRegex.test(password)) {
    throw new Error('Mật khẩu không được chứa ký tự đặc biệt');
  }

  if (username === 'admin' && password === '9999') {
    return true;
  }

  return false;
}

module.exports = { login };// update login
