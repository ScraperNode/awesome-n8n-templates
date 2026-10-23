# 🤝 Invite the Fireflies recording bot to meetings from a one-click form

> ⚡ **24 views** · 🤝 [CRM & Sales Operations](../)

## Description

## Description

Paste your meeting link into a simple form and submit. The workflow instantly sends your Fireflies recording bot to the meeting — no dashboard login, no navigation, no clicking through menus. You get a confirmation page showing the meeting title and a reminder to check your Fireflies dashboard after the call. Built for sales teams, account managers, and consultants who run back-to-back calls and cannot afford to forget recording.

---

## What This Workflow Does

- **One-click bot invite** — submits a meeting link directly to the Fireflies API so the bot joins without you opening the Fireflies dashboard
- **Input validation** — checks the meeting link is non-empty and starts with http before sending anything, returning an instant error if the link is invalid
- **Smart defaults** — fills in a default title, 60-minute duration, and English language if you leave fields blank so nothing fails silently
- **Duration clamping** — automatically keeps duration between 15 and 120 minutes regardless of what number you type
- **Instant confirmation page** — shows your meeting title and duration in a clean HTML page the moment the bot is invited
- **Form bookmark** — the trigger is a hosted n8n form you can bookmark and share with your whole team, no logins required

---

## Setup Requirements

### Tools you need:
- n8n instance (self-hosted or n8n Cloud)
- Fireflies account with API access (app.fireflies.ai)
- Fireflies Personal API Key

**Estimated Setup Time: 5–10 minutes**

---

## Step-by-Step Setup

1. **Get your Fireflies API key** — Log in to app.fireflies.ai. Go to **Integrations**, then **API**. Copy your Personal API Key.

2. **Paste the API key into the HTTP node** — Open the node named **4. HTTP — Send to Fireflies API**. Find the Authorization header. Replace `YOUR_FIREFLIES_API_KEY` with the key you copied. The full value should read: `Bearer YOUR_FIREFLIES_API_KEY` with your actual key in place of the placeholder.

3. **Update the default meeting title** — Open the node named **2. Set — Validate and Prepare Inputs**. Find the `meeting_title` assignment. Change `Sales Meeting - Incrementors` to your own default title, such as your company name or team name.

4. **Activate the workflow** — Click Activate in the top right. Copy the form URL from node **1. Form — Invite Fireflies Bot** and bookmark it or share it with your team.

---

## How It Works (Step by Step)

**Step 1 — Form Trigger: Invite Fireflies Bot**
You open the form in your browser and fill in five fields: the meeting link, an optional title, an optional password, the duration in minutes, and the language. When you submit, the workflow starts. The form is hosted by n8n and accessible from any browser without any login.

**Step 2 — Set: Validate and Prepare Inputs**
This step cleans every field you submitted. It trims whitespace from the meeting link. If you left the title blank, it sets the default to `Sales Meeting - Incrementors`. If you left the duration blank or typed something invalid, it defaults to 60 minutes. It also clamps the duration so it is never below 15 or above 120 minutes. Language defaults to English if nothing was selected.

**Step 3 — IF: Valid Meeting Link?**
This step checks two things: the meeting link must not be empty, and it must start with `http`. If both conditions are true, the workflow continues to the Fireflies API call. If either condition fails — for example, you pasted a link without `https://` — the workflow routes to the error path. The error path (nodes 7 and 8) returns an error page to you immediately. *(Note: the error response nodes are referenced in the workflow overview but are not yet wired in the connections — see Troubleshooting below.)*

**Step 4 — HTTP Request: Send to Fireflies API**
This step sends a GraphQL mutation to `https://api.fireflies.ai/graphql`. It passes your meeting link, title, password, duration, and language. Fireflies responds and the bot is dispatched to join your meeting at the specified link.

**Step 5 — Set: Build Success Response**
This step builds a confirmation HTML page using the meeting title and duration from Step 2. It formats them into a clean green card with a checkmark so you know the bot was invited successfully.

**Step 6 — Respond: Bot Invited Successfully**
This step returns the confirmation HTML page directly in your browser. You see the meeting title and duration, and a note reminding you the transcript will appear in your Fireflies dashboard after the call ends. The workflow is complete.

---

## Key Features

✅ **Bookmarkable form URL** — share a single link with your whole team; no one needs access to n8n or Fireflies directly  
✅ **Instant link validation** — invalid or missing links are caught before the API is called, preventing silent failures  
✅ **Duration clamping** — no matter what number a user types, duration is always kept within the 15–120 minute range Fireflies accepts  
✅ **Sensible defaults** — blank fields never cause errors; title, duration, and language all fall back to safe defaults automatically  
✅ **Confirmation page** — submitter sees exactly which meeting was booked and for how long, reducing doubt and repeat submissions  
✅ **Multi-language support** — form includes English, Hindi, Spanish, French, and Portuguese so international teams can use it out of the box  
✅ **Zero-login experience** — the bot is invited from a public form; your team never needs to open Fireflies or n8n

---

## Customisation Options

**Add more languages to the dropdown** — Open node **1. Form — Invite Fireflies Bot**, find the Meeting Language field, and add new language codes such as `de`, `it`, or `ja` to the options list.

**Change the default meeting title** — Open node **2. Set — Validate and Prepare Inputs** and update `Sales Meeting - Incrementors` to match your company or team name. This appears on the confirmation page.

**Extend the maximum duration** — In node **2. Set — Validate and Prepare Inputs**, find the `meeting_duration` expression and change `120` to a higher number if your calls regularly run longer than two hours.

**Wire up the error response path** — Nodes 7 and 8 (error response) exist in the overview but are not yet connected. Add a **Set** node and a **Respond to Webhook** node connected to the false path of node **3. IF — Valid Meeting Link?** to show users a clear error message when their link is invalid.

**Log every submission to Google Sheets** — Add a Google Sheets node after node **4. HTTP — Send to Fireflies API** to record each meeting link, title, and timestamp for your CRM or sales tracking.

**Send a Slack notification on invite** — Add a Slack node after node **5. Set — Build Success Response** to ping your sales channel every time a bot is dispatched, keeping the team aware of active calls.

---

## Troubleshooting

**API key not working:**
- Confirm you replaced the full placeholder `YOUR_FIREFLIES_API_KEY`, not just part of it
- The Authorization header value must be exactly `Bearer ` followed by your key with a space between them
- Check that your Fireflies account has API access enabled under Integrations

**Bot not joining the meeting:**
- Confirm the meeting link is a live, future meeting — Fireflies cannot join meetings that have already ended
- Check that the meeting platform is supported by Fireflies (Google Meet, Zoom, Microsoft Teams, Webex)
- If the meeting requires a password, make sure you filled in the password field on the form

**Form submits but nothing happens:**
- Confirm the workflow is Activated — inactive workflows do not process form submissions
- Open the n8n execution log to see which node failed and what error message it returned

**Error page not showing for invalid links:**
- The error response path (nodes 7 and 8) is defined in the overview but is not connected in the current workflow — the false path of node **3. IF — Valid Meeting Link?** has no output wired. Connect a Set node and a Respond to Webhook node to that path to return a proper error page.

**Duration defaulting to unexpected values:**
- If you type a non-numeric value in the Duration field, the workflow defaults to 60 minutes. This is intentional. If 60 is not the right default for your team, update the fallback value in node **2. Set — Validate and Prepare Inputs**.

---

## Support

Need help setting this up or want a custom version built for your team or agency?

📧 Email: [info@isawow.com](info@isawow.com)
🌐 Website: [https://isawow.com/](https://isawow.com/)

## 🔗 Nodes Used

HTTP Request, n8n Form Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
