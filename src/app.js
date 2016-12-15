/**
 * @Author: Guan Gui <guiguan>
 * @Date:   2016-12-13T19:27:09+11:00
 * @Email:  root@guiguan.net
 * @Last modified by:   guiguan
 * @Last modified time: 2016-12-14T16:09:11+11:00
 */

'use strict';

const path = require('path');
const serveStatic = require('feathers').static;
const favicon = require('serve-favicon');
const compress = require('compression');
const cors = require('cors');
const feathers = require('feathers');
const configuration = require('feathers-configuration');
const hooks = require('feathers-hooks');
const rest = require('feathers-rest');
const bodyParser = require('body-parser');
const socketio = require('feathers-socketio');
const middleware = require('./middleware');
const services = require('./services');
const swagger = require('feathers-swagger');

const app = feathers();

app.configure(configuration(path.join(__dirname, '..')));

app
  .use(compress())
  .options('*', cors())
  .use(cors())
  .use(favicon(path.join(app.get('public'), 'favicon.ico')))
  .use('/', serveStatic(app.get('public')))
  .use(bodyParser.json())
  .use(bodyParser.urlencoded({extended: true}))
  .configure(hooks())
  .configure(rest())
  .configure(swagger({
    docsPath: '/docs',
    uiIndex: path.join(__dirname, '../public/docs.html'),
    info: {
      title: 'A test',
      description: 'A description'
    }
  }))
  .configure(socketio())
  .configure(services)
  .configure(middleware);

module.exports = app;
