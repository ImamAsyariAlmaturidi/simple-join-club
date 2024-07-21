# Hacktiv Club API Documentation

&nbsp;

## Models :

_User_
```
- fullName: string, required
- email: string, required, unique
- password: string, required
```

_Club_
```
- title: string, required
- imageUrl: string, required
- description: string, required
```

_MyClub_
```
- UserId : integer, required
- ClubId: integer, required
```

&nbsp;

## Endpoints :

List of available endpoints :

- `POST /register`
- `POST /login`

And routes below need authentication :

- `GET /clubs`
- `GET /clubs/:id`
- `GET /myclubs`
- `POST /myclubs/:ClubId`

Routes below need authentication & authorization :

- `DELETE /myclubs/:id`
- `PUT /clubs/:myClubId`

&nbsp;

## 1. POST /register

Request:

- body:
```json
{
  "fullName": "string",
  "email": "string",
  "password": "string"
}
```

_Response (201 - Created)_
```json
{
  "id": "integer",
  "email": "string",
  "fullName": "string"
}
```

_Response (400 - Bad Request)_

```json
{
  "message": "Full Name is required"
}
OR
{
  "message": "Email is required"
}
OR
{
  "message": "Invalid email format"
}
OR
{
  "message": "Email must be unique"
}
OR
{
  "message": "Password is required"
}
```

&nbsp;

## 2. POST /login

Request:

- body:
```json
{
  "email": "string",
  "password": "string"
}
```

_Response (200 - OK)_

```json
{
  "access_token": "string"
}
```

_Response (400 - Bad Request)_

```json
{
  "message": "Email is required"
}
OR
{
  "message": "Password is required"
}
```

_Response (401 - Unauthorized)_

```json
{
  "message": "Invalid email/password"
}
```

&nbsp;

## 3. GET /clubs

Description:
- Get all clubs from database

Request:

- headers: 
```json
{
  "authorization": "Bearer <token>"
}
```

_Response (200 - OK)_
```json
[
  {
    "id": 1,
    "title": "Music",
    "imageUrl": "https://cdn.dribbble.com/users/1410611/screenshots/14742045/media/e7e827a0f9fe79d3c85906573f64ca49.jpg?compress=1&resize=1600x1200",
    "description": "Fancy music club"
  },
  {
    "id": 2,
    "title": "Drama",
    "imageUrl": "https://cdn.dribbble.com/users/80548/screenshots/4907257/dribble_template_the_jump_app_01.jpg?compress=1&resize=800x600",
    "description": "Fancy drama club"
  },
  ...,
]
```

## 4. GET /clubs/:id

Description:
- Get one club by Id from database

Request:

- headers: 
```json
{
  "authorization": "Bearer <token>"
}
```

- params:

```json
{
  "id": "integer"
}
```

_Response (200 - OK)_
```json
  {
    "id": 1,
    "title": "Music",
    "imageUrl": "https://cdn.dribbble.com/users/1410611/screenshots/14742045/media/e7e827a0f9fe79d3c85906573f64ca49.jpg?compress=1&resize=1600x1200",
    "description": "Fancy music club"
  }
```

_Response (404 - Not Found)_
```json
{
  "message": "Data not found"
}
```

&nbsp;

## 5. POST /myclubs/:ClubId

Description:
- Join the club by clubId

Request:

- headers: 
```json
{
  "authorization": "Bearer <token>"
}
```

- params:

```json
{
  "ClubId": "integer (required)"
}
```

_Response (201 - Created)_
```json
{
  "id": 3,
  "ClubId": 2,
  "UserId": 3
}
```

_Response (404 - Not Found)_
```json
{
  "message": "Data not found"
}
```

&nbsp;

## 6. GET /myclubs

Description:
- Show current user clubs

Request:

- headers: 
```json
{
  "authorization": "Bearer <token>"
}
```

_Response (200 - OK)_
```json
[
  {
    "id": 1,
    "UserId": 2,
    "ClubId": 1,
    "Club": {
      "id": 1,
      "imageUrl": "https://cdn.dribbble.com/users/1410611/screenshots/14742045/media/e7e827a0f9fe79d3c85906573f64ca49.jpg?compress=1&resize=1600x1200",
      "title": "Music",
      "description": "Music club"
    }
  }
]
```

&nbsp;

## 7. DELETE /myclubs/:id

Description: 
- Delete user myclub by id (Leave club)

Request:

- headers: 
```json
{
  "authorization": "Bearer <token>"
}
```

- params:
```json
{
  "id": "integer (required)"
}
```

_Response (200 - OK)_
```json
{
  "message": "You have leave the club"
}
```

_Response (404 - Not Found)_

```json
{
  "message": "Data not found"
}
```

_Response (403 - Forbidden)_

```json
{
  "message": "You are not authorized"
}
```

&nbsp;


## 8. PUT /clubs/:MyClubId

Description:
- User that has been join, can update the Club
- Update the club by MyClubId

Request:

- headers: 
```json
{
  "authorization": "Bearer <token>"
}
```

- params:

```json
{
  "MyClubId": "integer (required)"
}
```

- body:
```json
{
  "imageUrl": "https://cdn.dribbble.com/users/1410611/screenshots/14742045/media.png",
  "title": "Music",
  "description": "Music club"
}
```

_Response (200 - OK)_
```json
{
  "message": "Club has been updated"
}
```

_Response (404 - Not Found)_
```json
{
  "message": "Data not found"
}
```

_Response (403 - Forbidden)_

```json
{
  "message": "You are not authorized"
}
```

&nbsp;



## Global Error

_Response (401 - Unauthorized)_

```json
{
  "message": "Invalid token"
}
```

_Response (500 - Internal Server Error)_

```json
{
  "message": "Internal server error"
}
```
