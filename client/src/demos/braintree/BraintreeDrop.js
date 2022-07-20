import React from "react";
import { Dimmer, Loader, Segment } from "semantic-ui-react";
import BraintreeDropin from "braintree-dropin-react";
import braintree from "braintree-web-drop-in";
import SubmitButton from "./SubmitButton";
import axios from "axios";
import {withRouter} from './withRouter'

class BraintreeDrop extends React.Component {
  state = { loaded: false, token: "" };

  componentDidMount = async () => {
    try {
      let res = await axios.get("/api/braintree_token");
      console.log(res)
      this.setState({
        token: res.data,
        loaded: true,
      });
    } catch (err) {
      alert("err");
      this.setState({
        loaded: true,
      });
    }
  };

  handlePaymentMethod = async (payload) => {
    const { amount }= this.props
    try{
      let res = await axios.post('/api/payment',{amount,nonce:payload.nonce})
    //   this.props.sayHello() demo method from our HOC
      console.log('props:', this.props.navigate('/payment_success', {state:{transactionId:res.data, amount:amount}}))
    }catch(err){
        console.log('err:', err)
    }
  };

  render() {
    const { loaded, token } = this.state;
    if (loaded) {
      return (
        <Segment>
          <BraintreeDropin
            braintree={braintree}
            authorizationToken={token}
            handlePaymentMethod={this.handlePaymentMethod}
            renderSubmitButton={SubmitButton}
          />
        </Segment>
      );
    } else {
      return (
        <Dimmer active>
          <Loader>Loading Payment UI</Loader>
        </Dimmer>
      );
    }
  }
}

export default withRouter(BraintreeDrop);
