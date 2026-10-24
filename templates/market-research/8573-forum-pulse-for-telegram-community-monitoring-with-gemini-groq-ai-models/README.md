# 📊 Monitor n8n community and Reddit discussions in Telegram with Gemini and Groq

> ⚡ **2,984 views** · 📊 [Market Research & Insights](../)

## Description

![NguyenThieuToann8ntemplate 3.png](fileId:6384)

This n8n template automates the collection, storage, and summarization of technology news and discussions from the n8n Community and Reddit (r/n8n). If you like staying informed but want to reduce daily manual browsing distractions, *this workflow is perfect for you*. 

## How it works

* **User Intent Detection:** The workflow receives your Telegram message and uses an **AI Agent** (powered by Gemini/Groq) to intelligently classify your intent (Search, Deep-dive, or Casual Chat).
* **Multi-Platform Scraping:** Automatically fetches the latest discussions, topics, and comments from the official **n8n Community** and **Reddit** via HTTP Requests.
* **Smart Summarization:** Extracts complex HTML content and uses the AI to provide concise overviews, or deep-dives into specific forum threads with full contextual history. 
* **Seamless Delivery:** Formats the AI's response into clean, chunked Telegram messages (handling limits smoothly) and delivers it straight to your chat.
* **Daily Pulse:** A scheduled trigger automatically aggregates the hottest topics every morning to keep you updated.

## How to use

1. Connect your **Telegram Bot** account to n8n.
2. Connect your **Google Gemini** and **Groq** API credentials.
3. *(Optional)* Connect your **MongoDB** instance if you want to enable long-term persistent chat memory.
4. Update the `Chat ID` in the Telegram nodes to route the scheduled Daily Pulse directly to your personal account or group.
5. Activate the workflow and start messaging your new AI assistant.

## Requirements

* **n8n Version:** Built and tested on **n8n 2.9.4+**. *(Note: You may encounter errors on older versions. It is highly recommended to update to the latest n8n version to use this workflow effectively).*
* **Telegram** Bot token.
* **Google Gemini** & **Groq** API keys.
* *(Optional)* **MongoDB** connection string.

## Customizing this workflow

* **Change the AI Model:** Swap the Gemini or Groq nodes for OpenAI, Claude, or any other supported LLM.
* **Expand the Sources:** Duplicate the HTTP Request nodes and adjust the HTML extractors to monitor other platforms like Discord or StackOverflow.
* **Adjust the Schedule:** Prefer chat over daily emails? Change the Cron expression to receive weekly summaries or disable it entirely to rely purely on on-demand Telegram queries.

---

## About the Author

**Created by:** Nguyen Thieu Toan (Jay Nguyen)
**Email:** me@nguyenthieutoan.com
**Website:** [nguyenthieutoan.com](https://nguyenthieutoan.com)
**Company:** CEO/Founder of GenStaff ([genstaff.net](https://genstaff.net)) - AI Staffing Solutions
**Socials (Facebook / X / LinkedIn):** @nguyenthieutoan
**More templates:** [n8n.io/creators/nguyenthieutoan](https://n8n.io/creators/nguyenthieutoan)

## 🔗 Nodes Used

HTTP Request, Telegram, Telegram Trigger, Execute Sub-workflow, Schedule Trigger, AI Agent

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
