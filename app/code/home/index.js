// @flow
/**
 * Displays the home page.
 */

class Home extends require('../component/index.js') {

  dependencies() {
    return [
      './express/index.js',
      './contentHub/index.js',
    ];
  }


  async run(
    app /*:: : Object */
  ) /*:: : Object */ {
    const path = app.config().modules['./home/index.js'].path;
    const internal = app.config().modules['./home/index.js'].internal;
    const key = app.config().modules['./home/index.js'].googleMapsApiKey;

    app.c('express').addRoute('home', 'get', path, (req, res) => {
      res.render('home', {
        googleMapsKey: key,
        allFranchises: app.c('contentHub').json,
      });
    });

    app.c('express').addRoute('homeFranchise', 'get', internal, (req, res) => {
      app.c('contentHub').requestResponse(req, res);
    });

  }

}

// $FlowExpectedError
module.exports = new Home();
