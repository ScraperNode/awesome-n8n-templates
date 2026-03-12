# 🔒 Automate security alert triage with NixGuard AI and route to Slack or Jira

> ⚡ **1,393 views** · 🔒 [SecOps & Security Automation](../)

## Description

Are you drowning in a sea of security notifications? Do your analysts spend more time sifting through low-level logs than investigating real threats? This workflow transforms n8n into an autonomous **SOC (Security Operations Center) Analyst**, tackling alert fatigue head-on.

Leveraging the **NixGuard Security RAG connector**, this workflow automates the entire alert triage process. It ingests raw security events (from sources like **Wazuh**, your SIEM, or EDR), uses AI to analyze and assign a priority, and then intelligently routes the alert to the correct Slack channel.

**How It Works:**

1.  **Ingest & Filter:** The workflow runs on a schedule, fetching all recent security alerts. It first performs a basic filtering to isolate events that meet a minimum severity threshold (e.g., level 7+).
2.  **AI Analysis & Prioritization:** The aggregated high-severity alerts are then sent to the AI with a specific prompt, asking it to analyze the situation and return a structured JSON object containing a single, overall priority (`Critical`, `High`, `Info`) and a concise summary.
3.  **Intelligent Routing:** A Switch node reads the AI-assigned priority and routes the notification to the appropriate destination. Critical alerts go to your `#security-incident-response` channel, high-priority alerts to `#security-investigations`, and informational ones to `#security-logs`.

**Key Features & Benefits:**

*   **Eliminate Alert Fatigue:** Drastically reduce the noise by having AI pre-process and categorize alerts before they hit your team.
*   **Automate SOC Tier 1 Triage:** Free up your human analysts from repetitive triage tasks so they can focus on high-value investigation and threat hunting.
*   **Faster Incident Response:** Route critical alerts to the right people in real-time, cutting down on crucial response time.
*   **Consistent Prioritization:** Use AI to ensure a consistent, unbiased approach to alert prioritization, 24/7.
*   **Smart Routing Logic:** Go beyond simple keyword matching. The Switch node ensures alerts are delivered to the team best equipped to handle them based on AI-assessed severity.

**Who is this for?**

*   **SOC Analysts & Security Engineers** looking to automate alert triage and incident response workflows.
*   **SecOps and DevOps Teams** who want to build a more efficient, automated security operations pipeline.
*   **IT Managers and Directors** aiming to improve their team's efficiency and reduce the risk of missing critical alerts.
*   Anyone using **Wazuh, a SIEM,** or other security tools that generate a high volume of alerts.

Stop manually triaging alerts. Install this workflow to build your own AI-powered security automation platform and let your team focus on what matters most.

Don't have the main workflow yet? Get it [HERE!](https://n8n.io/workflows/4693-get-real-time-security-insights-with-nixguard-rag-and-wazuh-integration/)

🔗 Learn more about NixGuard: [thenex.world](https://thenex.world)
🔗 Get started with a free security subscription: [thenex.world/security/subscribe](https://thenex.world/security/subscribe)

**Tags / Keywords:** `AI`, `Security`, `SOC`, `Automation`, `Triage`, `Alerting`, `Cybersecurity`, `Wazuh`, `SIEM`, `Slack`, `Incident Response`, `Alert Fatigue`, `SecOps`, `Generative AI`, `LLM`, `NixGuard`, `Routing`

## 🔗 Nodes Used

Slack, Execute Sub-workflow, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
