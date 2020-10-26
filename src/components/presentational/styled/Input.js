import styled from 'styled-components'

const Input = styled.input`
    padding: 0.4rem 1rem;
    margin-bottom: 1rem;
    border-radius: 2px;
    border: none;
    outline: none;

    &:read-only {
        background-color: #d2d2d2;
    }
`

export { Input }
