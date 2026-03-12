# 💬 Automate event follow-ups with GPT-4, LinkedIn & HubSpot multi-channel outreach

> ⚡ **466 views** · 💬 [Lead Nurturing & AI Sales Agents](../)

## Description

Automate your post-event networking with this intelligent n8n workflow. Triggered instantly after an event, it collects attendee and interaction data, enriches profiles with LinkedIn insights, and uses GPT-4 to analyze engagement and generate tailored follow-up messages. High-value leads are prioritized, messages are sent via email, LinkedIn, or Slack, and all activity is logged in your CRM and database. Save hours of manual follow-up while boosting relationship-building and ROI. 🤝✨

---

### Advanced Features  
- **Webhook automation** – Starts instantly on event completion  
- **Multi-Source Enrichment** – Combines event data, interactions, and LinkedIn profiles  
- **AI-Powered Insights** – GPT-4 analyzes behavior and suggests personalized talking points  
- **Smart Priority Filtering** – Routes leads into High, Medium, and Low priority paths  
- **Personalized Content Generation** – AI crafts custom emails and LinkedIn messages  
- **Multi-Channel Outreach** – Sends via Email, LinkedIn DM, and Slack  
- **CRM Integration** – Automatically updates HubSpot with contact notes and engagement  
- **PostgreSQL Logging** – Stores full interaction history and analytics  
- **ROI Dashboard** – Tracks response rates, meetings booked, and pipeline impact  

---

### What It Does  
- Collects attendee data from your event platform  
- Enriches with LinkedIn profiles & real-time interaction logs  
- Scores networking potential using engagement algorithms  
- Uses AI to analyze conversations, roles, and mutual interests  
- Generates hyper-personalized follow-up emails and LinkedIn messages  
- Sends messages through preferred channels (email, LinkedIn, Slack)  
- Updates HubSpot CRM with follow-up status and next steps  
- Logs all actions and tracks analytics for performance reporting  

---

### Workflow Process  
- The **Webhook Trigger** initiates the workflow via POST request with event and attendee data.  
- **Get Attendees** fetches participant list from the event platform.  
- **Get Interactions** pulls Q&A, chat, poll, and networking activity logs.  
- **Enrich LinkedIn Data** retrieves professional profiles, job titles, and company details via LinkedIn API.  
- **Merge & Enrich Data** combines all sources into a unified lead profile.  
- **AI Analyze Profile** uses GPT-4 to evaluate interaction depth, role relevance, and conversation context.  
- **Filter High Priority** routes top-tier leads (e.g., decision-makers with strong engagement).  
- **Filter Medium Priority** handles warm prospects for lighter follow-up.  
- **AI Agent1** generates personalized email content using chat model and memory.  
- **Generate Email** creates a professional, context-aware follow-up email.  
- **Send Email** delivers the message to the lead’s inbox.  
- **AI Agent2** crafts a concise, friendly LinkedIn connection message.  
- **Generate LinkedIn Msg** produces a tailored outreach note.  
- **Send LinkedIn** posts the message via LinkedIn API.  
- **Slack Notification** alerts your team in real-time about high-priority outreach.  
- **Update CRM (HubSpot)** adds contact, tags, and follow-up tasks automatically.  
- **Save to Database (Insert)** logs full lead journey and message content in PostgreSQL.  
- **Generate Analytics** compiles engagement metrics and success rates.  
- **Send Response** confirms completion back to the event system.  

---

### Setup Instructions  
- Import the workflow JSON into n8n  
- Configure credentials:  
  - Event Platform API (for attendees & interactions)  
  - LinkedIn API (OAuth2)  
  - OpenAI (GPT-4)  
  - SMTP (for email) or Email Service (SendGrid, etc.)  
  - HubSpot API Key  
  - PostgreSQL Database  
  - Slack Webhook URL  
- Trigger with a webhook POST containing event ID and settings  
- Watch personalized outreach happen automatically!  

---

### Prerequisites  
- Event platform with webhook + attendee/interaction API  
- LinkedIn Developer App with API access  
- OpenAI API key with GPT-4 access  
- HubSpot account with API enabled  
- PostgreSQL database (table for leads & logs)  
- Slack workspace (optional, for team alerts)  

---

### Example Webhook Payload  
```json
{
  "eventId": "evt_spring2025",
  "eventName": "Annual Growth Summit",
  "triggerFollowUp": true,
  "priorityThreshold": {
    "high": 75,
    "medium": 50
  }
}
```

---

### Modification Options  
- Adjust scoring logic in **AI Analyze Profile** (e.g., weight Q&A participation higher)  
- Add custom email templates in **Generate Email** with your brand voice  
- Include meeting booking links (Calendly) in high-priority messages  
- Route VIP leads to **Send SMS** via Twilio  
- Export analytics to Google Sheets or BI tools (Looker, Tableau)  
- Add approval step before sending LinkedIn messages  

---

**Ready to 10x your event ROI?**  
[Get in touch with us](https://www.oneclickitsolution.com/contact-us/) for custom n8n automation!

## 🔗 Nodes Used

Send Email, HTTP Request, Postgres, Webhook, HubSpot, Filter

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)

---

## 💡 Pro Tip

If you're pulling LinkedIn data through HTTP requests or dealing with API restrictions, there's a community node called [ScraperNode](https://scrapernode.com/linkedin) that handles this natively. It has dedicated scrapers for [profiles](https://scrapernode.com/linkedin/scrapers/profiles), [companies](https://scrapernode.com/linkedin/scrapers/companies), [jobs](https://scrapernode.com/linkedin/scrapers/jobs), and [people search](https://scrapernode.com/linkedin/scrapers/people-search) — you just pass a URL and get structured data back.
