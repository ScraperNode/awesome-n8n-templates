# 🔧 Real-time registration form tracking with Google Sheets and Gmail notifications

> ⚡ **206 views** · 🔧 [Miscellaneous](../)

## Description

---
# Title: Gracewell Automated Registration Tracker Suite

version: 1.0
tags: [education, automation, google-sheets, gmail, dashboard, form-tracking, workflow-suite]

category: Academic Automation

---
# Description: 

-   Automate the real-time tracking of Google Form submissions using Google Sheets and n8n. 
-   This 3-workflow suite includes a live dashboard with submission statistics and two companion workflows 
-   To send acknowledgement and reminder emails to students — all seamlessly connected through n8n webhooks.


# 🚀 Gracewell Automated Registration Tracker Suite

A fully automated, real-time monitoring system for student form submissions — built with **Google Sheets, Gmail, and n8n**.  
The suite provides a live dashboard, auto-generated summary analytics, and instant messaging (email or WhatsApp) capabilities.

---

## 🧩 Workflow Suite Overview

| Workflow | Purpose | Webhook | Output |
|-----------|----------|----------|----------|
| **1️⃣ Live Dashboard** | Displays summary of submissions and includes trigger buttons | `/live-tracking` | HTML Dashboard |
| **2️⃣ Send Acknowledgements** | Sends thank-you emails to completed respondents | `/send-acknowledgements` | HTML Confirmation Page |
| **3️⃣ Send Reminders** | Sends personalized reminders to pending students | `/send-reminders` | HTML Confirmation Page |

---

## 🧠 Who Is This For
- Educators managing student registration or feedback  
- Department coordinators tracking submission completion  
- EdTech and training institutions handling digital enrolments  
- Universities automating exam registration or attendance forms  

---

## ⚙️ Problem It Solves
Manual form tracking is slow, repetitive, and prone to error.  
This workflow suite provides:
✅ Automated reconciliation of student vs. response data  
✅ Instant calculation of pending and completed submissions  
✅ One-click acknowledgement and reminder dispatch  
✅ Web-based dashboard with summary visualization  

---

## 📊 Workflow 1: Live Tracking Dashboard

### Steps
1. **Google Sheets – Student List** → Reads master student sheet  
2. **Google Sheets – Form Responses** → Reads live form entries  
3. **Code Node** → Compares Register Nos. and generates HTML dashboard  
4. **Respond to Webhook** → Displays HTML with summary and control buttons  

### Output
A clean web dashboard showing:
- Total, Submitted, Pending, Completion %
- ✅ Completed list and ⚠️ Pending list  
- Two buttons:
  - **Send Acknowledgements**
  - **Send Reminders**

---

## 💌 Workflow 2: Send Acknowledgements

### Steps
1. **Webhook Trigger** → `/send-acknowledgements`  
2. **Google Sheets – Student List & Form Responses**  
3. **Merge Node** → Combines matching rows  
4. **Code Node** → Generates personalized thank-you emails  
5. **Gmail Node** → Sends messages  
6. **Respond Node** → Displays confirmation message  

### Email Template
&gt; **Subject:** ✅ Thank You for Your Submission  
&gt; **Body:**  
&gt; Dear {{name}},  
&gt; Thank you for completing your form (Reg No: {{reg}}).  
&gt; We appreciate your prompt response.  
&gt; – Gracewell 

---

## ⚠️ Workflow 3: Send Reminders

### Steps
1. **Webhook Trigger** → `/send-reminders`  
2. **Google Sheets – Student List & Form Responses**  
3. **Merge Node** → Aligns both data sets  
4. **Code Node** → Identifies pending students  
5. **Gmail Node** → Sends customized reminder  
6. **Respond Node** → Confirms completion  

### Email Template
&gt; **Subject:** ⚠️ Reminder: Please Complete Your Form  
&gt; **Body:**  
&gt; Dear {{name}},  
&gt; You haven’t yet completed your form (Reg No: {{reg}}).  
&gt; Please complete it at the earliest.  
&gt; – Gracewell 

---

## 🛠️ Setup Instructions

### Step 1 – Connect Accounts
- Connect **Google Sheets** (OAuth2)  
- Connect **Gmail** for sending messages  

### Step 2 – Prepare Sheets
- **Student List Sheet:**  
  Columns → `Register No.`, `Student Name`, `Contact`, `Email`  
- **Form Response Sheet:**  
  Columns → `Timestamp`, `Reg No`, `Email Address`

### Step 3 – Deploy URLs
| Workflow | Webhook Endpoint |
|-----------|------------------|
| Dashboard | `/live-tracking` |
| Acknowledgements | `/send-acknowledgements` |
| Reminders | `/send-reminders` |

---

## 🎨 Optional Customizations
- Add institution name/logo to dashboard HTML  
- Include charts (Chart.js) for submission visualization  
- Auto-refresh every 60 seconds  
- Integrate WhatsApp messaging via Twilio or Gupshup  
- Log emails into a “Mail Logs” sheet  

---

## 🧩 Version Summary

| Workflow | Version | Description |
|-----------|----------|-------------|
| Live Dashboard | v3 | Interactive HTML dashboard with controls |
| Send Acknowledgements | v1 | Personalized thank-you email sender |
| Send Reminders | v1 | Automated reminder email sender |

---
## Need help customizing?
<p>
  <a href="mailto:jgracewell02@gmail.com">
     ✉️ Contact Me
  </a>
  <a href="https://www.linkedin.com/in/jeffin-gracewell-0634007b/" target="_blank">
     💼 LinkedIn
  </a>
</p>

## ✨ Credits
Developed by **Dr. J. Jeffin Gracewell**   
Empowering education through intelligent automation 💡

---

## We are open for and Customizing development

## 🔗 Nodes Used

Google Sheets, Webhook, Gmail

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
