// import arrays from './utilities/arrays.js';
// import numbers from './utilities/numbers.js';
// import strings from './utilities/strings.js';

// const numArr = [3, 4, 5, 6];
// const wordArr = ['cat', 'dog', 'rabbit', 'bird'];
// const arrSum = arrays.addArr(numArr);
// const mixArr = arrays.concatArr(numArr, wordArr);
// const myNum = ('15' as unknown) as number % 2;
// const five = parseInt('5');


// console.log(arrays.cut3(mixArr));
// console.log(numbers.sum(arrSum, myNum));
// console.log(strings.capitalize('the quick brown fox'));
// console.log(numbers.multiply(five, 8));
// console.log(arrays.lgNum(mixArr));


/** Use Axios to get data from restcountries api */
import axios from 'axios';

/** Use the free API https://restcountries.com/
 * You will use the following endpoints
 * https://restcountries.com/v2/name/${name} for countries by name
 * https://restcountries.com/v2/regionalbloc/${regionalbloc} for region blocks
 */

/** Create getCountry Function here */
async function getCountry(country: string) {
    const getApi = await axios(
        `https://restcountries.com/v2/name/${country}`
    );
    const data = getApi.data[0];
    return {
        capital: data.capital,
        region: data.region,
        numericCode: data.numericCode
    }
}

/** Create a test for this getRegion function */
async function getRegionCountries(regionalbloc: string) {
  const getApi = await axios(
    `https://restcountries.com/v2/regionalbloc/${regionalbloc}`
  );
  const data = getApi.data;
  const countries = [];
  for (let i = 0; i < data.length; i++) {
    countries.push(data[i].name);
  }
  return countries;
}

/** Create getRegionCapitals function here */
async function getRegionCapitals(regionalbloc: string) {
    const getApi = await axios(
      `https://restcountries.com/v2/regionalbloc/${regionalbloc}`
    );
    const data = getApi.data;
    const countries = [];
    for (let i = 0; i < data.length; i++) {
      countries.push(data[i].capital);
    }
    return countries;
  }

export default {
  getCountry,
  getRegionCountries,
  getRegionCapitals
};
