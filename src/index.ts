/* eslint-disable import/prefer-default-export */
import { config } from 'node-config-ts';
import { ExpressFactory2 } from './shared/express_factory_2';
import logger from './shared/logger';
import { MicroserviceMode } from './types';
import { LoginServer } from './login/login_server';

/**
 * Application entry point. All microservices start here,
 * and we run different code depending on
 * config.MICROSERVICE's value (which should be the name
 * of the microservice to run).
 */
export const main = async (mode: string = config.MICROSERVICE.MODE): Promise<void> => {
    switch (mode) {
        // case MicroserviceMode.FRONTEND: {
        //     // const frontend: ExpressFactory2 = new ExpressFactory2();
        //     break;
        // }
        case MicroserviceMode.LOGIN: {
            const login: LoginServer = new LoginServer({ port: config.LOGIN.PORT });
            await login.listen();
            break;
        }
        default: {
            logger.error(`expected '${MicroserviceMode.LOGIN}' but got '${mode}'.`);
            logger.error('Missing environmental variable MICROSERVICE. Can\'t start.');
            throw new Error('ENVIRONMENT_MICROSERVICE_MISSING');
        }
    }
};

if (process.env.NODE_ENV !== 'test') {
    main()
        .catch((error: unknown) => {
            logger.error('Uncaught exception in main function.', error);
        });
}
