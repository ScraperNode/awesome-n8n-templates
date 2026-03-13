# 🎣 Automate Google Maps lead generation with Perplexity AI and email verification

> ⚡ **2,425 views** · 🎣 [Lead Generation & Enrichment](../)

> 💡 **Pro Tip** — YouTube's API quotas can be a bottleneck when you're pulling data at scale. [ScraperNode](https://scrapernode.com/youtube) is a community node with dedicated scrapers for [channels](https://scrapernode.com/youtube/scrapers/channels), [videos](https://scrapernode.com/youtube/scrapers/videos), and [comments](https://scrapernode.com/youtube/scrapers/comments) — no quota limits, just structured data.

## Description

## Overview ✨

This template **finds businesses on Google Maps → writes to Google Sheets → enriches + **verifies email contact** so your outreach stays clean and deliverable. It includes **Sticky Notes**  to explain the flow and setup.

## What it does 🔎➡️📄➡️✅

1. **Search & save**: Fetch places and append rows (Name, Address, Website, Rating, Phone) to your sheet.
2. **Enrich**: Ask an LLM (Perplexity) for `Email` + a short company `Background`.
3. **Verify emails**: For [Email Verification we use VerificarEmails](https://www.verificaremails.com/en/)  to validate every email address before writing back (fewer bounces, less blocking).

&gt; ℹ️ **VerificarEmails node**: install the **community node** `@verificaremails/n8n-nodes-verificaremails` (Settings → Community Nodes) and use it **until it’s approved as a core node**. ✨
[Youtube Video](https://youtu.be/EA6fWZtIXhk)

## Requirements 🔐

* Use n8n **Credentials** for: Google Sheets, Perplexity (Bearer), and VerificarEmails.
* Keep prompts **short** and `temperature: 0` to lower cost.
* Create a Google Sheet with the following headers: UUID, Name, Address, Website, Rating	Email, Valid, Email, Phone, Valid Phone, Summary

## How to run ▶️

1. Set your search params (query, locale, pages).
2. Run the flow: it saves results → enriches → **verifies emails** → updates the sheet.
3. If the read/update step doesn’t run, ensure the **finalization (Done) path** and the correct **sheet/tab** are selected.

## Why verify? ✉️🧹

Bad emails cause **bounces, throttling, and blocks**. Verifying first protects sender reputation and improves deliverability.
Beyond emails, [VerificarEmails](https://www.verificaremails.com/en/) also offers **phone, names. Check [Email Validation API](https://www.verificaremails.com/docs/en/) documentation to better understand verification results.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Google Sheets Trigger, Filter

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
