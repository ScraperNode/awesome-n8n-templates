# 👥 Answer HR questions with GPT-4o-mini, PostgreSQL, Pinecone and ElevenLabs

> ⚡ **184 views** · 👥 [HR & Recruitment](../)

## Description

This template provides a fully functional, enterprise-grade HR chatbot that employees can interact with using plain language in text or voice in any of the 10 supported Indian languages.

The bot recognizes the employee's identity, the company they work for, and the relevant HR policies that apply to them. It can access live leave balances directly from your PostgreSQL HR database, search for company-specific HR policy documents stored in Pinecone, and retain conversation history for follow-up questions.

**How it works:**

- An employee sends a message (either text or audio) via a POST webhook call.
- The workflow then validates their identity using either their mobile number or email address.
- The system automatically detects the language of the message, which can be Hindi, Gujarati, Marathi, Tamil, and several others.
- If the message is in a non-English language, it is translated into English for processing by the AI Agent.
- The GPT-4o-mini AI Agent determines whether to query the database, search the policy knowledge base, or do both.
- Once a response is generated, it is translated back into the employee's original language and includes quick action and related questions.

**Multi-tenant by design:** Each company has its own Pinecone namespace, ensuring that policy retrieval is completely isolated between organisations. One deployment can support unlimited companies.

**Security measures are implemented:** The AI Agent is limited to SELECT-only queries and consistently filters by the current employee's ID, preventing access to other employees' data or modifications to records.

**Benefits**
- **No HR Helpdesk Overhead**: Employees can self-serve common HR queries 24/7.
- **Support for Multiple Languages**: Breaks down language barriers in multilingual workforces.
- **Accurate Live Data**: Leave balances are pulled directly from your database, ensuring they are always current.
- **Tenant-Safe**: Company policies are isolated by Pinecone namespace to ensure security.
- **Voice-Enabled**: Employees can ask their queries by speaking instead of typing.
- **Context-Aware**: Remembers conversation history for more natural follow-up discussions.
- **Rich Responses**: Provides quick action and automatically suggests related questions.

**Use Cases**
- Inquiry about employee leave balances and history  
- Explanations of HR policies (maternity leave, sick leave, work-from-home policies, probation rules)  
- Lookup for reporting managers and organisational structure  
- Onboarding questions and answers for new joiners  
- Clarification on probation policies  
- Guidance on attendance and payslips  
- Backend support for HR chatbots on WhatsApp, Slack, and mobile apps  

**Feature Bullets**
- ✅ Supports 10 Indian languages with automatic Unicode-based detection.  
- ✅ RAG-powered policy search features per-company Pinecone namespace isolation.  
- ✅ Live PostgreSQL queries to access leave balances, history, and employee data.  
- ✅ Voice input functionality through ElevenLabs Speech-to-Text.  
- ✅ Persistent chat memory, backed by PostgreSQL, maintained per session.  
- ✅ Utilizes the GPT-4o-mini AI Agent with a structured decision-making framework.  
- ✅ Implements a 3-tier validation process (identity → message → employee).  
- ✅ Provides contextual quick action in API responses.  
- ✅ Multi-tenant architecture allows for unlimited companies to be managed from a single deployment.  
- ✅ Includes security guardrails: SELECT-only, employee-ID-scoped queries.

## 🔗 Nodes Used

Postgres, Webhook, AI Agent, Basic LLM Chain, Embeddings OpenAI, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
