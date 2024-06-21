import {
  Environment,
  Network,
  RecordSource,
  Store,
  FetchFunction,
} from "relay-runtime";

const HTTP_ENDPOINT =
  "https://flexhire.com/api/v2http://localhost:5000/graphql";

const CreateFetch = (apiKey: string) => {
  const fetchFn: FetchFunction = async (request, variables) => {
    const resp = await fetch(HTTP_ENDPOINT, {
      method: "POST",
      headers: {
        Accept:
          "application/graphql-response+json; charset=utf-8, application/json; charset=utf-8",
        "Content-Type": "application/json",
        // <-- Additional headers like 'Authorization' would go here
        "FLEXHIRE-API-KEY": apiKey,
      },
      body: JSON.stringify({
        query: request.text, // <-- The GraphQL document composed by Relay
        variables,
      }),
    });

    return await resp.json();
  };
  return fetchFn;
};

export default function createRelayEnvironment(apiKey: string) {
  return new Environment({
    network: Network.create(CreateFetch(apiKey)),
    store: new Store(new RecordSource()),
  });
}
