import { StyledSubTitle } from '../styles/SubTitle.style'

const SubTitle: React.FC<{ text: string }> = ({ text }) => {
    return <StyledSubTitle>{text}</StyledSubTitle>
}

export default SubTitle
