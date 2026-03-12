# ⚡ Reschedule Google Calendar appointments with Stream Deck (15/30/60 min)

> ⚡ **345 views** · ⚡ [Personal Productivity](../)

## Description

Need help? Want access to this workflow + many more paid workflows + live Q&A sessions with a top verified n8n creator?

[Join the community](https://www.skool.com/beyond-nodes-automation-lab-2006/about)

⏰ Move All Appointments 15/30/60 Minutes Later Via Stream Deck

---

Running a bit behind? 😅

Shift your day's remaining Google Calendar appointments by 15, 30, or 60 minutes with one press of a stream deck button!

---
tl;dr

This template is your lifesaver for those days when things get hectic. With dedicated buttons on your Stream Deck, you can instantly push all subsequent Google Calendar appointments for the current day forward by 15, 30, or 60 minutes, automatically notifying all attendees.

Why You'll Love This Workflow ❤️:

    One-Click Reschedule: No more manually editing each calendar event. One press, and your day is adjusted!
    Stream Deck Powered: Integrates seamlessly with your Elgato Stream Deck using the API Ninja plugin.
    Flexible Delays: Choose between 15, 30, or 60-minute adjustments with separate buttons.
    Smart Event Fetching: Automatically grabs all remaining appointments for the current day from your specified Google Calendar.
    Attendee Notifications: Keeps everyone in the loop by sending standard Google Calendar update notifications.
    Peace of Mind: Your "graceful delay" button when you need a few extra minutes.

Perfect For 🧑‍💻:

    Busy professionals managing a packed schedule.
    Streamers and content creators who need to adjust live sessions or meetings on the fly.
    Anyone who juggles back-to-back Google Calendar appointments and uses a Stream Deck for peak efficiency.

Streamlined Setup Guide 🛠️:

1️⃣ Install the "API Ninja" plugin

2️⃣ n8n Webhook Configuration:
(choose a username and password).

3️⃣ Stream Deck Buttons:
* Create three "API Ninja" buttons on your Stream Deck.
* Configure each button to make a POST request to its corresponding n8n webhook

4️⃣ Google Calendar Connection:
* In each of the "Get the Events..." and "Push All Meetings..." Google Calendar nodes, select your Google Calendar account (or create a new credential).
* Update the "Calendar" field

5️⃣ Activate & Test! Your Stream Deck buttons should now be ready to dynamically adjust your day.

Important Notes 📝:

    Calendar Selection: Ensure you've correctly selected your target calendar in all Google Calendar nodes.
    Error Handling: The workflow includes basic error handling to respond with a 500 error if issues occur (like not finding events), otherwise, it responds with a 200 success code.
    Attendee Impact: Remember this will move all remaining events for the day and send updates to all attendees of those events.

Take control of your schedule with this powerful Stream Deck and n8n automation. Never stress about manually pushing meetings again! ✨

## 🔗 Nodes Used

Webhook, Google Calendar

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
