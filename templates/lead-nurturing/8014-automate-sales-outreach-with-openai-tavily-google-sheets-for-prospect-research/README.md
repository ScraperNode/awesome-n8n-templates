# 💬 Automate sales outreach with OpenAI, Tavily & Google Sheets for prospect research

> ⚡ **490 views** · 💬 [Lead Nurturing & AI Sales Agents](../)

## Description

### ⚙️ Sales Assistant Build: Automate Prospect Research and Personalized Outreach for Sales Calls


---

### 🚀 Steps to Connect:

1. **Google Sheets Setup**
    - Connect your Google account via OAuth2 in the "Review Calls", "Product List", "Testimonials Tool", "Update Sheet", and "Update Sheets 2" nodes.
    - Duplicate the mock Google Sheet (ID: `1u3WMJwYGwZewW1IztY8dfbEf5yBQxVh8oH7LQp4rAk4`) to your drive and update the `documentId` in all Google Sheets nodes to match your copy's ID.
    - Ensure the sheet has tabs for "Meeting Data", "Products", and "Success Stories" populated with your data.
    - Setup time: ~5 minutes.

2. **OpenAI API Key**
    - Go to [OpenAI](https://platform.openai.com/) and generate your API key.
    - Paste this key into the credentials for both "OpenAI Chat Model" and "OpenAI Chat Model1" nodes.
    - Setup time: ~2 minutes.

3. **Tavily API Key**
    - Sign up at [Tavily](https://tavily.com/) and get your API key.
    - In the "Tavily" node, replace the placeholder `api_key` in the JSON body with your key (e.g., `"api_key": "your-tavily-key-here"`).
    - Setup time: ~3 minutes.

---

### How it Works
• Triggers on a new sales call booking (manual for testing).  
• Pulls prospect details from Google Sheets and researches their company, tech stack, and updates using Tavily.  
• Matches relevant products/solutions from your product list and updates the sheet.  
• Generates personalized email confirmation (subject + body) and SMS using testimonials for relevance.  
• Updates the sheet with the outreach content for easy follow-up.

Setup takes ~10-15 minutes total. All nodes are pre-configured—edit only the fields above. Detailed notes (e.g., prompt tweaks) are in sticky notes within the workflow.

---

## 🔗 Nodes Used

Google Sheets, AI Agent, OpenAI Chat Model, Structured Output Parser, HTTP Request Tool

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
