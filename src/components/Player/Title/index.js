import * as S from "./styles";

const Title = ({ label, score }) => {

    return (
        <S.Container>
            <S.Label> {label} </S.Label>
            <S.Label> {score} </S.Label>
        </S.Container>
    )

}

export default Title;