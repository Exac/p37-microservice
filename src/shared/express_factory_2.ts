/* eslint-disable class-methods-use-this */
import express, { Express } from 'express';
import logger from './logger';
import { IExpressFactory2, IExpressFactory2Config } from '../types';

export abstract class ExpressFactory2 implements IExpressFactory2 {
    private express?: Express;

    public name: string = 'EXPRESSFACTORY2';

    public port: number;

    protected constructor(config: IExpressFactory2Config = { port: 8080 }) {
        this.port = config.port;
        logger.info(`ExpressFactory2.constructor config=${JSON.stringify(config)} port=${this.port}`);
    }

    public app(): Express {
        logger.info(`ExpressFactory2.app name=${this.name}`);
        this.express = this.express ? this.express : ExpressFactory2.getDefaultExpressApplication();

        return this.express;
    }

    public async listen(): Promise<void> {
        logger.info(`ExpressFactory2.listen name=${this.name} port=${this.port}`);
        return new Promise((resolve: () => void) => {
            this.app().listen(this.port, resolve);
        });
    }

    public static getDefaultExpressApplication(): Express {
        return express();
    }

    public onServerStart(): void {
        logger.info(`ExpressFactory2.onServerStart name=${this.name}`);
        logger.info('Listening @ http://localhost/');
    }
}
