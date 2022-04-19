require 'test_helper'

class EigomonstersControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get eigomonsters_index_url
    assert_response :success
  end

end
