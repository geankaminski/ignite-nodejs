import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";

import { AppError } from "../errors/AppError";
import { UsersRepository } from "../modules/accounts/repositories/implementations/UsersRepository";

interface IPayload {
    sub: string;
}

export async function ensureAuthenticated(
    request: Request,
    response: Response,
    next: NextFunction
) {
    const authHeader = request.headers.authorization;

    if (!authHeader) {
        throw new AppError("Token missing!", 401);
    }

    /* [0] = Bearer
    [1] = 52352ewewefsdf3532rfsdgt23dvsdvgwet4t3srrhy4 */

    const [, token] = authHeader.split(" ");

    try {
        const { sub: user_id } = verify(
            token,
            "cb7d94da85a61fb35c1d7818356520f5"
        ) as IPayload;

        const usersRepository = new UsersRepository();
        const user = await usersRepository.findById(user_id);

        if (!user) {
            throw new AppError("User does not exists!", 401);
        }

        next();
    } catch {
        throw new AppError("Invalid token!", 401);
    }
}
