# 📊 Grade POPIA website compliance using homepage and privacy policy HTML

> ⚡ **4 views** · 📊 [Market Research & Insights](../)

## Description

## Quick overview
This workflow runs manually to scan a given website for POPIA compliance signals, fetches and validates a privacy policy page, and produces a site score with detected trackers, cookie-consent status, and a keyword-based privacy policy quality grade.

## How it works
1. Runs when you start the workflow manually.
2. Sends an HTTP request to fetch the target website homepage HTML for the provided website URL.
3. Analyzes the homepage HTML to detect common trackers (Google Tag Manager, Meta Pixel, Hotjar), the presence of a cookie-consent banner, and an on-site privacy policy link while skipping third-party policy links.
4. Builds a list of candidate privacy policy URLs (from the detected link or common fallback paths) and fetches each candidate page via HTTP.
5. Selects the first fetched page that looks like a real privacy policy (sufficient length, not a 404, and contains privacy/POPIA language).
6. Calculates a site-level compliance score and gap list, and grades the privacy policy against seven POPIA-oriented criteria before outputting the results.

## Setup
1. Update the website URL value in the input step (the `website_url` field) to the site you want to audit.
2. Ensure the target site is publicly accessible over HTTP/HTTPS so the HTTP requests can retrieve the homepage and policy pages.
3. Run the workflow and review the output from the final grading step for the score, detected gaps, and policy quality breakdown.

## 🔗 Nodes Used

HTTP Request

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
