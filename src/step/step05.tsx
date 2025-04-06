import React, { useRef } from 'react'

const Step05 = () => {
    const divRef = useRef<HTMLDivElement>(null);
    /*
        HTMLInputElement
        HTMLButtonElement

    */
    
    const handleEvent = (e : React.MouseEvent<HTMLButtonElement>) => {
        console.log(e)
    }
    /*
        KeyboardEvent
        React.ChangeEvent
        React.FocusEvent
    */

    return (
        <>
            <div ref={divRef}>Step05</div>
            <button onClick={handleEvent}>CLICK</button>
        </>
    )
}

export default Step05