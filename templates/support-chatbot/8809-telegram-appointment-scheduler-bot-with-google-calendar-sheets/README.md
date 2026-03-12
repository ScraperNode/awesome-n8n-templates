# 💬 Telegram appointment scheduler bot with Google Calendar & Sheets

> ⚡ **3,368 views** · 💬 [Support Chatbots](../)

## Description

# Telegram Appointment Scheduling Bot with n8n

## 📃 Description

**Tired of managing appointments manually?** This template transforms your Telegram account into a **smart virtual assistant** that handles the entire scheduling process for you, 24/7.

This workflow allows you to deploy a **fully functional Telegram bot** that not only **schedules appointments** but also **checks real-time availability in your Google Calendar**, logs a **history in Google Sheets**, and allows your clients to cancel or view their upcoming appointments. It's the perfect solution for professionals, small businesses, or anyone looking to automate their booking system professionally and effortlessly.

---

## ✨ Key Features

-   **Complete Appointment Management:** Allows users to schedule, cancel, and list their future appointments.
-   **Conflict Prevention:** Integrates with Google Calendar to check availability before confirming a booking, eliminating the risk of double-booking.
-   **Automatic Logging:** Every confirmed appointment is saved to a row in Google Sheets, creating a perfect database for tracking and analysis.
-   **Smart Interaction:** The bot handles unrecognized commands and guides the user, ensuring a smooth experience.
-   **Easy to Adapt:** Connect your own accounts, customize messages, and tailor it to your business needs in minutes.

---

## 🚀 Setup

Follow these steps to deploy your own instance of this bot:

### 1. Prerequisites
-   An n8n instance (Cloud or self-hosted).
-   A Telegram account.
-   A Google account.

### 2. Telegram Bot
1.  Talk to **@BotFather** on Telegram.
2.  Create a new bot using `/newbot`.
3.  Give it a name and a `username`.
4.  Copy and save the **API token** it provides.

### 3. Google Cloud & APIs
1.  Go to the [Google Cloud Console](https://console.cloud.google.com/).
2.  Create a new project.
3.  Enable the **Google Calendar API** and **Google Sheets API**.
4.  Create **OAuth 2.0 Client ID** credentials. Make sure to add your n8n instance's OAuth redirect URL.
5.  Save the **Client ID** and **Client Secret**.

### 4. Google Sheets
1.  Create a new spreadsheet in Google Sheets.
2.  Define the column headers in the first row. For example: `id`, `Client Name`, `Date and Time`, `ISO Date`.

### 5. n8n
1.  Import the workflow JSON file into your n8n instance.
2.  Set up the credentials:
    -   **Telegram:** Create a new credential and paste your bot's token.
    -   **Google Calendar & Google Sheets (OAuth2):** Create a new credential and paste the Client ID and Client Secret from the Google Cloud Console.
3.  Review the Google Calendar and Google Sheets nodes to select your correct calendar and spreadsheet.
4.  **Activate the workflow!**

---

## 💬 Usage

Once the bot is running, you can interact with it using the following commands in Telegram:

-   **To start the bot:**
    `/start`
-   **To schedule a new appointment:**
    `agendar YYYY-MM-DD HH:MM Your Full Name`
-   **To cancel an existing appointment:**
    `cancelar YYYY-MM-DD HH:MM Your Full Name`
-   **To view your future appointments:**
    `mis citas Your Full Name`

---

## 👥 Authors

- Jaren Pazmiño
President of the Polytechnic Artificial Intelligence Club (CIAP)

![Logo_CIAP Tortuga y letras 2.png](fileId:3014)

## 🔗 Nodes Used

Google Sheets, Telegram, Telegram Trigger, Google Calendar

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
