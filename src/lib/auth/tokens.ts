import jwt, {Secret} from "jsonwebtoken"
import type, {StringValue} from "ms"
import { getExpires } from "./env"

export const ACCESS_EXPIRES_IN = getExpires("JWT_ACCESS_EXPIRES_IN", "15m")
export const REFRESH_EXPIRES_IN = getExpires("JWT_REFRESH_EXPIRES_IN", "7d")

type TokenPayload = {
    id: string
    email?: string
    role?: string
}

export function createAccessToken(payload: TokenPayload) {
    return jwt.sign(
        payload, 
        process.env.JWT_ACCESS_SECRET as Secret,
        {expiresIn: ACCESS_EXPIRES_IN}
    )
}

export function createRefreshToken(payload: {id: string}) {
    return jwt.sign(
        payload,
        process.env.JWT_REFRESH_SECRET  as Secret,
        {expiresIn: REFRESH_EXPIRES_IN}
    )
}