# 📈 Aggregate crypto and stock market news feed from multiple sources

> ⚡ **981 views** · 📈 [Crypto Trading & Stock Market](../)

## Description

## This n8n template helps in making informed decisions for Crypto and Stocks Trading by helping you keep track of breaking changes in the market.

## How it works

- Collects crypto and/or stock market headlines from multiple sources: CoinDesk, CoinTelegraph, Google News, and X (via an RSS proxy).
- Normalizes all items into a consistent structure with fields like `source`, `kind`, `title`, `url`, `publishedAt`, `matchedKeywords`, `media[]`, and `topic`.
- Uses topic-specific keyword lists to keep relevant items and a small spam blacklist to drop giveaways / airdrops / obvious noise.
- Deduplicates items across runs by tracking previously seen links.
- Bundles everything into a compact `{ topic, items[] }` JSON payload and sends it to your own backend or UI via HTTP.

## Set up steps

- Import the template JSON into a new n8n workflow.
- In the **Init RunConfig** code node, choose a default `topic` (`crypto` or `stocks`), which platforms to use (CoinDesk / CoinTelegraph / Google News / X), and optionally adjust tickers and keywords.
- Open the final **HTTP Request - Send to your backend** node and:
  - Replace the example URL with your own API endpoint.
  - Either set a `x-webhook-secret` header that your backend validates, or remove this header entirely if you don’t use it.
- Create any required credentials (for the webhook header auth and for HTTP requests, if needed) – the template does **not** contain real API keys.
- Enable either the **Schedule Trigger** for periodic runs or the **Webhook** trigger for on-demand runs from your app.
- Expect roughly 10–20 minutes to import, configure, and test the first run; detailed per-node notes are available as sticky notes inside the workflow canvas.

## 🔗 Nodes Used

HTTP Request, RSS Read, Webhook, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
