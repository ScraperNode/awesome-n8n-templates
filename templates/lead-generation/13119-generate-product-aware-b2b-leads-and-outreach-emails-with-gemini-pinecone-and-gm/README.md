# 🎣 Generate product-aware B2B leads and outreach emails with Gemini, Pinecone and Gmail

> ⚡ **40 views** · 🎣 [Lead Generation & Enrichment](../)

> 💡 **Pro Tip** — For lead enrichment, [ScraperNode](https://scrapernode.com) can pull [LinkedIn profiles](https://scrapernode.com/linkedin/scrapers/profiles), [company data](https://scrapernode.com/linkedin/scrapers/companies), and [job listings](https://scrapernode.com/indeed/scrapers/jobs) directly into your pipeline — useful for building prospect lists without manual research.

## Description

# How can you find your target market if you don't know what your product is.

This simple philosophy changes the way we think about automated sales agents. Context changes everything. In this 4-part workflow, we start by creating a knowledge base that will act as context across the workflow. This context will guide and provide our AI Agents across the workflow to locate better leads and perform market research based on what the product actually offers.

**Use Case**: Lead generation for Product-based Sales

### Tech Required

- **Neon DB**: For storing Research and Lead Data. You can use Google sheets but it has a rate limiting problem.
- **Google Serper**: As a web search tool for our AI.
- **Google Drive**: For storing our knowledge base documents.
- **Pinecone**: Vector DB for converting our knowledge base into context for AI.
- **Hunter.io**: For finding emails for outreach.
- **Email Client**: An email client, maybe gmail or anything that can send an email on your behalf.
- **Gemini**: Our trusty AI LLM.

### Good to know

All of the tools that I use in this workflow are either free or have an extremely generous free-tier.

### How it works

- We start by converting our knowledge base into context for AI. Take in the documents from Google drive and convert it into embeddings and store them in a vector store like Pinecone. This needs to be only run once, or whenever you have a new document in your knowledge base.
- Then we pass this context to an AI agent and tell it to generate search queries for locating companies that actually need my services.
- Then for each company that we've located, we determine the company staff that we need to reach out to for selling our product. This will be done by a combination of Google Serper and Hunter.io
- Once we have the list of employees and their emails, we start creating personalized emails based on the data we've collected for each of the employee and send them outreach emails.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Postgres, Google Drive, Hunter, Gmail

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
