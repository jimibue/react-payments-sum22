class CreatePurchases < ActiveRecord::Migration[7.0]
  def change
    create_table :purchases do |t|
      t.string :transaction_id
      t.float :amount

      t.timestamps
    end
  end
end
