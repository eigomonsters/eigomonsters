# -*- encoding: utf-8 -*-
# stub: webpacker 4.3.0 ruby lib

Gem::Specification.new do |s|
  s.name = "webpacker".freeze
  s.version = "4.3.0"

  s.required_rubygems_version = Gem::Requirement.new(">= 0".freeze) if s.respond_to? :required_rubygems_version=
  s.metadata = { "changelog_uri" => "https://github.com/rails/webpacker/blob/v4.3.0/CHANGELOG.md", "source_code_uri" => "https://github.com/rails/webpacker/tree/v4.3.0" } if s.respond_to? :metadata=
  s.require_paths = ["lib".freeze]
  s.authors = ["David Heinemeier Hansson".freeze, "Gaurav Tiwari".freeze]
  s.date = "2020-08-16"
  s.email = ["david@basecamp.com".freeze, "gaurav@gauravtiwari.co.uk".freeze]
  s.homepage = "https://github.com/rails/webpacker".freeze
  s.licenses = ["MIT".freeze]
  s.required_ruby_version = Gem::Requirement.new(">= 2.2.0".freeze)
  s.rubygems_version = "3.3.3".freeze
  s.summary = "Use webpack to manage app-like JavaScript modules in Rails".freeze

  s.installed_by_version = "3.3.3" if s.respond_to? :installed_by_version

  if s.respond_to? :specification_version then
    s.specification_version = 4
  end

  if s.respond_to? :add_runtime_dependency then
    s.add_runtime_dependency(%q<activesupport>.freeze, [">= 4.2"])
    s.add_runtime_dependency(%q<railties>.freeze, [">= 4.2"])
    s.add_runtime_dependency(%q<rack-proxy>.freeze, [">= 0.6.1"])
    s.add_development_dependency(%q<bundler>.freeze, [">= 1.3.0"])
    s.add_development_dependency(%q<rubocop>.freeze, ["< 0.69"])
    s.add_development_dependency(%q<rubocop-performance>.freeze, [">= 0"])
  else
    s.add_dependency(%q<activesupport>.freeze, [">= 4.2"])
    s.add_dependency(%q<railties>.freeze, [">= 4.2"])
    s.add_dependency(%q<rack-proxy>.freeze, [">= 0.6.1"])
    s.add_dependency(%q<bundler>.freeze, [">= 1.3.0"])
    s.add_dependency(%q<rubocop>.freeze, ["< 0.69"])
    s.add_dependency(%q<rubocop-performance>.freeze, [">= 0"])
  end
end
