/*import axios from 'axios';
import { SSMClient, GetParameterCommand } from '@aws-sdk/client-ssm';

const { DISPATCHING_MESSAGE_SERVICE_URL, DISPATCHING_MESSAGE_TOKEN_PARAMETER, MAIL_TO } = process.env;

const client = new SSMClient({ region: 'eu-central-1' });
const paramsCommand = {
    Name: DISPATCHING_MESSAGE_TOKEN_PARAMETER,
    WithDecryption: true,
};
*/

//const command = new GetParameterCommand(paramsCommand);
export const handler = async (event) => {
    //const { Parameter } = await client.send(command);
    try {
        console.info('event', event);

        /*const body = JSON.parse(event.body);

        let subject;
        if (body.intervention_type === 'in') {
            subject = `IN_${body.intervention.location}_${body.intervention.company}`;
        } else {
            subject = `OUT_${body.intervention.location}_${body.intervention.equipmentState === 'true' ? 'RUN' : 'STOP'}`;
        }


        // create a list of objects with email and name
        let emailListCopy = [];
        if (body.emailListCopy && body.emailListCopy.length > 0) {
            emailListCopy = body.emailListCopy.map((email) => ({ email }));
        }
        console.log('emailListCopy', emailListCopy);
        const sentData = {
            sender: { name: 'Intervention Machine', email: 'no-reply@info.srd.fr' },
            to: [{ email: MAIL_TO }],
            subject,
            bcc: emailListCopy,
            params: body.intervention,
            tags: ['qrcode'],
            templateId: body.intervention_type === 'in' ? 30 : 32,
        };

        console.log(`then call dispatching-message API with data - ${JSON.stringify(sentData)}`);
*/
        /** Uncomment when Axios is installed and API plugged in
         *
         * const result = await axios.post(DISPATCHING_MESSAGE_SERVICE_URL, sentData, {
         *   headers: {
         *     ...event.headers,
         *     'X-Api-Key': Parameter.Value,
         *   },
         * });
         *
         **/

        /** Remove next line when previous line are uncommented **/
        //const result = { data:sentData };

        //console.log(`and got result - ${JSON.stringify(result.data)}`);

        return {
            statusCode: 200,
            headers: {
                "Access-Control-Allow-Headers": "Content-Type",
                "Access-Control-Allow-Origin" : "*",
                "Access-Control-Allow-Methods": "OPTIONS,POST",
            },
            body: JSON.stringify("test"),
        };
    } catch (e) {
        console.error(JSON.stringify(e));
        return {
            statusCode: 400,
            headers: {
                "Access-Control-Allow-Headers": "Content-Type",
                "Access-Control-Allow-Origin" : "*",
                "Access-Control-Allow-Methods": "OPTIONS,POST",
            },
            body: JSON.stringify(e),
        };
    }
};
