# 🔧 Build a self-hosted URL shortener with a dashboard

> ⚡ **6,073 views** · 🔧 [Miscellaneous](../)

## Description

This workflow creates an automatic self-hosted URL shortener. It consists of three sub-workflows:

1. **Short URL creation** for extracting the provided long URL, generating an ID, and saving the record in the database. It returns a short link as a result.
2. **Redirection** for extracting the ID value, validating the existence of its correspondent record in the database, and returning a redirection page after updating the visits (click) count.
3. **Dashboard** for calculating simple statistics about the saved record and displaying them on a dashboard.

Read more about this use case and how to set up the workflow in the blog post [*How to build a low-code, self-hosted URL shortener in 3 steps*](https://n8n.io/blog/how-to-build-a-low-code-self-hosted-url-shortener/).

## Prerequisites

- A local proxy set up that redirects the n8n.ly domain to your n8n instance
- An Airtable account and [credentials](https://docs.n8n.io/integrations/credentials/airtable/)
- Basic knowledge of JavaScript, HTML, and CSS

## Nodes

- [Webhook nodes](https://docs.n8n.io/integrations/core-nodes/n8n-nodes-base.webhook/) trigger the sub-workflows on calls to a specified link.
- [IF nodes](https://docs.n8n.io/integrations/core-nodes/n8n-nodes-base.if/) route the workflows based on specified query parameters.
- [Set nodes](https://docs.n8n.io/integrations/core-nodes/n8n-nodes-base.set/) set the required values returned by the previous nodes (id, longUrl, and shortUrl).
- [Airtable nodes](https://docs.n8n.io/integrations/nodes/n8n-nodes-base.airtable/) retrieve records (values) from or append records to the database.
- [Function node](https://docs.n8n.io/integrations/core-nodes/n8n-nodes-base.function/) calculates statistics on link clicks to be displayed on the dashboard, as well as its design.
- [Crypto node](https://docs.n8n.io/integrations/core-nodes/n8n-nodes-base.crypto/) generates a SHA256 hash.

## 🔗 Nodes Used

Airtable, Function, Start, Webhook

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
