export const OK = 200;
export const BAD_REQUEST = 400;
export const CREATED = 201;
export const NO_CONTENT = 204;
export const UNAUTHORIZED = 401;
export const FORBIDDEN = 403;
export const CONFLICT = 409;
export const INTERNAL_SERVER_ERROR = 500;

export type HttpStatus = typeof OK 
  | typeof BAD_REQUEST 
  | typeof CREATED
  | typeof NO_CONTENT
  | typeof UNAUTHORIZED
  | typeof FORBIDDEN
  | typeof CONFLICT
  | typeof INTERNAL_SERVER_ERROR;