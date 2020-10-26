import { useEffect, useRef } from 'react'

// runs effect when the component usign this custom effect updates
// mimics componentDidUpdate() lifecycle method
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
