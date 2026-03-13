# 🤝 Create HubSpot companies & tasks from Jotform submissions with Google Sheets

> ⚡ **180 views** · 🤝 [CRM & Sales Operations](../)

> 💡 **Pro Tip** — If you're pulling LinkedIn data through HTTP requests or dealing with API restrictions, there's a community node called [ScraperNode](https://scrapernode.com/linkedin) that handles this natively. It has dedicated scrapers for [profiles](https://scrapernode.com/linkedin/scrapers/profiles), [companies](https://scrapernode.com/linkedin/scrapers/companies), [jobs](https://scrapernode.com/linkedin/scrapers/jobs), and [people search](https://scrapernode.com/linkedin/scrapers/people-search) — you just pass a URL and get structured data back.

## Description

# 🛠️ Workflow: Jotform → HubSpot Company + Task Automation

Automatically create or update **HubSpot companies** and generate **follow-up tasks** whenever a **Jotform** is submitted.  
All logs are stored to **Google Sheets** for traceability, transparency, and debugging.

---

## ✅ Use Cases

- Capture marketing queries from your website’s **Jotform form** and immediately create tasks for your **sales or SDR team**.  
- Enrich **HubSpot companies** with submitted domains, company names, and contact data.  
- Automatically assign tasks to owners and keep all form submissions **logged and auditable**.  
- Avoid manual handoffs — **full automation** from form submission → CRM.

---

## 🔍 How It Works (Step-by-Step)

### **1. Jotform Trigger**
The workflow starts when a new submission is received via the Jotform webhook.  
Captured fields include: name, email, LinkedIn profile, company name, marketing budget, domain, and any specific query.

---

### **2. Create or Update Company in HubSpot + Format Data**
- The **“Create Company”** node ensures the submitted company is either created in HubSpot or updated if it already exists.  
- A **Formatter (Function)** node standardizes the data — names, email, LinkedIn URL, domain, marketing budget, and query text.  
- It composes a task title, generates a follow-up timestamp, and dynamically assigns an owner.

---

### **3. Loop & HTTP Request – Create HubSpot Task**
- The workflow loops through each formatted item.  
- A **Wait** node prevents rate limit issues.  
- It then sends an **HTTP POST** request to HubSpot’s Tasks API, creating a task with:
  - Subject and body including the submission details  
  - Task status, priority, and type  
  - Assigned owner and associated company

---

### **4. Loop & HTTP Request – Set Company Domain**
After tasks are created, another loop updates each HubSpot company record with the submitted **domain**.  
This ensures all HubSpot companies have proper website data for future enrichment.

---

### **5. Storing Logs (Google Sheets)**
All processed submissions, responses, errors, and metadata are appended or updated in a **Google Sheets** document.  
This provides a complete audit trail — ideal for debugging, reporting, and performance monitoring.

---

## 🧩 Node Structure Overview

| Step | Node | Description |
|------|------|--------------|
| 1️⃣ | **Jotform Trigger** | Receives form submission data |
| 2️⃣ | **HubSpot Create Company** | Ensures company record exists |
| 3️⃣ | **Formatter / Function Node** | Cleans & structures data, assigns owner, generates task fields |
| 4️⃣ | **Wait / Delay Node** | Controls API call frequency |
| 5️⃣ | **HTTP Request (Create Task)** | Pushes task to HubSpot |
| 6️⃣ | **HTTP Request (Update Domain)** | Updates company domain in HubSpot |
| 7️⃣ | **Google Sheets Node** | Logs inputs, outputs, and status |

---

## 📋 Requirements & Setup

- 🔑 **HubSpot Private App Token** with permissions to create companies, tasks, and update records  
- 🌐 **Jotform Webhook URL** pointing to this workflow  
- 📗 **Google Sheets Credentials** (OAuth or service account) with write access  
- ✅ HubSpot app must have `crm.objects.companies.write` and `crm.objects.tasks.write` scopes  
- ⚠️ Add retry or error-handling branches for failed API calls

---

## ⚙️ Customization Tips & Variations

- **Add contact association:**  
  Modify the payload to also link the task with a HubSpot Contact (via email) so it appears in both company and contact timelines.  

- **Use fallback values:**  
  In the Formatter node, provide defaults like “Unknown Company” or “No query provided.”  

- **Dynamic owner assignment:**  
  Replace hash-based assignment with round-robin or territory logic.  

- **Conditional task creation:**  
  Add logic to only create tasks when certain conditions are met (e.g., budget &gt; 0).  

- **Error branches:**  
  Capture failed HTTP responses and send Slack/Email alerts.  

- **Extended logs:**  
  Add response codes, errors, and retry counts to your Google Sheet for more transparency.

---

## 🎯 Benefits & Why You’d Use This

- ⚡ **Speed & Automation** — eliminate manual data entry into HubSpot  
- 📊 **Data Consistency** — submissions are clean, enriched, and traceable  
- 👀 **Transparency** — every action logged for full visibility  
- 🌍 **Scalability** — handle hundreds of submissions effortlessly  
- 🔄 **Flexibility** — adaptable for other use cases (support tickets, surveys, partnerships, etc.)

---

### ✨ Example Use Case
A marketing form on your website captures partnership or franchise inquiries.  
This workflow instantly creates a HubSpot company, logs the inquiry as a task, assigns it to a regional manager, and saves a record in Google Sheets — all within seconds.

---

**Tags:** `HubSpot` `Jotform` `CRM` `GoogleSheets` `Automation` `LeadManagement`

## 🔗 Nodes Used

Google Sheets, HTTP Request, HubSpot, Jotform Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
