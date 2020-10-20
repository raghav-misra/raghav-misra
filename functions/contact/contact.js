const axios = require("axios").default;

exports.handler = async (event) => {
    let body = null;

    try {
        body = JSON.parse(event.body);
    }

    catch (error) {
        return {
            statusCode: 400,
            body: JSON.stringify({
                success: false,
                error
            })
        };
    }

    let validRequest = true;
    ["firstName", "lastName", "email", "subject", "body"].forEach(prop => (prop in body) || (validRequest = false));
    if (!validRequest) {
        return {
            statusCode: 400,
            body: JSON.stringify({
                success: false,
                error: "Missing required fields."
            })
        };
    }

    // Test req:
    try {
        const result = await axios.post(process.env.WEBHOOK_URL, {
            username: `Form Submission from ${body.firstName}`,
            content: `Time to do stuff! <@335208806944342028>`,
            embeds: [
                {
                    color: "36095",
                    author: { name: `${body.firstName} ${body.lastName}` },
                    fields: Object.keys(body).map(field => ({
                        name: field,
                        value: body[field]
                    }))
                }
            ]
        });

        return {
            statusCode: 201,
            body: JSON.stringify({
                success: true,
                data: result.data
            })
        };
    }
    catch (error) {
        return {
            statusCode: 400,
            body: JSON.stringify({
                success: false,
                error
            })
        };
    }
};

