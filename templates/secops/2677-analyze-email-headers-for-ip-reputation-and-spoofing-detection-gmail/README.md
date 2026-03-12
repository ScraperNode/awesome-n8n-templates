# 🔒 Analyze email headers for IP reputation and spoofing detection - Gmail

> ⚡ **18,735 views** · 🔒 [SecOps & Security Automation](../)

## Description

# Analyze Emails for Security Insights

## Who is this for?

This workflow is ideal for IT professionals, security analysts, and organizations looking to enhance their email security practices. It is particularly useful for those who need to analyze Gmail email headers for IP tracking, spoofing detection, and sender reputation assessment. 

## What problem is this workflow solving?

Email spoofing and phishing attacks are significant cybersecurity threats. By analyzing email headers, this workflow provides detailed insights into the email's origin, authentication status, and the reputation of the sending IP address. It helps detect potential spoofing attempts and assess the trustworthiness of incoming emails.

## What this workflow does

This n8n workflow automates the process of analyzing email headers received in Gmail. It performs the following key functions:

1. **Triggering and Email Header Extraction:** It monitors Gmail inboxes for new emails and extracts their headers for analysis.
2. **Authentication Analysis:** It validates SPF, DKIM, and DMARC authentication results to ensure the email adheres to industry-standard security protocols.
3. **IP Analysis:** The workflow extracts the originating IP address and evaluates its reputation and geographic details using external APIs.
4. **Reputation Scoring:** It integrates with IP Quality Score to detect spam activity and assess the sender's reputation.
5. **Consolidation and Webhook Response:** All results are aggregated into a single JSON response, making it easy to integrate with third-party platforms or tools for further automation.

## Setup

1. **Authenticate Gmail:** Configure the `Gmail Trigger` node with your Gmail account credentials.
2. **API Keys (Optional):**
   - Obtain an API key for IP Quality Score (https://ipqualityscore.com).
   - Ensure the IP-API endpoint is accessible.
   - This step is optional as ipqualityscore.com will provide a limited number of free lookups each month. [See more details here](https://www.ipqualityscore.com/plans).  
3. **Activate the Workflow:** Ensure the workflow is active to process incoming emails in real-time.

## How to customize this workflow to your needs

- **Add Alerts:** Use the `Gmail - Respond to Webhook` node to trigger notifications in Slack, email, or any other communication channel.
- **Integrate with SIEM:** Forward the workflow output to SIEM tools like Splunk or ELK Stack for further analysis.
- **Modify Validation Rules:** Update SPF, DKIM, or DMARC logic in the `Set` nodes to align with your organization’s security policies.
- **Expand IP Analysis:** Add more APIs or services to enrich IP reputation data, such as VirusTotal or AbuseIPDB.

---

This workflow provides a robust foundation for email security monitoring and can be tailored to fit your organization's unique requirements. With its modular design and integration options, it’s a versatile tool to enhance your cybersecurity operations.

## 🔗 Nodes Used

HTTP Request, Webhook, Gmail Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
