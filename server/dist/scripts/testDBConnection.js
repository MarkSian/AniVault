"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const db_1 = __importDefault(require("../config/db"));
const testDBConnection = async () => {
    try {
        await (0, db_1.default)();
        console.log('Database connection successful');
        process.exit(0);
    }
    catch (error) {
        console.error('Database connection failed', error);
        process.exit(1);
    }
};
testDBConnection();
