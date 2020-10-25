import styled from 'styled-components'

const Button = styled.button`
    border: none;
    outline: none;
    border-radius: 5px;
    font-family: Rubik, sans-serif;
    padding: 0.6rem 1rem;
    background-color: dodgerblue;
    color: white;
    text-transform: uppercase;

    &:disabled {
        background-color: #999;
        color: black;
        cursor: none;
    }
`

export default Button
