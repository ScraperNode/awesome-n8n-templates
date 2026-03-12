# 🔒 Suspicious login detection

> ⚡ **7,242 views** · 🔒 [SecOps & Security Automation](../)

## Description

This n8n workflow is designed for security monitoring and incident response when suspicious login events are detected. It can be initiated either manually from within the n8n UI for testing or automatically triggered by a webhook when a new login event occurs.

The workflow first extracts relevant data from the incoming webhook payload, including the IP address, user agent, timestamp, URL, and user ID. It then splits into three parallel processing paths.

In the first path, it queries GreyNoise's Community API to retrieve information about the investigated IP address. Depending on the classification and trust level received from GreyNoise, the alert is given a High, Medium, or Low priority. This priority is assigned based on the best practices documentation from GreyNoise on how to apply their data to analysis. Once a priority is assigned, a message is sent to a Slack channel to notify users about the alert.

The second path involves fetching geolocation data about the IP address using IP-API's Geolocation API and merging it with data from the UserParser node. This data is then combined with the data obtained from GreyNoise.

In the third path, the UserParser node queries the Userparser IP address and user agent lookup API to obtain information about the user's IP and user agent. This data is merged with the IP-API data and GreyNoise data.

The workflow then checks if the IP address is considered an unknown threat by examining both the noise and riot fields from GreyNoise. If it is considered an unknown threat, the workflow proceeds to retrieve the last 10 login records for the same user from a Postgres database.

If there are any discrepancies in the login information, indicating a new location or device/browser, the user is informed via email.

Potential issues when setting up this workflow include ensuring that credentials are correctly entered for GreyNoise and UserParser nodes, and addressing any discrepancies in the data sources that could lead to false positives or negatives in threat detection. Additionally, the usage of hardcoded API keys should be replaced with credentials for security and flexibility. Thorough testing and validation with sample data are crucial to ensure the workflow performs as expected and aligns with security incident response procedures.

## 🔗 Nodes Used

HTTP Request, Postgres, Slack, Webhook, Gmail

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
