class RenameDiscussionToReviews < ActiveRecord::Migration[6.0]
  def change
    rename_table :discussions, :reviews 
  end
end
