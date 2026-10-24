# 🎫 Triage support tickets by GPT-4o sentiment and route them to Slack

> ⚡ **21 views** · 🎫 [Ticket Management & Triage](../)

## Description

# Analyze customer support ticket sentiment and route to Slack channels

---

## Who is this for

Customer support teams, customer experience managers, and operations teams that need to triage incoming support tickets in real time without manual classification. Ideal for SaaS companies, e-commerce businesses, and service providers handling high ticket volumes.

## What this workflow does

This workflow automatically triages incoming customer support tickets by sentiment using OpenAI GPT-4o. A ticket arrives via webhook, is normalized, analyzed for anger intensity (scored 0-10), and routed to the correct Slack channel in real time. High-anger tickets are escalated immediately, mid-range tickets go to standard support, and low-anger tickets or feedback are logged separately.

## How to set up

1. Add your OpenAI API credential to the AI sentiment analysis node
2. Add your Slack OAuth2 credential to all three Slack nodes
3. Update Slack channel names (#escalation / #support / #feedback) to match your workspace
4. Activate the workflow and copy the webhook URL for your support form integration
5. Send a test request to verify end-to-end execution

## Requirements

- OpenAI API account with GPT-4o access
- Slack workspace with OAuth2 app installed (chat:write scope)
- Three Slack channels: one for escalation, one for support, one for feedback

## How to customize

Adjust the anger score thresholds in the Switch node to match your team's escalation policy. Modify the GPT-4o prompt to detect additional sentiment categories or extract custom fields from tickets. Add language detection for multilingual support.

---

## Node List

| # | Node Name | Type | Role |
|---|-----------|------|------|
| 1 | When Ticket Received | Webhook | Trigger on incoming HTTP POST request |
| 2 | Normalize Ticket Data | Code | Sanitize and validate ticket fields |
| 3 | OpenAI Sentiment Analysis | OpenAI | AI anger scoring and sentiment tagging |
| 4 | Parse Sentiment Output | Code | Parse JSON output and decide routing |
| 5 | Route by Sentiment Score | Switch | 3-way branch: ≥8 / 4-7 / ≤3 |
| 6 | Send to Slack #escalation | Slack | Alert for high-anger tickets |
| 7 | Send to Slack #support | Slack | Notification for mid-range tickets |
| 8 | Send to Slack #feedback | Slack | Log for low-anger tickets or feedback |
| 9 | Respond with Routing Outcome | Respond to Webhook | Confirm result to the caller |

**Total: 9 nodes (+ 5 Sticky Notes)**

---

## Sticky Note Compliance

| # | Sticky Note Title | Color | Role |
|---|-------------------|-------|------|
| 1 | Main Sticky Note (Overview) | Yellow | Workflow overview, How it works, Setup steps, Customization |
| 2 | Receive and normalize | White | Covers webhook reception and data normalization |
| 3 | Analyze sentiment | White | Covers GPT-4o sentiment analysis |
| 4 | Parse and route | White | Covers JSON parsing and routing logic |
| 5 | Post to Slack channels | White | Covers all 3 Slack post nodes and webhook response |

All sticky notes use H2 headings (`## `) and follow n8n public guidelines.

---

## Tags

`ai` `gpt-4` `openai` `slack` `customer-support` `sentiment-analysis` `automation`

## 🔗 Nodes Used

Slack, Webhook, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
