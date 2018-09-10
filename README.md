<h1 align="center">
  <img src="media/video.png" width="15%"><br/>ReactTube
</h1>

<h4 align="center">💎 Video Streaming Platform</h4>

## Contents

* [Overview](#overview)
* [Application Architecture](#application-architecture)
* [Features](#features)
* [Models](#models)
* [Backend](#backend)
* [Usage](#usage)
* [API](#api)
* [Attribution](#attribution)
* [References](#references)
* [Contributing](#contributing)
* [License](#license)

## Overview

ReactTube is a video streaming platform.

## Application Architecture



## Features

* 📹 Supports video uploads
* 👤 Allows users to register and sign up to upload videos
* 🔐 Authentication is built in, users can sign in and out with JWTs
* ℹ️ Authorized users allowed to edit and delete their account information
* 📺 Supports video player customization
* ↩️ Supports autoplay
* 🔎 Server side rendering to improve SEO
* ✈️ Supports client and server side.
* 👍 More features coming soon...

## Models

**User Model**

The following user model is what we use to handle user-related business logic. The user model supports the following attributes, and will be stored in a MongoDB database.

| Field    | Type   | Description                                                                        |
|----------|--------|------------------------------------------------------------------------------------|
| name     | String | User's name (required)                                                             |
| email    | String | Unique field that stores the user's email which will allow us to identify account  |
| password | String | Required for authentication, database will store the encrypted password (required) |
| created  | Date   | Automatic timestamp of when the user account was created                           |
| updated  | Date   | Automatic timestamp of when the user account was updated                           |



## Backend

* Basic Features
  - User features
    - Create users
    - List all users
    - View, update, delete a user in a database


## Usage

## API

**User CRUD Endpoints**

The following endpoints will be exposed so that the frontend can call certain operations. Some of these CRUD operations require that the client be authenticated and/or authorized.

| HTTP Method | API Route          | Description              |
|-------------|--------------------|--------------------------|
| POST        | /api/users         | Create user              |
| GET         | /api/users         | List all users           |
| GET         | /api/users/:userId | Fetch a specific user    |
| PUT         | /api/users/:userId | Update a user            |
| DELETE      | /api/users/:userId | Delete user              |
| POST        | /auth/signin       | User sign-in             |
| GET         | /auth/signout      | User sign-out (optional) |








## Attribution

* Icon by [ICON54](https://thenounproject.com/icon54app/) from [thenounproject](https://thenounproject.com/).

## References

* [Fullstack React Book](https://www.fullstackreact.com/)
* [MongoDB GridFS Docs](https://docs.mongodb.com/manual/core/gridfs/)

## Contributing

Contributions are always welcome! For bug reports or requests please submit an issue.

## License

[MIT](https://github.com/moebg/ReactTube/blog/master/LICENSE)