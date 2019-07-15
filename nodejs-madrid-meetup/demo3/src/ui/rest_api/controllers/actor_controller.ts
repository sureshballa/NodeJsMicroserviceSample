import { injectable } from "inversify";
import { Controller, Get, RequestParam } from "inversify-express-utils";
import { actorRepository } from "../../../domain/constants/decorators";
import { ActorRepository } from "../../../domain/interfaces/repositories";

@injectable()
@Controller("/api/actors")
export class ActorController {

    @actorRepository public _actorRepository: ActorRepository;

    /**
    * @swagger
    * /reset:
    *   get:
    *     tags:
    *       - Users
    *     name: Reset Password Link
    *     summary: Create validation string in reset password link to verify user's allowed to reset their password
    *     consumes:
    *       - application/json
    *     parameters:
    *       - name: resetPasswordToken
    *         in: query
    *         schema:
    *           type: string
    *         required:
    *           - resetPasswordToken
    *     responses:
    *       '200':
    *         description: User's password reset link is valid
    *       '403':
    *         description: Password reset link is invalid or has expired
    */
    @Get("/")
    public async get() {
        return await this._actorRepository.findAll();
    }

    @Get("/:id")
    public async getById(
        @RequestParam("id") id: string,
    ) {
        return await this._actorRepository.findById(id);
    }

}
