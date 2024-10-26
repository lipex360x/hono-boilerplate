## Hono Template

## Using

**To use this template (gh CLI):**

```bash
gh repo create <REPOSITORY_NAME> --template lipex360x/hono-boilerplate --private --clone
```

**To install dependencies:**

```bash
bun i
```

**To config ENV**

```bash
cp .env.example .env
```

**To init postgres database (docker compose)**

```bash
docker compose up -d
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
<br />


## Domain Folder

**Entities**
* User Entity
* Password Value Object

<br />

## Infra Folder

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

## Tests Folder
* User Entity Test
* App Mount (Dependency Injection)

<br />

## Root Folder

* Eslint 
* Prettier
* Docker Compose

<br />

## Misc

**VSCode Extensions**

* ESLint: `dbaeumer.vscode-eslint`
* Bruno: `bruno-api-client.bruno`
* Pretty TypeScript Errors: `yoavbls.pretty-ts-errors`
* Material Icon Theme: `pkief.material-icon-theme`
* DotENV: `mikestead.dotenv`
* Error Lens: `usernamehw.errorlens`

**Snippet de Instalação -  VSCode Extensions**

```sh
code --install-extension dbaeumer.vscode-eslint
code --install-extension bruno-api-client.bruno
code --install-extension yoavbls.pretty-ts-errors
code --install-extension pkief.material-icon-theme
code --install-extension mikestead.dotenv
code --install-extension usernamehw.errorlens
```
<br />