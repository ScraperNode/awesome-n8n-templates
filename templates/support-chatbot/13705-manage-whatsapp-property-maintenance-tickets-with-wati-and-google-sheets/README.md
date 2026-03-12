# 💬 Manage WhatsApp property maintenance tickets with WATI and Google Sheets

> ⚡ **3 views** · 💬 [Support Chatbots](../)

## Description

Empower your property management with a high-efficiency automated support desk. This workflow manages the complete maintenance lifecycle—from initial issue classification and ticket creation to team assignment, status updates, and tenant feedback—all centralized through WhatsApp using WATI and Google Sheets.

---

## 🎯 What This Workflow Does

Turns WhatsApp into an intelligent bridge between tenants, maintenance teams, and landlords:

- 📝 **Instant Ticket Creation**  
  Tenants can report any property issue via WhatsApp. The system automatically classifies the problem (Plumbing, Electrical, etc.) and assigns a priority level based on keywords.

- 🚦 **Smart Command Routing**  
  A master switch node handles incoming messages based on intent:
  - **New Issue:** Classifies and logs a new ticket.
  - **update &lt;id&gt; &lt;status&gt;:** Allows maintenance teams to update progress.
  - **rate &lt;id&gt; &lt;1-5&gt;:** Captures tenant satisfaction scores.
  - **mystatus:** Provides tenants a view of their active tickets.
  - **dashboard:** Gives landlords an overview of property health.

- 🛠️ **Maintenance Coordination**  
  Simultaneously notifies the tenant of their Ticket ID and pings the relevant maintenance team with full issue details and an SLA deadline.

- 🚨 **Proactive SLA Monitoring**  
  A daily morning trigger scans all open tickets for SLA breaches (e.g., High Priority overdue after 4 hours) and alerts the landlord and teams for immediate action.

---

## ✨ Key Features

- **Keyword Intelligence:** Uses built-in logic to detect urgent issues like "leak" or "no power" and auto-flags them as High Priority.
- **Team Mapping:** Automatically routes requests to specific teams (Plumbing, Electrical, Structural) based on the detected category.
- **Service Rating Loop:** Automatically prompts tenants for a 1-5 star rating once a ticket is marked "resolved," logging feedback directly for the landlord.
- **Property Dashboard:** Landlords receive a visual summary including total open tickets, average ratings, and category breakdowns.
- **Audit Trail:** Every status change and team note is timestamped and saved in the `lastUpdated` column in Google Sheets.

---

## 💼 Perfect For

- **Property Managers:** Handling requests for multiple buildings without a manual call center.
- **Landlords:** Keeping a transparent, timestamped record of all repairs and contractor performance.
- **Facility Management Firms:** Coordinating various specialized technical teams across different sites.
- **Co-living Spaces:** Providing a modern, mobile-first support experience for young professional tenants.

---

## 🔧 What You'll Need

### Required Integrations

- **WATI** – To receive tenant issues and send status updates to all parties.
- **Google Sheets** – To act as your centralized ticket database and landlord dashboard.

### Optional Customizations

- **Photo Evidence:** Add a node to allow tenants to upload photos of the damage to be saved in a Google Drive folder.
- **AI Summarization:** Integrate OpenAI to summarize long tenant descriptions for quicker team review.

---

## 🚀 Quick Start

1. **Import Template** – Copy the JSON and import it into your n8n instance.
2. **Set Credentials** – Connect your WATI and Google Sheets accounts.
3. **Configure Teams** – Edit the `teamMap` in the Classify Issue node to include your contractors' actual WhatsApp numbers.
4. **Configure Sheets** – Ensure your Google Sheet has a **Tickets** tab with headers:

   `ticketId`, `phone`, `tenantName`, `issueText`, `category`, `priority`, `status`, `assignedTeam`, `teamPhone`, `createdAt`, `slaDueAt`, `rating`, `lastUpdated`, `notes`

5. **Test the Loop** – Send `"My sink is leaking"` to your WATI number, then use a team number to reply `update &lt;ID&gt; in-progress`.

---

## 📈 Expected Results

- Zero manual routing: Issues reach the right technician without administrative intervention.
- Improved transparency: Tenants are never "left in the dark" about the status of their repairs.
- Data-driven management: Identify recurring structural issues and underperforming teams via the dashboard.
- Accountability: SLA breach alerts ensure no emergency ticket is forgotten.

---

Ready to simplify your property management? Import this template and connect your Google Sheets to start tracking maintenance requests today!

## 🔗 Nodes Used

Google Sheets, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
