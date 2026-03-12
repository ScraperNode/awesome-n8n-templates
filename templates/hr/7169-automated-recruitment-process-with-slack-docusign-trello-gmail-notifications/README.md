# 👥 Automated recruitment process with Slack, DocuSign, Trello & Gmail notifications

> ⚡ **211 views** · 👥 [HR & Recruitment](../)

## Description

### How It Works & Setup Guide for the Automated Candidate Management & Feedback System

This guide will walk you through setting up your n8n workflow. By the end, you'll have a fully automated system for managing your recruitment pipeline.

---

### How It Works: The Workflow Explained

This workflow is designed in three logical phases to handle the entire post-interview process automatically.

1.  **Phase 1: Trigger & Feedback Loop**:
    * The workflow **triggers** when an interview ends on your Google Calendar.
    * It immediately sends a **Slack message** to the interviewer with a link to the feedback form.
    * After a 2-hour **wait**, it checks if the feedback has been submitted. If not, it sends a **reminder**.
    * Once feedback is received, it logs the data in **Airtable** and uses an **If node** to determine if the candidate has passed or failed.

2.  **Phase 2: Automated Communication**:
    * Based on the candidate's status, the workflow sends a personalized and professional email using **Gmail**.
    * For candidates who pass, it sends a follow-up invitation. For those who don't, it sends a polite rejection email crafted by a **Code node**.
    * If a candidate is in the final stage and passes, the workflow automatically generates and sends an offer letter for signature via **DocuSign**.

3.  **Phase 3: Onboarding & Reporting**:
    * Once a candidate accepts the offer (by signing the document), the workflow is triggered to create a new task list in **Trello** for the HR team.
    * It sends a personalized welcome email to the new hire and a notification to the team on **Slack**.
    * Finally, a **Cron Trigger** runs every Friday to collect all candidate data, calculate key recruitment metrics, log them in **Google Sheets**, and send a summary report to your team on **Slack**.

---

### Step-by-Step Setup Guide

Follow these steps to configure the workflow in your n8n instance.

### **Step 1: Prerequisites**
Before you begin, ensure you have the following accounts and a workspace set up:
* n8n
* Google Calendar, Google Sheets, Gmail
* Airtable
* Slack
* Trello
* DocuSign

### **Step 2: Database & Form Preparation**
1.  **Airtable:** Create a new Airtable base with two tables:
    * **Candidates Table**: Create columns for `Candidate Name`, `Email`, `Interviewer ID`, `Interview Date`, and `Status`.
    * **Feedback Table**: Create columns for `Candidate Name`, `Overall Score`, and `Comments`.
2.  **Feedback Form:** Create a feedback form (e.g., using Google Forms or Typeform) that collects the candidate's name, the interviewer's name, and a score/comments.

### **Step 3: Import the Workflow**
1.  In your n8n instance, click **"New"** and select **"Import from File"**.
2.  Import the `.json` file you purchased. The entire workflow, with all nodes, will appear on your canvas.

### **Step 4: Configure Credentials**
1.  Click on any node with a red **"!"** icon (e.g., the `Google Calendar Trigger` or `Slack` node).
2.  In the right-hand panel, click **"Create new credential"**.
3.  Follow the on-screen instructions to connect your accounts.
4.  Repeat this process for all nodes that require credentials.

### **Step 5: Node-Specific Configuration**

Now, let's configure the specific details for each node to ensure it works for your company.

1.  **Google Calendar Trigger**:
    * Click on the node and in the `Calendar ID` field, enter the ID of the calendar you use for scheduling interviews.

2.  **Airtable Nodes**:
    * For every Airtable node in the workflow, enter the correct `Base ID` and `Table Name` (`Candidates` or `Feedback`) that you created in Step 2.

3.  **Trello Node**:
    * Enter the `Board ID` and the specific `List ID` where you want new onboarding tasks to be created.

4.  **Gmail Nodes**:
    * Customize the `Subject` and `HTML Body` of the emails to match your company's tone and branding.

5.  **DocuSign Node**:
    * Enter your `Account ID` and the `Template ID` for your offer letter.
    * Ensure your offer letter template includes the `anchorString` (e.g., `/s1/`) that the workflow uses to place the signature tag.

6.  **Environment Variables**:
    * In your n8n settings, go to `Environment Variables` and add the following:
        * `FEEDBACK_FORM_URL`: The URL of your feedback form.
        * `SCHEDULING_LINK`: The URL for candidates to schedule their next interview.
        * `REPORTS_DASHBOARD_URL`: A link to your Google Sheets report or a separate dashboard.

### **Step 6: Final Step - Activating the Workflow**
1.  Once all nodes are configured, click **"Save"** at the top of the canvas.
2.  Click the **"Active"** toggle in the top right corner. The workflow is now live!
3.  **Final Tip:** It's a good practice to test the system once by creating a test interview event on your calendar to ensure all steps run as expected.

## 🔗 Nodes Used

Airtable, Google Sheets, HTTP Request, Slack, Trello, Gmail

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
