class AuthenticationController < ApplicationController
  before_action :authorize_request, except: :login

  # POST /auth/login
  def login
    @user = User.find_by(email: login_params[:email])
    if @user.authenticate(login_params[:password])
      @token = encode({ id: @user.id })
      @band = Band.find(@user['band_id'])
      @data = {
        user: { **@user.attributes.except(:password_digest), band: @band },
        token: @token
      }
      render json: @data, status: :ok
    else
      render json: { user: @user, errors: 'unauthorized', status: :unauthorized }
    end
  end

  # GET /auth/verify
  def verify
    @current_user = @current_user.attributes.except('password_digest')
    @band = Band.find(@current_user['band_id'])

    @data = { **@current_user, band: @band }

    render json: @data, status: :ok
  end

  private

  def login_params
    params.require(:authentication).permit(:email, :password)
  end
end
