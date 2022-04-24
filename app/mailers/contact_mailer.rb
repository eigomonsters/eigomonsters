class ContactMailer < ApplicationMailer
  default from: 'noreply@example.com'
  default to: 'admin@example.com'
  layout 'mailer'

  def send_mail(contact)
    @contact = contact
    mail(from: contact.email, to:   ENV['TOMAIL'], subject: '【お問い合わせ】' + contact.subject ) do |format|
      format.text
    end
  end
end
