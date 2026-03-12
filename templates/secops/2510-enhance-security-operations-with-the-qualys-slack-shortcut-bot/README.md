# 🔒 Enhance security operations with the Qualys Slack shortcut bot!

> ⚡ **1,299 views** · 🔒 [SecOps & Security Automation](../)

## Description

![n8n](https://uploads.n8n.io/templates/n8n.png)
## Enhance Security Operations with the Qualys Slack Shortcut Bot!

Our **Qualys Slack Shortcut Bot** is strategically designed to facilitate immediate security operations directly from Slack. This powerful tool allows users to initiate vulnerability scans and generate detailed reports through simple Slack interactions, streamlining the process of managing security assessments.

**Workflow Highlights:**
- **Interactive Modals**: Utilizes Slack modals to gather user inputs for scan configurations and report generation, providing a user-friendly interface for complex operations.
- **Dynamic Workflow Execution**: Integrates seamlessly with Qualys to execute vulnerability scans and create reports based on user-specified parameters.
- **Real-Time Feedback**: Offers instant feedback within Slack, updating users about the status of their requests and delivering reports directly through Slack channels.


**Operational Flow:**
- **Parse Webhook Data**: Captures and parses incoming data from Slack to understand user commands accurately.
- **Execute Actions**: Depending on the user's selection, the workflow triggers other sub-workflows like 'Qualys Start Vulnerability Scan' or 'Qualys Create Report' for detailed processing.
- **Respond to Slack**: Ensures that every interaction is acknowledged, maintaining a smooth user experience by managing modal popups and sending appropriate responses.


**Setup Instructions:**
- Verify that Slack and Qualys API integrations are correctly configured for seamless interaction.
- Customize the modal interfaces to align with your organization's operational protocols and security policies.
- Test the workflow to ensure that it responds accurately to Slack commands and that the integration with Qualys is functioning as expected.


**Need Assistance?**
- Explore our [Documentation](https://docs.qualys.com) or get help from the [n8n Community](https://community.n8n.io) for more detailed guidance on setup and customization.

Deploy this bot within your Slack environment to significantly enhance the efficiency and responsiveness of your security operations, enabling proactive management of vulnerabilities and streamlined reporting.

**To handle the actual processing of requests, you will also need to deploy these two subworkflows:**
- [Qualys Start Vulnerability Scan](https://n8n.io/workflows/2511-qualys-vulnerability-trigger-scan-subworkflow/)
- [Qualys Create Report]( Reporthttps://n8n.io/workflows/2512-qualys-scan-slack-report-subworkflow/)

To simplify deployment, use this Slack App manifest to quickly create an app with the correct permissions:

```json
{
    "display_information": {
        "name": "Qualys n8n Bot",
        "description": "n8n Integration for Qualys",
        "background_color": "#2a2b2e"
    },
    "features": {
        "bot_user": {
            "display_name": "Qualys n8n Bot",
            "always_online": false
        },
        "shortcuts": [
            {
                "name": "Scan Report Generator",
                "type": "global",
                "callback_id": "qualys-scan-report",
                "description": "Generate a report from the latest scan to review vulnerabilities and compliance."
            },
            {
                "name": "Launch Qualsys VM Scan",
                "type": "global",
                "callback_id": "trigger-qualys-vmscan",
                "description": "Start a Qualys Vulnerability scan from the comfort of your Slack Workspace"
            }
        ]
    },
    "oauth_config": {
        "scopes": {
            "bot": [
                "commands",
                "channels:join",
                "channels:history",
                "channels:read",
                "chat:write",
                "chat:write.customize",
                "files:read",
                "files:write"
            ]
        }
    },
    "settings": {
        "interactivity": {
            "is_enabled": true,
            "request_url": "Replace everything inside the double quotes with your workflow webhook url, for example: https://n8n.domain.com/webhook/99db3e73-57d8-4107-ab02-5b7e713894ad"",
            "message_menu_options_url": "Replace everything inside the double quotes with your workflow message options webhook url, for example: https://n8n.domain.com/webhook/99db3e73-57d8-4107-ab02-5b7e713894ad""
        },
        "org_deploy_enabled": false,
        "socket_mode_enabled": false,
        "token_rotation_enabled": false
    }
}
```

## 🔗 Nodes Used

HTTP Request, Webhook, Execute Sub-workflow

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
