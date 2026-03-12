# 📱 Run email outreach campaigns from Telegram with Gmail and Google Sheets

> ⚡ **82 views** · 📱 [Social Media & Email Marketing](../)

## Description

# **Automated Email Outreach: Telegram → Gmail → Sheets Dashboard**

**Who is this for?**
Solo founders, sales teams, and event organizers who need **email outreach without expensive tools** but want full control from Telegram.

---

**What problem is this workflow solving?**
Email campaigns are painful:
- Expensive tools ($50+/month)
- No mobile control
- Manual tracking
- Unsubscribe nightmares

This workflow gives you **Zapier-level outreach** for free from **Telegram → Gmail → Sheets**.

---

**What this workflow does**

**Telegram Control** `/outreach` command launches campaigns  
**Smart Sending** Gmail + random delays (anti-spam)  
**Real-time Tracking** Open pixels + unsubscribe webhooks  
**Sheets Dashboard** Leads, logs, stats in one place  
**Compliance** Auto-unsubscribe + opt-out tracking  

**Full flow**:
Telegram Bot → Parse Command → Sheets Leads → Gmail Send → Pixel/Unsub Track → Update Dashboard

---

**Setup (7 minutes)**

1. Telegram: Create bot → Get token → Update chatId
2. Gmail: OAuth2 credential (any account)
3. Google Sheets: Create sheet with tabs:
- Dashboard (stats)
- Leads (email, name, status)
- Logs (sends, opens, unsubs)
4. Config: Update Sheet ID + webhook URLs
5. Test: /outreach cap:2 → Verify sends

text

**Telegram commands**:
- `/outreach sender:you@domain.com subject:"Event Invite" body:"Hi {{name}}..." cap:50`
- `/status` → Campaign stats
- `/stop` → Pause sends

---

**How to customize to your needs**

**Campaign Types**:
Event invites → {{name}} for {{event}}
Sales outreach → {{company}} pricing inquiry
Newsletter → {{name}} weekly update

text

**Scale Up**:
- Multiple senders (Gmail aliases)
- A/B testing (subject lines)
- Segmentation (lead status)
- CRM sync (HubSpot/Airtable)

**Anti-spam**:
- Random delays (30s-2m)
- HTML tracking pixel
- Auto-unsubscribe
- Send caps
- Bounce handling

---

**ROI**:

- $0/month (vs Zapier $50+, Mailchimp $20+)
- Telegram control (no desktop needed)
- 5min campaigns (vs hours setup)
- Real-time dashboard (opens, unsubs, sends)
- GDPR compliant (auto-unsub)

**Proven**: Used for 5k+ event invites, 28% open rate.

---

**Need help customizing?**: 
Contact me for consulting and support: [LinkedIn](https://www.linkedin.com/in/milobravo/) / [Message](https://tally.so/r/EkKGgB) 

---

**Keywords**: n8n email outreach, telegram automation, gmail campaigns, google sheets dashboard, no-code email marketing, sales outreach automation, event invite workflow.

## 🔗 Nodes Used

Google Sheets, Webhook, Telegram, Telegram Trigger, Gmail, Google Sheets Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
