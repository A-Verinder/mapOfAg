## Getting Started

### Before you begin

We have checked the `.env` file into this project, however you should check these
settings and adjust them accordingly. This should be done before trying to build/run the API.

### Getting Started (using Sail)

If you wish to use Sail to run the API, you will need to get the `composer` packages installed.

Instructions for this can be
found [here](https://laravel.com/docs/9.x/sail#installing-composer-dependencies-for-existing-projects).

Once dependencies are installed, you can run

```shell
# To build the docker container(s)
./vendor/bin/sail build

# To start running the container(s)
./vendor/bin/sail up

# OR to run in deamon mode
./vendor/bin/sail up -d

```

Continue onto **Initialise DB** section

### Getting Started (Local PHP)

If you have `php (8.2)`installed locally, along with `composer`, you can run

```shell
# Install composer dependencies
composer install

# Use built in server
php artisan serve
```

Continue onto **Initialise DB** section

## Initialise DB

You can initialise the database using the initially provided migration and DB seeder

```shell
# Using Sail
./vendor/bin/sail artisan migrate --seed

# Using local php (note, remember to setup a DB first and adjust .env)
php artisan migrate --seed
```

Assuming everything installed correctly and has started running (via `artisan serve` or `sail up`) you should be able to
open http://localhost:8000/api/students and see a list of 5 student records.

### Configuration Notes

- We have modified the `.env` settings used by Sail to run the api on port `8000`
    - This is the same port used by `php artisan serve` by default too
- If a different port is used, look to update `<root>/app/src/environments/environment.ts`