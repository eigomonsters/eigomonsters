class AddDescriptionToWordlists < ActiveRecord::Migration[6.0]
  def change
    add_column :wordlists, :description, :string
    add_column :wordlists, :movie_url, :string
    add_column :wordlists, :image_url, :string
  end
end
