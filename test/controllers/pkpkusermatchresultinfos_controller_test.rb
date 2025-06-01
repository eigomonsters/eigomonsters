require 'test_helper'

class PkpkusermatchresultinfosControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get pkpkusermatchresultinfos_index_url
    assert_response :success
  end

  test "should get show" do
    get pkpkusermatchresultinfos_show_url
    assert_response :success
  end

  test "should get new" do
    get pkpkusermatchresultinfos_new_url
    assert_response :success
  end

  test "should get create" do
    get pkpkusermatchresultinfos_create_url
    assert_response :success
  end

  test "should get edit" do
    get pkpkusermatchresultinfos_edit_url
    assert_response :success
  end

  test "should get update" do
    get pkpkusermatchresultinfos_update_url
    assert_response :success
  end

  test "should get destroy" do
    get pkpkusermatchresultinfos_destroy_url
    assert_response :success
  end

end
