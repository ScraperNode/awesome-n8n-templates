# 📊 Analyze any website with OpenAI and get on-page SEO audit

> ⚡ **61,390 views** · 📊 [Market Research & Insights](../)

## Description

## Instantly Find & Fix What’s Holding Your Page Back

You’ve put in the work. Your content is strong. Your design is polished.

But…

❌ Your page isn’t ranking where it should.
❌ Your competitors are outranking you—even with weaker content.
❌ You have no idea what’s wrong—or how to fix it.

The truth? SEO isn’t just about keywords.

Your technical setup, content structure, and on-page elements must work together seamlessly.
And if anything is off? Google won’t rank your page.

## Who Is This For?
- SaaS Founders & Startups – Get higher rankings & organic traffic that converts.
- Marketing Teams & Agencies – Audit & optimize pages in seconds.
- E-commerce & Content Sites – Improve rankings for product pages, blogs, and landing pages.

## How It Works
1. Paste your URL
2. Get an instant audit + recommendations list
3. Implement changes & watch your rankings jump

The workflow scrapes the url you input, gets the htlm source code of the landing page, and sends it to OpenAI AI Agent.

The Agent makes a deep analysis, audit the Technical + Content SEO of the page, and provides 10 Recommendations to improve your SEO.

## Setup Guide
You will need OpenAI Credentials with an API Key to run the workflow.

The workflow is using the OpenAI-o1 model to deliver the best results. It costs between $0.20/0.30 per run.

You can adjust the prompt to your wish in the AI Agent parameters.

Once the audit has been completed, it will send an email (don't forget to add your email address here)

## Below is an example of what you can expect

![Screenshot 20250319 at 21.17.35.png](fileId:1023)

## 🔗 Nodes Used

HTTP Request, Gmail, Markdown, AI Agent, OpenAI Chat Model, n8n Form Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)

---

## 💡 Pro Tip

For competitive intelligence, [ScraperNode](https://scrapernode.com) can automate the data collection — [Yelp reviews](https://scrapernode.com/yelp/scrapers/reviews), [Glassdoor company data](https://scrapernode.com/glassdoor/scrapers/companies), and [Crunchbase profiles](https://scrapernode.com/crunchbase/scrapers/companies) all return structured JSON you can feed straight into this workflow.
