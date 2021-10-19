import React from 'react'
import ReactLoading from 'react-loading'
import styled, { css } from 'styled-components'

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    ${({ isCenter }) =>
        !isCenter &&
        css`
            align-items: stretch;
            margin-top: 200px;
        `}
`

const Loading = ({ center = true }) => {
    return (
        <Container isCenter={center}>
            <ReactLoading
                type={'spokes'}
                color={'rgb(18, 97, 196)'}
                height={'100px'}
                width={'100px'}
            />
        </Container>
    )
}

export default Loading
