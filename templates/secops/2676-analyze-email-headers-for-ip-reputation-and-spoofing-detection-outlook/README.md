# 🔒 Analyze email headers for IP reputation and spoofing detection - Outlook

> ⚡ **5,361 views** · 🔒 [SecOps & Security Automation](../)

## Description

### **Analyze Emails for Security Insights**

#### **Who is this for?**

This workflow is ideal for security teams, IT Ops professionals, and managed service providers (MSPs) responsible for monitoring and validating email traffic. It’s especially useful for organizations that need to identify potential phishing attempts, spam, or compromised accounts by analyzing email headers and IP reputation.

---

#### **What problem is this workflow solving?**

This workflow helps identify malicious or suspicious emails by verifying email authentication headers (SPF, DKIM, DMARC) and analyzing the reputation of the originating IP address. By automating these checks, it reduces manual analysis time and flags potential threats efficiently.

---

#### **What this workflow does**

- **Email Monitoring:** Polls a specified Microsoft Outlook folder for new emails in real-time.
- **Header Analysis:** Retrieves and processes email headers to extract critical information such as authentication results and the sender’s IP address.
- **IP Reputation Check:** Leverages external APIs (IP Quality Score and IP-API) to analyze the originating IP for potential spam or malicious activity.
- **Authentication Validation:** Validates SPF, DKIM, and DMARC headers, determining if the email passes industry-standard authentication protocols.
- **Data Aggregation and Reporting:** Combines all analyzed data into a unified format, ready for reporting or integration into downstream systems.
- **Webhook Integration:** Outputs the findings via a webhook, enabling integration with alerting tools or security information and event management (SIEM) platforms.

---

#### **Setup**

1. **Connect to Outlook:**
   - Configure the Microsoft Outlook trigger node with valid OAuth2 credentials.
   - Specify the email folder to monitor for new messages.

2. **API Keys (Optional):**
   - Obtain an API key for IP Quality Score (https://ipqualityscore.com).
   - Ensure the IP-API endpoint is accessible.
   - This step is optional as ipqualityscore.com will provide a limited number of free lookups each month. [See more details here](https://www.ipqualityscore.com/plans).  

3. **Webhook Configuration:**
   - Set up a webhook endpoint to receive the output of the workflow.

4. **Optional Adjustments:**
   - Customize polling intervals in the trigger node.
   - Modify header filters or extend the validation logic as needed.

---

#### **How to customize this workflow to your needs**

- **Add Alerts:** Use the `Respond to Webhook` node to trigger notifications in Slack, email, or any other communication channel.
- **Integrate with SIEM:** Forward the workflow output to SIEM tools like Splunk or ELK Stack for further analysis.
- **Modify Validation Rules:** Update SPF, DKIM, or DMARC logic in the `Set` nodes to align with your organization’s security policies.
- **Expand IP Analysis:** Add more APIs or services to enrich IP reputation data, such as VirusTotal or AbuseIPDB.

---

This workflow provides a robust foundation for email security monitoring and can be tailored to fit your organization's unique requirements. With its modular design and integration options, it’s a versatile tool to enhance your cybersecurity operations.

## 🔗 Nodes Used

HTTP Request, Webhook, Microsoft Outlook Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
