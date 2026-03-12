# 🔒 Analyze CrowdStrike detections - Search for IOCs in VirusTotal - Create a ticket in Jira, and post a message in Slack

> ⚡ **5,804 views** · 🔒 [SecOps & Security Automation](../)

## Description

This n8n workflow automates the handling of security detections from CrowdStrike, streamlining incident response and notification processes. The workflow is triggered daily at midnight by the Schedule Trigger node.

It begins by fetching recent security detections from CrowdStrike using an HTTP Request node. The response is then split into individual detections for further processing. Each detection is enriched by querying the CrowdStrike API for detailed information using another HTTP Request node. The workflow then processes these detections sequentially using the Split In Batches node.

Next, it looks up behavioral information associated with each detection in VirusTotal using two HTTP Request nodes. One node queries VirusTotal based on SHA256 values, and the other based on IOC (Indicator of Compromise) values. The workflow includes a 1-second pause using the Wait node to prevent rate limiting when making requests to the VirusTotal API.

Subsequently, the workflow sets fields with relevant details from both CrowdStrike and VirusTotal, including detection links, confidence scores, filenames, usernames, and more. These details are concatenated using an Item Lists node for each detection. The final step involves creating Jira issues for each detection, including summaries with CrowdStrike alert severity and hostnames, as well as descriptions that incorporate information from CrowdStrike and VirusTotal. Information about this issue is then sent via a Slack message to a Slack user.

Potential issues during setup might include configuring the Schedule Trigger node to trigger at the correct time zone and handling potential rate limiting from the VirusTotal API, which could lead to throttled requests. Additionally, the note about a possible typo in the URL for the Virustotal nodes should be addressed to ensure correct API calls. The Jira node may need to be replaced with the latest version for compatibility. Properly configuring API credentials and handling errors that may occur during API requests are essential for a smooth workflow operation. Careful testing with sample data is recommended to validate the workflow's functionality and ensure it aligns with your organization's security incident response processes.

## 🔗 Nodes Used

HTTP Request, Slack, Jira Software

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
