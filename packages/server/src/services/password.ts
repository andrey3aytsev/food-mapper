import bcrypt from 'bcrypt';

const SALT_ROUNDS = 12;

const DUMMY_PASSWORD = '__food-mapper-login-timing-placeholder__';

const DUMMY_PASSWORD_HASH = bcrypt.hashSync(DUMMY_PASSWORD, SALT_ROUNDS);

export const hashPassword = async (password: string): Promise<string> => {
  return bcrypt.hash(password, SALT_ROUNDS);
};

export const verifyPassword = async (
  password: string,
  passwordHash: string,
): Promise<boolean> => {
  return bcrypt.compare(password, passwordHash);
};

export const verifyLoginPassword = async (
  password: string,
  storedHash: string | undefined,
): Promise<boolean> => {
  return verifyPassword(password, storedHash ?? DUMMY_PASSWORD_HASH);
};
