# 🎫 Adaptive email auto-responder with GPT-4, RAG and human feedback loop

> ⚡ **80 views** · 🎫 [Ticket Management & Triage](../)

## Description

### ⚙️ Self Learning Agent: AI-Powered Email Auto-Responder that Improves with Feedback

### 🧑‍💻 Author: LeeWei

---

## Overview of the n8n Workflow

This n8n workflow builds a self-improving AI agent for handling email responses. It integrates Gmail for incoming messages, uses an AI agent with a Supabase vector store for knowledge retrieval, drafts replies based on dynamic prompts, and evaluates confidence scores. High-confidence drafts are sent automatically, while low-confidence ones are routed to Google Sheets for human review. Feedback from Sheets triggers updates to the prompt or knowledge base, enabling the agent to learn and refine its responses over time. The workflow supports OpenAI and OpenRouter models, with structured output parsing and conditional routing for efficiency.

---

## How it Works

• Triggers on new Gmail emails, extracts content, and uses an AI agent with company knowledge from Supabase to draft a response.  
• Assesses confidence; auto-sends high-confidence replies or saves drafts to Google Sheets for human feedback.  
• Monitors Sheets for updates, extracts feedback via AI, and applies changes—either refining the dynamic prompt or adding new info to the vector store.  
• Loops back improvements to enhance future responses without manual reconfiguration.

---

## Set Up Steps

Setup takes about 20-30 minutes, focused on credentials and basic resource creation (e.g., Google Sheet and Supabase table). Detailed node-level guidance is in the workflow's sticky notes—clone the JSON for plug-and-play nodes, then edit only essentials like credentials and IDs. No need to rebuild nodes; they're pre-connected and ready.

---

### 🚀 Steps to Connect:

1. **Gmail Setup**  
   - Set up OAuth2 credentials at [console.cloud.google.com](https://console.cloud.google.com) with scopes for Gmail (read/send).  
   - Paste into the **Gmail Trigger** and **Gmail** nodes' credentials fields.  
   - Test by sending a sample email to your connected inbox.

2. **OpenAI API Key**  
   - Generate at [platform.openai.com](https://platform.openai.com).  
   - Paste into the **OpenAI Chat Model** and **OpenAI Chat Model1** nodes' credentials.  
   - 💡 Use a model like `gpt-4o-mini` for cost efficiency; adjust temperature in options for response creativity.

3. **OpenRouter API Key**  
   - Sign up at [openrouter.ai](https://openrouter.ai) and create an API key.  
   - Paste into the **OpenAI Chat Model2** node's credentials (used for feedback extraction).  
   - Select a model like `gpt-4o-mini` in the node for consistency.

4. **Supabase Connection**  
   - Create a free account at [supabase.com](https://supabase.com), set up a project, and add a table named `documents` with vector support (enable pgvector extension).  
   - Paste API URL and key into the **Supabase Vector Store** and **Supabase Vector Store1** nodes' credentials.  
   - Initialize with sample docs via the workflow or dashboard for knowledge base testing.

5. **Google Sheets Setup**  
   - Create OAuth2 credentials at [console.cloud.google.com](https://console.cloud.google.com) with scopes for Sheets (read/write).  
   - Paste into all **Google Sheets** nodes' credentials.  
   - Duplicate the sample sheet (ID: `1YDzwYd5LdTnSQlFM5YrDhhbCnNH7oHVvNg6x3mYu8I4`) or create one with tabs: "Dynamic Var" (for prompts) and "Feedback" (columns: Id, Original Email, Draft, Human Feedback, Status). Replace the documentId in nodes with your sheet's ID.

---

## Plug and Play Instructions

Clone the provided JSON directly into n8n—all nodes (triggers, agents, parsers, switches) are pre-wired and functional. No re-setup required beyond the steps above. Key editable fields (detailed in sticky notes):

- **AI Agent Node: System Message**  
  Customize the prompt template for response style (e.g., add rules for tone or specific facts). Default handles factual, concise replies.

- **Structured Output Parser Node: JSON Schema**  
  Adjust if adding output fields (e.g., include "suggested_followup" alongside "final_response" and "resolution_score").

- **If Node: Conditions**  
  Tweak the confidence threshold (default: &lt;4 routes to review) based on your risk tolerance.

- **Information Extractor Node: Prompt**  
  Refine the feedback analysis (e.g., prioritize certain feedback types like "add facts" vs. "update prompt").

Test with a sample email: Send a query to your Gmail, review in Sheets if low-confidence, provide feedback, and watch the agent improve on the next run.

---

## Potential Customizations

- **Switch AI Models**: Swap OpenAI/OpenRouter nodes for alternatives like Anthropic via compatible n8n nodes.  
- **Add Notifications**: Insert a Slack or email node post-Sheets save for alerts on low-confidence drafts.  
- **Expand Knowledge Base**: Add a loader node to ingest more docs into Supabase automatically.  
- **Confidence Routing**: Duplicate the If node for multi-tier reviews (e.g., score 1-2 escalates to admin).

---

## Considerations and Improvements

- **API Limits**: Monitor OpenAI/OpenRouter usage for costs; start with mini models. Supabase free tier handles small knowledge bases—upgrade for scale.  
- **Data Privacy**: Emails and feedback pass through AI providers—ensure compliance for sensitive info.  
- **Feedback Loop**: Test iterations to confirm improvements; initial runs may need manual prompt tweaks.  
- **Enhancements**: Integrate audio transcription for voice feedback or export logs for auditing.  

This workflow turns email handling into an adaptive, low-maintenance system—ideal for support teams or busy inboxes. For tweaks, reference the sticky notes or experiment in a test clone!

## 🔗 Nodes Used

Google Sheets, Gmail, Markdown, Gmail Trigger, Google Sheets Trigger, AI Agent

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
