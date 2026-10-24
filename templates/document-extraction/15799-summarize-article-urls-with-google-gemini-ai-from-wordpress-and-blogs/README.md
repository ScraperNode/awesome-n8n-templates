# 🔬 Summarize article URLs with Google Gemini AI from WordPress and blogs

> ⚡ **334 views** · 🔬 [Document Extraction & Analysis](../)

## Description

![Thiết kế chưa có tên 22.png](fileId:6381)

This n8n template automates the extraction and summarization of long-form articles, blogs, or WordPress posts using an interactive Chat Interface and Gemini AI. If you like staying informed but want to reduce daily reading time and bypass webpage clutter, *this workflow is perfect for you*.

## How it works

* **Input phase:** You paste an article URL directly into the n8n Chat interface. The workflow verifies the format to ensure it's a valid link.
* **Extraction phase:** The **HTTP Request** node fetches the raw webpage. Then, the **HTML Extract** node acts as a smart filter, stripping away ads, navigation bars, comments, and footers to isolate the pure article text.
* **Summarization phase:** The cleaned content is sent to an **AI Agent** powered by Google Gemini. Guided by a customized system prompt, the AI generates a structured, bulleted summary highlighting the core insights of the article.

## How to use

1.  **Connect credentials:** Link your **Google Gemini** API key in the Chat Model node.
2.  **Test the flow:** Open the "Chat" panel in your n8n workspace.
3.  **Input data:** Paste a blog or news URL and hit send.
4.  **Activate:** Save and activate the workflow to make it permanently accessible.

## Requirements

* **n8n Version:** Built and tested on **n8n 2.9.4+**. *(Note: You may encounter errors on older versions. It is highly recommended to update to the latest n8n version to use this workflow effectively).*
* **Google Gemini API Key:** Required for the AI summarization step.

## Customizing this workflow

* **Change the input source:** Swap the Chat Trigger for a **Telegram Bot** or **Slack** trigger to summarize links directly from your mobile messaging apps.
* **Refine the AI output:** Edit the system prompt inside the AI Agent to change the language, tone, or format (e.g., requesting a 3-sentence summary or a Twitter-ready thread).
* **Store the data:** Add a Google Sheets or Notion node at the end to build a personal knowledge base of all the articles you've summarized.

---

## About the Author

**Created by:** Nguyen Thieu Toan (Jay Nguyen)  
**Email:** me@nguyenthieutoan.com  
**Website:** [nguyenthieutoan.com](https://nguyenthieutoan.com)  
**Company:** CEO/Founder of GenStaff ([genstaff.net](https://genstaff.net)) - AI Staffing Solutions  
**Socials (Facebook / X / LinkedIn):** @nguyenthieutoan  
**More templates:** [n8n.io/creators/nguyenthieutoan](https://n8n.io/creators/nguyenthieutoan)

## 🔗 Nodes Used

HTTP Request, AI Agent, Chat Trigger, Google Gemini Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
