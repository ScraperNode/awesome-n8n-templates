# 🎬 Generate visual diagrams and content assets from ideas with Claude and NapkinAI

> ⚡ **6 views** · 🎬 [Content Creation & Video](../)

## Description

This n8n workflow automates the transformation of raw text ideas
into structured visual diagrams and content assets using NapkinAI.

It connects Claude AI (Anthropic) with NapkinAI to take any rough
concept or unstructured idea, intelligently enrich and structure it,
generate polished visual diagrams, and deliver the results directly
to your team via email, Slack, and a database log — all hands-free.


## 🔄 Workflow Stages

### 1. **Input Collection**
   - Webhook trigger accepts raw idea text
   - Manual trigger for testing
   - Configurable idea metadata (title, type, audience)

### 2. **AI Idea Enrichment (Claude)**
   - Expands raw idea into structured concept
   - Extracts key themes and relationships
   - Suggests optimal diagram types
   - Generates multiple visual concepts

### 3. **NapkinAI Processing**
   - Authenticate with NapkinAI API
   - Submit enriched text for visual generation
   - Poll for completion status
   - Retrieve generated diagram assets

### 4. **Asset Management**
   - Download generated visuals
   - Store metadata in database
   - Organize by project/category

### 5. **Delivery**
   - Email with visual assets attached
   - Slack notification with preview
   - Save to Google Drive / Notion

## ⚙️ Setup Required
- NapkinAI API credentials
- Anthropic API key (Claude)
- SMTP for email delivery
- Slack webhook (optional)
- PostgreSQL for logging (optional)

## Why Does It Matter? 
Creating visual content is time-consuming. Turning an idea into a
diagram, infographic, or visual asset typically requires:

  - Writing a clear brief
  - Choosing the right diagram format
  - Using design tools manually
  - Iterating on structure and layout

This workflow compresses all of that into a single automated pipeline.

**Key benefits:**

  - Speed: Ideas become visuals in minutes, not hours
  - Consistency: Every output follows a structured process
  - Scale: Process multiple ideas simultaneously
  - Repurposing: Each idea generates 3+ content format suggestions
  - Team Visibility: Slack + email notifications keep everyone aligned
  - Tracking: Database logging enables analytics over time

## 🔗 Nodes Used

Send Email, HTTP Request, Postgres, Webhook

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
