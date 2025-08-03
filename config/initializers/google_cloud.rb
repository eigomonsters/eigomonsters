require "google/cloud/firestore"
require "google/cloud/storage"

FIRESTORE = Google::Cloud::Firestore.new(
  project_id: ENV['GCP_PROJECT_ID'],
  credentials: ENV['GCP_CREDENTIALS_PATH']
)

STORAGE = Google::Cloud::Storage.new(
  project_id: ENV['GCP_PROJECT_ID'],
  credentials: ENV['GCP_CREDENTIALS_PATH']
)

STORAGE_BUCKET = STORAGE.bucket(ENV['FIREBASE_STORAGE_BUCKET']) # 例: myapp.appspot.com
