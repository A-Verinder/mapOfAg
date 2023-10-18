# Map of Agriculture Interview Test

This repository is effectively a template for our full stack interview test.

This project contains the following:

- `/app/` An Angular (v16) Application
- `/api/` A Laravel (v10) Web API

Each of the above is stubbed out and provides some basic functionality.

Some technologies that we use have been deliberately left out to make this as accessible as possible.

---

### Assumptions

You should be able to complete this test on your choice of machine, a summary of system requirements are noted below.

It's assumed applicants will have pre-existing experience working with Angular and Laravel.

Therefore we assume you should be able to get both applications running locally.

However, some guidance is provided within the respective `/api/README.md` and `/app/README.md` so please review these.

---

### System Requirements

In order to complete this test you will need the following tools:

- A code editor (e.g. PHPStorm, Visual Studio Code)
- Terminal to run shell commands
- For the API, either
    - (recommended) use of [Docker Desktop](https://www.docker.com/products/docker-desktop/) to make use
      of [Laravel Sail](https://laravel.com/docs/10.x/sail); OR
    - locally installed and configured `php`, `mysql` & `composer`; OR
    - use of one of the other laravel local development environments (
      e.g. [Herd](https://herd.laravel.com/), [Homestead](https://laravel.com/docs/10.x/homestead))
- For the Angular web app
    - `npm` to run `npm ng serve`
    - and we recommend `npx` so you do not require a global install of the angular-cli project

---

## Your Details

Please enter/replace your details below.

|             |                      |
|-------------|----------------------|
| Name        | Alex Verinder           |
| Email       | aeverinder@gmail.com |
| Date        | 2023-10-18           |
| Start Time  | 14:00                |
| Finish Time | 16:00                |

---

## Instructions

We ask that you spend no more than two hours to complete this exercise, and start by taking a fork of this repository.

The intial project includes:

- A wireframe angular project with routing and (component) page ready to list students
- An API endpoint able to serve student details

> As you complete each item in the list below, please ensure that you mark it off by changing the `[]` to a `[x]`.
>
> Please ensure that you record your start and finish time (in local time, using ISO timestamps towards the top of this
> README).
>
> Please ensure you add a commit after each step is completed.
>

- [x] Update `./app/src/app/service/students.service.ts` to return 3 students from `getStudents`
- [x] Fetch students from the `StudentsService` within the `StudentsComponent` and list them into the table
  provided
- [x] Add a column to display the student grades. Style the display of the grades so that it has three colorations:
    - Green: average grade greater than 80%
    - Orange: average grade less than 80% and greater than 50%
    - Red: average grade less than 50%
- [x] Update `StudentsService` to pull students from the API (this should be available
  via `http://127.0.0.1:8000/api/students/`)
- [x] Allow a student to be selected from the list, and display their full details (on the existing page, or a new page
  inc. `id` and `email`)

**Extras for if you have time:**

- [x] Update the API to support searching of students; allowing partial matches on first_name OR last_name
- [x] Add a search component to the app, above the table, allowing the students to be filtered using the new search
  capability

---

## Useful Links

- [Angular Local Dev Environment Setup Guide](https://angular.io/guide/setup-local)
- [Laravel Getting Started Guide](https://laravel.com/docs/10.x/installation)
- [Laravel Sail Guide](https://laravel.com/docs/10.x/sail)
- [Docker Desktop](https://www.docker.com/products/docker-desktop/)
- [PHP Composer Getting Started Guide](https://getcomposer.org/doc/00-intro.md)
