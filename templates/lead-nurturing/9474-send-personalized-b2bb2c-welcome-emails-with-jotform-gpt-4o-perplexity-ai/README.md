# 💬 Send Personalized B2B/B2C Welcome Emails with Jotform, GPT-4o & Perplexity AI

> ⚡ **119 views** · 💬 [Lead Nurturing & AI Sales Agents](../)

## Description

## Quick overview
This workflow intelligently qualifies new Jotform leads and sends the perfect welcome email every time. It detects whether a lead is using a business or personal email address and tailors the outreach accordingly—either with deep company research for B2B leads or a warm, direct welcome for B2C leads.

## How it works
1. The workflow starts automatically whenever a new lead submission is received from your configured Jotform form.
2. An IF node checks whether the submitted email belongs to a work domain or a personal provider such as Gmail or Yahoo.
3. For work emails, Perplexity AI researches the lead's company, and OpenAI drafts a deeply personalized email referencing specific company details.
4. For personal emails, the research step is skipped and OpenAI drafts a warm, friendly welcome email using only the available lead information.
5. The appropriate context-aware email is sent to the new lead automatically via Gmail based on which path was taken.

## Setup
1. Connect your Jotform credentials and select your lead capture form. Ensure the form contains fields named exactly name and email for the workflow to map correctly.
2. Connect your Perplexity AI, OpenAI, and Gmail credentials in the n8n Credential Manager before activating the workflow.
3. Activate the workflow — it will now trigger automatically on every new Jotform submission and route each lead through the appropriate email path.

## Requirements
- An [n8n](https://n8n.partnerlinks.io/hsfk0lhvyur4) account.
- A [Jotform](https://www.jotform.com/?partner=fahmifahreza) account.
- A Perplexity AI account with API access.
- An OpenAI account with API access.
- A Gmail account.

## Customization
- Filter Logic: Add more personal email domains (e.g., icloud.com) to the list in the Check if Email is Work or Personal node to improve filtering.
- Prompts: Customize the prompts in both the AI Agent nodes to match your brand’s voice and tone.

## Additional info
Published by Fahmi Fahreza, Indonesia’s first official n8n Brand Ambassador and founder of WithMi Automation, built from real client implementations, not tutorials.
→ Let us build it for you: withmiautomation.com
→ Learn to build it yourself: academy.withmiautomation.com
→ Bring Fahmi to your team (training, workshop, talkshow): fahmiiireza.com

## 🔗 Nodes Used

Jotform Trigger, Gmail, AI Agent, OpenAI Chat Model, Perplexity

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
