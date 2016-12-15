/**
 * @Author: Guan Gui <guiguan>
 * @Date:   2016-12-13T19:27:09+11:00
 * @Email:  root@guiguan.net
 * @Last modified by:   guiguan
 * @Last modified time: 2016-12-15T12:54:12+11:00
 */



'use strict';
const message = require('./message');
const authentication = require('./authentication');
const user = require('./user');

module.exports = function() {
  const app = this;


  app.configure(authentication);
  app.configure(user);
  app.configure(message);
};
