class DropColumnFromBooks < ActiveRecord::Migration[6.0]
  def change
    remove_column :books, :isbn
  end
end
