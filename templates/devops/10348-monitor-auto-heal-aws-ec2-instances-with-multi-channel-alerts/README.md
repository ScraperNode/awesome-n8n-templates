# ⚙️ Monitor & auto-heal AWS EC2 instances with multi-channel alerts

> ⚡ **140 views** · ⚙️ [DevOps & CI/CD](../)

## Description

This n8n workflow automates the monitoring, health assessment, and self-healing of AWS EC2 instances in production environments. It runs periodic checks, identifies unhealthy instances based on status and metrics, restarts them automatically, and notifies teams via multi-channel alerts while logging data for auditing and reporting.

### Key Features
- Triggers health checks every 5 minutes to proactively monitor EC2 fleet status.
- Fetches and loops through all production EC2 instances for individualized analysis.
- Evaluates instance health using AWS metrics and custom thresholds to detect issues like high CPU or stopped states.
- Performs automatic restarts on unhealthy instances to minimize downtime.
- Sends instant WhatsApp notifications for urgent alerts, detailed email reports for team review, and logs metrics to Google Sheets for long-term tracking.
- Includes sticky notes for quick reference on configuration, self-healing logic, and alert setup.

### Workflow Process
- The **Schedule Trigger** node runs the workflow every 5 minutes, ensuring frequent health monitoring without overwhelming AWS APIs.
- The **Get EC2 Instances** node fetches all production-tagged EC2 instances from AWS, filtering by environment (e.g., tag: Environment=Production).
- The **Loop Over Instances** node iterates through each fetched instance individually, allowing parallel processing for scalability.
- The **Check Instance Status** node retrieves detailed health metrics for the current instance via AWS API (e.g., status checks, CPU utilization, and state).
- The **Health Status Check** node evaluates the instance's status against predefined thresholds (e.g., failed system checks or high load); if healthy, it skips to logging.
- The **Analyze Health Data** node assesses metrics in depth to determine action (e.g., restart if CPU &gt; 90% for 5+ minutes) and prepares alert payloads.
- The **Restart Instance** node automatically initiates a reboot on unhealthy instances using AWS EC2 API, with optional dry-run mode for testing.
- The **WhatsApp Notification** node (part of Multi-Channel Alerts) sends instant alerts via Twilio WhatsApp API, including instance ID, issue summary, and restart status.
- The **Email Report** node generates and sends a detailed HTML report to the team via SMTP, summarizing checked instances, actions taken, and metrics trends.
- The **Google Sheets Logging** node appends health data, timestamps, and outcomes to a specified spreadsheet for historical analysis and dashboards.
- The **Sticky Notes** nodes provide inline documentation: one for AWS credential setup, one explaining self-healing thresholds, and one for alert channel configurations.

### Setup Instructions
- Import the workflow into n8n and activate the **Schedule Trigger** with a 5-minute cron expression (e.g., `*/5 * * * *`).
- Configure AWS credentials in the **Get EC2 Instances**, **Check Instance Status**, and **Restart Instance** nodes using IAM roles with EC2 read/restart permissions.
- Set up Twilio credentials in the **WhatsApp Notification** node, including your Twilio SID, auth token, and WhatsApp-enabled phone numbers for sender/receiver.
- Add SMTP credentials (e.g., Gmail or AWS SES) in the **Email Report** node, and update sender/receiver email addresses in the node parameters.
- Link Google Sheets in the **Google Sheets Logging** node by providing the spreadsheet ID, sheet name, and OAuth credentials for write access.
- Customize health thresholds in **Health Status Check** and **Analyze Health Data** (e.g., via expressions for CPU/memory limits).
- Test the workflow by manually executing it on a small set of instances and verifying alerts/logging before enabling production scheduling.
- Review sticky notes within n8n for quick tips, and monitor executions in the dashboard to fine-tune intervals or error handling.

### Prerequisites
- AWS account with EC2 access and IAM user/role for DescribeInstances, DescribeInstanceStatus, and RebootInstances actions.
- Twilio account with WhatsApp sandbox or approved number for notifications.
- SMTP email service (e.g., Gmail, Outlook) with app-specific passwords enabled.
- Google Workspace or personal Google account for Sheets integration.
- n8n instance with AWS, Twilio, SMTP, and Google Sheets nodes installed (cloud or self-hosted).
- Production EC2 instances tagged consistently (e.g., Environment=Production) for filtering.

### Modification Options
- Adjust the **Schedule Trigger** interval to hourly for less frequent checks or integrate with AWS CloudWatch Events for dynamic triggering.
- Expand **Analyze Health Data** to include advanced metrics (e.g., disk I/O via CloudWatch) or ML-based anomaly detection.
- Add more alert channels in **Multi-Channel Alerts**, such as Slack webhooks or PagerDuty integrations, by duplicating the WhatsApp/Email branches.
- Enhance **Google Sheets Logging** with charts or conditional formatting via Google Apps Script for visual dashboards.
- Implement approval gates in **Restart Instance** (e.g., via email confirmation) to prevent auto-restarts in sensitive environments.



**Explore More AI Workflows: [Get in touch with us](https://www.oneclickitsolution.com/contact-us/) for custom n8n automation!**

## 🔗 Nodes Used

Send Email, Google Sheets, HTTP Request, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
