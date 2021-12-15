import { useEffect, useState } from "react";
import { MAP_CARD_VALUE } from "../../utils";
import * as C from "../../components";

const Board = ({ cards, setCards }) => {
    const [started, setStarted] = useState(false);
    const [done, setDone] = useState(false);
    const [playerA, setPlayerA] = useState({
        label: "Player A",
        card: undefined,
        score: 0,
        won: false
    });
    const [playerB, setPlayerB] = useState({
        label: "Player B",
        card: undefined,
        score: 0,
        won: false
    });

    useEffect(() => {
        if (!done) return;
        if (playerA.score > playerB.score) {
            setPlayerA({...playerA, won: true})
        } else {
            setPlayerB({...playerB, won: true})
        }
    }, [done])

    useEffect(() => {
        if (cards.length === 0 && playerA.card && playerB.card) setDone(true);
    }, [cards, playerA, playerB])

    useEffect(() => {
        if (!playerA.card || !playerB.card) return

        const valueA = MAP_CARD_VALUE(playerA.card);
        const valueB = MAP_CARD_VALUE(playerB.card);

        if (valueA > valueB) {
            setPlayerA({...playerA, score: playerA.score + 1})
        } else if (valueB > valueA) {
            setPlayerB({...playerB, score: playerB.score + 1})
        }

    }, [cards])

    const drawCards = () => {
        if (cards.length === 0) return;
        if (!started) setStarted(true);

        const newSetOfCards = [...cards];

        setPlayerA({...playerA, card: newSetOfCards.shift()})
        setPlayerB({...playerB, card: newSetOfCards.shift()})

        setCards(newSetOfCards);
    }

    return (
        <>
            <C.Player player={playerA} done={done} />
            <C.Button started={started} done={done} drawCards={drawCards} />
            <C.Player player={playerB} done={done} />
        </>
    )
}

export default Board;