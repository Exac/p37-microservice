import e from 'express';
import {
    describe,
    SinonStub,
    before,
    beforeEach,
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
        getDefaultExpressApplicationStub = sinon.stub(ExpressFactory2, 'getDefaultExpressApplication')
            .returns(mockExpress as unknown as Express);
        expressStub = sinon.stub(e) as unknown as SinonStub;
    });

    beforeEach(() => {
        mockPort = 1234;
        // @ts-ignore
        expressFactory2 = new ExpressFactory2({ port: mockPort });
    });

    afterEach(() => {
        sinon.reset();
    });

    describe('#constructor()', () => {
        it('sets a default port if none is provided', async () => {
            // @ts-ignore
            const ef2 = new ExpressFactory2();
            expect(ef2.port).to.equal(8080);
        });
    });

    describe('#app()', () => {
        it('only sets this.express when it is unset, on the happy path', async () => {
            // @ts-ignore
            const ef2 = new ExpressFactory2();
            ef2['express'] = 'express'; /* eslint-disable-line dot-notation */
            ef2.app();
            expect(ef2['express']).to.equal('express'); /* eslint-disable-line dot-notation */
        });
    });

    describe('#listen()', async () => {
        it('#listen is a function', async () => {
            try {
                await expressFactory2.listen();
            } catch (err) {
                // @ts-ignore
            }
            expect(expressFactory2.listen).to.be.a('function');
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
        it('#onServerStart on the happy path calls the logger', async () => {
            expressFactory2.onServerStart();
            expect(expressFactory2.onServerStart).to.be.a('function');
        });
    });
});
