import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { TYPES } from '.'
export const FileCardStyled = styled(Link)`
    min-width: 300px;
    width: 300px;
    max-width: 300px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    border-radius: 0.5rem;
    padding: 1rem;

    ${({ type }) => type === TYPES.powerpoint && 'background-color: #ff5975;'}
    ${({ type }) => type === TYPES.word && 'background-color: #3d99f5;'}
    ${({ type }) => type === TYPES.pdf && 'background-color: #ff8000;'}
    ${({ type }) => type === TYPES.excel && 'background-color: #00cc44;'}
    ${({ type }) => type === TYPES.generic && 'background-color: #343434;'}

    color: #fff;
    text-decoration: none;
    font-weight: 500;

    i {
        font-size: 5rem;
        color: #fff;
    }

    svg {
        margin-bottom: 1rem;
    }
`
