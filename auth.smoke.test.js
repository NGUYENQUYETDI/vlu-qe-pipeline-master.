const { login } = require('./auth');

describe('Smoke Test - Authentication', () => {
  test('Đăng nhập thành công với tài khoản admin đúng (admin/123)', () => {
    expect(login('admin', '123')).toBe(true);
  });
});
