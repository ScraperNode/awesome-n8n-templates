# 💬 Answer wealth management portfolio questions with Google Sheets, live prices and Google Gemini

> ⚡ **98 views** · 💬 [Support Chatbots](../)

## Description

# (Wealth Management) Client Question → Instant Answer Assistant 
## (n8n + Google Sheets + AI + API)

This workflow allows users to ask portfolio-related questions in a simple format (`C001: your question`). It validates the input, fetches client data and holdings from Google Sheets, retrieves live market prices via API, calculates portfolio performance and generates a short AI-powered response.

### Quick Implementation Steps

1. Connect Google Sheets (clients, holdings, interaction_logs)
2. Configure `Get Live Prices` API endpoint
3. Add credentials for `Generate AI Answer` (Google Gemini)
4. Ensure input format: `C001: your question`
5. Run test cases (valid + invalid inputs)


## What It Does

This workflow acts as an intelligent financial assistant that responds to client portfolio queries in real time. It starts by receiving a chat message through the **When chat message received** node and processes it using **Parse Client Message** to extract the client ID and question.

Once validated, it retrieves client details using **Get Client Profile** and portfolio holdings via **Get Client Holdings**. It then fetches live stock prices through the **Get Live Prices** API and merges all data using **Merge Portfolio Data** to compute metrics like invested value, current value, profit/loss and returns.

Finally, the workflow builds a structured prompt in **Build AI Prompt** and generates a concise response using **Generate AI Answer**, ensuring the reply is accurate, controlled and based only on available data.


## Who Can Use This Workflow

- Financial advisors managing multiple client portfolios  
- Wealth management platforms  
- Fintech developers building AI-driven assistants  
- Anyone looking to automate portfolio Q&A workflows  


## Requirements

- n8n (self-hosted or cloud)
- Google Sheets account with:
  - `clients` sheet
  - `holdings` sheet
  - `interaction_logs` sheet
- Live price API endpoint (used in **Get Live Prices**)
- Google Gemini API credentials (used in **Generate AI Answer**)


## How It Works & Setup Guide

### 1. Trigger & Input Parsing

- **When chat message received** receives input
- **Parse Client Message** extracts:
  - `client_id`
  - `question`
- **IF Valid Input?** validates format

If invalid:
- **Build Invalid Input Response**
- **Log Invalid Input**
- **Return Invalid Response**


### 2. Client & Holdings Lookup

- **Get Client Profile** fetches client details
- **IF Client Found?** ensures existence
- **Get Client Holdings** retrieves holdings
- **Prepare Symbols** extracts stock symbols
- **IF Holdings Found?** validates data

Failure handling:
- **Build Client Not Found Response**
- **Build No Holdings Response**


### 3. Market Data Fetching

- **Get Live Prices** calls external API
- **Normalize Price Response** standardizes output
- **IF Price API Worked?** validates API success

Failure handling:
- **Build API Failed Response**


### 4. Portfolio Calculation

- **Merge Portfolio Data** computes:
  - Invested amount
  - Current value
  - P&L
  - Return %
  - Best performer
  - Weakest performer
  - Missing prices


### 5. Market Context (Optional Enhancement)

- **Get Market Context**
- **Attach Market Context**

Adds optional insights like:
- Nifty/Sensex movement
- Market tone


### 6. AI Response Generation

- **Build AI Prompt** creates structured prompt
- **Generate AI Answer** generates response
- **Extract AI Answer** extracts clean reply


### 7. Final Output

Final response includes:
- Client ID
- Question
- AI reply
- Status
- Timestamp


## How To Customize Nodes

- **Parse Client Message**
  - Modify input format rules
- **Get Live Prices**
  - Replace with another API (Alpha Vantage, Twelve Data, etc.)
- **Merge Portfolio Data**
  - Add more financial metrics (CAGR, allocation %, etc.)
- **Build AI Prompt**
  - Change tone (formal, advisory, aggressive)
- **Generate AI Answer**
  - Replace Gemini with Hugging Face / OpenAI models


## Add-Ons (Enhancements)

- Add Slack notifications for responses
- Save AI replies to CRM
- Add email delivery for clients
- Implement caching for price API
- Add retry logic for API failures
- Support multi-client batch processing


## Use Case Examples

1. Client asks: *“C001: How is my portfolio performing?”*  
2. Advisor checks: *“C002: Which stock is my top performer?”*  
3. User queries: *“C003: Why is my portfolio down?”*  
4. Daily automated portfolio summary generation  
5. Integration with chatbot for real-time advisory  

There can be many more use cases depending on how this workflow is extended.


## Troubleshooting Guide

| Issue | Possible Cause | Solution |
|------|--------------|---------|
| Invalid input error | Wrong format | Use `C001: your question` |
| Client not found | Missing in sheet | Check `clients` sheet |
| No holdings found | Empty data | Verify `holdings` sheet |
| API failed | Endpoint issue | Check API URL or timeout |
| AI reply empty | Model issue | Verify API credentials |
| Incorrect calculations | Missing price data | Check API response |


## 🤝 Need Help?

If you need help setting up this workflow, customizing nodes or building advanced automation solutions, feel free to reach out.

For professional support, custom workflow development or enterprise-grade automation, contact our [n8n workflow developers](https://www.weblineindia.com/hire-n8n-developers/) at **WeblineIndia**. We help businesses build scalable and intelligent automation systems tailored to their needs.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Gmail, Chat Trigger, Google Gemini

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
