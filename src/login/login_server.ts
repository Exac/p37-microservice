/* eslint-disable class-methods-use-this */
import {
    Request,
    Response,
    NextFunction,
    Express,
} from 'express';
import { ExpressFactory2 } from '../shared/express_factory_2';
import { IExpressFactory2Config } from '../types';
import logger from '../shared/logger';

export class LoginServer extends ExpressFactory2 {
    public name: string = 'LOGINSERVER';

    public constructor(config: IExpressFactory2Config = { port: 8080 }) {
        super(config);
        logger.info(`LoginServer.constructor config=${JSON.stringify(config)} port=${this.port}`);
    }

    public app(): Express {
        logger.info(`LoginServer.app name=${this.name}`);
        return super.app();
    }

    public async listen() {
        await super.listen();
        logger.info(`LoginServer.listen name=${this.name} port=${this.port}`);
        this.onServerStart();
    }

    public router = (req: Request, res: Response, next: NextFunction): void => {
        logger.info(`router name=${this.name} port=${this.port}`);
        res.json({ hello: 'world' });
    }

    public onServerStart(): void {
        logger.info(`LoginServer.onServerStart name=${this.name}`);
        logger.info(`Login listening @ http://localhost:${JSON.stringify(this.port)}`);
        super.app().get('/', this.router);
    }
}
