# MVP - Moodboard

Sometimes we see things we like or feel connected to but don’t know exactly why or what purpose those things are.

I create this space to save all those sudden ideas coming from day dreamming so I can rediscover them.

## Setup

1. Start database: `docker compose up` (see [docker](#docker)) !Only if Mysql doesn't work for you (which I don't) || Access the MySQL interface in your terminal by running `mysql -u root -p`
2. Create table: `npm run migrate`
3. Start Backend: `npm install` and `npm start`
4. Start Frontend: `cd client`, `npm install` then `npm start`
5. Add a `.env` file to the project folder of this repository containing the MySQL authentication information for MySQL user. For example:

```bash
  DB_HOST=localhost
  DB_USER=root
  DB_NAME=facebook
  DB_PASS=YOURPASSWORD
```

## Docker

To run the database download docker and then the step 1.
