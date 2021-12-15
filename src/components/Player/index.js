import * as S from "./styles";
import Title from "./Title";
import Footer from "./Footer";

const Player = ({ player, done }) => {
    
    return (
        <S.Container won={player.won}>
            <Title label={player.label} score={player.score} />
            {
                player.card &&
                <S.Logo src={player.card.image} alt="Card Image" />
            }
            {
                done &&
                <Footer won={player.won} />
            }
        </S.Container>
    )

}

export default Player;