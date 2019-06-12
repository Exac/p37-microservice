import {
    describe,
    beforeEach,
    afterEach,
    it,
    sinon,
    expect, mockReq, mockRes,
} from '../test';
import { LoginServer } from './login_server';
import { ExpressFactory2 } from '../shared/express_factory_2';

describe('LoginServer', () => {
    let loginServer: LoginServer;

    beforeEach(async () => {
        loginServer = new LoginServer();
    });

    afterEach(() => {
        sinon.restore();
    });

    describe('#name', () => {
        it('is set', async () => {
            expect(loginServer.name).to.be.a('string');
        });
    });
    describe('#constructor()', () => {
        it('uses a default port if none set on the happy path', async () => {
            // Create a new LoginServer without passing in a port
            const ls: LoginServer = new LoginServer();
            expect(ls.port).to.equal(8080);
        });
    });
    describe('#app()', async () => {
        it('exists on loginServer, even if loginServer doesn\'t implement it.', async () => {
            expect(loginServer.app).to.be.a('function');
        });
    });
    describe('#listen()', () => {
        it('calls onServerStart on the happy path', async () => {
            const superListenStub = sinon.stub(ExpressFactory2.prototype, 'listen').resolves();
            const onServerStartStub = sinon.stub(LoginServer.prototype, 'onServerStart').returns();

            await loginServer.listen();

            expect(superListenStub).to.have.callCount(1);
            expect(onServerStartStub).to.have.callCount(1);
        });
    });
    describe('#router()', () => {
        it('exists', async () => {
            // TODO: Implement later.
            const req = mockReq();
            const res = mockRes();
            loginServer.router(req, res, sinon.stub());
        });
    });
});
