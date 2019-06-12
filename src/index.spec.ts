import * as config from 'node-config-ts';
import {
    after,
    describe,
    expect,
    before,
    afterEach,
    sinon,
    it,
    SinonStub,
    assert,
} from './test';
import { main } from './index';
import { ExpressFactory2 } from './shared/express_factory_2';

describe('index', () => {
    let expressFactory2ListenStub: SinonStub<[], Promise<void>>;

    before(() => {
        // Stub the method that provides ExpressFactory2
        // with express()
        expressFactory2ListenStub = sinon.stub(ExpressFactory2.prototype, 'listen');
    });
    afterEach(() => {
        sinon.reset();
    });
    after(() => {
        sinon.restore();
    });

    describe('main()', () => {
        it('main() throws an error when the microservice is set incorrectly', async () => {
            config.config.MICROSERVICE.MODE = 'UNKNOWN';
            await main()
                .then(() => {
                    assert.fail('main should have thrown an error when microservice config was bad');
                })
                .catch((error: Error) => {
                    expect(error.message).to.equal('ENVIRONMENT_MICROSERVICE_MISSING');
                });
        });
        it('main() creates a login server on the happy path', async () => {
            config.config.MICROSERVICE.MODE = 'LOGIN';
            await main();
            expect(expressFactory2ListenStub).to.have.callCount(1);
        });
        it('main() throws an error with an invalid configuration', async () => {
            try {
                await main('FAKE_MODE');
                assert.fail('FAKE_MODE should have caused an error.');
            } catch (error) {
                expect(error.message).to.equal('ENVIRONMENT_MICROSERVICE_MISSING');
            }
        });
    });
});
