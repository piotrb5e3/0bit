import { Response } from 'ember-cli-mirage';

export default function() {

  // These comments are here to help you get started. Feel free to delete them.

  /*
    Config (with defaults).

    Note: these only affect routes defined *after* them!
  */
  this.urlPrefix = "http://localhost:8000";
  this.namespace = "api";
  this.passthrough("/auth/login");
  this.passthrough("/auth/logout");
  this.passthrough("/auth/refresh");
  this.passthrough("/posts");
  this.passthrough("/posts/:id");
  this.passthrough("/static-pages");

  this.urlPrefix = 'http://localhost:4200';    // make this `http://localhost:8080`, for example, if your API is on a different server
  this.namespace = 'api';    // make this `api`, for example, if your API is namespaced
  this.timing = 400;      // delay for each request, automatically set to 0 during testing

  /*
    Shorthand cheatsheet:

    this.get('/posts');
    this.post('/posts');
    this.get('/posts/:id');
    this.put('/posts/:id'); // or this.patch
    this.del('/posts/:id');

    http://www.ember-cli-mirage.com/docs/v0.2.x/shorthands/
  */
  this.get('/posts');
  this.get('/posts/:id');
  this.post('/posts');
  this.patch('/posts/:id');

  this.post('/login', function(db, request) {
    var pass = request.requestBody;
    pass = pass.substring(pass.indexOf("password="));
    pass = pass.substring(pass.indexOf("=") + 1);
    if (pass === "failme") {
      return new Response(400, {error: 'password or username not correct'});
    } else {
      return {
        token: 12341234
      };
    }
  });

  this.get('/logout', () => {
    return new Response(200);
  });
}
