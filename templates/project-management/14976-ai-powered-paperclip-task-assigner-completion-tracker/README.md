# 📋 AI-Powered Paperclip📎🤖 Task Assigner & Completion Tracker 

> ⚡ **331 views** · 📋 [Project Management](../)

## Description

This workflow automates the **creation, assignment, tracking, and monitoring of tasks** (issues) inside a **Paperclip** system using AI and external integrations.

View this [Youtube Video Tutorial](https://www.youtube.com/watch?v=vdnyiF92qcY) to setup your Paperclip instance for FREE and get API Key (subtitles in English).

---

### ✅ Key Advantages

#### 1. ✅  Full Automation of Task Lifecycle

The workflow handles everything:

* Task intake → assignment → tracking → completion notification
  No manual intervention is required.


#### 2. ✅  AI-Powered Task Assignment

Using an LLM:

* Tasks are assigned intelligently based on context
* Reduces human decision-making errors
* Scales easily with more agents

#### 3. ✅  Centralized Tracking with Google Sheets

* Acts as a lightweight database
* Easy to audit, monitor, and share
* Provides historical tracking of tasks

#### 4. ✅  Real-Time Monitoring & Alerts

* Scheduled checks ensure tasks are constantly monitored
* Instant email notifications when tasks are completed
* Improves responsiveness and visibility


#### 5. ✅  Modular & Scalable Architecture

* Each block (Webhook, AI, API, Sheets, Email) is independent
* Easy to extend (e.g., Slack alerts, dashboards, analytics)
* Can integrate with other systems without redesigning everything


#### 6. ✅  Efficient Resource Utilization

* Batch processing (`Split in Batches`) avoids overload
* Scheduled execution reduces unnecessary API calls

#### 7. ✅ Seamless API Integration

* Connects Paperclip, OpenAI, Google Sheets, and Gmail
* Demonstrates strong interoperability across services

---

### How it works

This workflow automates the assignment and tracking of issues/tasks to AI agents (called "Paperclip agents") and monitors their completion.

**Two main flows:**

1. **Issue creation WF** (triggered via Webhook or Manual):
   - Receives a task with `title` and `issue` via webhook
   - Fetches the company ID from the Paperclip API
   - Retrieves all available Paperclip agents for that company
   - Normalizes agent data (id, name, title)
   - Uses GPT-5-mini to intelligently assign the task to the most appropriate agent
   - Creates a new issue in Paperclip with the assigned agent
   - Logs the issue to a Google Sheet with metadata (date, ID, title, issue, assigned agent)

2. **Completion monitoring WF** (runs every 10 minutes via Schedule Trigger):
   - Fetches all open issues (where COMPLETED column is empty) from Google Sheets
   - Loops through each open issue
   - Checks the current status of each issue in Paperclip API
   - If status is "completed", sends a Gmail alert and updates the COMPLETED column in Sheets with the completion timestamp

---

### Set up steps

1. **API Credentials:**
   - Configure `httpBearerAuth` credentialwith your Paperclip API key
   - Set up `openAiApi` credential
   - Configure `gmailOAuth2` credential for sending completion alerts
   - Set up `googleSheetsOAuth2Api` credential for Sheets access

2. **Google Sheets Setup:**
   - Clone [this Sheet](https://docs.google.com/spreadsheets/d/1MDJ-SAMiRWdfSpXMXOzH2qiipym-8qhX31ymPMdcz8k/edit?usp=sharing)
   - Sheet must contain columns: DATE, TITLE, ISSUE, ASSIGN, ID, COMPLETED
   - Share the sheet with the service account or OAuth account used in credentials

3. **Paperclip API Configuration:**
   - Replace all `https://paperclip.xxx.xxx` URLs with your actual Paperclip instance URL
   - Verify the `/api/agents/me`, `/api/companies/{id}/agents`, and `/api/issues/{id}` endpoints are accessible

4. **Workflow Settings:**
   - Webhook path is auto-generated – copy this for external calls
   - Update the Gmail recipient from `xxx@xxx.xxx ` to your target email address
   - Adjust schedule trigger interval (currently 10 minutes) as needed

5. **Testing:**
   - Activate the workflow
   - Use the Manual Trigger or send a POST request to the webhook URL with payload containing `title` and `issue` fields
   - Monitor execution logs to verify agent assignment and issue creation

---

👉 [Subscribe to my new **YouTube channel**](https://youtube.com/@n3witalia). Here I’ll share videos and Shorts with practical tutorials and **FREE templates for n8n**.

[![image](https://n3wstorage.b-cdn.net/n3witalia/youtube-n8n-cover.jpg)](https://youtube.com/@n3witalia)


---

### **Need help customizing?**  
[Contact me](mailto:info@n3w.it) for consulting and support or add me on [Linkedin](https://www.linkedin.com/in/davideboizza/).

## 🔗 Nodes Used

Google Sheets, HTTP Request, Webhook, Gmail, Schedule Trigger, Basic LLM Chain

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
