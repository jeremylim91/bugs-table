import db from './models/index.mjs';

// import your controllers here
import bugs from './controllers/bugs.mjs';

export default function routes(app) {
  // initialize the controller functions here
  // pass in the db for all callbacks
  const bugsController = bugs(db);
  // define your route matchers here using app
  app.get('/', bugsController.index);
  app.post('/createBug', bugsController.create);
}
