const { login } = require('./auth');

describe('Regression Test - Authentication Exception Handling', () => {
  test('Mật khẩu sai -> Trả về false', () => {
    expect(login('admin', 'wrongpassword')).toBe(false);
  });

  test('Username rỗng -> Báo lỗi', () => {
    expect(() => login('', '123')).toThrow('Username và password không được để trống');
  });

  test('Mật khẩu rỗng -> Báo lỗi', () => {
    expect(() => login('admin', '')).toThrow('Username và password không được để trống');
  });

  test('Mật khẩu chứa ký tự đặc biệt -> Báo lỗi', () => {
    expect(() => login('admin', '123@#$')).toThrow('Mật khẩu không được chứa ký tự đặc biệt');
  });

  test('Tài khoản bị khóa -> Báo lỗi', () => {
    expect(() => login('locked_user', '123')).toThrow('Tài khoản đã bị khóa');
  });
});
