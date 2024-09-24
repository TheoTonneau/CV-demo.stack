import {APIGatewayEvent, Context, APIGatewayProxyResult} from 'aws-lambda';
import { SNSClient, PublishCommand } from "@aws-sdk/client-sns";
const snsClient = new SNSClient({});
const {SUCCESS_TOPIC_ARN, FAILURE_TOPIC_ARN} = process.env;


exports.handler = async (event: APIGatewayEvent, context: Context): Promise<APIGatewayProxyResult> => {
    try {
        if (!event.body) {
            throw new Error("Le corps de la requête est vide");
        }

        let body: any;

        if (event.isBase64Encoded) {
            body = JSON.parse(Buffer.from(event.body, 'base64').toString('utf-8'));
        } else {
            body = JSON.parse(event.body);
        }
        
        if (!body.email) {
            throw new Error("La clé 'email' est manquante dans le corps de la requête");
        }

        const value: string = body.email;
        
        const params = {
            Message: `Message from ${body.fName} ${body.name} (email: ${body.email}) from ${body.company} :\n${body.message}`,
            Subject: `MAIL FROM CV WEBSITE FROM COMPANY ${body.company}`,
            TopicArn: SUCCESS_TOPIC_ARN
        };
        try {
            const data = await snsClient.send(new PublishCommand(params));
            console.log('Message published to SNS topic', data);
        } catch (err) {
            console.error('Error publishing message to SNS topic', err);
        }

        const response: APIGatewayProxyResult = {
            statusCode: 200,
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'OPTIONS,POST',
                'Access-Control-Allow-Headers': '*'
            },
            body: JSON.stringify({
                message: "Valeur reçue avec succès",
                value: value
            })
        };
        
        return response;

    } catch (error) {
        const response: APIGatewayProxyResult = {
            statusCode: error.message.includes('corps de la requête') ? 400 : 500,
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'OPTIONS,POST',
                'Access-Control-Allow-Headers': '*'
            },
            body: JSON.stringify({
                message: "Erreur",
                error: error.message
            })
        };

        const params = {
            Message: error.message,
            Subject: 'Test SNS from Lambda error',
            TopicArn: FAILURE_TOPIC_ARN
        };
        try {
            const data = await snsClient.send(new PublishCommand(params));
            console.log('Message published to SNS topic', data);
        } catch (err) {
            console.error('Error publishing message to SNS topic', err);
        }
        
        return response;
    }
};