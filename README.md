## This repo is to create an api for the plant water tracker.

## Users Schema

| Method | Endpoint                  | Required Request Body             | Returns                           |
| ------ | ------------------------- | --------------------------------- | --------------------------------- |
| GET    | `/users`                  | -                                 | `get all users`                   |
| GET    | `/users/:id`              | -                                 | `get users by id`                 |
| GET    | `/users/:id/plants`       | -                                 | `get current user's plants`       |
| POST   | `/users`                  | `username, password, phoneNumber` | `create new user`                 |
| PUT    | `/users/:id`              | `username, password, phoneNumber` | `updated user`  | `Admin`         |
| PUT    | `/profile/roles`          | `role`                            | `update a profiles role`          |
| PUT    | `/profile/is_active/:id`  | -                                 | `activates/deactivates a profile` | 

## The Stack and Tools
1. Web server: [Node & Express](https://expressjs.com/)
2. Development database: [PostgreSQL 14](https://www.postgresql.org/download/)
3. Dev database Graphical-User Interface tool: [pgAdmin 4](https://www.pgadmin.org/download/)
4. Dev database Command-Line Interface tool: [psql](https://www.postgresql.org/docs/14/app-psql.html)

## Scripts

- **start** Runs the app with Node.
- **server** Runs the app with Nodemon.
- **migrate:dev** Migrates the local development db to the latest.
- **rollback:dev** Rolls back migrations in the local dev db.
- **seed:dev** Truncates all tables in the local dev db.
- **deploy** Deploys the main branch to Heroku. Must login to the Heroku CLI and add Heroku as a remote.
- **test** Runs tests.
- **migrate:prod** Migrates the Heroku database to the latest.
- **rollback:prod** Rolls back migrations in the Heroku database.
- **databaseh** Interacts with the Heroku database from the command line using psql.
- **seed:prod** Runs all seeds in the Heroku database.
