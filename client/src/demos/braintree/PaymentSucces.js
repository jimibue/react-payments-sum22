// const PaymentSuccess = (props)=>{



//     props.location.state
    //  if(props.location.state && props.location.state.id) 

// }
// OR

import { Link, Navigate, useLocation } from "react-router-dom"
import { Header, Segment } from "semantic-ui-react"

const PaymentSuccess = (props)=>{
   const {state} = useLocation()
   if(state && state.transactionId){
       return(
           <Segment>
               <Header as='h1' color='green'>Thank for your purchase</Header>
               <p>You have been successfully charged: ${state.amount}</p>
               <p>Your transaction ID is: {state.transactionId}</p>
               <Link to='/braintree'>make another purchase</Link>
           </Segment>
       )
   } else return (<Navigate to='/braintree' />)
   
}

export default PaymentSuccess

