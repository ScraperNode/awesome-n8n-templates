# 🔒 Automate free IP analysis: NixGuard AI summaries & Wazuh integration

> ⚡ **1,813 views** · 🔒 [SecOps & Security Automation](../)

## Description

### Supercharge Your Security Operations for Free

Stop wasting time manually investigating suspicious IP addresses. This workflow template is your launchpad to automating real-time IP cybersecurity analysis using the **NixGuard platform**, which you can use for free.

This is the first of a two-part system designed to integrate seamlessly into your existing security stack, especially with **Wazuh**. It calls our main workflow, **[Automate IP Reputation Checks and Get AI Risk Summaries from NixGuard](https://n8n.io/workflows/4693-get-real-time-security-insights-with-nixguard-rag-and-wazuh-integration/)**, to do the heavy lifting.

### What This Workflow Unlocks for You

*   **Free AI-Powered Risk Summaries:** Don't just get data; get answers. NixGuard provides a clear, human-readable summary of why an IP is considered risky.
*   **Automated IP Reputation Checks:** Programmatically check any IP against a vast array of threat intelligence sources.
*   **A Foundation for Your SOC Automation:** Use the results to trigger your incident response process. The template includes a pre-built example of how to send a detailed alert to Slack, which you can easily adapt for Jira, TheHive, or any other tool.

### How the Two-Workflow System Works

This "Dispatcher" workflow is designed for flexibility. It holds your API key and input, then calls the main analysis workflow. This allows you to easily create multiple triggers (e.g., one for Slack bots, one for webhooks) without duplicating the core logic.

### Critical Setup Instructions

1.  **Get the Main Workflow:** First, add the main analysis engine to your n8n instance from the community page: **[NixGuard Analysis Workflow](https://n8n.io/workflows/4693-get-real-time-security-insights-with-nixguard-rag-and-wazuh-integration/)**.
2.  **Add Your Free API Key:** In *this* workflow, click the blue **`Set API Key & Initial Prompt`** node. Paste your free NixGuard API key into the `apiKey` value field.
3.  **Connect The Workflows:** Click the purple **`Execute NixGuard & Wazuh Workflow`** node. In the parameters, use the dropdown to select the main analysis workflow you added in Step 1.

---
Ready to automate your threat intelligence? Get your free API key and learn more at;
🔗 **Learn more about NixGuard:** [thenex.world](thenex.world
)🔗 **Get started with a free security subscription:** [thenex.world/security/subscribe](thenex.world/security/subscribe)

**Tags:**
`Free`, `IP Analysis`, `NixGuard`, `Wazuh`, `Security`, `Automation`, `AI`, `Cybersecurity`, `Threat Intelligence`, `SOC`, `Incident Response`, `IP Reputation`, `DevSecOps`, `API`

## 🔗 Nodes Used

Slack, Webhook, Execute Sub-workflow

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
