class ContactsController < ApplicationController
  def new
    @contact = Contact.new
  end

  def confirm
    if request.post? then
      @contact = Contact.new(contact_params)
      if @contact.valid?
        render :confirm
      else
        render :new
      end
    else
      redirect_to action: :new
    end
  end

  def back
    if request.post? then
      @contact = Contact.new(contact_params)
      render :new
    else
      redirect_to action: :new
    end
  end

  def create
    begin
      @contact = Contact.new(contact_params)
      if @contact.save
        ContactMailer.send_mail(@contact).deliver_now
        redirect_to action: :done
      else
        render :new
      end
    rescue
      redirect_to action: :error
    end
  end

  private

  def contact_params
    params.require(:contact).permit(:email, :name, :subject, :message)
  end
end