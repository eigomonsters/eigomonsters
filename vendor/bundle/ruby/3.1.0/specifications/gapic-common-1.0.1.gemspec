# -*- encoding: utf-8 -*-
# stub: gapic-common 1.0.1 ruby lib

Gem::Specification.new do |s|
  s.name = "gapic-common".freeze
  s.version = "1.0.1"

  s.required_rubygems_version = Gem::Requirement.new(">= 0".freeze) if s.respond_to? :required_rubygems_version=
  s.require_paths = ["lib".freeze]
  s.authors = ["Google API Authors".freeze]
  s.date = "1980-01-02"
  s.email = ["googleapis-packages@google.com".freeze]
  s.homepage = "https://github.com/googleapis/ruby-core-libraries".freeze
  s.licenses = ["Apache-2.0".freeze]
  s.required_ruby_version = Gem::Requirement.new(">= 3.1".freeze)
  s.rubygems_version = "3.3.3".freeze
  s.summary = "Common code for GAPIC-generated API clients".freeze

  s.installed_by_version = "3.3.3" if s.respond_to? :installed_by_version

  if s.respond_to? :specification_version then
    s.specification_version = 4
  end

  if s.respond_to? :add_runtime_dependency then
    s.add_runtime_dependency(%q<faraday>.freeze, [">= 1.9", "< 3.a"])
    s.add_runtime_dependency(%q<faraday-retry>.freeze, [">= 1.0", "< 3.a"])
    s.add_runtime_dependency(%q<googleapis-common-protos>.freeze, ["~> 1.6"])
    s.add_runtime_dependency(%q<googleapis-common-protos-types>.freeze, ["~> 1.15"])
    s.add_runtime_dependency(%q<googleauth>.freeze, ["~> 1.12"])
    s.add_runtime_dependency(%q<google-cloud-env>.freeze, ["~> 2.2"])
    s.add_runtime_dependency(%q<google-logging-utils>.freeze, ["~> 0.1"])
    s.add_runtime_dependency(%q<google-protobuf>.freeze, [">= 3.25", "< 5.a"])
    s.add_runtime_dependency(%q<grpc>.freeze, ["~> 1.66"])
  else
    s.add_dependency(%q<faraday>.freeze, [">= 1.9", "< 3.a"])
    s.add_dependency(%q<faraday-retry>.freeze, [">= 1.0", "< 3.a"])
    s.add_dependency(%q<googleapis-common-protos>.freeze, ["~> 1.6"])
    s.add_dependency(%q<googleapis-common-protos-types>.freeze, ["~> 1.15"])
    s.add_dependency(%q<googleauth>.freeze, ["~> 1.12"])
    s.add_dependency(%q<google-cloud-env>.freeze, ["~> 2.2"])
    s.add_dependency(%q<google-logging-utils>.freeze, ["~> 0.1"])
    s.add_dependency(%q<google-protobuf>.freeze, [">= 3.25", "< 5.a"])
    s.add_dependency(%q<grpc>.freeze, ["~> 1.66"])
  end
end
