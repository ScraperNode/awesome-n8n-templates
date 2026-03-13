# 🧾 ⚛️🐋🤖 Extract data from YAPE receipts via Telegram OCR and store in Google Sheets

> ⚡ **1,849 views** · 🧾 [Invoice Processing](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.

## Description

## Detailed Technical Description
This **n8n** workflow automates [Yape](https://www.yape.com.pe/) payment receipt processing, integrating [Telegram bot](https://core.telegram.org/bots), AI-powered OCR, and [Google Sheets](https://support.google.com/docs/answer/6000292) automation. By leveraging **[ChatGPT](https://chatgpt.com/)** Vision Computing, it extracts and structures transaction details, eliminating the need for manual entry. Ideal for freelancers, businesses, and finance teams, this workflow ensures error-free, real-time financial tracking. The AI agent powered by **[DeepSeek](https://www.deepseek.com/)** refines and formats the extracted text, storing it in [Google Sheets](https://support.google.com/docs/answer/6000292) for easy accessibility and reporting. Users can track payments, monitor cash flow, and generate financial reports without any manual work. This seamless integration boosts efficiency, reduces errors, and automates financial record-keeping with 100% accuracy.

### 🛠️ Technologies Used:
✅**n8n** – Workflow orchestrator.
✅**Telegram** – Handles image reception and notifications.
✅**Google Drive** – Manages file creation and storage.
✅**Google Sheets** – Automatically logs extracted data into spreadsheets.

### 🤖Artificial Intelligence:
✅**ChatGPT** Vision Computing – Performs OCR on payment receipts.
✅**DeepSeek** AI – Organizes and converts extracted data into a structured format.

---

## 📌 pre-conditions:
📩 `A Telegram Bot` – Must be created to receive images. [Setup Guide](https://core.telegram.org/bots/features#creating-a-new-bot)
🔑 `Google Sheets API Key` – Required to store extracted data. [Setup Guide](https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.googlesheets/)
⚛️ `ChatGPT API Key` – Used for OCR and AI text extraction. [Get it here](https://help.openai.com/en/articles/4936850-where-do-i-find-my-openai-api-key)
🐋 `DeepSeek API Key` – Processes extracted text into structured data. [Get it here](https://platform.deepseek.com/api_keys)
 
---

#### 1️⃣ Image Reception & OCR Processing 📩
The user attaches a Yape payment receipt image to the Telegram bot conversation. 🤳🏻

![image.png](fileId:980)
#### 2️⃣ Analyze Image (OCR) 👁️‍🗨️
A ⚛️**ChatGPT** Vision Computing model processes the image and extracts all visible text, ensuring high-accuracy OCR for structured data extraction.
![image.png](fileId:977)

#### 3️⃣ Analyze and format text
Intelligent Data Processing with AI 🤖
The extracted text is sent to a 🐋**DeepSeek-based** AI agent that:
Identifies and structures key transaction details (amount, date, sender, transaction ID, etc.).
Converts the data into a structured JSON format.
![image.png](fileId:978)

#### 4️⃣ Data Storage in Google Sheets 📊
**Google Drive** integration is established.
If the Google Sheets file does not exist, it is automatically created.

Extracted data is automatically recorded in the corresponding spreadsheet, enabling effortless tracking and streamlined financial organization.
![image.png](fileId:979)

## 🚀 Benefits:
✅ Time-saving – Eliminates manual payment processing.
✅ Error-free data entry – Reduces human mistakes in record-keeping.
✅ 100% automation – No manual intervention required.
✅ Seamless integration – Easily connects with other workflows.





---
💡**NOTE**: _The extracted transaction data will be stored in a Google Sheets file with the following columns:_

|      Column Name      | Description                                               |
|:---------------------:|-----------------------------------------------------------|
| **id**                | Unique identifier for each transaction.                   |
| **beneficiaryName**   | Name of the recipient of the payment.                     |
| **amount**            | Payment amount in the specified currency.                 |
| **currency**          | Currency used for the transaction (e.g., PEN, USD).       |
| **company**           | The entity or service handling the transaction.           |
| **date**              | Date of the transaction in a human-readable format.       |
| **hour**              | Time of the transaction.                                  |
| **originalDate**      | The exact date extracted from the receipt.                |
| **dateToISO**         | Standardized ISO 8601 date format.                        |
| **operation**         | Type of financial operation (e.g., deposit, transfer).    |
| **operationNumber**   | Unique operation number provided by the payment system.   |
| **beneficiaryNumber** | Account or phone number of the recipient.                 |
| **commission**        | Any commission or fee charged for the transaction.        |
| **account**           | Account number or reference used for the payment.         |
| **channel**           | Payment method used (e.g., app, POS, bank transfer).      |
| **agentCode**         | Identifier of the agent or entity processing the payment. |

---

This workflow is perfect for **businesses**, **freelancers**, and **individuals** who need a fully automated solution to process [Yape](https://www.yape.com.pe/) payment receipts efficiently. By leveraging **AI-powered** OCR and structured data extraction, it eliminates manual effort, reduces errors, and ensures that all transactions are accurately logged in Google Sheets. Whether you're managing **personal finances**, **freelance payments**, or **business transactions**, this system provides a seamless, hands-free approach to financial tracking, allowing you to focus on what truly matters.

## 🔗 Nodes Used

Google Sheets, Telegram, Telegram Trigger, Google Drive, AI Agent, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
