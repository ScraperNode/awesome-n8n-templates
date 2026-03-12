# ⚒️ AI system prompt generator & optimizer (n8n + OpenAI)

> ⚡ **1,712 views** · ⚒️ [Engineering](../)

## Description

This workflow acts as a **System Prompt Optimizer Agent**.  
You send it a draft prompt or goal, and it returns:  
1. A rewritten **optimized system prompt** that is clear, specific, and actionable.  
2. A recommendation for the **best OpenAI model** to use based on reasoning needs, complexity, and latency/cost tradeoffs.  

The workflow uses **memory** for context, so you can iteratively refine prompts.  

---

## ⚙️ Setup Instructions

### 1️⃣ Set Up OpenAI Connection
1. Go to [OpenAI Platform](https://platform.openai.com/api-keys)  
2. Navigate to [OpenAI Billing](https://platform.openai.com/settings/organization/billing/overview)  
3. Add funds to your billing account  
4. Copy your API key into the **OpenAI credentials** in n8n  

---

## 📝 Example Question

## 🔗 Nodes Used

AI Agent, OpenAI Chat Model, Simple Memory, Chat Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
