# 🎬 Generate diverse names for UX/UI mockups with OpenAI

> ⚡ **207 views** · 🎬 [Content Creation & Video](../)

## Description

This template demonstrates how to build an AI-powered name generator that creates realistic names perfect for UX/UI designers, developers, and content creators.

**Use cases:** User persona creation, mockup development, prototype testing, customer testimonials, team member listings, app interface examples, website content, accessibility testing, and any scenario requiring realistic placeholder names.

## How it works
- **AI-Powered Generation:** Uses any LLM to generate names based on your specifications
- **Customizable Parameters:** Accepts gender preferences, name count, and optional reference names for style matching
- **UX/UI Optimized:** Names are specifically chosen to work well in design mockups and prototypes
- **Smart Formatting:** Returns clean JSON arrays ready for integration with design tools and applications
- **Reference Matching:** Can generate names similar in style to a provided reference name

## How to set up
1. Replace "Dummy API" credentials with your preferred language model API key
2. Update webhook path and authentication as needed for your application
3. Test with different parameters: gender (masculine/feminine/neutral), count (1-20), reference_name (optional)
4. Integrate webhook URL with your design tools, Bubble apps, or other platforms

## Requirements
- LLM API access (OpenAI, Claude, or other language model)
- n8n instance (cloud or self-hosted)
- Platform capable of making HTTP POST requests

## API Usage
POST to webhook with JSON body:
```json
{
  "gender": "masculine",
  "count": 5,
  "reference_name": "Alex Chen" // optional
}
```

Response:
```json
{
  "success": true,
  "names": ["Marcus Johnson", "David Kim", "Sofia Rodriguez", "Chen Wei", "James Wilson"],
  "count": 5
}
```

## How to customize
- Modify AI prompt for specific naming styles or regions
- Add additional parameters (age, profession, cultural background)
- Connect to databases for persistent name storage
- Integrate with design tools APIs (Figma, Sketch, Adobe XD)
- Create batch processing for large mockup projects

## 🔗 Nodes Used

Webhook, AI Agent, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
