import { AzureFunction, Context, HttpRequest } from "@azure/functions";

const httpTrigger: AzureFunction = async function (
  context: Context,
  req: HttpRequest
): Promise<void> {
  const { body } = req;
  const users = body.map(({ id, ...user }) => ({ ...user, id: `${id}` }));
  context.bindings.users = users;
};

export default httpTrigger;
