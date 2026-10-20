#!/bin/bash
set -euo pipefail

echo "Entry point script running"

CONFIG_FILE=_config.yml

# Install the site's pinned dependencies when the prebuilt image lacks them.
bundle check || BUNDLE_FROZEN=true bundle install

start_jekyll() {
    bundle exec jekyll serve --watch --port=8080 --host=0.0.0.0 --livereload --verbose --trace --force_polling &
    jekyll_pid=$!
}

stop_jekyll() {
    kill -TERM "$jekyll_pid" 2>/dev/null || true
    wait "$jekyll_pid" 2>/dev/null || true
}

start_jekyll

while true; do
    inotifywait -q -e modify,move,create,delete "$CONFIG_FILE"
    if [ $? -eq 0 ]; then
        echo "Change detected to $CONFIG_FILE, restarting Jekyll"
        stop_jekyll
        start_jekyll
    fi
done
