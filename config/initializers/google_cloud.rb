require "json"
require "google/cloud/firestore"
require "google/cloud/storage"

credentials = JSON.parse(ENV["GOOGLE_CREDENTIALS_JSON"])

FIRESTORE = Google::Cloud::Firestore.new(
  project_id: ENV["GCP_PROJECT_ID"],
  credentials: credentials
)

STORAGE = Google::Cloud::Storage.new(
  project_id: ENV["GCP_PROJECT_ID"],
  credentials: credentials
)

STORAGE_BUCKET = STORAGE.bucket(ENV["FIREBASE_STORAGE_BUCKET"])
