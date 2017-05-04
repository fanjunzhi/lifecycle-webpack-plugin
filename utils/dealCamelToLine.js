export const dealCamelToLine = (arg) => {
    return arg.replace(/[A-Z]/g, (word) => {
        return `-${word.toLowerCase()}`;
    });
};