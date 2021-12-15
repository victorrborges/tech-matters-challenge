import { useEffect, useState } from "react";
import { CREATE_DECK, DRAW_CARDS } from "../../services/deck-provider";
import * as GS from "../../assets/GlobalStyles";
import * as C from "../../components";

const Home = () => {
    const [deck, setDeck] = useState({});
    const [cards, setCards] = useState([]);

    useEffect(() => {
        CREATE_DECK(setDeck);
    }, [])

    useEffect(() => {
        if (deck && deck.deck_id) {
            DRAW_CARDS(deck.deck_id, setCards)
        }
    }, [deck])
    
    return (
        <GS.PageContainer>
            <C.Board cards={cards} setCards={setCards} />
        </GS.PageContainer>
    )
}

export default Home;