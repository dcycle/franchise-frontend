// @flow
/**
 * My database module.
 *
 * Interact with the database.
 */

class StaticPath extends require('../component/index.js') {
  async init(
    app /*:: : Object */
  ) /*:: : Object */ {
    const expressApp = app.component('./express/index.js').expressApp();
    const expressModule = app.component('./express/index.js').express();

    app.config().modules['./staticPath/index.js'].paths.forEach((e) => {
      expressApp.use(expressModule.static(e));
    });
  }
  dependencies() {
    return [
      './express/index.js',
    ];
  }
}

// $FlowExpectedError
module.exports = new Singleton();
