# Security and operational notes

- Telegram webhook requests require `X-Telegram-Bot-Api-Secret-Token`.
- Owner/admin/allowed-chat configuration is externalized.
- Rate limiting is applied before feature dispatch.
- Logs intentionally exclude message content and secrets.
- KV state is namespaced and temporary workflows have expiration.
- Production deployment should use protected GitLab environments and masked variables.
- Rollback: redeploy the last known-good Worker revision and re-run webhook/smoke checks.
