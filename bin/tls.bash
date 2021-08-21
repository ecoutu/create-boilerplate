#!/usr/bin/env bash

export GOOGLE_APPLICATION_CREDENTIALS="${GOOGLE_APPLICATION_CREDENTIALS:-secrets/google-credentials.json}"

mkdir -m 0700 tls

certbot certonly --config-dir tls/config --work-dir tls/work --logs-dir tls/logs --dns-google --dns-google-credentials "${GOOGLE_APPLICATION_CREDENTIALS}" -d 'reunition.party' -d '*.reunition.party'
