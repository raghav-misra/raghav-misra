const axios = require("axios").default;

module.exports = async body => {
    try {
        await axios.post(process.env.DISCORD_WEBHOOK_URL, {
            username: `Form Submission from ${body.fields.firstName}`,
            content: `Time to do stuff! <@335208806944342028>`,
            embeds: [
                {
                    color: "36095",
                    fields: Object.keys(body.fields).map(field => ({
                        name: field,
                        value: body.fields[field]
                    }))
                }
            ]
        });

        return true;
    }
    catch (error) {
        return false;
    }
}