# 💬 Send Personalized B2B/B2C Welcome Emails with Jotform, GPT-4o & Perplexity AI

> ⚡ **97 views** · 💬 [Lead Nurturing & AI Sales Agents](../)

## Description

## Send smart, personalized welcome emails to any Jotform lead

This workflow intelligently qualifies new Jotform leads and sends the perfect welcome email every time. It detects whether a lead is using a business or personal email address and tailors the outreach accordingly—either with deep company research for B2B leads or a warm, direct welcome for B2C leads.

## Who's it for?
- **Businesses with mixed audiences:** Companies that serve both business clients and individual users.
- **Sales & Marketing Teams:** To automate lead qualification and send context-aware first-touch emails.
- **Founders & Solopreneurs:** To ensure every new lead gets a relevant, personalized welcome without manual effort.

## How it works
1.  **Trigger:** The workflow starts on a new Jotform submission.
2.  **Filter:** It checks if the lead's email is a work email (e.g., `jane@mycompany.com`) or a personal one (e.g., `john@gmail.com`).
3.  **Path A (Work Email):** The workflow researches the company using Perplexity AI and then uses OpenAI to draft a deeply personalized email referencing company-specific details.
4.  **Path B (Personal Email):** The workflow skips the research and uses OpenAI to draft a warm, friendly, but more general welcome email.
5.  **Send:** The appropriate, context-aware email is sent to the new lead via Gmail.

## How to set up
1.  **Jotform:** Connect your Jotform credentials and choose your lead capture form. **Important:** Your form must contain fields with the exact names `name` and `email`. You can add other fields for more context (e.g., `company_size`).
2.  **Credentials:** Connect your Perplexity AI, OpenAI, and Gmail accounts.
3.  **Activate Workflow:** Turn the workflow on.

## Requirements
- An [n8n account](https://n8n.partnerlinks.io/hsfk0lhyvur4).
- A [Jotform account](https://www.jotform.com/?partner=fahmifahreza).
- A Perplexity AI account with API access.
- An OpenAI account with API access.
- A Gmail account.

## How to customize the workflow
- **Filter Logic:** Add more personal email domains (e.g., `icloud.com`) to the list in the `Check if Email is Work or Personal` node to improve filtering.
- **Prompts:** Customize the prompts in both the AI Agent nodes to match your brand's voice and tone.

## 🔗 Nodes Used

Jotform Trigger, Gmail, AI Agent, OpenAI Chat Model, Perplexity

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
