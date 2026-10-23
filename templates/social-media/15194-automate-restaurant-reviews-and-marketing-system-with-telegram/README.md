# 📱 Automate Restaurant Reviews and Marketing System 🏪🍝 with Telegram

> ⚡ **126 views** · 📱 [Social Media & Email Marketing](../)

## Description

This workflow is designed to automate **customer interaction and marketing for a restaurant using Telegram and Google Sheets**.

It is possible to integrate it with **WhatsApp** instead of Telegram and use **any CRM** or relational database instead of Google Sheets.

---

### **Key Advantages**

#### **1. ✅ Full Automation of Customer Journey**

From the first interaction (menu request) to follow-up (review request), everything is automated—no manual effort required.

#### **2. ✅ Centralized Customer Database**

All clients are stored and updated in Google Sheets, making it easy to manage contacts and track interactions.

#### **3. ✅ Personalized and Timely Marketing**

Marketing messages are:

* Scheduled
* Targeted only to active users
* Sent automatically at the right time

#### **4. ✅ Increased Customer Engagement**

* Instant replies improve user experience.
* Follow-up messages (like review requests) increase customer interaction and retention.

#### **5. ✅ Scalability**

The use of batching and automation allows the system to handle **many customers simultaneously** without performance issues.

#### **6. ✅ Cost Efficiency**

By automating messaging and marketing, the restaurant reduces:

* Manual workload
* Marketing costs
* Need for external tools

#### **7. ✅ Flexibility and Easy Management**

Marketing campaigns can be updated directly in Google Sheets without modifying the workflow logic.

---

### **How it works** 

It combines real-time messaging with scheduled marketing automation:

* **Customer Interaction (Telegram Bot)**

  * The workflow starts when a user sends a message to the Telegram bot.
  * It detects the type of content (text, audio, or image).
  * If the user asks to see the menu, the bot automatically replies with a **digital menu link**.
  * The customer is then saved into a **Google Sheets database** as a new client.

* **Post-Interaction Follow-up**

  * After 2 hours, the system automatically sends a **review request message**, encouraging customers to leave feedback.

* **Automated Marketing Campaigns**

  * Every day at a scheduled time, the workflow:

    * Retrieves marketing messages planned for that day from Google Sheets.
    * Filters active clients (excluding unsubscribed users).
    * Sends personalized marketing messages via Telegram.
    * Marks the campaign as completed in the sheet.

---

Here is the description of the n8n workflow based on the provided `Marketing restaurant.json` file.

### How it works

This workflow automates restaurant marketing and customer interaction on Telegram. It operates on two parallel tracks:

**Track 1: Customer Interaction (Menu & Review)**
1.  **Trigger:** A customer sends a message to the Telegram bot (`Telegram Trigger`).
2.  **Message Routing:** A `Switch` node checks if the message contains **Text**, **Audio**, or an **Image**.
3.  **Menu Check:** If text is received, a second `Switch` node checks if the message exactly matches *"I would like to see the menu"*.
4.  **Menu Delivery:** If the menu is requested, the bot sends a predefined menu link (e.g., `https://go.forkmenu.com/demo`).
5.  **Client Logging:** The `Add new client` node saves the user’s Telegram ID and the current date to the "Clients" sheet in Google Sheets.
6.  **Delayed Review Request:** The workflow waits for **2 hours** (simulating post-dining time) and then automatically sends a follow-up message asking the customer to leave a Google review.

**Track 2: Automated Marketing Broadcasts**
1.  **Trigger:** A `Schedule Trigger` runs daily at **7:00 AM**.
2.  **Fetch Campaigns:** It reads the "Marketing" Google Sheet to find rows where `DATE` = today and `DONE` is empty.
3.  **Fetch Recipients:** It retrieves all active clients from the "Clients" sheet (excluding those marked as `UNSUBSCRIBE`).
4.  **Loop & Send:** The `Loop Over Items` node iterates through each active client. For each client, it sends the marketing message via Telegram.
5.  **Mark as Complete:** After sending, it updates the original row in the "Marketing" sheet, marking it as `DONE` to prevent re-sending.

---

### Set up steps

1.  **Telegram Bot Configuration:**
    - Create a Telegram bot via [@BotFather](https://t.me/botfather) and obtain the API token.
    - In the n8n `Telegram Trigger` and `Telegram` nodes, select or create a new "Telegram Api" credential named `Telegram account Fastewb` and paste the API token.
    - Set the bot's webhook URL (n8n will provide the production URL for the `Telegram Trigger` node).

2.  **Google Sheets Setup:**
    - Create a Google Sheet
    - Create two sheets (tabs) inside it:
        - **Sheet 1:** Named `Clients`. Must contain columns: `CLIENT` (Telegram ID), `DATE`, and `UNSUBSCRIBE`.
        - **Sheet 2:** Named `Marketing`. Must contain columns: `DATE`, `MESSAGE`, and `DONE`.
    - In the `Google Sheets` nodes (`Get Marketing`, `Get active clients`, etc.), select or create the OAuth2 credential named `Google Sheets account` and authorize access to the drive.

3.  **Workflow Customization:**
    - **Menu Link:** Edit the `Send Digital Menu` node. Replace `https://go.forkmenu.com/demo` with your actual digital menu URL.
    - **Review Link:** Edit the `Send request review` node. Replace `placeid=xxx` with your actual Google Place ID.
    - **Marketing Message:** The `Send Marketing message` node automatically pulls text from the `MESSAGE` column in the Google Sheet.
    - **Schedule Time:** Adjust the `Schedule Trigger` node (`triggerAtHour`) to your preferred broadcast time (currently 7 AM).

4.  **Activation:**
    - Toggle the workflow status from `"active": false` to **Active** in the n8n editor.
    - Ensure the webhook for the `Telegram Trigger` is successfully activated (check the node execution panel).

---


👉 [Subscribe to my new **YouTube channel**](https://youtube.com/@n3witalia). Here I’ll share videos and Shorts with practical tutorials and **FREE templates for n8n**.

[![image](https://n3wstorage.b-cdn.net/n3witalia/youtube-n8n-cover.jpg)](https://youtube.com/@n3witalia)

---

### **Need help customizing?**  
[Contact me](mailto:info@n3w.it) for consulting and support or add me on [Linkedin](https://www.linkedin.com/in/davideboizza/).

## 🔗 Nodes Used

Google Sheets, Telegram, Telegram Trigger, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
