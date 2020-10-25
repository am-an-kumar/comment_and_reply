import styled from 'styled-components'

const List = styled.ul`
    list-style-type: none;
    padding-left: ${({ indented }) => (indented ? '3rem' : '0')};
`

export default List
