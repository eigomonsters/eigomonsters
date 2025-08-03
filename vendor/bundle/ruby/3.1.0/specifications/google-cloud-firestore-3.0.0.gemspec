# -*- encoding: utf-8 -*-
# stub: google-cloud-firestore 3.0.0 ruby lib

Gem::Specification.new do |s|
  s.name = "google-cloud-firestore".freeze
  s.version = "3.0.0"

  s.required_rubygems_version = Gem::Requirement.new(">= 0".freeze) if s.respond_to? :required_rubygems_version=
  s.require_paths = ["lib".freeze]
  s.authors = ["Google Inc".freeze]
  s.date = "2025-03-10"
  s.description = "google-cloud-firestore is the official library for Google Cloud Firestore API.".freeze
  s.email = "googleapis-packages@google.com".freeze
  s.homepage = "https://github.com/googleapis/google-cloud-ruby/tree/master/google-cloud-firestore".freeze
  s.licenses = ["Apache-2.0".freeze]
  s.required_ruby_version = Gem::Requirement.new(">= 3.0".freeze)
  s.rubygems_version = "3.3.3".freeze
  s.summary = "API Client library for Google Cloud Firestore API".freeze

  s.installed_by_version = "3.3.3" if s.respond_to? :installed_by_version

  if s.respond_to? :specification_version then
    s.specification_version = 4
  end

  if s.respond_to? :add_runtime_dependency then
    s.add_runtime_dependency(%q<bigdecimal>.freeze, ["~> 3.0"])
    s.add_runtime_dependency(%q<concurrent-ruby>.freeze, ["~> 1.0"])
    s.add_runtime_dependency(%q<google-cloud-core>.freeze, ["~> 1.7"])
    s.add_runtime_dependency(%q<google-cloud-firestore-v1>.freeze, ["~> 2.0"])
    s.add_runtime_dependency(%q<rbtree>.freeze, ["~> 0.4.2"])
  else
    s.add_dependency(%q<bigdecimal>.freeze, ["~> 3.0"])
    s.add_dependency(%q<concurrent-ruby>.freeze, ["~> 1.0"])
    s.add_dependency(%q<google-cloud-core>.freeze, ["~> 1.7"])
    s.add_dependency(%q<google-cloud-firestore-v1>.freeze, ["~> 2.0"])
    s.add_dependency(%q<rbtree>.freeze, ["~> 0.4.2"])
  end
end
