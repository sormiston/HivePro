require 'date'

class AppointmentsController < ApplicationController
  before_action :set_appointment, only: %i[show update destroy]
  before_action :authorize_request, except: :index

  # GET /appointments/filter/:iso8601
  def index
    @start = Date.parse(params[:iso8601])
    @end = Date.new(@start.year, @start.month, (@start.day + 1))

    @appointments = Appointment.where('booking_hour_start BETWEEN ? AND ?', @start, @end)

    render json: @appointments
  end

  # GET /appointments/1
  def show
    render json: @appointment
  end

  # POST /appointments
  def create
    @room = Room.find(appointment_params[:room].to_i)
    @band = Band.find(appointment_params[:band].to_i)
    mod_params = { **appointment_params, room: @room, band: @band }
    puts mod_params
    @appointment = Appointment.create(mod_params)

    if @appointment.save
      render json: @appointment, status: :created, location: @appointment
    else
      render json: @appointment.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /appointments/1
  def update
    if @appointment.update(appointment_params)
      render json: @appointment
    else
      render json: @appointment.errors, status: :unprocessable_entity
    end
  end

  # DELETE /appointments/1
  def destroy
    @appointment.destroy
  end

  private

  # Use callbacks to share common setup or constraints between actions.
  def set_appointment
    @appointment = Appointment.find(params[:id])
  end

  # Only allow a trusted parameter "white list" through.
  def appointment_params
    params.require(:appointment).permit(:band, :room, :booking_start, :booking_end)
  end
end
