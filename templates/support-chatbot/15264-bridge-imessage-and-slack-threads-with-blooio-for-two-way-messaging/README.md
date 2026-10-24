# 💬 Bridge iMessage and Slack threads with Blooio for two-way messaging

> ⚡ **42 views** · 💬 [Support Chatbots](../)

## Description

Turn any Slack channel into your team's iMessage inbox. 

## How it works

📱 → Customer texts your business number
🔵 → Blooio pushes the webhook into n8n
💬 → n8n posts a new thread in Slack
🧵 → Your team replies in the thread
🔵 → n8n sends the reply through Blooio
📱 → Customer gets a blue-bubble iMessage

## Why this matters

| What you get | Why it matters |
|--------------|----------------|
| 💙 Blue bubbles, not green | iMessage open rates blow past SMS. People read texts from friends — not from 10DLC short codes.  |
| 🧰 One tech stack, not five | No separate texting app, no SMS gateway, no CRM seat for a receptionist. Just Slack + Blooio. Your team already knows Slack. |
| 💼 Turn Slack into a mini iMessage CRM | Every contact = one thread. Scroll the channel, see every active conversation. Search by phone, name, or keyword. Your history lives where your team already works. |
| 📱 iMessage from any device | Desktop, phone, tablet, browser — anywhere Slack runs, your team can text customers. No shared iPhone sitting on a desk. No "let me check when I'm at my computer." |
| 👥 Team inbox + personal reach | Your whole team sees inbound messages and can jump in. But replies still come from your business number — not from whoever happens to be on shift. Customer experience stays consistent; coverage doesn't. |

***More opens = more leads = more deals.***


## What you need

| Tool | Cost | Why |
|------|------|-----|
| Blooio | ~$39/mo starting | Send + receive iMessages via REST API |
| Slack | Any plan | Dedicated bridge channel (private recommended) |
| n8n | Cloud or self-hosted | Run the workflow |

⚠️ **Blooio P2P notice:** Blooio requires all outreach to be opt-in and actively enforces this.  

## The two branches

| Branch | Trigger | What it does |
|--------|---------|--------------|
| 🟥 Inbound iMessage → Slack | Blooio webhook (message.received) | Post new iMessage to Slack as a threaded parent |
| 🟩 Slack Reply → Outbound iMessage | Any new message in bridge channel | Filter → get parent → extract phone → send via Blooio |

## Set up steps

- Takes about 15 minutes
- Sign up at blooio.com, grab your API token and webhook  
- Create a dedicated Slack channel 
- Connect Slack credentials
- Create an HTTP Bearer Auth credential with your Blooio API token 
- Copy the Production URL to "Blooio Webhook" 
- Text yourself to confirm it posts threaded in Slack, reply in the thread, confirm blue bubble arrived.

### Learn more at [SMB Excel](https://www.smbexcel.com)

## 🔗 Nodes Used

HTTP Request, Slack, Webhook, Filter, Slack Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
