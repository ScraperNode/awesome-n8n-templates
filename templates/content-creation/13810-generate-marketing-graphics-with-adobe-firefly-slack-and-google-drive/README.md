# 🎬 Generate marketing graphics with Adobe Firefly, Slack and Google Drive

> ⚡ **22 views** · 🎬 [Content Creation & Video](../)

## Description

This workflow connects n8n to the Adobe Firefly API to automatically generate branded marketing graphics from plain text prompts. Submit a campaign brief and receive 4 production-ready creative asset variations for social media, banner ads, email headers, and campaigns — all generated in seconds with no designer required.

Adobe Firefly is Adobe's commercially safe generative AI model, trained exclusively on licensed Adobe Stock content. Every image produced is safe for commercial marketing use with zero copyright risk.

---

### What's the Goal?
To fully automate creative asset production for marketing teams and agencies. Instead of waiting days for a designer or paying per-asset fees, this workflow generates on-brand visuals instantly from a campaign description.

Specific outcomes:
- Generate 4 image variations per campaign in one API call
- Auto-size assets for the target platform (Instagram, Facebook, LinkedIn, Google Ads)
- Save the asset manifest to Google Drive for team access
- Notify the creative team on Slack when assets are ready
- Log every job for billing and brand compliance tracking

---

### Why Does It Matter?
Marketing teams spend 30-40% of their time waiting on creative assets. Agencies bill 150-500 USD per graphic. Adobe Firefly changes this completely:

- Commercially safe: trained on licensed Adobe Stock — zero IP risk
- Brand consistent: style references and negative prompts keep every asset on-brand
- Instant: 4 variations ready in under 30 seconds
- Scalable: run for 1 or 1000 campaigns at the same cost per run
- Profitable: agencies can offer AI creative packages at very high margin

---

### How It Works
Step 1 — Webhook receives the campaign brief with brand, prompt, platform, style, and mood
Step 2 — Set node stores Adobe credentials and normalizes all input fields
Step 3 — Code node builds 4 optimized Firefly prompt variations with brand voice and platform dimensions
Step 4 — HTTP Request calls Adobe Firefly v3 text-to-image API to generate all 4 variants
Step 5 — Code node parses the response, extracts all image URLs, and builds the delivery package
Step 6 — HTTP Request saves the full asset manifest JSON to Google Drive
Step 7 — HTTP Request posts a Slack notification with all image links and job metadata
Step 8 — Respond node returns the complete asset package as JSON to the caller

---

### Configuration Requirements
- ADOBE_CLIENT_ID — Adobe Developer Console project client ID
- ADOBE_CLIENT_SECRET — Adobe Developer Console project client secret
- ADOBE_ORG_ID — Your Adobe organization ID
- SLACK_WEBHOOK_URL — Incoming webhook for creative team notifications
- GOOGLE_DRIVE_FOLDER_ID — Folder where asset manifests are saved
- GOOGLE_OAUTH_TOKEN — Google Drive upload token

---

### Setup Guide
Step 1: Go to developer.adobe.com and create a new project
Step 2: Enable the Firefly API service in your Adobe Developer project
Step 3: Copy your Client ID, Client Secret, and Org ID from the project credentials page
Step 4: Open the Set Adobe Credentials node and paste all three values
Step 5: Set your SLACK_WEBHOOK_URL and GOOGLE_DRIVE_FOLDER_ID in the same node
Step 6: Activate the workflow
Step 7: POST to /webhook/firefly-graphics with your campaign payload

---

**Explore More Automation:**
[Contact us](https://www.oneclickitsolution.com/contact-us/) to design AI-powered lead nurturing, content engagement, and multi-platform reply workflows tailored to your growth strategy.

## 🔗 Nodes Used

HTTP Request, Webhook

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
