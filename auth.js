const auth = require('basic-auth');

const admins = { 'hump': { password: 'e#hP4+J2cxa3W&RX' }, };

module.exports = function (request, response, next) {
  var user = auth(request);
  if (!user || !admins[user.name] || admins[user.name].password !== user.pass) {
    response.set('WWW-Authenticate', 'Basic realm="example"');
    return response.status(401).send();
  }
  return next();
};