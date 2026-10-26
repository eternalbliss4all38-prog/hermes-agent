# Tools — S.A.M.S. Business Intelligence Research & Analysis Agent

## Running on this box (verified 2026-10-25)
- **Listmonk** (`sams-listmonk`) — email campaigns, lists, subscribers. The email channel.
- **Postiz** (`sams-postiz`) — schedule + distribute to the social channels.
- **Temporal** (`sams-temporal`) — workflow engine behind Postiz scheduling/posting.
- **n8n** (`sams-n8n`) — automation glue between tools.
- **Scrapling** (`sams-scrapling`) — scraping / competitor + SERP collection.
- **PostgreSQL 16** (`sams-postgres`) + **Redis** (`sams-redis`) — data + queues.
- **OpenMontage** (via OpenClaw) — video production; you brief it, you do not run it.

## Required, NOT present on the box (real blockers)
- **SMS provider** (e.g. Twilio-class) — **no SMS gateway is installed**. SMS marketing cannot run
  until a provider is chosen, credentials are placed, and opt-in/consent + TCPA compliance is in
  place. Do not claim SMS capability until this exists.
- **Product analytics / A-B testing engine** — **PostHog is not running** and no experiment engine is
  installed. The "adjust while running using the data" loop needs event-level analytics + a test
  engine with variance analysis. To be stood up.
- **Landing-page / funnel hosting + form capture** — lead capture endpoints to be defined.
- **Sending-domain setup** (SPF/DKIM/DMARC) — required before Listmonk volume, or deliverability dies.

## Access rule
Role-scoped. Extra tools are granted case-by-case under Hermes' direction and monitored.
