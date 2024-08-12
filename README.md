# KrakenFlex Tech Test

## Introduction

This is a test project for the KrakenFlex Backend Engineer role.

This is a TypeScript project initialised using Bun's [bun init](https://bun.sh/docs/bun-init) command.

I thought I'd experiment using Bun since it provides a JavaScript runtime, baked in APIs, and a test runner.

## Installation / Setup

To install Bun, follow the instructions on the [Bun website](https://bun.sh/docs/installation).

An API key is required to run the project. Once you have the API key, create a file called `api-key.ts` in the root directory of the project and add the following line:

```ts
export default "YOUR_API_KEY";
```

## Running the project

To run the project, run:

```bash
bun start
```

This will run the project in the `src` directory.

## Running the tests

To run the tests, run:

```bash
bun test
```

This will run the tests in the `tests` directory.

## Requirements

[ ] Retrieve all outages
[ ] Retrieve information for a site ID
[ ] Filter out historic outages/outages that don't have a matching device ID
[ ] Add display name to outages
[ ] Send updated list of outages for a site ID
