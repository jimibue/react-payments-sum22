class Api::BraintreeController < ApplicationController
  def token
    render json: ENV['BRAINTREE_DROPIN_TOKEN']
  end

  def payment
    # making the request to braintree (3rd party)
    result = Braintree::Transaction.sale(
      amount: params[:amount],
      payment_method_nonce: params[:nonce],
      options: {
        # charge the card right now
        submit_for_settlement: true
      }
    )

    if result.success?
      # our own DB stuff if successfull on braintree
      Purchase.create(transaction_id: result.transaction.id, amount: params[:amount])
      render json: result.transaction.id

    elsif result.transaction
      # something wrong with card likely here
      text = "text: #{result.transaction.processor_response_text}"
      code = "code: #{result.transaction.processor_response_code}"
      render json: {errors:{text:text, code:code}}
    else
      # 500, braintree was down, api key are wrong
      render json: {errors: result.errors}
    end
  end
end
