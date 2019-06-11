import sinonChai from 'sinon-chai';
import * as chai from 'chai';
import { createSandbox } from 'sinon';
import { mockReq, mockRes } from 'sinon-express-mock';

chai.use(sinonChai);

export const sinon = createSandbox({ useFakeServer: true });

export {
    SinonStub,
    SinonStubbedInstance,
    SinonSpy,
    SinonMock,
} from 'sinon';

export {
    expect,
    assert,
} from 'chai';

export {
    after,
    afterEach,
    before,
    beforeEach,
    describe,
    it,
} from 'mocha';

export { mockReq } from 'sinon-express-mock';

export { mockRes } from 'sinon-express-mock';

export const mockExpress: { [key: string]: sinon.SinonStub } = {
    all: sinon.stub(),
    application: sinon.stub(),
    delete: sinon.stub(),
    get: sinon.stub(),
    head: sinon.stub(),
    locals: sinon.stub(),
    map: sinon.stub(),
    mime: sinon.stub().returns('fake_mime'),
    options: sinon.stub(),
    patch: sinon.stub(),
    post: sinon.stub(),
    put: sinon.stub(),
    request: sinon.stub().returns(mockReq),
    resource: sinon.stub(),
    response: sinon.stub().returns(mockRes),
    router: sinon.stub().returns('fake_router'),
    routes: sinon.stub(),
    settings: sinon.stub(),
    use: sinon.stub().returns({}),
    version: sinon.stub().returns('0'),
    listen: sinon.stub().returns({}),
    configure: sinon.stub().returns({}),
    createApplication: sinon.stub().returns({}),
    createServer: sinon.stub().returns({}),
    defaultConfiguration: sinon.stub().returns({}),
    disable: sinon.stub().returns({}),
    disabled: sinon.stub().returns({}),
    enable: sinon.stub().returns({}),
    enabled: sinon.stub().returns({}),
    engine: sinon.stub().returns({}),
    init: sinon.stub().returns({}),
    param: sinon.stub().returns({}),
    path: sinon.stub().returns({}),
    render: sinon.stub().returns({}),
    route: sinon.stub().returns({}),
    set: sinon.stub().returns({}),
};
