# 🎣 Build targeted prospect lists: find & enrich leads with Surfe to HubSpot

> ⚡ **4,236 views** · 🎣 [Lead Generation & Enrichment](../)

## Description

## 🚀 Build Hyper-Targeted Prospecting Lists with Surfe & HubSpot

This template automatically discovers companies that match your Ideal Customer Profile (ICP), finds the right people inside those companies and enriches them — ready to drop straight into HubSpot. Launch the workflow, sit back, and get a clean list of validated prospects in minutes.

---

## 1. ❓ What Problem Does This Solve?

Sourcing prospects that truly fit your ICP is slow and repetitive. You jump between databases, copy domains, hunt down decision-makers, and then still have to enrich emails and phone numbers one by one.

This workflow replaces all that manual effort:

1. It queries Surfe’s database for companies that match your exact industry, size, revenue and geography filters.
2. It pulls the best-fit people inside each company and enriches them in bulk.
3. It keeps only records with both a direct email *and* mobile phone, then syncs them to HubSpot automatically.

No spreadsheets, no copy-paste — just a fresh, qualified prospect list ready for outreach.

---

## 2. 🧰 Prerequisites

You’ll need:

- A self-hosted or cloud instance of **n8n**
- A **Surfe API Key**
- A **HubSpot** Private App Token with contact read/write scopes
- A **Gmail** account (OAuth2) for the completion notification
- The workflow JSON file linked above
    
    [N8N_FLOW_2__Building_Prospecting_Lists.json](attachment:1d4ec670-711b-4e96-9cca-7556e53f6ba0:N8N_FLOW_2__Building_Prospecting_Lists.json)
    

---

## 3. 📌 Search ICP Companies Configuration — Fine-Tune Your Targeting

![Screenshot 20250807 at 12.13.11.png](fileId:1984)

### 3.1 Editing the JSON

Every targeting rule lives inside the **“🔍 Search ICP Companies”** HTTP node.

Open the node `Search ICP Companies` → `*Parameters* tab` → `*JSON Body*` to edit the filters.

| Filter | JSON path | What it does | Example |
| --- | --- | --- | --- |
| **industries** | `filters.industries` | Narrow to specific verticals (case-sensitive strings) | `["Software","Apps","SaaS"]` |
| **employeeCount.from / to** | `filters.employeeCount` | from / to  | `1 / 35` |
| **countries** | `filters.countries` | 2-letter ISO codes | `["FR","DE"]` |
| **revenues** | `filters.revenues` | Annual revenue brackets | `["1-10M"]` |
| **limit** | `limit` | Companies per run | `20` |

### 3.2 Where to find allowed values

Surfe exposes an **“🗂 Get Filters”** endpoint that returns every accepted value for:

- `industries`
- `employeeCounts`
- `revenues`
- `countries` (always ISO-2 codes)

You can hit it with a simple `GET /v1/people/search/filters` request or browse the interactive docs here:

https://developers.surfe.com/public-008-people-filters [developers.surfe.com](https://developers.surfe.com/public-008-people-filters)

For company-level searches, the same enumerations apply.

---

## 4. ⚙️ Setup Instructions

### 4.1 🔐 Create Your Credentials in n8n

---

### 4.1.1 🚀 Surfe API

1. In your [Surfe dashboard](https://www.surfe.com/) → Use Surfe Api → copy your **API key**
2. Go to **n8n → Credentials → Create Credential**
    1. Choose **Credential Type**: `Bearer Auth`
    2. Name it something like `SURFE API Key`
    3. Paste your API key into the `Bearer Token`
    4. Save
    
![Screenshot 20250807 at 12.13.38.png](fileId:1983)
    

---

### 4.1.2 📧 Gmail OAuth2 API

1. Go to **n8n → Credentials**
2. Create new credentials:
    - Type: `Gmail OAuth2 API`
3. A pop-up window will appear where you can log in with your **Google account** that is linked to Gmail
    - Make sure you grant **email send permissions** when prompted

![Screenshot 20250807 at 12.14.26.png](fileId:1982)

---

### 4.1.3 🎯 HubSpot

### 🔓 Private App Token

1. Go to HubSpot → Settings → Integrations → **Private Apps**
    1. Create an app with scopes:
        - `crm.objects.contacts.read`
        - `crm.objects.contacts.write`
        - `crm.schemas.contacts.read`
    2. **Save the App token**
2. Go to **n8n → Credentials → Create Credential → HubSpot App Token**
    1. Paste your App Token

![Screenshot 20250807 at 12.14.52.png](fileId:1987)

![Screenshot 20250807 at 12.15.12.png](fileId:1988)

![Screenshot 20250807 at 12.15.28.png](fileId:1981)

### ✅ You are now all set for the credentials

---

### 4.2 📥 Import and Configure the N8N Workflow

- Import the provided JSON workflow into N8N
    - Create a New Blank Workflow
    - click the `…` on the top left
    - Import from File

![Screenshot 20250807 at 12.16.02.png](fileId:1986)

![Screenshot 20250807 at 12.16.17.png](fileId:1989)

### 4.2.1 🔗 Link Nodes to Your Credentials

In the workflow, link your newly created credentials to each node of this list :

- `Surfe HTTP nodes:`
    - Authentication → Generic Credential Type
    - Generic Auth Type → Bearer Auth
    - Bearer Auth → Select the credentials you created before
- `Gmail Node Credentials to connect with` → `Gmail account`
- `Hubspot Node` →`Credentials to connect with` → `Gmail account`

![Screenshot 20250807 at 12.16.53.png](fileId:1985)

`Surfe HTTP nodes`

`Surfe HTTP nodes`

- HubSpot node → `Credentials to connect with` → select your HubSpot credentials in the list

---

## 5. 🔄 How This N8N Workflow Works

1. **Manual Trigger** – Click **Execute Workflow** (or schedule it) to start.
2. **Search ICP Companies** – Surfe returns company domains that match your filter set.
3. **Prepare JSON Payload with Company Domains** – Formats the domain list for the next call.
4. **Search People in Companies** – Finds people inside each company.
5. **Prepare JSON Payload Enrichment Request** – Builds the bulk-enrichment request.
6. **Surfe Bulk Enrichments API** – Launches one enrichment job for the whole batch.
7. **Wait + Polling loop** – Checks job status every 3 seconds until it’s `COMPLETED`.
8. **Extract List of People** – Pulls the enriched contacts from Surfe’s response.
9. **Filter: phone AND email** – Keeps only fully reachable prospects (email *and* mobile).
10. **HubSpot: Create or Update** – Inserts/updates each contact in HubSpot.
11. **Gmail** – Sends you a “Your ICP prospecting enrichment is done” email.

---

## 6. 🧩 Use Cases

- **Weekly prospect list refresh** – Generate 50 perfectly-matched prospects every Monday morning.
- **Territory expansion** – Spin up a list of SMB software CEOs in a new country in minutes.
- **ABM prep** – Build multi-stakeholder buying-group lists for target accounts.
- **Campaign-specific lists** – Quickly assemble contacts for a limited-time product launch.

---

## 7. 🛠 Customization Ideas

prepare 

- 🎯 **Refine filters for people** – Add seniorities or other filters in the node `JSON PAYLOAD WITH Company Domains`
    - use the surfe search people api doc https://developers.surfe.com/public-009-search-people-v2
- ♻️ **Deduplicate** – Check HubSpot first to skip existing contacts.
- 🟢 **Slack alert** – Replace Gmail with a Slack notification.
- 📊 **Reporting** – Append enriched contacts to a Google Sheet for analytics.

---

## 8. ✅ Summary

Fire off the workflow, and n8n will find ICP-fit companies, pull key people, enrich direct contact data and drop everything into HubSpot — all on autopilot.

Prospecting lists, done for you.

## 🔗 Nodes Used

HTTP Request, HubSpot, Gmail, Filter

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)

---

## 💡 Pro Tip

For lead enrichment, [ScraperNode](https://scrapernode.com) can pull [LinkedIn profiles](https://scrapernode.com/linkedin/scrapers/profiles), [company data](https://scrapernode.com/linkedin/scrapers/companies), and [job listings](https://scrapernode.com/indeed/scrapers/jobs) directly into your pipeline — useful for building prospect lists without manual research.
