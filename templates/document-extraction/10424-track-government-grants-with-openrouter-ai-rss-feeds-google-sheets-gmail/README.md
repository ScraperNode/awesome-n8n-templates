# 🔬 Track government grants with OpenRouter AI, RSS feeds, Google Sheets & Gmail

> ⚡ **320 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## How it works
This workflow automatically fetches the latest public grant information from the Ministry of Health, Labour and Welfare (MHLW) RSS feed.  
It uses AI to summarize and structure each grant post into a clear format, stores the results in Google Sheets, and sends a formatted HTML summary via Gmail.

**Workflow summary**
1. Schedule Trigger – Runs the flow daily or weekly.  
2. RSS Feed Reader – Fetches the latest MHLW news and updates.  
3. Text Classifier (AI) – Categorizes the item as “Grant/Subsidy”, “Labor-related”, or “Other”.  
4. AI Agent – Extracts structured data such as title, summary, deadline, amount, target, and URL.  
5. Google Sheets – Appends or updates the database using the grant title as the key.  
6. Code Node – Builds an HTML report summarizing new entries.  
7. Gmail – Sends a daily digest email to your inbox.

---

## Setup steps
1. Add your **OpenRouter API key** as a credential (used in the AI Agent).  
2. Replace the **Google Sheets ID** and sheet name with your own.  
3. Update the **recipient email** address in the Gmail node.  
4. Adjust the **schedule trigger** to match your preferred frequency.  
5. (Optional) Add more RSS feeds if you want to monitor other sources.

---

## Ideal for
- Consultants or administrators tracking subsidy and grant programs  
- Small business owners who want automatic updates  
- Anyone who wants a daily AI-summarized government grant digest  

---

⚙️ **Note:**  
Detailed explanations and setup hints are included as **Sticky Notes** above each node inside the workflow.

## 🔗 Nodes Used

Google Sheets, RSS Read, Gmail, Schedule Trigger, AI Agent, Structured Output Parser

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
