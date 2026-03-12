# ⚙️ Analyze mobile app build-time hotspots with Gradle, CocoaPods, Airtable, GitHub, Gmail and GPT-4.1-mini

> ⚡ **31 views** · ⚙️ [DevOps & CI/CD](../)

## Description

# Mobile App Build Time Hotspot Tracker - Gradle/CocoaPods Analyzer Alerting

This workflow automates the monitoring and analysis of CI/CD build performance for mobile projects using Gradle and CocoaPods. It triggers upon build completion, compares metrics against historical performance stored in Airtable, and leverages AI to identify regressions. The system provides automated feedback via GitHub PR comments and email alerts for critical performance drops.

### ⚡ Quick Implementation Steps

1. Configure CI Pipeline: Set your CI job to send a POST request with build metrics to the workflow's Webhook URL.
2. Set Configuration: Adjust the regressionThreshold (default: 20%) and excludeModules in the Set Configuration node.
3. Connect Airtable: Link your credentials to the Fetch Historical Builds and Store Build Data nodes.
4. Connect GitHub & Gmail: Authenticate your GitHub and Gmail OAuth2 credentials for reporting.
5. Verify AI Model: Ensure the OpenAI Chat Model is connected to power the performance analysis.

## What It Does

The workflow acts as an intelligent performance gatekeeper for development pipelines:

1. **Metric Collection:** Captures detailed task durations, build IDs, and PR context directly from CI/CD webhooks.
2. **Historical Comparison:** Automatically retrieves the last 10 builds for a specific repository to calculate average baselines.
3. **AI-Powered Diagnostics:** Uses a specialized AI agent to analyze slowdowns, identify root causes, and provide optimization recommendations.
4. **Automated Reporting:** Categorizes findings by severity (Critical, Warning, Info) and updates stakeholders through PR comments and high-priority emails.

## Who’s It For

- Mobile Engineering Teams looking to prevent "death by a thousand cuts" in build time slowdowns.
- DevOps/Platform Engineers who need automated auditing of build infrastructure health.
- Release Managers requiring an audit trail of performance regressions across different pull requests.

## Technical Workflow Breakdown

### Entry Points (Triggers)

1. Webhook: Listens for POST requests at /webhook/build-hotspot-tracker containing build metrics and repository metadata.

### Processing & Logic

1. Set Configuration: Defines static variables like regression sensitivity and modules to ignore (e.g., test modules).
2. Historical Analysis: Aggregate nodes calculate min, max, and average build times from historical records.
3. AI Build Analyzer: An AI Agent utilizing GPT-4.1-mini to synthesize current build data with historical trends and PR context.
4. Route by Severity: A switch node that directs the workflow based on whether the AI classifies the regression as Critical, Warning, or Info.

### Output & Integrations

1. GitHub (Comment on PR): Posts a formatted markdown report including a severity badge, regressions list, and root causes.
2. Airtable (Store Build Data): Logs the build ID, total duration, and AI recommendations for long-term tracking.
3. Gmail (Notify Email): Sends immediate alerts to the team for critical regressions, including a direct link to the affected PR.

## Customization

### Adjust Sensitivity

Modify the regressionThreshold in the Set Configuration node to change how aggressive the system is in flagging slowdowns (e.g., set to 10 for stricter monitoring).

### Module Filtering

Update the excludeModules parameter to ignore specific tasks like linting or unit tests that may have volatile durations but do not represent core build performance.

### Analysis Detail

The AI Build Analyzer prompt can be customized to focus on specific platform needs, such as focusing heavily on CocoaPods link times or Gradle configuration phases.

## Troubleshooting Guide

| Issue                       | Possible Cause                             | Solution                                                                                   |
| :-------------------------- | :----------------------------------------- | :----------------------------------------------------------------------------------------- |
| **No PR Comments**          | GitHub permissions or incorrect PR number. | Verify your GitHub token has write access and the CI payload includes a valid prNumber.    |
| **Historical Data Missing** | Airtable Filter failure.                   | Ensure the repository and prNumber fields in Airtable match the incoming Webhook data.     |
| **AI Analysis Errors**      | OpenAI credits or model timeout.           | Check your OpenAI API quota and verify the gpt-4.1-mini model is available in your region. |
| **Emails Not Sending**      | Gmail OAuth2 expired.                      | Re-authenticate the Gmail node in your n8n credentials settings.                           |


## Need Help?

If you need assistance customizing this workflow, adding new features or integrating more systems (like JIRA, Slack or Google Sheets), feel free to reach out. Our [n8n automation experts](https://www.weblineindia.com/hire-n8n-developers/) at WeblineIndia are here to support you in scaling your automation journey.

## 🔗 Nodes Used

Airtable, GitHub, Webhook, Gmail, AI Agent, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
