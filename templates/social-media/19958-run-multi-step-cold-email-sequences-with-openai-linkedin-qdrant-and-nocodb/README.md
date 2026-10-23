# 📱 Run multi-step cold email sequences with OpenAI, LinkedIn, Qdrant and NocoDB

> ⚡ **7 views** · 📱 [Social Media & Email Marketing](../)

> 💡 **Pro Tip** — If you're pulling LinkedIn data through HTTP requests or dealing with API restrictions, there's a community node called [ScraperNode](https://scrapernode.com/linkedin) that handles this natively. It has dedicated scrapers for [profiles](https://scrapernode.com/linkedin/scrapers/profiles), [companies](https://scrapernode.com/linkedin/scrapers/companies), [jobs](https://scrapernode.com/linkedin/scrapers/jobs), and [people search](https://scrapernode.com/linkedin/scrapers/people-search) — you just pass a URL and get structured data back.
>
> <a href="https://scrapernode.com/linkedin"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
This primary orchestrator workflow automates multi-step cold email campaigns. It enriches lead profiles using LinkedIn data via RapidAPI, generates hyper-personalized email copy using OpenAI and a Qdrant knowledge base, and tracks follow-up sequences seamlessly using NocoDB.

## How it works
1. Schedule Triggers launch the 1st, 2nd, 3rd, and 4th email sequences at staggered times throughout the week.
2. Pulls lead lists and sender/company context from NocoDB.
3. Calls a sub-workflow to check if an email inbox has reached its daily/weekly sending limits before proceeding.
4. For first-touch emails, it pulls the prospect's LinkedIn profile and recent posts using RapidAPI.
5. LangChain Agents use OpenAI to analyze the LinkedIn data, create a research briefing, and draft a highly personalized email. Qdrant is used as a vector store to retrieve accurate product details
6. Sends the drafted email via a "Send Emails" sub-workflow, then writes the sent message and timestamps back to NocoDB to start the follow-up tracking cycle.
7. Subsequent sequences pull past email history and company LinkedIn posts, generating context-aware follow-ups until the sequence concludes.

## Setup
1. Add your OpenAI API credentials for all the Chat Model nodes.
2. Add your Qdrant credentials and ensure your collection exists with embeddings compatible with your OpenAI embeddings model.
3. Add your RapidAPI credentials for the "professional-network-data" endpoints to enable LinkedIn scraping.
4. Update the NocoDB base URL, table paths, and xc-token headers to match your environment, and ensure the tables/fields used for leads, company info, and follow-up logging exist.
5. Connect and configure the referenced sub-workflows for inbox availability and email sending (“If Emails Available to Send Email” and “Send Emails”), including any email-provider credentials they require.
6. (Optional) Use the form trigger to upload PDFs/CSVs into the Qdrant knowledge base so the email writers can retrieve accurate product/service details during generation.

## Requirements
- OpenAI API Key
- RapidAPI Key (Professional Network Data)
- Qdrant Vector Database
- NocoDB instance (or replace with Airtable/Google Sheets)
- The supporting sub-workflows imported into your n8n workspace

## Customization
- Modify the Schedule Trigger nodes to match your target timezones and sending days.
- Open the LangChain Agent nodes and adjust the system prompts to match your company's specific voice, industry, and writing rules.
- You can easily swap out the NocoDB HTTP Request nodes for native Airtable, Postgres, or Google Sheets nodes depending on your tech stack.

## Additional info
This template is Part 1 of a comprehensive 7-part Lead Generation system. Because it acts as the "brain," you will see broken connections in the "Execute Workflow" nodes upon import. You must download the remaining sub-workflows from my creator profile and re-link them inside those nodes for the automation to run successfully.

## 🔗 Nodes Used

HTTP Request, Execute Sub-workflow, Schedule Trigger, AI Agent, Embeddings OpenAI, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
