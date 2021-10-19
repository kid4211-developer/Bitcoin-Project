import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    width: 100%;
    background-color: white;
    border-bottom: 1px solid ${({ theme }) => theme.lightGray2};
`
export const HiddenH3 = styled.h3`
    position: absolute;
    width: 1px;
    height: 1px;
    clip: rect(0, 0);
    clip-path: polygon(0, 0);
    overflow: hidden;
    text-indent: -9999px;
`
export const TimeBtnContainer = styled.div`
    display: flex;
    align-items: center;
    height: 30px;
`
export const TimeBtn = styled.button`
    /* width: 50px; */
    height: 20px;
    width: 38px;
    margin-left: 5px;
    font-size: 0.8rem;
    background-color: white;

    border: ${({ theme, isSelected }) =>
        isSelected ? `2px solid black` : `1px solid ${theme.lightGray2}`};
    outline: none;
    cursor: pointer;
`
