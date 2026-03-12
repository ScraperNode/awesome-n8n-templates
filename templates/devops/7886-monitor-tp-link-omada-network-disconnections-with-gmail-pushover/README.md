# ⚙️ Monitor TP-Link Omada network disconnections with Gmail & Pushover

> ⚡ **325 views** · ⚙️ [DevOps & CI/CD](../)

## Description

# Monitor device disconnections from Omada emails to Google Sheets with Pushover alerts

## Who’s it for
This workflow is designed for IT admins, network engineers, or small business owners who need to automatically monitor device connectivity from Omada Controller email alerts. If you want a lightweight, low-cost solution for tracking device uptime without complex monitoring software, this template is for you.

## How it works
The workflow listens for Omada Controller email alerts using Gmail, parses each email, and logs device connection status (connected/disconnected) into Google Sheets. Every 5 minutes, it checks for devices that have been disconnected for more than 30 minutes. If a device has not reconnected, the workflow sends a push notification via Pushover. Old logs are cleared automatically every 2 days to keep the sheet clean.

---

## Workflow Overview
The workflow is broken into three main parts:

### 1. Email Processing (Receives Alert -&gt; Append Row in Sheet)  
Triggered whenever a new email is received. It uses a Code node to parse the raw text of the email, extracting details like device name, MAC address, and connection status. This data is formatted and appended as a new row to Google Sheets, creating a comprehensive log of all connection events.  


**Important:** In the Gmail trigger node, make sure to set the search field or filter so that it only matches the subject line used by Omada Controller alert emails. This ensures the workflow only processes the intended alerts and not unrelated emails.

### 2. Disconnected Device Alerting (Check Every 5 minutes -&gt; Alert User)  
Runs every 5 minutes. It reads the device log from Google Sheets, identifies the most recent status for each device, and filters for devices currently disconnected. If a device has been disconnected for more than 30 minutes, a high-priority push notification is sent to **Pushover account**. Once sent, the workflow updates the corresponding row in the Google Sheet to prevent duplicate alerts.

### 3. Data Maintenance (Clear Rows Every 2 days -&gt; Clear sheet)  
Runs every two days to clean up the Google Sheet by deleting the oldest rows, keeping the log from growing too large.

---

## Services and Dependencies
To run this workflow, you’ll need the following services connected to n8n:

- **Google Sheets**: Logs all connection events and tracks device status  
- **Gmail**: Acts as the trigger, listening for Omada Controller alerts  
- **Pushover**: Sends real-time, high-priority push notifications to mobile devices  

---

## Setup Instructions

### 1. Create a Google Sheet Log
- Create a new Google Sheet in your Google Drive  
- Name it something like `Omada Device Log`  
- Add these headers in the first row:  

**exact spelling and order is crucial**
`rowId`, `timestamp`, `timestampISO`, `category`, `severity`, `mac`, `name`, `type`, `status`, `checkAfter`, `alertSent`, `timeStampFormated`

### 2. Configure Credentials
- **Google Sheets**: Create a new OAuth2 credential in n8n  
- **Gmail**: Create a new OAuth2 credential (must receive Omada alerts)  
- **Pushover**: Create a new API credential and get user keys for each recipient  

### 3. Import the Workflow
- Copy the JSON workflow file  
- In n8n: click **New → Import from JSON**  
- Paste the JSON code  

### 4. Update the Nodes
- **Receives Alert**: Link it to your Gmail credential  
- **Append Row in Sheet, Get Row(s) in Sheet, Update Alert, Clear sheet**: Replace `YOUR_GOOGLE_SHEET_ID` with your Google Sheet’s ID (found in the sheet URL between `/d/` and `/edit`)  
- **Alert User**: Replace `YOUR_PUSHOVER_USER_KEY` with your Pushover user keys  

---

## Node Breakdown
- **Receives Alert** (Gmail Trigger): Listens for new emails  
- **Process Email and Extract** (Code): Parses email and extracts structured data (timestamps, device info, status)  
- **Append Row in Sheet** (Google Sheets): Adds a new row to your log  
- **Check Every 5 minutes** (Schedule Trigger): Runs regularly to check device status  
- **Get Row(s) in Sheet** (Google Sheets): Reads log to get latest status per device  
- **Check Device and Notify** (Code): Groups rows by MAC, filters disconnected devices past 30 minutes  
- **Alert User** (Pushover): Sends formatted push notification with device details  
- **Update Alert** (Google Sheets): Marks the row as alerted to prevent duplicates  
- **Clear Rows Every 2 days** (Schedule Trigger): Runs maintenance  
- **Clear sheet** (Google Sheets): Deletes old rows, preserves header

## 🔗 Nodes Used

Google Sheets, Pushover, Gmail Trigger, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
