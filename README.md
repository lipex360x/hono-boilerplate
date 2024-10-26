## Hono Template


## Domain

**Entities**
* User Entity
* Password Value Object

<br />

## Infra

**Database**
* Drizzle ORM
* Drizzle Migrator
* User Schema

**Handlers**
* Schema Validator

**Mediator**
* Mediator Event Pattern

**Routes**
* Hello World Route

**Schemas**
* Pagination Schema
* ENV Schema

**Types**
* Paginated Output Repository
* Paginated Output Usecase

<br />

## Tests
* User Entity Test
* App Mount (Dependency Injection)

<br />

## Using

**To use this template (gh CLI):**

```bash
gh repo create <REPOSITORY_NAME> --template lipex360x/hono-boilerplate --private --clone
```

**To install dependencies:**

```bash
bun i
```

**To run (dev mode):**

```bash
bun dev
```

**To run tests:**

```bash
bun db:migrate
```

**To clean template:**
```bash
./clear.sh
```
