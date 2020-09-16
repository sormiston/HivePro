require 'test_helper'

class RoomsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @room = rooms(:one)
  end

  test "should get index" do
    get rooms_url, as: :json
    assert_response :success
  end

  test "should create room" do
    assert_difference('Room.count') do
      post rooms_url, params: { room: { fixed_equipment: @room.fixed_equipment, hourly_rt: @room.hourly_rt, img_url: @room.img_url, max_cap: @room.max_cap, sq_footage: @room.sq_footage } }, as: :json
    end

    assert_response 201
  end

  test "should show room" do
    get room_url(@room), as: :json
    assert_response :success
  end

  test "should update room" do
    patch room_url(@room), params: { room: { fixed_equipment: @room.fixed_equipment, hourly_rt: @room.hourly_rt, img_url: @room.img_url, max_cap: @room.max_cap, sq_footage: @room.sq_footage } }, as: :json
    assert_response 200
  end

  test "should destroy room" do
    assert_difference('Room.count', -1) do
      delete room_url(@room), as: :json
    end

    assert_response 204
  end
end
