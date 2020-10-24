module.exports = event => {
    try {
        return JSON.parse(event.body);
    }

    catch (error) {
        return false;
    }
};