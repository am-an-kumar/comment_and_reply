import styled from 'styled-components'
import Form from './Form'

const StyledForm = styled(Form)`
    display: flex;
    flex-flow: column nowrap;
    background-color: #dedede;
    padding: 1rem;

    & p {
        margin: 0 0 1rem 0;
    }

    & input {
        margin-bottom: 1rem;
    }

    & textarea {
        margin-bottom: 1rem;
    }

    & button {
        align-self: flex-end;
    }
`

export default StyledForm
