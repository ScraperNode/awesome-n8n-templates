# ⚡ WhatsApp expense tracker with multi-input (text, image & audio)

> ⚡ **1,247 views** · ⚡ [Personal Productivity](../)

## Description

# Description
**CashMate – Your AI-Powered WhatsApp Finance Agent**  
Turn WhatsApp into a smart finance assistant that auto-registers you, logs transactions in natural language, extracts data from receipts and voice notes, and delivers instant report summaries—no apps, no charts, just lightning-fast insights in chat.

# Who is this for?
- Personal finance enthusiasts wanting effortless expense tracking  
- Freelancers & solopreneurs juggling multiple incomes and expenses  
- Small business owners needing quick bookkeeping on the go  
- Busy professionals who prefer messaging over apps  
- Privacy-minded users who host data on their own PostgreSQL  

# What problem does this solve?
- Zero onboarding friction: Just send "Hi"—no forms, no sign-ups  
- No app switching: Track everything right inside WhatsApp  
- Manual entry eliminated: Natural-language, image, and voice input all auto-parsed  
- Instant summaries: On-demand report requests—no dashboards to navigate  

# How it works
## Auto-Registration
- New users: "Hi" → Creates your profile in PostgreSQL  
- Returning users: Bypasses creation if your number already exists  

## Intent Classification routes every message into one of five branches:
### Reports & Summaries
- Triggers on keywords like "today's report," "show May vs June," or "summary."  
- Returns concise text summary of income, expenses, and net balance.  

### Natural-Language Transactions
- Messages like "Give 200 to Mukesh for car repair" → AI extracts date, category, amount, payee → logs it.  

### Receipt OCR
- Attach a receipt image → Gemini OCR node reads line-items → AI categorizes and logs.  

### Voice-Driven Logging
- Send a voice note → Deepgram node transcribes → AI logs transaction.  

### General Chat & Greetings
- "Hi," "Hello," or casual finance questions → Routed to chat branch for greetings or tips.  

# Setup
## Prerequisites
- n8n instance (self-hosted or n8n.cloud, v1.0+)  
- WhatsApp Business Cloud API credentials  
- PostgreSQL database (host, port, user, password)  
- OpenRouter/OpenAI API key for NLP  
- Gemini API key for OCR  
- Deepgram API key for voice transcription  

## Quick Start
1. Import CashMate.n8n.json into n8n.  
2. Rename nodes to suit your environment.  
3. Configure Credentials in n8n's Credentials section—avoid hard-coding keys.  
4. Activate workflow and message "Hi" from WhatsApp.  
5. Test by sending a sample expense text, image receipt, or voice note.  

&gt; **Note:** All detailed setup instructions and deep configuration steps are provided in the sticky notes within the template.  

# How to Customize
- **Categories & Currencies:** Edit parsing logic in the Function nodes.  
- **AI Models:** Swap OpenAI/OpenRouter for GPT-4, Claude, or self-hosted alternatives.  
- **Multi-User Support:** Extend registration logic to tag team or family accounts.  
- **Additional Features:** Add budget alerts, multi-currency support, or bank integrations via Plaid.  

# Example Interactions
## 1. Text Transaction
```yaml
User: 300 given to James for the coffee  
CashMate: ✅ Transaction Added:
   • Date:          2025-06-24  
   • Category:      Coffee & Beverages  
   • Type:          Expense  
   • Amount:        ₹300.00  
   • Counterparty:  James
```

## 2. Receipt Image (OCR)

```yaml
User: [sends image of café bill totaling ₹450]  
CashMate: ✅ Transaction Added:
   • Date:          2025-06-24  
   • Category:      Coffee & Beverages  
   • Type:          Expense  
   • Amount:        ₹450.00  
   • Counterparty:  Café Aroma

```


## 3. Voice Transaction
```yaml
User: [voice note: "Paid 650 rupees for office stationery"]  
CashMate: ✅ Transaction Added:
   • Date:          2025-06-24  
   • Category:      Office Supplies  
   • Type:          Expense  
   • Amount:        ₹650.00  
   • Counterparty:  (none)

```

## 🔗 Nodes Used

HTTP Request, Postgres, WhatsApp Business Cloud, AI Agent, OpenAI Chat Model, Structured Output Parser

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
