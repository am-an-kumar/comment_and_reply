import styled from 'styled-components'

const Form = styled.form`
    display: flex;
    flex-flow: column nowrap;
    animation: expand 0.5s ease-in-out;

    padding: 1rem;
    margin: 1rem 0;
    margin-left: ${({ indented }) => (indented ? '3rem' : '0')};
    background-color: #dedede;
    border-radius: 5px;

    & button {
        align-self: flex-end;
    }
`

export { Form }
