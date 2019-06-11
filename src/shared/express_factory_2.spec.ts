import e from 'express';
import {
    describe,
    SinonStub,
    before,
    sinon,
    afterEach,
    it,
    expect,
    mockExpress,
} from '../test';
import { ExpressFactory2 } from './express_factory_2';
import logger from './logger';

type Express = e.Express;

describe('ExpressFactory2', async () => {
    let mockPort: number;
    let expressFactory2: ExpressFactory2;
    let getDefaultExpressApplicationStub: SinonStub<[], Express>;
    let expressStub: SinonStub;

    before(() => {
        mockPort = 1234;
        // @ts-ignore
        expressFactory2 = new ExpressFactory2({ port: mockPort });
        getDefaultExpressApplicationStub = sinon.stub(ExpressFactory2, 'getDefaultExpressApplication')
            .returns(mockExpress as unknown as Express);
        expressStub = sinon.stub(e) as unknown as SinonStub;
    });

    afterEach(() => {
        sinon.reset();
    });

    describe('.listen', async () => {
        it('#listen on the happy path calls app.listen', async () => {
            expressFactory2.listen();
            expect(mockExpress.listen).to.have.callCount(1);
        });
    });

    describe('#getDefaultExpressApplication', async () => {
        it('#getDefaultExpressApplication on the happy path returns express', async () => {
            getDefaultExpressApplicationStub.restore();
            const actual = ExpressFactory2.getDefaultExpressApplication();
            expect(typeof actual).to.equal('function');
        });
    });

    describe('#onServerStart', async () => {
        let loggerStub: SinonStub;

        before(() => {
            loggerStub = sinon.stub(logger, 'info');
        });

        it('#onServerStart on the happy path calls the logger', async () => {
            expressFactory2.onServerStart();
            expect(loggerStub.callCount).to.be.greaterThan(1);
        });
    });
});
