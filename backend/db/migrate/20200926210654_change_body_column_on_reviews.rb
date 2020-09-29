class ChangeBodyColumnOnReviews < ActiveRecord::Migration[6.0]
  def change
    change_column :reviews, :body, :text
  end
end
