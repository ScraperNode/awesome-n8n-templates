# ⚒️ 🤖 AI-powered prompt enhancement assistant using Google Sheets

> ⚡ **2,839 views** · ⚒️ [Engineering](../)

## Description

*This workflow contains community nodes that are only compatible with the self-hosted version of n8n.*

## Introduction
Tired of spending time crafting the perfect AI prompt? This workflow takes your simple ideas like "write a blog post" and automatically transforms them into detailed, structured prompts that actually work.
## 🎯 What This Does
Automatically converts simple user prompts like *"write a blog post"* into structured, professional AI prompts with metadata, variables, and clear instructions. Perfect for everybody, all industries and organizations who are wanting to eliminate prompt engineering works.

---
## 🔄 How It Works
1. **Google Sheets Trigger** monitors for new prompts
2. **AI Enhancement Pipeline** uses Gemini + Groq to add structure & context  
3. **Field Completion** auto-generates missing metadata (topic, categories)
4. **Quality Assurance** validates & stores complete results
---
## 🚀 Setup Requirements
- **AI APIs**: Gemini, Telegram, Groq API keys
- **Google Sheets**: 2 sheets (Main, ModifiedPrompt)
- **5 minutes setup time** - detailed instructions in blue sticky notes
---
## Set up steps
Setup time: &lt; 5 minutes
1. Create a Google Spreadsheet with two tabs (sheets): **OriginalPrompts** and **ModifiedPrompts**.
   - OriginalPrompts columns: `Original Prompt ID | Model | Original Prompt | Created Time`
   - ModifiedPrompts columns (example): `Modified Prompt ID | Original Prompt ID | Topic | Topic Categories | Modified Prompt | Prompt Title | Prompt Type | Model Used | Improvement Notes | Updated Time | Created Time | isProcessed`

2. Add and attach credentials in n8n:
   - **Google Sheets OAuth2** (required for getting new prompt)
   - **Gemini** and **Groq** API credentials (required for AI Agent)
   - **Telegram** credential (required for notifications)

3. Save & Activate the workflow. Add a test row to **OriginalPrompts**, for example:  
   `Original Prompt ID: 1` — `Original Prompt: "Write a short blog post about AI ethics"`.

4. Wait ~30–60s and check **ModifiedPrompts** for the enhanced output.

That’s it ! Once it configured, drop short ideas into your sheet and get professional prompts back automatically. Your prompts get better, your AI outputs improve, and you save hours of manual prompt crafting.

## 🔗 Nodes Used

Google Sheets, Telegram, Google Sheets Trigger, AI Agent, Simple Memory, Google Gemini Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
