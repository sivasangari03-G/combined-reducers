/**
 *A function used to get parsed value from localStorage
 * @param {string} key localStorage key
 * @returns JSON value from localStorage, undefined in case of error
 */

export const getValue = (key) => {
	try {
		const value = localStorage.getItem(key);
		const parsedValue = JSON.parse(value);
		return parsedValue;
	} catch (err) {
		return undefined;
	}
};


/**
 * setting value in localStorage as key: value pair
 * @param {string} key whose value is to be updated in JSON.
 * @param {*} value to be stored in localStorage.
 */
export const setValue = (key, value) => {
	localStorage.setItem(key, JSON.stringify(value));
};
