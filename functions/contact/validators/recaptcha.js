const axios = require("axios").default;

module.exports = async recaptcha => {
    // No recaptcha exists:
    if (!recaptcha) {
        return { success: false, "error-code": "No recaptcha specified." };
    }

    // Call verification route:
    try {
        const verificationResponse = await axios.post(
            `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${recaptcha}`,
            {},
            {
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded"
                }
            }
        );

        return verificationResponse.data;
    }
    catch (error) {
        return { success: false, "error-code": "Reason unknown." };
    }
};