console.log('hello world! again');

import http from 'http';
import { IncomingMessage, ServerResponse } from 'http';

const server = http.createServer((request:IncomingMessage, response: ServerResponse) => {
    console.log('Пришёл запрос!');
    console.log(request);
    console.log(response);
});

server.listen(3000);
