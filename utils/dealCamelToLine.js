const dealCamelToLine = (arg) => {
    return arg.replace(/[A-Z]/g, (word) => {
        return `-${word.toLowerCase()}`;
    });
};

module.exports = dealCamelToLine;
