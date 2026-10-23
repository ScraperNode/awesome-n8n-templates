# 💬 Bridge Gmail and iMessage with Blooio and log conversations to Close

> ⚡ **16 views** · 💬 [Lead Nurturing & AI Sales Agents](../)

## Description

# Email ↔ iMessage Bridge (via Blooio + Gmail)

A 2-branch bidirectional bridge. Email a customer from Close (or any CRM) — they get a blue-bubble iMessage. They reply on iPhone — it lands in your Gmail with the phone number in the subject. Reply in Gmail — it goes back out as iMessage. No database, no state store. The subject IS the routing table.

## How it works

- ⏰ 📬 Gmail Trigger polls a dedicated bridge inbox every minute for new outbound email
- 🔍 IF node validates the subject contains a phone number (`\+?\d{10,15}`) — drops everything else
- 🧹 Set node extracts the phone from the subject and strips HTML + quoted reply chains from the body
- 💬 Blooio Messaging node sends the cleaned text as iMessage to the extracted phone
- 📡 Blooio Webhook fires on `message.received` — inbound iMessages arrive in real-time
- 📧 Set node builds a consistent subject `iMessage from +15551234567`, Gmail Send delivers to your main inbox with `Reply-To` set back to the bridge — so your reply re-enters Branch 1
- 🗂️ In parallel, the workflow looks up the lead in Close by phone and logs the inbound iMessage as an email activity — attaches it to the lead timeline AND triggers Close Sequence exit

## The 2 branches

| Branch | Trigger | What it does |
|--------|---------|--------------|
| 🟢 Email → iMessage | Gmail Trigger (1-min poll) | Phone-in-subject → strip quoted chains → send iMessage via Blooio |
| 🟣 iMessage → Email | Blooio Webhook (`message.received`) | Build threaded subject → send to main inbox with Reply-To → log to Close |

## Why this matters

| Metric | Manual | This workflow |
|--------|--------|---------------|
| ⚡ Speed | Switch apps every reply, lose context | Stay in Gmail, customers get blue bubbles |
| 🔁 Consistency | Some texts in Messages, some in a 3rd-party app | Every conversation in one Gmail thread |
| 📉 CRM gaps | Texts never reach Close — lead timeline is half a story | Every inbound iMessage logged + Sequence exits fire |
| 🧠 Staff time | 30–60 sec per reply jumping apps | Zero — reply in the inbox already open |

Sales teams using SMS or iMessage close ~3× faster than email-only follow-up, but every minute spent app-switching erodes that edge. This workflow keeps the speed AND the inbox you already live in.

## What you need

| Tool | Cost | Why |
|------|------|-----|
| Blooio | ~$39/mo + per-message | Warmed iMessage number that delivers as blue bubble |
| Gmail (bridge inbox) | Free | Dedicated address that only this workflow watches |
| Gmail (main inbox) | Any provider | Where inbound iMessage notifications land |
| Close (optional) | From $59/seat | CRM lead lookup + Sequence exit logging — skip the 3 Close nodes if you don't use it |
| n8n | Free self-host / cloud tier | Runs the bridge |

⚠️ **Blooio P2P notice:** Blooio is opt-in only. Perfect for replies to inbound traffic and warm conversations. Cold outreach requires explicit consent per Blooio ToS.

## Set up steps

- Takes about 20 minutes
- Create a dedicated bridge Gmail account (e.g. `bridge@yourgmail.com`) — keep its inbox clean, this workflow watches it
- Sign up at blooio.com, activate a warmed iMessage number, grab the API Bearer token
- Branch 1 — connect bridge Gmail credential to **Gmail Trigger**, connect Blooio credential to **Send iMessage via Blooio**
- Branch 2 — copy the **Blooio Webhook** production URL, register it in the Blooio dashboard for `message.received`, connect bridge Gmail credential to **Send Email via Gmail**, replace the `&lt;__USER_MAIN_INBOX__...__&gt;` and `&lt;__BRIDGE_GMAIL_ADDRESS__...__&gt;` placeholders with your real addresses
- (Optional Close logging) Bind a Close API Bearer token credential to both **Close: Find Lead by Phone** and **Close: Log Inbound iMessage** — or delete those 3 nodes if you don't use Close
- Test outbound: email the bridge inbox with subject `+1YOURPHONE - test` → confirm iMessage hits your phone
- Test inbound: text the Blooio number from your phone → confirm an email lands in your main inbox with subject `iMessage from +1YOURPHONE`
- Test the loop: reply to that email → confirm a second iMessage arrives
- Toggle workflow Active

## Learn more at [SMB Excel](https://www.smbexcel.com)

## 🔗 Nodes Used

HTTP Request, Webhook, Gmail, Gmail Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
