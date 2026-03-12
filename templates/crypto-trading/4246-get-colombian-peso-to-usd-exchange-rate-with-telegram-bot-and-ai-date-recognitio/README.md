# 📈 Get Colombian peso to USD exchange rate with Telegram bot and AI date recognition

> ⚡ **360 views** · 📈 [Crypto Trading & Stock Market](../)

## Description

# 📌 Request TRM (Colombian Peso to US Dollar exchange rate)

## 🎯 Objective

Retrieve the TRM (Colombian Peso to US Dollar exchange rate) for a specific date provided by the user via Telegram.

## 🔄 Summary Flow

1. 📨 **Telegram Message**  
   The user sends a text or audio message  to the Telegram Bot.

2. 🧠 **Date Extraction**  
   AI (OpenAI) is used to identify the date in `YYYY-MM-DD` format.

3. 📅 **Validation**  
   If the date is in the future, the user is notified that it is not valid.

4. 📡 **TRM Query**  
   The bot queries the open data API from the Colombian government.

5. 📥 **Result**  
   - ✅ If TRM data exists for that date → The bot replies to the user.  
   - ❌ If not → It searches up to 10 previous days for available data.

6. 📤 **Final Response**  
   The most recent available value is sent, or a message indicating no information is available.

## 🔗 Data Source

**datos.gov.co** – [TRM](https://www.datos.gov.co/)

## 🔗 Nodes Used

HTTP Request, Telegram, Telegram Trigger, Filter, AI Agent, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
