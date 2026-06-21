import jwt, { type SignOptions } from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET;

if (!JWT_SECRET) {
  throw new Error('JWT_SECRET environment variable is required');
}

const JWT_EXPIRES_IN = (process.env.JWT_EXPIRES_IN ??
  '24h') as SignOptions['expiresIn'];

export type JwtPayload = {
  sub: string;
};

export const signToken = (userId: string): string => {
  return jwt.sign({ sub: userId }, JWT_SECRET, { expiresIn: JWT_EXPIRES_IN });
};

export const verifyToken = (token: string): JwtPayload => {
  const payload = jwt.verify(token, JWT_SECRET);

  if (
    typeof payload !== 'object' ||
    payload === null ||
    typeof payload.sub !== 'string'
  ) {
    throw new Error('Invalid token payload');
  }

  return { sub: payload.sub };
};
