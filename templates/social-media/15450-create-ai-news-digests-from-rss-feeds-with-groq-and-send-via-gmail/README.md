# 📱 Create AI news digests from RSS feeds with Groq and send via Gmail

> ⚡ **52 views** · 📱 [Social Media & Email Marketing](../)

## Description

## How it works
1. RSS feeds from The Verge and TechCrunch are fetched on manual trigger
2. Articles are merged, sorted newest-first, and prepared for AI processing
3. Groq AI Agent 1 summarises articles in batches of 3 using a memory-buffered loop
4. Groq AI Agent 2 assembles all summaries into a polished newsletter
5. Newsletter is converted from Markdown to HTML and sent via Gmail

## Set up steps
- Estimated time: ~5 minutes
- Add your Groq API key to both Groq Chat Model nodes
- Connect Gmail via OAuth2 in the Send node
- Set your recipient email address in the Send node
- Optionally add a Schedule Trigger for automatic weekly delivery
- Click Execute Workflow to generate your first newsletter

## 🔗 Nodes Used

RSS Read, Gmail, Markdown, AI Agent, Groq Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
