# 🎣 Qualify and nurture Typeform leads in GoHighLevel with OpenAI, Calendly, Gmail and Slack

> ⚡ **73 views** · 🎣 [Lead Generation & Enrichment](../)

## Description

## Who it's for

Service businesses, agencies, and consultants using GoHighLevel as their CRM who want to automatically qualify, route, and follow up with inbound leads based on their fit and buying intent.

## How it works

When a lead submits your Typeform, OpenAI scores them from 0 to 100 based on budget, timeline, and business need. The workflow routes leads into three tiers automatically. Hot leads above 80 are created in GoHighLevel, added to your hot pipeline, sent a Calendly booking link via Gmail, and trigger an instant Slack alert. Warm leads between 50 and 79 are added to a nurture pipeline, sent a personalized AI-written email, and receive an automated follow-up 48 hours later. Cold leads below 50 are tagged and logged in GoHighLevel with a Slack notification for manual review.

## How to set up

1. Update all variables in the Configure Variables node

2. Connect Typeform and select your form

3. Add OpenAI API credentials

4. Add GoHighLevel API credentials and Pipeline IDs

5. Connect Gmail for outbound emails

6. Connect Slack and set your channel name

7. Add your Calendly booking link to Configure Variables

## Requirements

- Typeform account with an active form
- OpenAI API key
- GoHighLevel account with API access and two pipelines configured
- Gmail account
- Slack workspace
- Calendly account with booking link

## How to customize

- Adjust hot and warm score thresholds in the Configure Variables node
- Modify AI scoring criteria in the AI Lead Scorer prompt
- Replace the 48 hour wait with any delay that fits your sales cycle
- Add Twilio SMS notifications for hot leads
- Replace Gmail with any email provider supported by n8n

## 🔗 Nodes Used

Slack, Typeform Trigger, Gmail, HighLevel, AI Agent, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
