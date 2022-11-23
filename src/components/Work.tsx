import Title from './Title'
import JobCard from './JobCard'
import styled from 'styled-components'

const JobCardContainer = styled.div`
    margin-top: 32px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
`
const Work: React.FC = () => {
    return (
        <section id="work">
            <Title id="title3" text="MY WORK" />
            <JobCardContainer>
                <JobCard />
                <JobCard />
                <JobCard />
            </JobCardContainer>
        </section>
    )
}

export default Work
