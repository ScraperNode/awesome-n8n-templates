# 🔒 AI-powered domain & IP security check automation

> ⚡ **1,363 views** · 🔒 [SecOps & Security Automation](../)

## Description

![AI5.png](fileId:2001)![AI4.png](fileId:2002)

**Description**

This workflow is designed to automate the security reputation check of domains and IP addresses using multiple APIs such as VirusTotal, AbuseIPDB, and Google DNS. It assesses potential threats including malicious and suspicious scores, as well as email security configurations (SPF, DKIM, DMARC). The analysis results are processed by AI to produce a concise assessment, then automatically updated into Google Sheets for documentation and follow-up.

**How It Works**
1. Automatic Trigger – The workflow runs periodically via a Schedule Trigger.

2. Data Retrieval – Fetches a list of domains from Google Sheets with status "To do".

3. Domain Analysis – Uses VirusTotal API to get the domain report, perform a rescan, and check IP resolutions.

4. IP Analysis – Checks IP reputation using AbuseIPDB.

5. Email Security Validation – Verifies SPF, DKIM, and DMARC configurations via Google DNS.

6. AI Assessment – Analysis data is processed by AI to produce a short summary in Indonesian.

7. Data Update – The results are automatically updated to Google Sheets, changing the status to "Done" or adding notes if potential threats are found.

**How to Setup**

1. Prepare API Keys
- Sign up and obtain API keys from VirusTotal and AbuseIPDB.
- Set up access to Google Sheets API.

2. Configure Credentials in n8n
- Add VirusTotal API, AbuseIPDB API, and Google Sheets OAuth credentials in n8n.

3. Prepare Google Sheets
- Create a sheet with columns No, Domain, Customer, Keterangan, Status.
- Ensure initial data has the status "To do".

4. Import Workflow
- Upload the workflow JSON file into n8n.

5. Set Schedule Trigger
- Define the checking interval as needed (e.g., every 1 hour).

6. Test Run
- Run the workflow manually to ensure all API connections and Google Sheets output work properly.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Schedule Trigger, AI Agent, Simple Memory, OpenRouter Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
