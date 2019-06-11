"use strict";
// import * as express from 'express';
// import * as winston from 'winston';
// import {
//     after,
//     describe,
//     SinonStub,
//     before,
//     sinon,
//     afterEach,
//     it,
//     expect,
//     SinonSpy,
// } from '../test';
// import ExpressFactory from './express_factory';
// import logger from './logger';
//
// type Application = express.Application;
// describe('ExpressFactory', () => {
//     let expressStub: { listen: SinonStub; use: SinonStub };
//     let expressFactory: ExpressFactory;
//     before(() => {
//         expressStub = {
//             listen: sinon.stub(),
//             use: sinon.stub(),
//         };
//         expressFactory = new ExpressFactory({ app: expressStub as unknown as Application });
//     });
//     afterEach(() => {
//         sinon.reset();
//     });
//     after(() => {
//         sinon.restore();
//     });
//
//     describe('#constructor', () => {
//         it('Starts the login server when constructed', async () => {
//             expect(expressFactory.app).to.deep.equal(expressStub);
//             expect(expressFactory.app.listen).to.have.been.calledWithMatch(80);
//         });
//     });
//
//     describe('#getDefaultExpressApplication', () => {
//         // it('returns an express application', async () => {
//         //     // eslint-disable-next-line dot-notation
//         //     const actual = ExpressFactory['getDefaultExpressApplication']();
//         //
//         //     expect(actual).to.haveOwnProperty('listen');
//         //     expect(actual).to.haveOwnProperty('use');
//         // });
//     });
//
//     describe('#greeting', () => {
//         it('Logs a message with the port', async () => {
//             const loggerStub: SinonSpy<[object], winston.Logger> = sinon.spy(logger, 'info');
//
//             // eslint-disable-next-line dot-notation
//             const actual = expressFactory['greeting']();
//
//             expect(loggerStub).to.have.been.calledWithMatch('@ http://');
//             expect(loggerStub).to.have.callCount(1);
//         });
//     });
// });
//# sourceMappingURL=express_factory.spec.js.map