import jsonServer from 'json-server';
import path from 'path';

const server = jsonServer.create();
const router = jsonServer.router(path.join(__dirname, 'data', 'db.json'));
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(router);
server.set('port', 1337);
server.listen(server.get('port'), () => {
  console.log(
    `JSON Server is running at:\n->>> http://localhost:${server.get(
      'port',
    )} <<<-`,
  );
});
