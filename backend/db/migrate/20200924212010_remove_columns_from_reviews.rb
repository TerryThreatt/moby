class RemoveColumnsFromReviews < ActiveRecord::Migration[6.0]
  def change
    remove_column :reviews, :user_id
    remove_column :reviews, :title
    remove_column :reviews, :comments
  end
end
