# GraphQL-FunctionApp

GraphQL Function App backed by CosmosDB

# Develop Locally

### Docker

- `docker build --tag <DOCKER_ID>/<REPO_NAME>:<TAG>`
- `docker run -e CosmosKey="COSMOS_CONNECTION_STRING" -p 8080:80 -it <DOCKER_ID>/<REPO_NAME>:<TAG>`
- navigate to `http://localhost:8080/graphql` for GraphQL Playground

## vscode

- clone antempus/GraphQL-FunctionApp locally
- copy `example.settings.json` to `local.settings.json` and fill in the required properties
- `npm i`
- launch using VS Code debugger or `func start`
- navigate to the routes displayed in console
  - should look like `https://localhost:7071/graphql` & `https://localhost:7071/addUser`
