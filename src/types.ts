import { Application } from 'express';

/**
 * This file is home to all the interfaces, types, and enums
 * found in the project.
 */

// Micro-services supported
export enum MicroserviceMode {
    FRONTEND = 'FRONTEND',
    LOGIN = 'LOGIN'
}

export interface IExpressFactory2Config {
    port: number;
}

export interface IExpressFactory2 {
    port: number;

    app(): Application;
    listen(): void;
}
