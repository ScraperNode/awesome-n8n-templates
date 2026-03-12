# ⚡ Automated recipe finder with an API - n8n API tutorial material

> ⚡ **194 views** · ⚡ [Personal Productivity](../)

## Description

## Video Introduction
[![Video Walkthrough](https://vasarmilan-public.s3.us-east-1.amazonaws.com/blog_thumbnails/thumbnail_recux4gNImLpzqvyd.jpg)](https://youtu.be/mMEX4Zsz4XY)

#### Want to automate your inbox or need a custom workflow? [📞 Book a Call](https://smoothwork.ai/book-a-call/) | [💬 DM me on Linkedin](https://www.linkedin.com/in/mil%C3%A1n-v%C3%A1s%C3%A1rhelyi-3a9985123/)

---

## Workflow Overview

This workflow creates a recipe finder web application that connects to the API Ninjas Recipe API using n8n's HTTP Request node. Users submit search queries through a public web form, which triggers an API call to fetch matching recipes. The results—including recipe title, ingredients, and cooking instructions—are displayed in a formatted completion page.

## Why This Workflow Is Valuable

This template demonstrates API-to-API integration, a crucial skill for connecting services that don't have pre-built n8n nodes. By using direct API calls, you gain access to the full functionality of external services. This pattern can be adapted to integrate virtually any tool with an API into your n8n workflows.

## Common Use Cases

- Create public-facing forms that query external databases
- Build custom search tools for specialized APIs
- Integrate niche services without dedicated n8n nodes
- Learn header authentication for secure API connections

## Setup & Configuration

1. **Register for API Ninjas**: Sign up at API Ninjas to access their Recipe API
2. **Get your API Key**: Locate your API key in the API Ninjas dashboard
3. **Configure Credentials**: In n8n, create a new **Header Auth** credential
   - Set the header name to match the API requirement (e.g., 'X-Api-Key')
   - Paste your API key as the value
   - Apply this credential to the HTTP Request node

The Form Trigger generates a public URL for users to submit queries. Customize the form title, field labels, and completion message HTML to match your needs.

## 🔗 Nodes Used

HTTP Request, n8n Form Trigger, n8n Form

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
