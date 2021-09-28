"use strict";

const API_URL = "https://deckofcardsapi.com/api/deck";


async function get_card_from_deck() {
    let response = await axios.get(`${API_URL}/new/draw/?count=1`);
    let suit = response.data.cards[0].suit
    let value = response.data.cards[0].value
    console.log(`${value} of ${suit}`)
} 
get_card_from_deck();

async function get_two_cards_from_deck() {
    let shuffle_deck_resp = await axios.get(`${API_URL}/new/shuffle/`);
    let deck = shuffle_deck_resp.data.deck_id;
    let card1_response = await axios.get(`${API_URL}/${deck}/draw/?count=1`);
    let card2_response = await axios.get(`${API_URL}/${deck}/draw/?count=1`);
    let suit1 = card1_response.data.cards[0].suit;
    let value1 = card1_response.data.cards[0].value;
    let suit2 = card2_response.data.cards[0].suit;
    let value2 = card2_response.data.cards[0].value;
    console.log(`Card1: ${value1} of ${suit1}`);
    console.log(`Card2: ${value2} of ${suit2}`);
}

get_two_cards_from_deck();