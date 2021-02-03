---
title: JSON Web Tokens
date: 2021-01-20T12:51:00.000Z
---

JSON Web Tokens (JWT) are a means of securely transmitting information between parties contained as a JSON object. JWT are 
defined by an open standard RFC 7519 and can be trusted because the token is digitally signed. JWTs can be signed with a secret  (HMAC algorithm) or by a public/private key pair using RSA or ECDSA. JWTs provide a modern and scalable way to manage authentication.

<!-- more -->
# JWT Introduction

> Pronounced "jot" (don't ask me why)

A token based authentication system allows users to enter their username and password in order to obtain a token which allows them to fetch or access a specific resource. A JWT is created with a given expiry - defining the period in which the JWT will be valid. Each JWT is self-contained, meaning within the token itself all necessary information is held, i.e. auth infomation, expiry time and signage metadata. 

When using JWT as a means of authentication, each time the user needs to access a protected resource their valid JWT is passed along in the HTTP request. On the receiving end, the server then validates the token and responds accordingly. 

The use of this self-contained token passing system is quite a bit different to the "old-school" solution. Typically, the backend server would create a session and then the corresponding cookie is given to the user which can be used to link them to that session.

Implementation of this session system still works - however given many applications are evolving to become more modular and less monolithic - JSON web tokens are becoming a much more viable option.

Important tidbit, JWTs are not encrypted, they are only base64 encoded and signed - when a JWT is read the only thing being done is verification of the signature to ensure it is from a legitimate source. This is why keeping the secrets actually secret is paramount.

# Why use JWT

This post has already stated a few points why JWT should be used, but perhaps the biggest advantages follows:

- Portable: a single JWT can be used across multiple backend servers
- No cookies required: secure storage on the token on device is all that's required
- No session to manage: Given that JWT is self contained, the backend server does not have to keep track of any extra information
- Performance: A JWT reduces network round trip time
- Decentralised: Similar to no session - a token can be generated anywhere allowing authentication to become isolated from a larger service


# Anatomy of a JWT

As a JSON web token is self contained, the structure of such is important. A JWT is defined with 3 main parts: a header, payload and verification signature. 

### Header

The header will contain both the signing algorithm type and the token type. A typical algorithm would be HS256 (symmetric) - this type of algorithm is to be used when both parties can use the same key for signature generation and validation. Where as implementation of something like RS256 (asymmetric) is more useful where you cannot secure both ends of the transaction. RS256 uses a public/private key pair method and should be used in scenarios where the public facing end is not developed by you, i.e. a public API.

```json
{ 
  "typ": "JWT",
  "alg": "HS256"
}
```


### Payload

A payload will carry the bulk of the goodies in the JWT - in here is where we will put the relevant information that we want to transmit to the other end. More accurately the bulk of the JWT is referred to as JWT claims, the claims can be registered, public or private. 

```json
{
  "iss": "auth.snoopchat.com",
  "exp": "604800",
  "username": "bobjoe123"
}
```

#### Registered Claims
These are claims which have names that are reserved for use, included in this list are:
- sub: token subject
- aud: token audience
- iss: issuer of token
- exp: expiry date of the token
- iat: time of token issuing
- nbf: time before the token must not be accepted
- jti: token unique identifier - can be used to prevent multple uses

The above registered claims are to be used as a starting point for a JWT configuration - though in most cases not all of these registered claims will be used. 


#### Public Claims 
Public claims are customisable and allows the payload to include information like username which is relevant to the application. 

Custom public claims should be validated and agreed by both the issuer and consumer, in order to ensure that the data format is well understood. This is not such a large issue for applications where both ends of the exchange are handled - but should be of consideration for those other scenarios. 

Public claims can also be registered on the IAIA "JSON Web Token Claims" registry to ensure the structure and naming conventions do not collide with other applications. The last consideration - is to make claim names collision-resistant by including a application specific value.

#### Private Claims
Private claims are similar to public claims in their customisability, however are not generally used for general consumption. Typically they will include application-specific metadata, i.e. API versioning.

It needs to be ensured as well that private claim naming does not collide with either registered or public claims.

# Implementing JWTs

In this article I won't include code for a JWT auth system but I will run through some psuedo code representing the best practices usage.

There are varying levels of JWT usage, particularly depending on the type of application and also the frontend client system (e.g. SSR, SPA).

A basic overview of a best practice with all bases covered JWT auth service would be:
1. Client signs up/logs in to auth service (@/login)
2. Auth service generates signed JWT returns to client serialised
3. Client stores the token in persistent browser storage (most likely a cookie, not localStorage)
4. For every authorised request the client sends the JWT
5. The server verifies the JWT is legitimate
6. Bonus: the client refreshed the JWT when it is about to expire - so the client isn't just logged out

It is important to recognise what type of JWT should be used. If you are developing both ends of the JWT exchange then it is safe to use a symmetric algorithm such as SHA256. In this instance there is only one secret key which is shared between the signer and consumer. With a symmetric algorithm is it possible for a person to impersonate someone else, if they determine the secret key. 

The other type of algorithm, asymmetric, involves the key pair - one private the other public. This process uses the private key for generating the signed tokens and the public is used to verify the authenticity. An example of this algorithm is RSA256.


Have a look at my projects page to see a running example and real world usage of JWTs for authentication of users. 