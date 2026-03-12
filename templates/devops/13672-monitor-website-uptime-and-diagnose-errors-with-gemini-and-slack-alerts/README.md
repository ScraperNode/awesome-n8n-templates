# ⚙️ Monitor website uptime and diagnose errors with Gemini and Slack alerts

> ⚡ **6 views** · ⚙️ [DevOps & CI/CD](../)

## Description

## Who is this for

DevOps engineers, site reliability teams, and business owners who need to know the moment their website goes down — and want AI-powered diagnostics instead of just a ping alert.

## What this workflow does

A Schedule Trigger checks your website every 5 minutes by sending an HTTP Request to your target URL. A Code node evaluates the response status code and response time against your thresholds. When the site is down or degraded, Google Gemini analyzes the error pattern and provides a probable root cause diagnosis with recommended actions. Every health check is logged to Google Sheets for uptime history tracking. Downtime events trigger an immediate Slack alert that includes the AI diagnosis. A daily summary email is sent via Gmail so you have a record even when nothing goes wrong.

## How to set up

1. Replace `https://example.com` in the "Check Website" node with your actual URL
2. Add your free Google Gemini API key from Google AI Studio
3. Create a Google Sheet called "Uptime Log" and connect it
4. Connect Slack and select your monitoring channel
5. Connect Gmail and set the recipient email address

## Requirements

- Google Gemini API key (free tier)
- Google Sheets account
- Slack workspace
- Gmail account
- n8n instance (self-hosted or cloud)

## How to customize

- Change the check interval in the "Check Every 5 Minutes" trigger node
- Adjust the response time threshold in the "Evaluate Response" Code node (default: 3000ms)
- Monitor multiple URLs by duplicating the HTTP Request and Code nodes

## 🔗 Nodes Used

Google Sheets, HTTP Request, Slack, Gmail, Schedule Trigger, Basic LLM Chain

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
