import styled from 'styled-components'

const Input = styled.input`
    padding: 0.4rem 1rem;
    border-radius: 2px;
    border: none;
    outline: none;

    &:read-only {
        background-color: #dedede;
    }
`

export { Input }
