class PkpkusermatchresultinfosController < ApplicationController

  # 新規作成・更新
  def create
    match_data_list = params["_json"]
    if !match_data_list.is_a?(Array)
      render plain: "Invalid data format", status: 400
      return
    end

    success_count = 0
    failure_count = 0
    error_details = []

    allowed_keys = Pkpkusermatchresultinfo.column_names.map(&:to_sym)

    match_data_list.each do |match_data|
      begin
        # match_data をハッシュとして取得し、モデルに存在するカラムのみ抽出
        safe_data = match_data.to_unsafe_h.symbolize_keys.slice(*allowed_keys)

        existing_record = Pkpkusermatchresultinfo.find_by(match_id: safe_data[:match_id])
        if existing_record
          # update!ではなくupdate_allに変更
          Pkpkusermatchresultinfo.where(match_id: safe_data[:match_id]).update_all(safe_data.except(:match_id))
        else
          Pkpkusermatchresultinfo.create!(safe_data)
        end
        success_count += 1
      rescue ActiveRecord::RecordInvalid => e
        failure_count += 1
        error_details << {
          match_id: safe_data[:match_id],
          error: e.record.errors.full_messages
        }
        Rails.logger.warn("マッチ保存失敗: match_id=#{safe_data[:match_id]} #{e.message}")
      rescue => e
        failure_count += 1
        error_details << {
          match_id: safe_data[:match_id],
          error: "予期しないエラー: #{e.message}"
        }
        Rails.logger.error("予期しないエラー: match_id=#{safe_data[:match_id]} #{e.message}")
      end
    end

    render json: {
      status: 'completed',
      saved: success_count,
      failed: failure_count,
      errors: error_details
    }, status: :ok
  end



  def count
    result_count = Pkpkusermatchresultinfo.count
    render status: 200, json: { result_count: result_count }
  end

  # 削除(match_idによる削除)
  def delete_by_match_id
    match_ids = params[:match_ids]
    if match_ids.blank?
      render json: { error: 'No match_ids provided' }, status: :bad_request and return
    end

    deleted_count = Pkpkusermatchresultinfo.where(match_id: match_ids).delete_all
    render json: { status: 'deleted', deleted_count: deleted_count, match_ids: match_ids }, status: :ok
  end

end
