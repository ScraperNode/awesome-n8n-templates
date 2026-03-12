# 💬 Lead analysis & personalized email generation with OpenAI, Firecrawl & gotoHuman

> ⚡ **393 views** · 💬 [Lead Nurturing & AI Sales Agents](../)

## Description

![wflow pic.jpg](fileId:2625)
## 💼 Lead Outreach Agent
This AI workflow helps you quickly react to new leads with an initial personalized outreach. A great start of your lead nurturing sequence to avoid loosing precious leads that could turn into paying customers.
Most importantly it uses **gotoHuman** so you can review the AI-analysis and the AI-generated editable email draft before it is sent out in your name.

### How it works
1. We receive a new form submission incl. the email address and company name of the prospect and extract the website URL from the address. We proceed only for company email addresses.
2. We scrape the website using Firecrawl and summarize it with OpenAI
3. Our AI agent runs an analysis based on the lead information and documents describing our own company and the defined Ideal Customer Profiles.
It also fetches previously approved examples from **gotoHuman** so you're effectively creating a **self-learning** agent.
It responds with the analysis and the drafted outreach email.
4. Human Approval in **gotoHuman**. Allows editing the drafted email.
5. We can now send our email including any edits made during the review and be sure that we are using high-quality content instead of AI slop.

### How to set up

1. **Most importantly, [install the gotoHuman node](https://docs.gotohuman.com/Integrations/n8n#add-the-node) before importing this template!**
(Just add the node to a blank canvas before importing)
2. Set up your credentials for the different services
3. In gotoHuman, select and create the pre-built review template "Lead Outreach Agent" or import the ID: `T873fI1Xli5nt3eh33Rj`
4. Select this template in the gotoHuman node

## Requirements

You need accounts for
- gotoHuman (Human Supervision)
- OpenAI (AI Agent)
- Typeform (Lead Form Submissions)
- Firecrawl (Website Scraping)
- Gmail
- Google Docs (Company Wiki)

## How to customize

- Replace the Typeform trigger with any other way you might receive or find new leads
- Provide the _AI Sales Agent_ with more context to properly analyze the lead and create better personalized emails. Consider adding tools that allow the agent to fetch more infos about the prospect's company or personal profile, or to find out more about your specific product/service offerings and how your sales pitches look like.

## 🔗 Nodes Used

Typeform Trigger, Gmail, AI Agent, OpenAI Chat Model, Structured Output Parser, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
