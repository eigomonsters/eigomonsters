# -*- encoding: utf-8 -*-
# stub: google-cloud-location 1.1.0 ruby lib

Gem::Specification.new do |s|
  s.name = "google-cloud-location".freeze
  s.version = "1.1.0"

  s.required_rubygems_version = Gem::Requirement.new(">= 0".freeze) if s.respond_to? :required_rubygems_version=
  s.require_paths = ["lib".freeze]
  s.authors = ["Google LLC".freeze]
  s.date = "1980-01-02"
  s.description = "An add-on interface used by some Google API clients to provide location management calls.".freeze
  s.email = "googleapis-packages@google.com".freeze
  s.homepage = "https://github.com/googleapis/google-cloud-ruby".freeze
  s.licenses = ["Apache-2.0".freeze]
  s.required_ruby_version = Gem::Requirement.new(">= 3.1".freeze)
  s.rubygems_version = "3.3.3".freeze
  s.summary = "API Client library for the Locations API".freeze

  s.installed_by_version = "3.3.3" if s.respond_to? :installed_by_version

  if s.respond_to? :specification_version then
    s.specification_version = 4
  end

  if s.respond_to? :add_runtime_dependency then
    s.add_runtime_dependency(%q<gapic-common>.freeze, ["~> 1.0"])
    s.add_runtime_dependency(%q<google-cloud-errors>.freeze, ["~> 1.0"])
  else
    s.add_dependency(%q<gapic-common>.freeze, ["~> 1.0"])
    s.add_dependency(%q<google-cloud-errors>.freeze, ["~> 1.0"])
  end
end
