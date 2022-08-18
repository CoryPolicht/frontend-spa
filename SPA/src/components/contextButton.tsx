import { useState } from "react"
import { Button } from "@chakra-ui/react"

const ContextButton = () => {
    let [on, setOn] = useState(false)
    function handleOnClick () {
        setOn( on => !on)
    }
    return (
        <Button onClick={ () => handleOnClick()}>{on ? "on": "off"}</Button>
    )
}

export default ContextButton;