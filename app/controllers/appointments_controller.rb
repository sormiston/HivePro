require 'date'

class AppointmentsController < ApplicationController
  before_action :set_appointment, only: %i[show update destroy]
  before_action :authorize_request, except: :index

  # GET /appointments/filter/:dt/:dur
  #  Specifically gets appointments that conflict with user provided params
  def index
    @start_time = DateTime.parse(params[:dt])
    @dur = params[:dur].to_i

    # credit for Line 15 due to Daniel Beardsley:
    # https://stackoverflow.com/questions/238684/subtract-n-hours-from-a-datetime-in-ruby
    @end_time = (@start_time.to_time + @dur.hours).to_datetime
    @appointments = Appointment
                    .where('? >= booking_hour_start AND ? < booking_hour_end', @start_time, @start_time)
                    .or(Appointment.where('? >= booking_hour_start AND ? < booking_hour_end', @end_time, @end_time))

    render json: @appointments
  end

  # GET /appointments/band/:band_id
  
  def index_belonging_to_band
    @appointments = Appointment.where(band: params[:band_id])
    render json: @appointments
  end
  
  # 🦄 "AUTOMAGICAL" 🦄
  # GET /appointments/1
  def show
    render json: @appointment
  end

  # POST /appointments
  def create
    @room = Room.find(appointment_params[:room].to_i)
    @band = Band.find(appointment_params[:band].to_i)
    
    @start_time = DateTime.parse(appointment_params[:booking_hour_start])
    @end_time = (@start_time.to_time + appointment_params[:hours_booked].to_i.hours).to_datetime
    
    @mod_params = { **appointment_params, room: @room, band: @band, booking_hour_end: @end_time }
    puts @mod_params
    @appointment = Appointment.new(@mod_params)

    if @appointment.save
      render json: @appointment, status: :created, location: @appointment
    else
      render json: @appointment.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /appointments/1
  def update
    @appointment = Appointment.find(params[:id])
    @room = Room.find(appointment_params[:room].to_i)
    @start_time = DateTime.parse(appointment_params[:booking_hour_start])
    @end_time = (@start_time.to_time + appointment_params[:hours_booked].to_i.hours).to_datetime
    
    @mod_params = { **appointment_params, room: @room, booking_hour_end: @end_time }
    puts @mod_params 
    
    if @appointment.update(@mod_params)
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
    params.require(:appointment).permit(:band, :room, :booking_hour_start, :booking_hour_end, :hours_booked, :id)
  end
end
