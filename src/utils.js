const specialCardsValue = {
    'ACE': 14,
    'KING': 13,
    'QUEEN': 12,
    'JACK': 11,
}

export const MAP_CARD_VALUE = (card) => {
    return isNaN(card.value)
        ? +specialCardsValue[card.value]
        : +card.value;
}