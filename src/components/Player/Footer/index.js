import * as S from "./styles";

const Footer = ({ won }) => {

    const message = won ? "I'm the winner!" : "Maybe next time :/";

    return (
        <S.Container>
            <S.Label won={won}> {message} </S.Label>
        </S.Container>
    )

}

export default Footer;