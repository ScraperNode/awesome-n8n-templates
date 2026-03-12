# 🔒 New TheHive case Slack notification bot

> ⚡ **694 views** · 🔒 [SecOps & Security Automation](../)

## Description

![theHive](https://uploads.n8n.io/templates/thehive.png)
# Streamline Case Management in TheHive via Slack!

## Our **TheHive Slack Integration** empowers SOC analysts by allowing them to efficiently manage and update case attributes directly within Slack, reducing the need to switch contexts and enhancing response time.


**Key Features:**
- **Direct Case Management**: Modify case details such as assignee, severity, status, and more through intuitive form inputs embedded within Slack messages.
- **Seamless Integration**: Assumes matching email addresses between TheHive and Slack users for straightforward assignee updates. Note: Ensure email consistency to avoid assignment errors.
- **Instant Case Actions**: Quickly close cases as false positives or adjust threat levels with minimal clicks, directly impacting case status in TheHive and reflecting updates immediately in Slack.
- **Task Management**: Add tasks to cases through a user-friendly modal popup, fostering better task tracking and delegation within your team.


**Operational Benefits:**
- **Efficiency**: Enables analysts to perform multiple case actions without leaving Slack, streamlining workflows and saving valuable time.
- **Accuracy**: Reduces the chances of human error by providing a controlled interface for case updates.
- **Agility**: Enhances the SOC team's agility by providing tools for rapid response and case management, crucial for effective security operations.


**Setup Tips:**
- Verify that all SOC team members have matching email IDs in TheHive and Slack.
- Familiarize your team with the Slack form inputs and ensure they understand the importance of accurate data entry.
- Regularly review and update the integration settings to accommodate any changes in your security operations protocols.


**Need Help?**
- For detailed setup instructions or troubleshooting, refer to our [Integration Guide](https://docs.thehive-project.org) or reach out on our [Support Forum](https://community.thehive-project.org).


Leverage this integration to maximize your SOC team's efficiency and responsiveness, ensuring that case management is as streamlined and effective as possible.

## 🔗 Nodes Used

HTTP Request, Slack, Webhook, TheHive 5, TheHive 5 Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
