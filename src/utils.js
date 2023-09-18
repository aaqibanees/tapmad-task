
export const generateRandomNDigits = (n) => {
    return Math.floor(Math.random() * (9 * (Math.pow(10, n)))) + (Math.pow(10, n));
};

export const serializeForm = (data) => {
    let obj = {};
    for (let [key, value] of data) {
        if (obj[key] !== undefined) {
            if (!Array.isArray(obj[key])) {
                obj[key] = [obj[key]];
            }
            obj[key].push(value);
        } else {
            obj[key] = value;
        }
    }
    return obj;
};