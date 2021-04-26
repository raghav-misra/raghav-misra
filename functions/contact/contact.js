const sendDiscord = require("./actions/discord.js");
// const sendEmail = require("./actions/email.js");

const checkBody = require("./validators/body.js");
const checkFields = require("./validators/fields.js");
const checkRecaptcha = require("./validators/recaptcha.js");

exports.handler = async event => {
    // Confirm body is valid JSON:
    const body = checkBody(event);
    if (!body) {
        return {
            statusCode: 400,
            body: JSON.stringify({
                success: false,
                error: "Invalid body type. Should be JSON."
            })
        };
    }

    // Confirm all fields are present:
    if (!checkFields(body)) {
        return {
            statusCode: 400,
            body: JSON.stringify({
                success: false,
                error: "Missing required fields."
            })
        };
    }

    // Confirm recaptcha:
    const recaptchaResponse = await checkRecaptcha(body.recaptcha || null);
    if (!recaptchaResponse.success) {
        return {
            statusCode: 401,
            body: JSON.stringify({
                success: false,
                error: `Recaptcha failed. ${recaptchaResponse["error-codes"]}`
            })
        };
    }

    // Send discord request:
    const discordRequestSuccess = await sendDiscord(body);

    if (discordRequestSuccess.success) {
        return {
            statusCode: 201,
            body: JSON.stringify({ success: true })
        };
    }
    else {
        return {
            statusCode: 500,
            body: JSON.stringify(discordRequestSuccess)
        };
    }
};

