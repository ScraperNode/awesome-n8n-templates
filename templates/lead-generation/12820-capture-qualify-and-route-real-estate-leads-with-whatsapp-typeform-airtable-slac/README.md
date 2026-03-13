# 🎣 Capture, qualify, and route real estate leads with WhatsApp, Typeform, Airtable, Slack, Gmail, and GPT-4.1-mini

> ⚡ **274 views** · 🎣 [Lead Generation & Enrichment](../)

> 💡 **Pro Tip** — For lead enrichment, [ScraperNode](https://scrapernode.com) can pull [LinkedIn profiles](https://scrapernode.com/linkedin/scrapers/profiles), [company data](https://scrapernode.com/linkedin/scrapers/companies), and [job listings](https://scrapernode.com/indeed/scrapers/jobs) directly into your pipeline — useful for building prospect lists without manual research.

## Description

## 📌 Overview
This n8n-powered workflow automates the **entire lifecycle of real estate lead intake, qualification, routing, assignment, and reporting** across multiple channels.
It brings WhatsApp inquiries and website form submissions into a **single intelligent system**, where leads are processed conversationally using AI, deduplicated, normalized, assigned fairly to agents, logged into a centralized CRM, and reported on weekly.
Designed specifically for **real estate agencies, brokerages, and property teams**, this system replaces manual follow-ups, spreadsheet chaos, and uneven agent assignments with a **scalable, modular automation** that can grow to include Facebook Lead Ads and Google Lead Forms without breaking downstream logic.



## 🧠 What It Does
This workflow automates the full real estate lead pipeline. It:
- Collects inbound leads from WhatsApp and website forms.
- Uses AI to extract, validate, and structure lead information.
- Normalizes all leads into a consistent schema across sources.
- Detects and prevents duplicate leads (both within-run and CRM-level).
- Routes leads intelligently based on property interest.
- Assigns leads fairly using round-robin agent logic.
- Stores all leads and assignments in a centralized CRM.
- Sends automated notifications to agents and internal teams.
- Generates weekly lead, duplicate, and assignment reports.
- Is designed to be easily extended to Facebook Lead Ads and Google Lead Forms.



## 💡 Why This Workflow
Real estate teams don’t struggle with demand — they struggle with **lead management**.

This workflow was built to solve common real estate problems:
- Leads lost in WhatsApp chats
- Duplicate inquiries wasting agent time
- Uneven lead distribution across agents
- Manual CRM updates
- No visibility into weekly lead performance

Instead of patching tools together, this workflow provides a **single automated system** that is reliable, extensible, and client-ready.




## 👤 Who It’s For
This workflow is ideal for:
- Real estate agencies managing high WhatsApp and form lead inquiry volume
- Brokerages with multiple agents needing fair lead assignment
- Property developers handling inbound marketing leads
- Real estate lead generation teams
- Automation freelancers building reusable real estate systems



## ⚙️ How It Works
### 🧩 1. Lead Intake Workflow
#### 🎯 Purpose
Collect inbound leads from multiple channels and normalize them into a unified structure.
#### 🛠 How It Works
##### 1. WhatsApp & Website Triggers
Leads enter the system via:
- WhatsApp messages
- Website inquiry forms
##### 2. Lead Normalization
Regardless of source, all leads are transformed into a common structure:
` First name, Last name, Phone number, Email, What is your budget range?, and others`

This ensures new channels (Facebook Lead Ads, Google Lead Forms) can be added later without changing core logic.



### 🧩 2. AI Lead Processing Workflow
#### 🎯 Purpose
Convert unstructured messages into clean, usable lead data.
#### 🛠 How It Works
##### 1. AI Conversation Handling
An AI agent processes inbound messages to:
- Extract missing details
- Validate lead intent
- Standardize property interest categories
##### 2. Data Validation
Ensures required fields exist before moving forward.


### 🧩 3. Deduplication Workflow
#### 🎯 Purpose
Prevent duplicate leads from entering the system or being reassigned.
#### 🛠 How It Works
##### 1. In-Execution Duplicate Check
Prevents the same lead from being processed twice in a single run.
##### 2. CRM-Level Duplicate Detection
Checks existing records using:
- Phone number
- Email

Duplicate leads are flagged and excluded from reassignment while still logged for reporting.


### 🧩 4. Lead Routing & Agent Assignment Workflow
#### 🎯 Purpose
Assign leads fairly and intelligently to agents.
#### 🛠 How It Works
##### 1. Property-Based Routing
Leads are routed based on property type (e.g. Single-Family, Multi-Family, Condo).
##### 2. Round-Robin Assignment
Agents are rotated automatically to ensure:
- Fair distribution
- No manual favoritism
- Predictable assignment logic



### 🧩 5. CRM Storage & Notifications Workflow
#### 🎯 Purpose
Keep all lead data centralized and notify the right people instantly.
#### 🛠 How It Works
##### 1. CRM Logging (Airtable)
Stores:
- **Lead details**
- Assigned agent
- Source
- Deduplicates (Separate table)
- Timestamps
##### 2. Automated Notifications
Sends alerts via:
- Email
- Slack
So agents can respond immediately.



### 🧩 6. Weekly Reporting Workflow
#### 🎯 Purpose
Provide visibility into lead performance and system health.
#### 🛠 How It Works
- Runs on a weekly schedule
- Generates summaries for:
   - Total leads
   - Duplicate leads
   - Agent assignments
- Can be separated into its own workflow for scalability and reuse.



## 🛠 How to Set It Up

Import the .json file into your n8n instance.

### Connect the required credentials:
- WhatsApp Trigger  (**Auth Connection**)
- WhatsApp Business Cloud (**Access Token**)
- OpenAI API Key
- Airtable API Key (Access Token)
- Gmail
- Slack API Key (Access Token)

### Configure your data sources:
- Update the Airtable base and table names to match your CRM structure
   - **Real Estate Qualifier** column names:
      `First name | Last name | Phone number | Email | Location | Property Type | Timeframe | Payment Source | Pre Approved | Has Agent (Yes, No) | Lead (New, Contacted, Follow-up, Converted, Couldn't Convert) | Source | Assigned Agent | Assigned Time | Qualified (Yes, No) | Transcript | Summary`
   - **Real Estate Qualifier Duplicate** column names:
      `First name | Last name | Phone number | Email | Location | Property Type | Timeframe | Payment Source | Pre Approved | Has Agent (Yes, No) | Source`

### Customize business logic:
- Update agent pools and routing rules
- Adjust AI prompts if needed
- Review deduplication and reporting settings

### Activate the workflow:
- Click **Publish** to activate the workflow
- Send a test lead via WhatsApp or website form to confirm everything works




## 🎨 Customization Tips
- **Add More Channels**: Plug in Facebook Lead Ads or Google Lead Forms — no restructuring needed.
- **Routing Logic**: Customize routing by location, budget, or property category.
- **CRM Expansion**: Add more fields (Notes, Follow-Up Status, Deal Stage).
- **Reporting**: Extend weekly reports or connect to BI tools.
- **Ads Integration**: Leads can optionally be passed into Facebook or Google Ads workflows after normalization.



## 📬 Contact
#### For Enquiries: buzanalytics@gmail.com
Thank you for exploring this workflow!

## 🔗 Nodes Used

Airtable, Slack, Typeform Trigger, Gmail, WhatsApp Business Cloud, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
