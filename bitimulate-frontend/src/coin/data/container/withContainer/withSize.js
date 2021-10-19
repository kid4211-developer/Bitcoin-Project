import { throttle } from 'lodash'
import React, { useCallback, useEffect, useState } from 'react'

const withSize = () => (OriginalComponent) => (props) => {
    const [widthSize, setWidthSize] = useState(window.innerWidth)
    const [heightSize, setHeightSize] = useState(window.innerHeight)

    const handleSize = useCallback(() => {
        setWidthSize(window.innerWidth)
        setHeightSize(window.innerHeight)
    }, [])

    useEffect(() => {
        // throttle('함수', '시간') : 주어진 시간내에 최대 1번만 실행 할 수 있도록 셋팅
        window.addEventListener('resize', throttle(handleSize, 1000))
        return () => {
            window.removeEventListener('resize', handleSize)
        }
    }, [handleSize])

    return <OriginalComponent {...props} widthSize={widthSize} heightSize={heightSize} />
}

export default withSize
