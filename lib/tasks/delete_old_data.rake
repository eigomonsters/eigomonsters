namespace :cleanup do
  desc "Delete decks and matches where deleted=1 and updated_at is over 30 days old"
  task delete_old_data: :environment do
    threshold_time = 1.days.ago.utc.iso8601

    %w[decks matches].each do |collection_name|
      collection_ref = FIRESTORE.col collection_name
      query = collection_ref.where("deleted", "==", 1).where("updated_at", "<", threshold_time)

      query.get.each do |doc_snapshot|
        doc_id = doc_snapshot.document_id
        puts "Deleting #{collection_name}/#{doc_id}"

        # Firestorage 画像ファイルがある場合はここで削除（例: deckId.jpg）
        begin
          filename = "#{doc_id}.jpg"
          file = STORAGE_BUCKET.file("user_decks/#{filename}")
          file&.delete
          puts "Deleted storage file: #{filename}"
        rescue => e
          puts "Failed to delete storage file for #{doc_id}: #{e.message}"
        end

        # Firestore ドキュメント削除
        FIRESTORE.doc("#{collection_name}/#{doc_id}").delete
      end
    end
  end
end