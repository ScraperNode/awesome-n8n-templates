# 🔒 Phishing analysis - URLScan.io and VirusTotal

> ⚡ **67,029 views** · 🔒 [SecOps & Security Automation](../)

## Description

This n8n workflow automates the analysis of email messages received in a Microsoft Outlook inbox to identify indicators of compromise (IOCs), specifically suspicious URLs. It can be triggered manually or scheduled to run daily at midnight.

The workflow begins by retrieving up to 100 read email messages from the Outlook inbox. However, there seems to be a configuration issue as it should retrieve unread messages, not read ones. It then marks these messages as read to avoid processing them again in the future.

The messages are then split into individual items using the Split In Batches node for sequential processing. For each email, the workflow analyzes its content to find URLs, which are considered potential IOCs. If URLs are found, the workflow proceeds to check these URLs for potential threats using two services, URLScan.io and VirusTotal, in parallel.

In the first path, URLScan.io scans each URL, and if there are no errors, the results from URLScan.io and VirusTotal are merged. If there are errors, the workflow waits 1 minute before attempting to retrieve the URLScan results again. The loop then continues for the next email. In the second path, VirusTotal is used to scan the URLs, and the results are retrieved.

Finally, the workflow checks if the data field is not empty, filtering out items where no data was found. It then sends a summarized Slack message to report details about the analyzed email, including the subject, sender, date, URLScan report URL, and VirusTotal verdict for URLs that were reported as malicious.

Potential issues during setup include configuring the Outlook node to retrieve unread messages, resolving a configuration issue in the VirusTotal node, and handling authentication and API keys for both URLScan.io and VirusTotal nodes. Additionally, proper error handling and testing with various email content types and URLs are essential to ensure the workflow accurately identifies IOCs and reports them to the Slack channel.

## 🔗 Nodes Used

HTTP Request, Slack, Microsoft Outlook, urlscan.io, Filter

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
