import { APIGatewayEvent, Context, APIGatewayProxyResult } from 'aws-lambda';

export const handler = async (event: APIGatewayEvent, context: Context): Promise<APIGatewayProxyResult> => {
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

        if (!body.value) {
            throw new Error("La clé 'value' est manquante dans le corps de la requête");
        }

        const value: string = body.value;

        const response: APIGatewayProxyResult = {
            statusCode: 200,
            headers: {
                "Content-Type": "application/json"
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
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                message: "Erreur",
                error: error.message
            })
        };

        return response;
    }
};