# 📊 Analyze & Tag User Feedback in Notion with GPT-4 Sentiment Analysis

> ⚡ **1,083 views** · 📊 [Market Research & Insights](../)

## Description

## Overview
- This n8n workflow processes user feedback automatically, tags it with sentiment, and links it to relevant insights in Notion.
- It uses GPT-4 to analyze each feedback entry, determine whether it corresponds to an existing insight or a new one, and update the Notion databases accordingly.
- It helps teams centralize and structure qualitative user feedback at scale.

## Who It’s For
- Product teams looking to organize and prioritize user feedback.
- Founders or solo builders seeking actionable insights from qualitative data.
- Anyone managing a Notion workspace where feedback is collected and needs to be tagged or linked to features and improvements.

## Prerequisites
- A Notion account with:
  - A **Feedback** database (must include fields for feedback content and status).
  - An **Insights** database with multi-select fields for `Solution`, `User Persona`, and a relation to Feedback.
  - The Notion template (linked below) helps you get started quickly — just remove the mock data.
- A [configured Notion API integration in n8n](https://docs.n8n.io/integrations/builtin/credentials/notion/#using-api-integration-token).  
  👉 Don’t forget to connect the n8n integration to the correct Notion page.
- An [OpenAI API key](https://platform.openai.com/api-keys)

## Notion Template
This workflow is designed to work seamlessly with **a pre-configured Notion template** that includes the required feedback and insights structure.  
👉 **[User Feedback Analysis – Notion Template](https://agentstudio-templates.notion.site/User-Feedback-Analysis-1df6b2b6117f81ec8273e6fcb29d0dab)**


## How It Works
- The workflow is triggered when a feedback item is updated in Notion (e.g. new feedback is submitted).
- Sentiment analysis (Positive, Neutral, or Negative) is run using OpenAI and stored in a select field in Notion.
- The AI agent analyzes the feedback to:
  - Identify whether it matches an **existing insight**.
  - Or create a **new insight** in Notion with a concise name, solution, and user persona.
- The feedback is then linked to the appropriate insight and marked as "Processed."

## How to Use It
1. Connect your Notion databases in all Notion nodes (including those used by the AI agent) for both Feedback and Insights — follow the node names provided.
2. Ensure your OpenAI and Notion credentials are correctly set.
3. **Set up your product context**:
   - Define a `“Product Overview”` and list your `“Core Features”`.
   - This helps the AI agent categorize insights more accurately.
   - (The Basecamp product is used as an example in the template.)
4. (Optional) Modify the prompt to better fit your specific product context.
5. Once feedback is added or updated in Notion, the workflow triggers automatically.

## Notes
- Only feedback with the status `Received` is processed.
- New insights are only created if no relevant match is found.
- Feedback is linked to insights via Notion’s relation property.
- A fallback parser is included to fix potential formatting issues in the AI output.
- You can swap the default n8n memory for a more robust backend like Supabase.

#### 🙏 [Please share your feedback with us](https://tally.so/r/w82eNO). It helps us tremendously!

## 🔗 Nodes Used

Notion, Notion Trigger, AI Agent, OpenAI Chat Model, Simple Memory, Auto-fixing Output Parser

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
