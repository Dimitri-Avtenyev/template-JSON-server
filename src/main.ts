import jsonServer from 'json-server';
import path from 'path';
import { TimeEntry } from './types/timeEntry.type';

const server = jsonServer.create();
const router = jsonServer.router(path.join(__dirname, 'data', 'db.json'));
const middlewares = jsonServer.defaults();

server.use((req, res, next) => {
  const { user_id, from, to } = req.query;

  if (user_id) {
    const timeEntries: TimeEntry[] = router.db.get('time_entries');

    let userTimeEntries: TimeEntry[] = timeEntries.filter(
      (timeEntry) => timeEntry.user.id === parseInt(user_id.toString()),
    );
    if (from) {
      userTimeEntries = userTimeEntries.filter((timeEntry) => {
        const spentDate = new Date(timeEntry.spent_date);
        const fromIsoDate = new Date(from.toString());

        return spentDate >= fromIsoDate;
      });
    }
    if (userTimeEntries) {
      res.json(userTimeEntries);
    } else {
      res.status(404).json({ message: 'User not found' });
    }
  } else {
    next();
  }
});
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
