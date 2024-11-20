class Rack::Attack
  # 1時間に2回までデッキ作成可能
  throttle('limit deck creation per IP', limit: 10, period: 1.hour) do |req|
    # POSTリクエストで /eigomonsters/createdeckcode にマッチする場合、IPアドレスを取得
    if req.path == '/eigomonsters/createdeckcode' && req.post?
      Rails.logger.info "Throttle check for IP: #{req.ip} with path #{req.path}"
      req.ip # 制限対象のIPアドレスを返す
    end
  end

  # IPがブロックされた際のログ
  ActiveSupport::Notifications.subscribe('rack.attack') do |name, start, finish, request_id, payload|
    if payload[:blocklist]
      Rails.logger.info "[Rack::Attack] Blocked IP: #{payload[:request].ip} for #{payload[:request].path}"
    end
  end
end