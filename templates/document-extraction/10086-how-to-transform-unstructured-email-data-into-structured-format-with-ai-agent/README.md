# 🔬 🎓 How to transform unstructured email data into structured format with AI agent

> ⚡ **2,336 views** · 🔬 [Document Extraction & Analysis](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

This workflow automates the process of extracting structured, usable information from unstructured email messages across multiple platforms.

It connects directly to **Gmail**, **Outlook**, and **IMAP** accounts, retrieves incoming emails, and sends their content to an **AI-powered parsing agent** built on **OpenAI GPT models**.

The AI agent analyzes each email, identifies relevant details, and returns a **clean JSON structure** containing key fields:

* **From** – sender’s email address
* **To** – recipient’s email address
* **Subject** – email subject line
* **Summary** – short AI-generated summary of the email body

The extracted information is then automatically inserted into an **n8n Data Table**, creating a structured database of email metadata and summaries ready for indexing, reporting, or integration with other tools.


---

###  **Key Benefits**

* ✅ **Full Automation:** Eliminates manual reading and data entry from incoming emails.
* ✅ **Multi-Source Integration:** Handles data from different email providers seamlessly.
* ✅ **AI-Driven Accuracy:** Uses advanced language models to interpret complex or unformatted content.
* ✅ **Structured Storage:** Creates a standardized, query-ready dataset from previously unstructured text.
* ✅ **Time Efficiency:** Processes emails in real time, improving productivity and response speed.
*✅  **Scalability:** Easily extendable to handle additional sources or extract more data fields.
---

### How it works

This workflow automates the transformation of unstructured email data into a structured, queryable format. It operates through a series of connected steps:

1.  **Email Triggering:** The workflow is initiated by one of three different email triggers (Gmail, Microsoft Outlook, or a generic IMAP account), which constantly monitor for new incoming emails.
2.  **AI-Powered Parsing & Structuring:** When a new email is detected, its raw, unstructured content is passed to a central "Parsing Agent." This agent uses a specified OpenAI language model to intelligently analyze the email text.
3.  **Data Extraction & Standardization:** Following a predefined system prompt, the AI agent extracts key information from the email, such as the sender, recipient, subject, and a generated summary. It then forces the output into a strict JSON structure using a "Structured Output Parser" node, ensuring data consistency.
4.  **Data Storage:** Finally, the clean, structured data (the `from`, `to`, `subject`, and `summarize` fields) is inserted as a new row into a specified n8n Data Table, creating a searchable and reportable database of email information.
---


### Set up steps

To implement this workflow, follow these configuration steps:

1.  **Prepare the Data Table:**
    *   Create a new Data Table within n8n.
    *   Define the columns with the following names and string type: `From`, `To`, `Subject`, and `Summary`.

2.  **Configure Email Credentials:**
    *   Set up the credential connections for the email services you wish to use (Gmail OAuth2, Microsoft Outlook OAuth2, and/or IMAP). Ensure the accounts have the necessary permissions to read emails.

3.  **Configure AI Model Credentials:**
    *   Set up the OpenAI API credential with a valid API key. The workflow is configured to use the model, but this can be changed in the respective nodes if needed.

4.  **Connect the Nodes:**
    *   The workflow canvas is already correctly wired. Visually confirm that the email triggers are connected to the "Parsing Agent," which is connected to the "Insert row" (Data Table) node. Also, ensure the "OpenAI Chat Model" and "Structured Output Parser" are connected to the "Parsing Agent" as its AI model and output parser, respectively.

5.  **Activate the Workflow:**
    *   Save the workflow and toggle the "Active" switch to ON. The triggers will begin polling for new emails according to their schedule (e.g., every minute), and the automation will start processing incoming messages.
---
### **Need help customizing?**  
[Contact me](mailto:info@n3w.it) for consulting and support or add me on [Linkedin](https://www.linkedin.com/in/davideboizza/).

## 🔗 Nodes Used

Email Trigger (IMAP), Gmail Trigger, AI Agent, OpenAI Chat Model, Structured Output Parser, Chat Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
