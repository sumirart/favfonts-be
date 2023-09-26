# Favorite Fonts Backend Repository

## Description

This is a backend repository for Favorite Fonts app, an app for Chingu Voyage 46. It fetch Google Fonts API and show all the fonts information.

## Features

- Register
- Login
- Fetch all fonts

## How to Setup

- Clone this repository
- Run `npm install`
- Copy `.env.example` to `.env` and fill in the information required
- Run `npm start`

## API List

- `/auth/register` to register by sending `username`, `password`, and `name` through body
- `/auth/login` to login by sending `username` and `password` through body
- `/fonts/all` to get list of fonts, must have `token` in the header

## Dependencies

- [Prisma](https://www.npmjs.com/package/prisma)
- [Typescript](https://www.npmjs.com/package/typescript)
- [Bcryptjs](https://www.npmjs.com/package/bcryptjs)
- [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken)
- [express-validator](https://www.npmjs.com/package/express-validator)
