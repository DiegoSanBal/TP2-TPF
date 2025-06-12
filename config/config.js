import {env} from 'node:process';

const SERVER_PORT = env.SERVER_PORT || 3000; 

export {
    SERVER_PORT,
}