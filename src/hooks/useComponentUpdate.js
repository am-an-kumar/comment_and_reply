import { useEffect, useRef } from 'react'

function useComponentDidUpdate(effect, dependencies = []) {
    const hasMounted = useRef(false)

    useEffect(() => {
        if (hasMounted.current) {
            effect()
        } else {
            hasMounted.current = true
        }
    }, dependencies)
}

export default useComponentDidUpdate
