export const isFunction = (arg) => {
    return Object.prototype.toString.call(arg) === '[object Function]';
};