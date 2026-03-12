# 💬 Typeform lead capture to HubSpot with scoring and Slack alerts

> ⚡ **200 views** · 💬 [Lead Nurturing & AI Sales Agents](../)

## Description

**📄 Smart Lead Capture, Scoring & Slack Alerts**

This workflow captures new leads from Typeform, checks for duplicates in HubSpot CRM, enriches and scores them, assigns priority tiers (Cold, Warm, Hot), and instantly notifies your sales team in Slack.

**🔧 How It Works**

Typeform Trigger → Monitors form submissions and passes lead details into the workflow.

HubSpot Deduplication → Searches HubSpot by email before creating a new record.

**Conditional Routing →**

If no match → Creates a new contact in HubSpot.

If match found → Updates the existing contact with fresh data.

**Lead Scoring (Function Node)** → Custom JavaScript assigns a score based on your rules (e.g. company email, job title, engagement signals, enrichment data).

**Tier Assignment** → Categorizes the lead as ❄️ Cold, 🌡 Warm, or 🔥 Hot based on score thresholds.

**Slack Notification** → Sends formatted lead alerts to a dedicated sales channel with priority indicators.

**👤 Who Is This For?**
- Sales teams who need to prioritize hot leads in real-time.
- 
Marketing teams running inbound lead capture campaigns with Typeform.

RevOps teams that want custom scoring beyond HubSpot defaults.

Founders/SMBs looking to tighten lead-to-revenue pipeline with automation.

**💡 Use Case / Problem Solved**

❌ Duplicate contacts clogging HubSpot CRM.

❌ Manual lead triage slows down response time.

❌ HubSpot’s default scoring is rigid.

✅ Automates lead creation + scoring + notification in one flow.

✅ Sales teams get immediate Slack alerts with context to act fast.

**⚙️ What This Workflow Does**

Captures lead data directly from Typeform.

Cleans & deduplicates contacts before pushing to HubSpot CRM.

Scores and categorizes leads via custom logic.

Sends structured lead alerts to Slack, tagged by priority.

Provides a scalable foundation you can extend with data enrichment (e.g., Clearbit, Apollo).

**🛠️ Setup Instructions**

**🔑 Prerequisites**

Typeform account with API access → Typeform Developer Docs

HubSpot CRM account with API key or OAuth → HubSpot API Docs

Slack workspace & API access → Slack API Docs

(Optional) n8n automation platform to build & run → n8n Hub

**📝 Steps to Configure**

**Typeform Node (Trigger)**

- Connect your Typeform account in n8n.
- Select the form to track submissions.
- Fields typically include: first name, last name, email, company, phone.

**HubSpot Node (Search Contact)**
Configure a search by email.
Route outcomes:
- Not Found → Create Contact
- Found → Update Contact

**HubSpot Node (Create/Update Contact)**
- Map Typeform fields into HubSpot (email, name, phone, company).

Ensure you capture both standard and custom properties.

Function Node (Lead Scoring)
Example JavaScript:

// Simple lead scoring example
const email = $json.email || "";
let score = 0;

if (email.endsWith("@company.com")) score += 30;
if ($json.company && $json.company.length &gt; 2) score += 20;
if ($json.phone) score += 10;

let tier = "❄️ Cold";
if (score &gt;= 60) tier = "🔥 Hot";
else if (score &gt;= 30) tier = "🌡 Warm";

return {
  ...$json,
  leadScore: score,
  leadTier: tier
};


Customize rules based on your GTM strategy.

**Reference** → n8n Function Node Docs

Slack Node (Send Message)
Example Slack message template:

🚀 New Lead Alert!  
👤 {{ $json.firstname }} {{ $json.lastname }}  
📧 {{ $json.email }} | 🏢 {{ $json.company }}  
📊 Score: {{ $json.leadScore }} — {{ $json.leadTier }}


Send to dedicated #sales-leads channel.

Reference → Slack Node in n8n

**📌 Notes & Extensions**

🔄 Add enrichment with Clearbit or Apollo.io
 before scoring.

📊 Use HubSpot workflows to trigger nurturing campaigns for ❄️ Cold leads.

⏱ For 🔥 Hot leads, auto-assign to an SDR using HubSpot deal automation.

🧩 Export data to Google Sheets or Airtable for analytics.

## 🔗 Nodes Used

Slack, Typeform Trigger, HubSpot

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
