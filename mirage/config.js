import { Response } from 'ember-cli-mirage';

export default function() {

  // These comments are here to help you get started. Feel free to delete them.

  /*
    Config (with defaults).

    Note: these only affect routes defined *after* them!
  */
  // Passthrough for coverage testing
  this.passthrough('/write-coverage');

  this.urlPrefix = "http://localhost:8000";
  this.namespace = "";
  this.passthrough("/auth/login");
  this.passthrough("/auth/logout");
  this.passthrough("/auth/refresh");
  this.passthrough("/posts");
  this.passthrough("/posts/:id");
  this.passthrough("/posts/:id/publish");
  this.passthrough("/posts/:id/unpublish");
  this.passthrough("/static-pages");
  this.passthrough("/static-pages/:id");
  this.passthrough("/sp-reorder");

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
  this.get('/posts', (schema, request) => {
    const published = request.queryParams.published;
    if (published === null || published === undefined) {
      return schema.posts.all();
    } else {
      return schema.db.posts.where({published: published === "true"});
    }
  });
  this.get('/posts/:id');
  this.post('/posts', (schema, request) => {
      const newPost = JSON.parse(request.requestBody);
      newPost.published = false;
      return schema.db.posts.insert(newPost);
  });
  this.put('/posts/:id', (schema, request) => {
    const attrs = JSON.parse(request.requestBody);
    let post = schema.posts.find(request.params.id);
    post.update(attrs);
  });
  this.del('/posts/:id');
  this.post('/posts/:id/publish', (schema, request) => {
    const post = schema.posts.find(request.params.id);
    post.update({published:true});
  });
  this.post('/posts/:id/unpublish', (schema, request) => {
    const post = schema.posts.find(request.params.id);
    post.update({published:false});
  });

  this.get('/static-pages', (schema, request) => {
    let urlToSearchFor = request.queryParams.url;
    if(!urlToSearchFor) {
      return schema.staticPages.all();
    } else {
      return schema.db.staticPages.where({url: urlToSearchFor});
    }
  });

  this.post('/static-pages', (schema, request) => {
    let newPage = JSON.parse(request.requestBody);
    if (newPage.title.indexOf("FAILME") !== -1) {
      return new Response(400, {error: 'bad title'});
    } else {
      return schema.db.staticPages.insert(newPage);
    }
  });

  this.get('/static-pages/:id', (schema, request) => {
    return schema.db.staticPages.find(request.params.id);
  });

  this.put('/static-pages/:id', (schema, request) => {
    let attrs = JSON.parse(request.requestBody);
    let page = schema.staticPages.find(request.params.id);
    page.update(attrs);
  });
  this.del('/static-pages/:id');

  this.post('/auth/login', (schema, request) => {
    const attrs = JSON.parse(request.requestBody);
    const pass = attrs.password;
    if (pass.indexOf("ok") !== 0) {
      return new Response(400, {error: 'password or username not correct'});
    } else {
      return {
        token: 12341234
      };
    }
  });

  this.post("/auth/logout", () => {});

  this.get('/auth/logout', () => {
    return new Response(200);
  });

  this.post('/sp-reorder', (schema, request) => {
    let order = JSON.parse(request.requestBody).order;
    if(order.length === schema.staticPages.all().length) {
      return new Response(200, "Success");
    } else {
      return new Response(400, "Failed");
    }
  });
}
