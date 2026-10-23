# 🎫 Route and prioritize support emails to Slack channels with easybits

> ⚡ **30 views** · 🎫 [Ticket Management & Triage](../)

## Description

## What This Workflow Does
Watches your support inbox, classifies every incoming email by category, scores it for **priority** based on sentiment and urgency signals, and posts a clean summary to the matching Slack channel. Works equally well for **English and German** emails. Low-confidence classifications automatically fall through to the catch-all channel so nothing slips through, with the model's best guess preserved as a breadcrumb.

## How It Works
1. **Watch** – Gmail Trigger polls your support inbox for new mail
2. **Prepare** – The email content is packaged into a format ready for extraction
3. **Classify** – easybits returns category, summary, confidence, and priority in one call
4. **Route** – Low-confidence emails are folded into "Other"; the rest go by category
5. **Notify** – A formatted message lands in the matching Slack channel with priority emoji

## Categories
- 💳 **Billing** – invoices, payments, refunds, subscription changes
- 🔧 **Technical** – bug reports, errors, login issues
- 💼 **Sales** – pricing questions, demo requests, new prospects
- 📥 **Other** – everything else, plus low-confidence fallbacks

## Priority Levels
- 🚨 **Urgent** – angry tone, things broken, hot leads, time-sensitive
- 🟢 **Normal** – standard requests, no time pressure
- ⚪ **Low** – casual inquiries, FYIs, vendor pitches

## Setup Guide
### 1. Install the easybits Extractor Node
Already available out of the box on **n8n Cloud**. On self-hosted instances: Settings → Community Nodes → Install `@easybits/n8n-nodes-extractor`.

### 2. Connect Your Credentials
- **Gmail** on the trigger node (OAuth)
- **easybits** on the classify node (API key from easybits.tech)
- **Slack** on all four channel nodes (one credential, reused four times)

### 3. Set Up the Extractor Pipeline
Create an easybits pipeline with four fields. Copy each prompt below into the matching field's description:

- 📂 [Category Classification Prompt](https://github.com/felix-sattler-easybits/n8n-workflows/blob/a62d2189ed8ee72424335454fdf82fc735c2b14a/easybits-support-inbox-router/easybits_category_classification_prompt.md)
- 📝 [Summary Prompt](https://github.com/felix-sattler-easybits/n8n-workflows/blob/a62d2189ed8ee72424335454fdf82fc735c2b14a/easybits-support-inbox-router/easybits_summary_prompt.md)
- 🎯 [Confidence Prompt](https://github.com/felix-sattler-easybits/n8n-workflows/blob/a62d2189ed8ee72424335454fdf82fc735c2b14a/easybits-support-inbox-router/easybits_confidence_prompt.md)
- 🚦 [Priority Prompt](https://github.com/felix-sattler-easybits/n8n-workflows/blob/a62d2189ed8ee72424335454fdf82fc735c2b14a/easybits-support-inbox-router/easybits_priority_prompt.md)

### 4. Set Up Slack Channels
Create four channels in your workspace and update each Slack node to point at the right one:
- `#support-billing`
- `#support-technical`
- `#support-sales`
- `#support-other`

### 5. (Optional) Filter the Inbox
On the Gmail Trigger, add a label filter (e.g. `support`) so personal mail doesn't get classified.

### 6. Activate & Test
Send a few test emails covering different categories and tones. Verify they land in the right channels with sensible priority emoji before going live.

## Notes
- **Bilingual prompt** – works on English and German emails out of the box, with German summaries for German emails
- **No confidence gate** – low-confidence emails route to `#support-other` with a flag noting the model's best guess, so reviewers can spot patterns without a separate channel
- **One Extractor call** – classification, summary, confidence, and priority all come from a single pipeline call, keeping latency and cost low

## 🔗 Nodes Used

Slack, Gmail Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
