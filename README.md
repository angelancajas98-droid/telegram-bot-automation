# TeamMarySy Telegram Bot

Single Cloudflare Worker Telegram bot implementation based on the supplied Developer Implementation Checklist.

## Architecture

- Telegram webhook -> Worker -> authentication/authorization/rate limiting -> update router -> feature handlers.
- Native `fetch()` Telegram client; no Telegram SDK.
- Cloudflare KV stores only operational state: configuration, workflows, tickets, jobs, counters and feature state.
- Cloudflare Cron executes scheduled jobs and cleanup.
- Structured logs omit bot tokens, webhook secrets, message content and conversation history.

## Local setup

1. Install Node.js 22+ and dependencies: `npm install`.
2. Copy `.dev.vars.example` to `.dev.vars` and populate secrets.
3. Create KV namespaces and replace IDs in `wrangler.toml`.
4. Run `npm run typecheck`, `npm test`, then `npm run dev`.

## Secrets

Set `TELEGRAM_BOT_TOKEN` and `TELEGRAM_WEBHOOK_SECRET` as Worker secrets. Do not commit them. Configure owner/admin IDs, allowed chats and feature flags through environment variables.

## Deployment

Use protected GitLab variables for Cloudflare credentials and production secrets. Deploy staging first, run smoke tests, then promote production. Configure Telegram `setWebhook` with the Worker URL and the same secret token.

## Feature surface

`/panel`, `/content`, `/community`, `/support`, `/buttons`, `/automation`, `/schedule`, `/broadcast`, `/approvals`, `/knowledge`, `/tasks`, `/poll` are wired into the router. Feature modules are deliberately isolated so their business logic can be expanded without putting it in the webhook or global router.

## Important implementation note

The supplied checklist specifies the feature contracts but does not define detailed UX, database schemas, content models, broadcast recipient discovery, or external knowledge sources. This rebuild therefore provides the complete Worker/security/routing/state foundation and explicit feature extension points rather than inventing undocumented business rules.
