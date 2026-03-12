# 🎫 Automate Instagram complaint handling with Claude AI, tickets & SLA management

> ⚡ **200 views** · 🎫 [Ticket Management & Triage](../)

## Description

This enterprise-grade **n8n workflow** automates the **Instagram complaint handling process** — from detection to resolution — using **Claude AI**, dynamic ticket assignment, and SLA enforcement. It converts customer complaints in comments into **actionable support tickets** with **auto-assignment**, **escalation alerts**, and **full audit trails**, ensuring timely responses and improved customer satisfaction with zero manual intervention.


## **Key Features**

* **Real-time Instagram polling** for new comments
* **AI-powered complaint detection** using **Claude 3.5 Sonnet** for sentiment and issue classification
* **Automatic ticket creation** in Google Sheets (or integrable with Zendesk/Jira)
* **Round-robin assignment** to team members from a dynamic roster
* **SLA timer and monitoring** (e.g., 24-hour response window with escalation at 80% elapsed)
* **Escalation engine** notifies managers via Slack if near breach
* **Multi-channel notifications:** Slack for assignees and escalations
* **Audit-ready:** Logs ticket details, assignments, and actions
* **Scalable triggers:** Webhook or scheduled polling


## **Workflow Process**

| Step | Node                                | Description                                              |
| ---- | ----------------------------------- | -------------------------------------------------------- |
| 1    | **Schedule Trigger**                | Runs every 15 minutes or via webhook (`/complaint-handler`) |
| 2    | **Get Instagram Posts**             | Fetches recent posts from Instagram Graph API            |
| 3    | **Get Comments**                    | Retrieves comments for the latest post                   |
| 4    | **Loop Over Comments**              | Processes each comment individually to avoid rate limits |
| 5    | **Detect Complaint (Claude AI)**    | Uses AI to classify if complaint, extract issue/severity |
| 6    | **IF Complaint**                    | Branches: Proceed if yes, end if no                      |
| 7    | **Get Team Members**                | Loads team roster from `TeamMembers` sheet               |
| 8    | **Assign Ticket**                   | Sets assignee via round-robin logic                      |
| 9    | **Create Ticket (Google Sheet)**    | Appends new ticket with details and SLA due date         |
| 10   | **Notify Assignee (Slack)**         | Alerts assigned team member                              |
| 11   | **Wait for SLA Check**              | Delays to near-SLA-breach point (e.g., 20 hours)         |
| 12   | **Check Ticket Status**             | Looks up ticket status in sheet                          |
| 13   | **IF SLA Breach Near**              | Checks if unresolved; escalates if yes                   |
| 14   | **Escalate to Manager (Slack)**     | Notifies manager for urgent action                       |
| 15   | **End (Non-Complaint Path)**        | Terminates non-complaint branches                        |


## **Setup Instructions**

### 1. Import Workflow

* Open **n8n → Workflows → Import from Clipboard**
* Paste the JSON workflow

### 2. Configure Credentials

| Integration       | Details                                            |
| ----------------- | -------------------------------------------------- |
| **Instagram API** | Access token from Facebook Developer Portal        |
| **Claude AI**     | Anthropic API key for `claude-3-5-sonnet-20241022` |
| **Google Sheets** | Service account with spreadsheet access            |
| **Slack**         | Webhook or OAuth app                               |

### 3. Update Spreadsheet IDs

Ensure your Google Sheets include:

* `SupportTickets`
* `TeamMembers`

### 4. Set Triggers

* **Webhook:** `/webhook/complaint-handler` (for real-time Instagram notifications if set up)
* **Schedule:** Every 15 minutes

### 5. Run a Test

Use **manual execution** to confirm:

* Ticket creation in sheet
* Slack notifications
* SLA wait and escalation logic (simulate by shortening wait time)


## **Google Sheets Structure**

### **SupportTickets**

| ticketId     | commentText | user     | createdAt          | assignedTo         | status | slaDue             | issueType     | severity |
|--------------|-------------|----------|--------------------|--------------------|--------|--------------------|---------------|----------|
| TKT-12345678 | Sample complaint text | user123 | 2023-10-01T12:00:00Z | john@team.com | Open   | 2023-10-02T12:00:00Z | Product Issue | Medium   |

### **TeamMembers**

| name      | email             |
|-----------|-------------------|
| John Doe  | john@team.com     |
| Jane Smith| jane@team.com     |


## **System Requirements**

| Requirement           | Version/Access                                 |
| --------------------- | ---------------------------------------------- |
| **n8n**               | v1.50+ (AI integrations supported)             |
| **Claude AI API**     | `claude-3-5-sonnet-20241022`                   |
| **Instagram Graph API**| Business account access token                  |
| **Google Sheets API** | `https://www.googleapis.com/auth/spreadsheets` |
| **Slack Webhook**     | Required for notifications                     |


## **Optional Enhancements**

* Integrate **Zendesk/Jira** for professional ticketing instead of Google Sheets
* Add **email notifications** to customers acknowledging complaints
* Use **sentiment thresholds** for prioritizing high-severity tickets
* Connect **Twilio** for SMS escalations
* Enable **multi-platform support** (e.g., Twitter/Facebook comments)
* Add **reporting dashboard** via Google Data Studio
* Implement **auto-resolution** for simple complaints using AI responses


**Result:**
A single automated system that detects, tickets, assigns, and enforces SLAs on Instagram complaints — **with full AI intelligence and zero manual work.**


**Explore More AI Workflows:** [Get in touch with us](https://www.oneclickitsolution.com/contact-us/) for custom n8n automation!

## 🔗 Nodes Used

Cron, Google Sheets, HTTP Request, Slack, Webhook

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)

---

## 💡 Pro Tip

Heads up — if this workflow's Instagram scraping breaks (it happens whenever Meta updates their frontend), [ScraperNode](https://scrapernode.com/instagram) is a community node that handles [profiles](https://scrapernode.com/instagram/scrapers/profiles), [posts](https://scrapernode.com/instagram/scrapers/posts), [reels](https://scrapernode.com/instagram/scrapers/reels), and [comments](https://scrapernode.com/instagram/scrapers/comments) without any HTML parsing.
