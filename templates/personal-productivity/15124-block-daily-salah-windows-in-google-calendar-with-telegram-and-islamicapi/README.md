# ⚡ Block daily salah windows in Google Calendar with Telegram and IslamicAPI

> ⚡ **43 views** · ⚡ [Personal Productivity](../)

## Description

clients kept booking meetings during my prayer times. i'd either miss a prayer or scramble to reschedule. the problem wasn't the clients — it was that my calendar had no blocked windows for salah. i needed a way to block those times every day, automatically, without thinking about it.

---

## what this does

i built this so i can send /salah to my Telegram bot and it instantly fetches today's prayer times from IslamicAPI (using the Egyptian General Authority of Survey method for Cairo), calculates a realistic time window for each prayer, blocks all five prayers directly in Google Calendar, logs everything to a Google Sheet, then sends me a confirmation message on Telegram with the exact time windows. prayer times shift daily — this accounts for that automatically.

---

## what's inside

* Telegram Trigger — listens for incoming messages from the bot
* Validate the Sender — blocks anyone who isn't me from running this
* Check if it's Text — filters out non-text messages like stickers or photos
* Check for Triggers — only proceeds if the message is /salah
* Send an Action — sends a typing indicator while the workflow runs
* Get Prayer Times — fetches today's prayer times via IslamicAPI
* Map Prayer Data — extracts and formats the raw API response
* Code in JavaScript — calculates start and end windows per prayer
* Book for Fajr / Dhuhr / Asr / Maghrib / Isha — creates five Google Calendar events
* Map Outputs — bundles all calendar IDs and times into one object
* Store Prayer Bookings — appends a row to Google Sheets for tracking
* Send the Message — sends a formatted confirmation back to me on Telegram
* Error Trigger — catches failures and logs them to a separate sheet

---

## APIs used

* IslamicAPI — fetches today's accurate prayer times by coordinates
* Google Calendar — creates and holds the five prayer block events
* Google Sheets — logs each booking run with full timestamps and event IDs
* Telegram Bot API — receives the /salah command and sends the confirmation

---

## estimated cost per run

free — IslamicAPI is free forever, Google and Telegram APIs have no per-call cost at this usage level.

---

## [Created by Gurey AI](https://gurey-ai.vercel.app/contact)

### other workflows i've built
- [**Full Email inbox managing system**](https://n8n.io/workflows/9157-ai-powered-email-triage-and-auto-response-system-with-openai-agents-and-gmail/)
- [**Client Onboarding Form**](https://n8n.io/workflows/8977-client-onboarding-with-form/)
- [**Rag AI Agent**](https://n8n.io/workflows/9050-build-a-document-qa-system-with-google-drive-pinecone-and-openai-rag/)

*more workflows coming soon — [follow along](https://gurey-ai.vercel.app/n8n-resources)*

---

### Need Help?
Email me with your questions [my email](mailto:gureyai2006@gmail.com) or ask in the [Forum](https://community.n8n.io/)!
Happy Hacking!

---

## 🔗 Nodes Used

Google Sheets, HTTP Request, Telegram, Telegram Trigger, Google Calendar

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
