import React from 'react'
import { Dimmer, Loader, Segment } from 'semantic-ui-react'
import BraintreeDropin from 'braintree-dropin-react'
import braintree from 'braintree-web-drop-in'
import SubmitButton from './SubmitButton'

class BraintreeDrop extends React.Component{
    state= {loaded:false, token:''}

    handlePaymentMethod = (payload)=>{
        //TODO axios call to server to post payment
    }

    render(){
        const {loaded,token} = this.state
        if(loaded){
            return(
                <Segment>
                    <BraintreeDropin 
                      braintree={braintree}
                      authorizationToken={token}
                      handlePaymentMethod={this.handlePaymentMethod}
                      renderSubmitButton={SubmitButton}
                    />
                </Segment>
            )
        } else {
            return (
                <Dimmer active>
                    <Loader>Loading Payment UI</Loader>
                </Dimmer>
            )
        }
    }
}

export default BraintreeDrop