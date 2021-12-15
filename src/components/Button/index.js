import * as S from "./styles";
import start from "../../assets/images/start.png";
import draw from "../../assets/images/draw.png";
import finished from "../../assets/images/finished.png";

const Button = ({ started, done, drawCards }) => {
    const content = started
        ? done 
            ? 'We have a winner!'
            : 'Draw Cards' 
        : 'Start Game';

    const icon = started 
        ? done 
            ? finished 
            : draw
        : start;

    return (
        <S.Container onClick={() => drawCards()}>
            <S.Image src={icon} alt='Button' />
            <S.Text> {content} </S.Text>
        </S.Container>
    )
}

export default Button;