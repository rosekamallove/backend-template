import config from "config";
import jwt from "jsonwebtoken";

const privateKey = config.get<string>("privateKey") as string;
const publicKey = config.get<string>("publicKey") as string;

export function signJwt(object: Object, options?: jwt.SignOptions | undefined) {
  return jwt.sign(object, privateKey, {
    ...(options && options),
    algorithm: "RS256",
  });
}

export function verifyJwt(token: string) {
  if (!token) {
    return {
      expired: true,
      valid: false,
      decoded: null,
    };
  }

  try {
    const decoded = jwt.verify(token, publicKey);
    return {
      valid: true,
      expired: false,
      decoded,
    };
  } catch (e: any) {
    console.error(e);
    return {
      valid: false,
      expired: e.message === "jwt expired",
      decoded: null,
    };
  }
}
