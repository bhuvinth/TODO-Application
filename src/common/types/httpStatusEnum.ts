/* eslint-disable @typescript-eslint/naming-convention */
enum HttpStatusCodes {
  BAD_REQUEST = 400,
  BAD_GATEWAY = 502,
  CONFLICT = 409,
  CREATED = 201,
  NOT_FOUND = 404,
  OK = 200,
  UNAUTHORIZED = 401,
  UNPROCESSABLE_ENTITY = 422,
  INTERNAL_ERROR = 500,
}

export default HttpStatusCodes;
