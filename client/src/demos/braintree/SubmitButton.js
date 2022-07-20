import React from 'react'
import {Button} from 'semantic-ui-react'

const SubmitButton = ({onClick, isDiasbled, text}) => {
    return (
        <Button
          primary
          onClick={onClick}
          disabled={isDiasbled}
        >
            {text}
        </Button>
    )
}

export default SubmitButton
