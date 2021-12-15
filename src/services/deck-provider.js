import axios from "axios";

const service = axios.create({
    baseURL: `${process.env.REACT_APP_DECKS_API}/api/deck`
});

export const CREATE_DECK = (callback) => {
    service.get(`new/shuffle`)
        .then((response) => {
            callback(response.data);
        })
        .catch((error) => {
            console.error(error);
        })
}

export const DRAW_CARDS = (deck_id, callback) => {
    service.get(`${deck_id}/draw/?count=52`)
        .then((response) => {
            const cards = response.data.cards;
            callback(cards);
        })
        .catch((error) => {
            console.error(error);
        })
}