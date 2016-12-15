/**
 * @Author: Guan Gui <guiguan>
 * @Date:   2016-12-13T19:27:09+11:00
 * @Email:  root@guiguan.net
 * @Last modified by:   guiguan
 * @Last modified time: 2016-12-14T16:05:54+11:00
 */



'use strict';

const authentication = require('feathers-authentication');


module.exports = function() {
  const app = this;

  let config = app.get('auth');



  app.configure(authentication(config));
};
