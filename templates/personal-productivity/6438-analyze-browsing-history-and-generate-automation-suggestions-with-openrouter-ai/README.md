# ⚡ Analyze browsing history and generate automation suggestions with OpenRouter AI and Google Sheets

> ⚡ **714 views** · ⚡ [Personal Productivity](../)

## Description

# 🧠 Browsing History Automation Analyzer – Automation Toolkit (Google Sheets + AI)

This **n8n workflow** analyzes your browsing history to identify opportunities for automation. It reads history from a Google Sheet, groups visits by domain, filters out irrelevant entries, and uses AI to recommend what can be automated — including how and why.

---

## 📌 What It Does

- 📄 **Reads** your browsing history from Google Sheets
- 🌐 **Groups** history by domain
- 🚫 **Filters out** common non-actionable domains (e.g., YouTube, Google)
- 🤖 **Uses AI** to analyze whether your activity on each site is automatable
- 💡 **Provides suggestions** including what to automate, how to do it, and which tools to use
- 📝 **Saves results** into a new tab in the same Google Sheet
- 🔍 **Searches for n8n workflow templates** related to the suggested automation

---

## 📊 Demo Sheet

Input + output are handled via the following Google Sheet:

**📎 Spreadsheet**:  
[View on Google Sheets](https://docs.google.com/spreadsheets/d/1V26KDJLBZno6e_VxaBqhsK_JOOOn_5N6uww2apcAeoc/edit?usp=drivesdk)

- **Sheet: `history`** → Input browsing history
- **Sheet: `automations`** → Output AI automation suggestions

---

## 🧠 AI Analysis Logic

The AI agent receives each domain's browsing history and responds with:
- `domain`: The website domain
- `automatable`: true/false
- `what_to_automate`: Specific actions that can be automated
- `reason`: Why it's suitable (or not) for automation
- `tool`: Suggested automation tool (e.g., n8n, Apify)
- `automation_rating`: High, Medium, Low, or Not Automatable
- `n8n_template`: Relevant automation template (if found)

---

## 🔧 Technologies Used

| Tool                     | Purpose                             |
|--------------------------|-------------------------------------|
| **n8n**                  | Workflow automation                 |
| **LangChain AI Agent**  | AI-based analysis                   |
| **Google Sheets Node**   | Input/output data handling          |
| **OpenRouter (LLM)**     | Language model for intelligent reasoning |
| **JavaScript Code Node** | Grouping and formatting logic       |
| **Filter Node**          | Remove unwanted domains             |
| **HTTP Request Node**    | Search n8n.io templates             |

---

## 💻 Chrome History Export

You can use this Chrome extension to export your browsing history in a format compatible with the workflow:

🔗 [Export Chrome History Extension](https://chromewebstore.google.com/detail/export-chrome-history/dihloblpkeiddiaojbagoecedbfpifdj?pli=1)

---

## 📧 Want Personalized Automation Advice?

If you'd like **personalized automation recommendations** based on your browsing history—just like what this workflow provides—feel free to contact me directly:

&gt; 📩 **msaidwolfltd@gmail.com**

I'll help you discover what tasks you can automate to save time and boost productivity.

---

## 🚀 Example Use Cases

- Automate daily logins to dashboards
- Auto-fill forms on repetitive websites
- Schedule data exports from web portals
- Trigger reminders based on recurring visits
- Discover opportunities for scraping and integration

---

## 📜 License

This workflow is provided as-is for educational and personal use. For commercial or customized use, contact the author.

---

## 🔗 Nodes Used

Google Sheets, Filter, AI Agent, Simple Memory, OpenRouter Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
