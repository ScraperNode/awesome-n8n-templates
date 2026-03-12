# ⚡ Daily personalized air & pollen health alerts with Ambee API and AI via email

> ⚡ **427 views** · ⚡ [Personal Productivity](../)

## Description

This workflow fetches real-time air quality and pollen data using Ambee’s APIs and sends a friendly, personalized daily summary by email. It uses a scheduler to automate data collection, AI-generated health tips, and clear, actionable messages—perfect for sensitive users (e.g. kids with asthma, allergy sufferers).
 
**Use Case**: 
Ideal for individuals with respiratory conditions, allergies, or those who want to stay informed about environmental conditions affecting their health.​

**Set up steps**
Estimated time: 10–15 minutes
 You'll need:
- Ambee API key (free registration)
- OpenAI API key
- Email credentials (Gmail)
- User Profile

💡 Keep in mind:

You’ll need to input your location coordinates (we’ve pre-filled Braunschweig as an example).

The AI Agent node uses a ready-made prompt that’s tailored for email—but feel free to adapt it to other messaging platforms.

## 🔗 Nodes Used

HTTP Request, Schedule Trigger, AI Agent, OpenAI Chat Model, Think Tool

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
