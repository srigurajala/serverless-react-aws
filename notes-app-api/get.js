import * as dynamoDbLib from "./libs/dynamodb-lib";
import { success, failure } from "./libs/respsonse-lib";

export async function main(event, context, callback) {
  const params = {
    TableName: "notes",
    Key: {
      userid: event.requestContext.identity.cognitoIdentityId,
      noteid: event.pathParameters.id
    }
  };
  try {
    const result = await dynamoDbLib.call("get", params);
    if (result.Item) {
      callback(null, success(result.Item));
    } else {
      callback(
        null,
        failure({
          status: false,
          error: "Item not found."
        })
      );
    }
  } catch (e) {
    console.log(e);
    callback(null, failure({ status: false }));
  }
}
