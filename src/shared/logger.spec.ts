import { Logger } from 'winston';
import {
    describe,
    it,
    expect,
} from '../test';
import logger from './logger';

describe('logger', () => {
    it('is an instance of winston.Logger', async () => {
        expect(typeof logger.info).to.equal('function');
        expect(typeof logger.log).to.equal('function');
        expect(typeof logger.warn).to.equal('function');
        expect(typeof logger.error).to.equal('function');
    });
});
