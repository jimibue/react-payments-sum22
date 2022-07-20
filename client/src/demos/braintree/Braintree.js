import React, { useState } from 'react'
import { Divider, Header, Image, Input, Label, Segment } from 'semantic-ui-react'
import BraintreeDrop from './BraintreeDrop'

const Braintree = ()=>{
    const [amount, setAmount] = useState(50000)
    return (
        <Segment>
            <Header as='h1'>Braintree</Header>
            <Image centered size='small' src='https://hips.hearstapps.com/hmg-prod/images/2022-tesla-model-3-mmp-1-1640025520.jpg?crop=0.763xw:0.572xh;0.120xw,0.173xh&resize=640:*'/>
            <Label color='green'>Payment Amount</Label>
            <Input value={amount} onChange={(e)=> setAmount(e.target.value)} />
            <Divider />
            <BraintreeDrop amount={amount} />
        </Segment>
    )
}
export default Braintree