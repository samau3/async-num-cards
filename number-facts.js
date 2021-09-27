'use strict';

const API_URL = "http://numbersapi.com"

const FAV_NUM = 7;
const BATCH_OF_NUMS = [1, 2, 3, 4, 5];

const $numFactsArea = $('#num-facts-area')

// do a axios request for one number
// do a batch request to the API for 3(?) numbers
// probably do a Promise.all to get 4 facts on a number before putting on page


async function getNumberAPI(num) {
    const response = await axios.get(`${API_URL}/${num}?json`);
    return response.data.text;
}

async function getBatchNumFacts(nums) {

    let stringNums = nums.join()
    const response = await axios.get(`${API_URL}/${stringNums}?json`);

    let batchFacts = '';
    for (let number in response.data) {
        batchFacts += response.data[number];
    }
    return batchFacts;
}

async function getFourFacts(favNum) {

    let favFactsString = ''
    for (let i = 0; i < 4; i++) {
        favFactsString += await getNumberAPI(favNum);
    }
    return favFactsString;
}

async function getNumFacts() {

    let favNumFact = await getNumberAPI(FAV_NUM);
    $numFactsArea.append(`<p>${favNumFact}`);

    let batchNumFacts = await getBatchNumFacts(BATCH_OF_NUMS);
    $numFactsArea.append(`<p>${batchNumFacts}`);

    let favNumFacts = await getFourFacts(FAV_NUM);
    $numFactsArea.append(`<p>${favNumFacts}`)

}

getNumFacts();