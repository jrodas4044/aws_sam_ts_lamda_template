import {APIGatewayEvent, APIGatewayProxyResult, Handler} from 'aws-lambda';
export const handler: Handler = async (event: APIGatewayEvent): Promise<APIGatewayProxyResult> => {
    const response: APIGatewayProxyResult = {
        statusCode: 200,
        body: JSON.stringify({
            message: 'Hello World',
        }),
    };

    // All log statements are written to CloudWatch
    console.info(`response from: ${event.path} statusCode: ${response.statusCode} body: ${response.body}`);
    return response;
}