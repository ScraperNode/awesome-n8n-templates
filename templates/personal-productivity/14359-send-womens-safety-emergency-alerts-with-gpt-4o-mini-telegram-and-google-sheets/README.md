# ⚡ Send women’s safety emergency alerts with GPT-4o-mini, Telegram and Google Sheets

> ⚡ **108 views** · ⚡ [Personal Productivity](../)

## Description

##📘 Description
 This workflow acts as a real-time emergency alert system designed for personal safety scenarios. It receives distress signals via webhook, enriches the data with a live Google Maps link and timestamp, generates a clear AI-formatted alert message, instantly notifies a Telegram group, and logs the incident in Google Sheets for tracking and audit. 

⚙️ Step-by-Step Flow

1) Emergency Webhook (Trigger)

2) Receives a POST request containing: 
-  Name 
-  Phone number 
-  Latitude & Longitude
-  Acts as the entry point for emergency alerts. 

3) Generate Maps Link (Function Node)
-  Converts latitude & longitude into a Google Maps URL 
-  Ensures responders can access live location instantly 

4) Create Emergency Message (Function Node)
-  Adds timestamp (IST) 
-  Structures raw alert data 
-  Prepares base emergency message context 

5) AI Agent (OpenAI GPT-4o-mini)
-  Formats the alert into a clean, urgent, human-readable message 
-  Ensures clarity, visibility, and consistency 
-  Adds emojis and structured layout for quick comprehension 

6) Telegram Group Alert (Telegram Node)
-  Sends real-time emergency notification to a predefined group 
-  Ensures immediate visibility for responders 

7) Log to Google Sheets (Google Sheets Node)
-  Stores alert data for records 
-  Fields logged: name, phone, maps link, message, timestamp 
-  Creates audit trail for safety tracking 

## 🧩 Prerequisites

 • Telegram Bot credentials + chat ID
 • OpenAI API (GPT-4o-mini)
 • Google Sheets OAuth connection
 • Webhook endpoint exposed publicly

## 💡 Key Benefits

 ✔ Instant emergency alert delivery
 ✔ Live location sharing via Google Maps
 ✔ AI-enhanced message clarity (no ambiguity)
 ✔ Real-time group notification for faster response
 ✔ Persistent logging for audit and follow-up

## 👥 Perfect For

 Women safety applications
 SOS mobile apps or panic button systems
 Security teams and emergency response workflows
 Community safety networks and alert systems

## 🔗 Nodes Used

Function, Google Sheets, Webhook, Telegram, AI Agent, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
