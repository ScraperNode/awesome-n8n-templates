# 🎬 Generate AI case studies from Feedspace testimonials with Google Gemini and publish to WordPress

> ⚡ **31 views** · 🎬 [Content Creation & Video](../)

## Description

**Who is this for?**
This template is for teams who collect customer testimonials on feedpsace (via forms) and want to automatically convert them into professional case studies using AI and publish them to WordPress.

**What this workflow does**

This workflow listens for incoming testimonial data via a webhook, extracts the relevant fields, uses an AI agent to generate a complete case study (including title, sections, and structure), and publishes the final content directly to WordPress.

The AI is instructed to vary tone, angle, and structure across case studies to avoid repetitive content and improve SEO value.

**Requirements:**
- Feedspace account with webhook integration enabled
- Access to a WordPress site with REST API enabled
- An AI API key (Google Gemini or compatible model)

**Setup steps**
- Connect to Feedspace
	- Activate the workflow and copy the Production webhook URL
	- Go to Feedspace → Automations → Webhooks
	- Paste the webhook URL and activate it
	- See https://www.feedspace.io/help/automation/ for more information
- Add your AI API credentials to the AI model node
- Connect your WordPress account in the WordPress node
- Send testimonial data to the webhook in this format:
	- Reviewer name
	- Rating
	- Text feedback
	- Event or feedback type
	- Activate the workflow



**How it works**

1. Receives testimonial data through feedpsace webhook
2. Extracts reviewer name, rating, feedback, and event type
3. Filters for text-based testimonials
4. Uses an AI agent to:
5. Choose a unique case study angle and tone
6. Generate structured HTML content
7. Create an SEO-optimized title
8. Parses and validates the AI output
9. Publishes the generated case study to WordPress as a post

## 🔗 Nodes Used

Webhook, Wordpress, AI Agent, Simple Memory, Google Gemini Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
