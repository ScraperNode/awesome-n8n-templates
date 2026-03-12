# 🔬 🛻 AI agent for logistics order processing with GPT-4o, Gmail and Google Sheet

> ⚡ **11,148 views** · 🔬 [Document Extraction & Analysis](../)

## Description

*Tags: Supply Chain, Logistics, AI Agents*

### Context

Hey! I’m [Samir](https://samirsaci.com), a Supply Chain Data Scientist from Paris, and the founder of [LogiGreen Consulting](https://logi-green.com).

We design tools to help companies improve their **logistics processes** using data analytics, AI, and automation—to **reduce costs and minimize environmental impacts**.

&gt;Let’s use N8N to improve logistics operations!

📬 For business inquiries, you can add me on [LinkedIn](https://www.linkedin.com/in/samir-saci)

### Who is this template for?

This workflow template is designed for **logistics or manufacturing operations** that receive orders by email.

[![Example of emails](https://www.samirsaci.com/content/images/2025/03/image-17.png)](https://www.youtube.com/watch?v=kQ8dO_30SB0) 

The example above illustrate the challenge we want to tackle using an **AI Agent** to parse the information and load them in a **Google sheet**.

If you want to understand how I built this workflow, check my detailed tutorial:

[![Tutorial Screenshot](https://www.samirsaci.com/content/images/2025/03/Miniature-2.png)](https://www.youtube.com/watch?v=kQ8dO_30SB0)

  
[🎥 Step-by-Step Tutorial](https://www.youtube.com/watch?v=kQ8dO_30SB0)

### How does it work?

The workflow is connected to a **Gmail Trigger** to open all the emails that include *Inbound Order* in their subject.

The email is parsed by an **AI Agent** equipped with **OpenAI's GPT** to collect all the information.

The results are pulled in a **Google Sheet**.

[![Final Results](https://www.samirsaci.com/content/images/2025/03/image-18.png)](https://www.youtube.com/watch?v=kQ8dO_30SB0)

These orderlines can then be **transferred to warehouse teams** to prepare ***order receiving**.

### What do I need to get started?

You’ll need:
- **Gmail and Google Drive Accounts** with the API credentials to access it via n8n
- An **OpenAI API key** (GPT-4o) for the chat model.
- A **Google Sheet** with these columns: **PO_NUMBER, EXPECTED_DELIVERY DATE, SKU_ID, QUANTITY**

### Next Steps

Follow the sticky notes in the workflow to configure each node and start using **AI to support your logistic operations**.

🚀 Curious how N8N can transform your logistics operations?  
📬 Let’s connect on [LinkedIn](https://www.linkedin.com/in/samir-saci)

### Notes

- An example of email is included in the template so you can try it with your mailbox.

*This workflow was built using N8N version 1.82.1*  
*Submitted: March 28, 2025*

## 🔗 Nodes Used

Google Sheets, Gmail Trigger, AI Agent, OpenAI Chat Model, Structured Output Parser

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
