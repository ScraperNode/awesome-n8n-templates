# 🎫 Automate email triage & meeting scheduling with Gmail, GPT-4 & Google Calendar

> ⚡ **485 views** · 🎫 [Ticket Management & Triage](../)

## Description

This workflow acts as your personal inbox assistant. It automatically filters, classifies, and responds to incoming emails using AI, saving you from manually sorting through leads or inquiries 24/7.

## 👥 Who’s it for
* **Freelancers & Consultants** handling their own sales pipeline.
* **Sales Professionals** who need to book meetings instantly.
* **Small Business Owners** who want to automate customer support or lead triage.
* **Agencies** managing inbound inquiries for multiple clients.

## ⚙️ How it works
This workflow monitors your Gmail inbox and processes emails in three main stages:

1.  **Filtering:** It first checks if the sender is on your "Whitelist" (a Google Sheet). It also ignores automated calendar replies (like "Accepted" or "Declined" notifications) to prevent loops.
2.  **AI Analysis:** OpenAI (GPT-4) reads the email body to understand the sender's intent.
3.  **Action:** Based on the intent, it takes one of three paths:
    * **Schedule Meeting:** If the lead wants to meet, it creates a Google Calendar event, sends a confirmation email with the link, and notifies you on Telegram.
    * **Auto Reply:** If the lead declines or isn't interested, it sends a polite, context-aware "thank you" email.
    * **Needs Review:** If the email is unclear, it waits (configurable delay) and sends a gentle follow-up email to re-engage them.

## 📋 Requirements
* **n8n** (Self-hosted or Cloud)
* **Gmail Account** (Connected via OAuth2)
* **Google Sheets** (For the whitelist)
* **Google Calendar** (For booking meetings)
* **OpenAI API Key** (GPT-4o-mini or similar model)
* **Telegram** (Optional, for notifications)

## 🛠️ How to set up
1.  **Prepare the Whitelist:** Create a Google Sheet with three columns: `email`, `first_name`, and `company`. Add the email addresses you want the bot to respond to.
2.  **Configure Credentials:** Connect your Google (Gmail, Sheets, Calendar) and OpenAI accounts in the workflow credentials settings.
3.  **Link the Sheet:** In the **"Get row(s) in sheet"** node, select your whitelist spreadsheet.
4.  **Set the Model:** Check the **"Message a model"** nodes to ensure your OpenAI model (e.g., `gpt-4o-mini`) is selected.
5.  **Telegram (Optional):** If you want notifications, create a bot with @BotFather and add your Chat ID/Credentials. If not, you can disable/remove the Telegram nodes.

## 🎨 How to customize the workflow
* **Adjust the Delay:** The **"Wait"** node is currently set to *minutes* for testing. Change this to *3 Days* (or your preferred duration) for a real-world scenario.
* **Brand Your Emails:** Open the **Code** nodes (e.g., "Personalize AI Reply"). You will see HTML code inside. Update the `senderName`, `senderEmail`, and footer text to match your brand identity.
* **Refine AI Prompts:** You can modify the system prompt in the **"Message a model"** node to change the AI's tone (e.g., make it more formal or casual).

---

## 🧑‍💻 Creator Information

**Developed by:** Adem Tasin  
🌐 **Website:** [ademtasin.com](https://www.ademtasin.com/)  
💼 **LinkedIn:** [Adem Tasin](https://www.linkedin.com/in/adem-tasin/)

## 🔗 Nodes Used

Google Sheets, Telegram, Google Calendar, Gmail, Gmail Trigger, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
