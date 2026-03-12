# 🎣 Enrich Airtable company records with web research using OpenAI GPT-4o

> ⚡ **4 views** · 🎣 [Lead Generation & Enrichment](../)

## Description

## Video Introduction
[![Video Walkthrough](https://vasarmilan-public.s3.us-east-1.amazonaws.com/blog_thumbnails/thumbnail_recidrbznaXlmqFUI.jpg)](https://youtu.be/lQh1fuIrBN8)

#### Want to automate your inbox or need a custom workflow? [📞 Book a Call](https://smoothwork.ai/book-a-call/) | [💬 DM me on Linkedin](https://www.linkedin.com/in/mil%C3%A1n-v%C3%A1s%C3%A1rhelyi-3a9985123/)

---

## What This Workflow Does

This workflow automatically enriches your Airtable company database with AI-powered research. Whenever a new company is added to your Airtable base, an AI agent searches the web to discover the company's website and generates a concise 1-2 sentence summary of their business activities. The workflow then updates the Airtable record with these findings, eliminating manual research and keeping your data complete and current.

## Key Benefits

- **Automated data enrichment**: No more manual web searches for company information
- **AI-powered accuracy**: Uses OpenAI with web search capabilities to find reliable, up-to-date information
- **Structured output**: Returns data in a predictable JSON format for consistent record updates
- **Real-time processing**: Triggers immediately when new companies are added

## Setup Requirements

**Airtable Configuration:**
- Your Companies table must have a **Created time** field to trigger the workflow
- Create an Airtable Personal Access Token at [airtable.com/create/tokens](https://airtable.com/create/tokens) with these scopes: `data.records:read`, `data.records:write`, and `schema.bases:read`
- Ensure your table has fields for **Website** and **Company Details** (or modify the field mappings accordingly)

**OpenAI Setup:**
- Register for an OpenAI account and obtain an API key
- Add your OpenAI credentials in n8n

**Workflow Configuration:**
- Update the Airtable Trigger node with your base and table URLs
- Update the Airtable Update node with your specific base and table information
- Customize the AI prompt if you need different research parameters or output fields

Once published, the workflow runs automatically whenever a new company is added to your table.

## 🔗 Nodes Used

Airtable, Airtable Trigger, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
