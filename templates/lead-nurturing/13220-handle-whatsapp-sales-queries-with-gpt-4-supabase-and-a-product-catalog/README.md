# 💬 Handle WhatsApp sales queries with GPT-4, Supabase, and a product catalog

> ⚡ **778 views** · 💬 [Lead Nurturing & AI Sales Agents](../)

## Description

### How it works
An AI-powered sales agent on WhatsApp that handles product inquiries using your Supabase knowledge base and n8n catalog. Customers can send text, voice notes, or images to ask about products, pricing, and specs. The agent responds with detailed answers, product images, and FAQs, creating a complete self-service sales experience.
(I primarily designed this for furniture business, consider tailoring it)
### Setup steps

Connect Supabase credentials for your knowledge base and FAQs
Configure n8n tables with your product catalog (prices, descriptions, image links)
Set up WhatsApp Business API integration
Add your product categories and common queries to the AI context
Test with sample product questions and image uploads

### Customization tips

Structure your catalog tables with clear columns (SKU, price, description, image_url)
Add industry-specific terminology to the AI prompt
Create templated responses for common FAQs to ensure consistency
Enable voice-to-text transcription for better voice note handling
Add product recommendation logic based on customer queries
Set up image recognition for customers sending product photos to identify items

## 🔗 Nodes Used

HTTP Request, WhatsApp Business Cloud, AI Agent, Embeddings OpenAI, OpenAI Chat Model, Simple Memory

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
