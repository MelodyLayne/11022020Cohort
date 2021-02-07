- Walk through the OAuth workflow
- Walk through the anatomy of a jwt
- How is a JWT signature generated? What is its purpose?
A JWT signature is generated from the header, payload and a secret key to ensure that no malicious actor has tampered with the data. It is impossible to generate a valid signature without a secret key.

# The signup process
## Client side
- [] setup a route for signup
- [] serve a signup form 
- [] have an external js to make an ajax request.
## Back-end
- [] create the POST /users route.
- [] generate the JWT
- [] send the response back to client
## Client side again
- [] receive the JWT
- [] save JWT in localStorage
- [] send the JWT along with future requests