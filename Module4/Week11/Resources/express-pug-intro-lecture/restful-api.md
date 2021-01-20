# RESTful Routes

REST is a naming convention for a route path + method combination.

## URL Path

- can include wildcards

## Method

- GET
- POST
- PATCH/PUT
- DELETE

## Plural Resources

A plural resource is one that can have more than one item
returned/created/edited/deleted.

### GET Requests

- `GET /posts` - getting/displaying all the posts
- `GET /posts/:id` - get/display the post based on the wildcard of the :id
- `GET /posts/:post_id/comments` - get/display all the comment for the specified
  post based on the wildcard of :post_id
- `GET /comments/:id` - get/display a comment based on the wildcard of :id

- `POST /posts` - create a single post
- `POST /posts/:post_id/comments` - create a comment for the specified post with
  the wildcard of :post_id

- `PATCH /posts/:id` - edit the post with the specified id
- `PUT /comments/:id` - edit the comment with the specified id

- `DELETE /posts/:id` - delete the post with the specified :id
- `DELETE /comments/:id` - delete the comment with the specified :id

## Singular Resource

A singular resource is one that can have only one item
returned/created/edited/deleted.

- `GET /session`
- `DELETE /session`
- `POST /session`
