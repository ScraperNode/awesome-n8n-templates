# 📱 Create financial newsletters with Perplexity Research, GPT drafting, and Gmail approval flow

> ⚡ **608 views** · 📱 [Social Media & Email Marketing](../)

> 💡 **Pro Tip** — For competitive intelligence, [ScraperNode](https://scrapernode.com) can automate the data collection — [Yelp reviews](https://scrapernode.com/yelp/scrapers/reviews), [Glassdoor company data](https://scrapernode.com/glassdoor/scrapers/companies), and [Crunchbase profiles](https://scrapernode.com/crunchbase/scrapers/companies) all return structured JSON you can feed straight into this workflow.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Automated Weekly Newsletter with AI Research, Editorial Drafting, and Approval Flow

This n8n template demonstrates how to automate the full production cycle of a professional weekly newsletter. It combines AI-powered market research, editorial drafting, compliance validation, and an approval loop — all before creating a final Gmail draft ready for distribution.

Use cases are many:
- Wealth managers sending weekly market updates to clients
- Startups producing recurring research digests
- Teams creating automated newsletters for marketing or content distribution

### Good to know

- At time of writing, each AI call (research, editorial, QC) consumes API tokens from Perplexity and OpenAI. See provider pricing for updated info.
- Gmail integration requires OAuth setup with your account.
- You can adapt the prompts to any domain — from finance to tech to education.

## How it works

- Schedule Trigger runs every week and sets the date window.
- Research LLM fetches structured JSON market data using Perplexity.
- Editorial LLM transforms research into a polished ~2,000 word client-ready newsletter.
- QC LLM validates factual accuracy and compliance risks before approval.
- Preview Email is sent with Approve/Revise buttons. Clicking opens a secure n8n-hosted approval form.
- Final Draft Creation: Once approved, the workflow generates a clean Gmail draft, ready to send.

## How to use

- Replace the demo schedule trigger with your own (weekly, daily, or event-based).
- Set up Gmail OAuth credentials to enable email previews and final drafts.
- Update branding (logo, disclaimer, signature) in the HTML builder node.
- Adjust prompts to your audience — e.g., simplify tone for marketing, or keep institutional tone for financial clients.

## Requirements

- Perplexity account for research API (or your LLM of choice)
- OpenAI for editorial and QC steps (or your LLM of choice)
- Gmail account with OAuth credentials
- Optional: your own domain to host the approval webhook

## Customising this workflow

This workflow can be extended beyond financial newsletters. Try:
- Content marketing: Automate weekly digests or trend reports
- Education: Generate curriculum summaries with approval loops for teachers
- Internal comms: Automate compliance-checked company updates

## 🔗 Nodes Used

Webhook, Gmail, Schedule Trigger, OpenAI, Perplexity

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
