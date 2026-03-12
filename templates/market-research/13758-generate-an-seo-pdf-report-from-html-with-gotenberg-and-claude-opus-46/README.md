# 📊 Generate an SEO PDF report from HTML with Gotenberg and Claude Opus 4.6

> ⚡ **5 views** · 📊 [Market Research & Insights](../)

## Description

## What this workflow does

This workflow takes any website URL, extracts its HTML content, and uses an AI Agent (Claude Opus 4.6) to perform a comprehensive SEO analysis. The AI evaluates the page structure, meta tags, heading hierarchy, link profile, image optimization, and more — then generates a beautifully formatted HTML report. Finally, it converts the report into a PDF using [Gotenberg](https://gotenberg.dev), a free and open-source HTML-to-PDF engine.

**Workflow steps:**
1. **Form submission** — pass the URL you want to analyze
2. **HTML extraction** — fetches the full HTML content from the URL
3. **AI SEO analysis** — Claude Opus 4.6 analyzes the HTML and generates a detailed SEO report in HTML format
4. **File conversion** — converts the HTML output into a file (index.html) for Gotenberg
5. **PDF generation** — sends the file to Gotenberg and returns the final PDF

## Setup Guide

### Gotenberg — Choose one of 3 options:

**Option 1 — Demo URL (testing only):**
Use `https://demo.gotenberg.dev` as the URL in the HTTP Request node. This is a public instance with rate limits — do not use in production.

**Option 2 — Docker Compose (self-hosted n8n):**
Add Gotenberg to the same `docker-compose.yml` where your n8n service is defined:
```yaml
services:
  # ... your n8n service ...

  gotenberg:
    image: gotenberg/gotenberg:8
    restart: always
```

Run `docker compose up -d` to restart your stack. Gotenberg will be available at `http://gotenberg:3000` from inside your n8n container.

**Option 3 — Google Cloud Run (n8n Cloud or no Docker access):**
Deploy `gotenberg/gotenberg:8` as a Cloud Run service via the [Google Cloud Console](https://console.cloud.google.com/run). Set the container port to `3000`, memory to `1 GiB`, and use the generated URL as your endpoint.

📖 Full Gotenberg docs: [gotenberg.dev/docs](https://gotenberg.dev/docs/routes#convert-with-chromium)

### AI Model

This workflow uses **Claude Opus 4.6** via the [Anthropic API](https://console.anthropic.com/). You can swap it for OpenAI, Google, or Ollama — just replace the Chat Model node.

## Requirements

- [Anthropic API key](https://console.anthropic.com/) (or alternative LLM provider)
- Gotenberg instance (demo URL included for quick testing)
- No other external services or paid tools required

---

Feel free to contact me via [LinkedIn](https://www.linkedin.com/in/marceloamiranda) if you have any questions! 👋🏻

## 🔗 Nodes Used

HTTP Request, AI Agent, Anthropic Chat Model, n8n Form Trigger, Convert to File

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
