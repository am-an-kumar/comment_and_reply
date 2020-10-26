import styled from 'styled-components'
import { Info } from 'components'

const StyledInfo = styled((props) => <Info {...props} />)`
    margin-bottom: 1rem;
    padding: 1rem;
    background-color: #dedede;
    border-radius: 5px;
    position: relative;
    animation: expand 0.5s ease-in-out;

    & > .meta {
        display: flex;
        flex-flow: row nowrap;
        justify-content: space-between;
        align-items: center;

        & > .name {
            font-weight: bold;
            text-transform: capitalize;
        }
    }

    & > .buttons {
        button {
            background-color: transparent;
            color: #0471dc;
            font-weight: bold;
            padding: 0;
            margin-right: 1rem;
        }
    }

    .delete-btn {
        position: absolute;
        top: 50%;
        right: 0;
        width: 24px;
        height: 24px;
        border-radius: 50%;
        background-color: #333;
        color: 'white';
        transform: translate(50%, -50%);
    }
`

export { StyledInfo }
