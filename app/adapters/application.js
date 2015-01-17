import config from '../config/environment';

console.log(config.local_couchdb_instance);
console.log(config.baseURL);

var db = new PouchDB(config.local_couchdb_instance);
var remote = new PouchDB(config.online_couchdb_instance, {ajax: {timeout: 20000}});
db.sync(remote, {live: true});

export default EmberPouch.Adapter.extend({
  db: db
});