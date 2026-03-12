# 🎫 Daily Email Digest with AI Summarization using Gmail, OpenRouter and LangChain

> ⚡ **1,572 views** · 🎫 [Ticket Management & Triage](../)

## Description

# 📧 Morning Mail Summary Ai Agent

Simplify your mornings with this automated email summary workflow in n8n, designed for teams and individuals who want a quick, actionable snapshot of their inbox—every day, at a glance.

## 📌 Features
- **Fully Automated**: Triggers daily at 8 AM IST  
- **Targeted Extraction**: Fetches messages from specific senders with dynamic date filtering  
- **Structured Data Aggregation**: Pulls key fields (sender, recipients, snippet)  
- **AI-Powered Summarization**: Uses LangChain + OpenRouter to generate:  
  - Insightful summaries  
  - Highlighted issues  
  - Assigned action items  
- **Memory-Enhanced Context**: Maintains continuity across days  
- **Stylish HTML Email Output**: Responsive design with:  
  - Summary section  
  - Action items  
  - Branded footer  
- **Team-Ready Sharing**: Auto-distributes to team with CC support  

## 🛠️ How It Works
1. **Trigger**: Daily schedule in n8n  
2. **Fetch**: Retrieves last 24h emails from target sender  
3. **Organize**: Aggregates email metadata  
4. **Summarize**: AI agent produces structured report:  
   - Key updates  
   - Critical issues  
   - Actionable tasks  
5. **Send**: Emails digest to team  

## 🎯 Ideal For
- Project managers needing stakeholder briefings  
- Customer success teams tracking communications  
- Leadership staying informed efficiently  
- Anyone streamlining email review  

## 📦 Included Resources
- Complete n8n workflow JSON (6 nodes)  
- Prompt template for structured summarization (Summary, Issues, Actions, Follow‑Ups).
-Styled HTML email template, with responsive design and branding sections.



## 🆓 Get Started

1. **Import JSON into n8n**  
2. **Configure:**  
   - Gmail / OpenRouter credentials  
   - Recipient lists  
   - Custom prompts  
3. **Modify freely** for your use case  

---

## ⭐ Benefits

- ⏳ **Time saved:** Skip inbox digging  
- 🔍 **Focus:** See only what matters  
- ✨ **Clarity:** Structured tasks & deadlines  
- 🔄 **Consistency:** Daily alignment for teams

## 🔗 Nodes Used

Gmail, Schedule Trigger, AI Agent, Simple Memory, OpenRouter Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
