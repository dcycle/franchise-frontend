// @flow
/**
 * Displays the home page.
 */

class Home extends require('../component/index.js') {

  dependencies() {
    return [
      './express/index.js',
      './chatApi/index.js',
    ];
  }

  async run(
    app /*:: : Object */
  ) /*:: : Object */ {
    const path = app.config().modules['./home/index.js'].path;
    const internal = app.config().modules['./home/index.js'].internal;
    const io = app.c('socket').socketIoHttp();

    app.c('express').addRoute('home', 'get', path, (req, res) => {
      res.render('home', {
        name: 'hello',
      });
    });

    app.c('express').addRoute('homeFranchise', 'get', internal, (req, res) => {
      res.render('homeFranchise', {
        name: req.params.franchiseId,
      });
    });

    app.c('chat').addHook((message) => {
      io.emit('message', message);
    });

  }

}

// $FlowExpectedError
module.exports = new Home();
