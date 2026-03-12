# ⚙️ Check VPS resource usage every 15 minutes

> ⚡ **5,384 views** · ⚙️ [DevOps & CI/CD](../)

## Description

This n8n workflow template is designed to help system administrators and DevOps professionals monitor key resource usage metrics — CPU, RAM, and Disk — on a VPS (Virtual Private Server). The workflow automatically checks these resources every 15 minutes and sends an email alert if any resource usage exceeds the 80% threshold. This proactive monitoring helps maintain optimal server performance and prevents resource-related downtimes.

# Who This Workflow Is For

• **System Administrators** managing Linux-based servers who need to ensure their systems are running smoothly without manual monitoring.
• **DevOps Professionals** who manage multiple environments and need automated tools to alert them to potential issues before they affect operations.
 • **IT Support Teams** who require an easy way to keep tabs on server health across an organization’s infrastructure.


# How It Works
1. **Schedule Trigger**: The workflow is triggered every 15 minutes by a Cron node.
2. **Resource Checks**: Separate SSH Command nodes are configured to execute specific commands that check the current usage of RAM, Disk, and CPU.
3. **Data Aggregation**: The results from each check are merged using a Merge node, which combines the data into a single payload for analysis.
4. **Threshold Analysis**: A Function node evaluates whether any resource’s usage exceeds the predefined 80% threshold.
5. **Alerts**: If any metric exceeds the threshold, an email alert is sent through an Email node, ensuring that administrators can react promptly to potential issues.

# Setup Steps
1. **Configure SSH Nodes**: Update each SSH node with the appropriate credentials and target server details where the resource checks will be performed.
2. **Set Thresholds**: If different sensitivity levels are required, review and adjust the resource usage thresholds within the Function node.
3. **Email Configuration**: Enter the correct email addresses in the Email node for where alerts should be sent. Ensure that your email-sending credentials and server details are correctly configured.

## 🔗 Nodes Used

Send Email, SSH, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
