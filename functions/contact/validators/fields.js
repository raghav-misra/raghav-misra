const REQUIRED_FIELDS = ["firstName", "lastName", "email", "subject", "body"];

module.exports = body => {
    if ("fields" in body) {
        for (const i in REQUIRED_FIELDS) {
            const fieldName = REQUIRED_FIELDS[i];
            if (!body.fields[fieldName]) {
                return false;
            }
        }

        return true;
    }
    else return false;
};