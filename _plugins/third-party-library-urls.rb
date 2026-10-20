# Expand CDN version placeholders without the unused library downloader and its
# vulnerable css_parser dependency. Libraries are served directly from the CDN.
Jekyll::Hooks.register :site, :after_init do |site|
  libraries = site.config.fetch('third_party_libraries', {})
  if libraries['download']
    raise 'Local third-party library downloading is unsupported; set third_party_libraries.download to false.'
  end

  expand_urls = lambda do |value, version|
    case value
    when Hash
      value.transform_values { |child| expand_urls.call(child, version) }
    when String
      value.gsub('{{version}}', version.to_s)
    else
      value
    end
  end

  libraries.each_value do |library|
    next unless library.is_a?(Hash) && library['url']

    library['url'] = expand_urls.call(library['url'], library['version'])
  end
end
