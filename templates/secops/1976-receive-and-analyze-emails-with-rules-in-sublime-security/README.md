# 🔒 Receive and analyze emails with rules in Sublime Security

> ⚡ **2,271 views** · 🔒 [SecOps & Security Automation](../)

## Description

This n8n workflow provides a comprehensive automation solution for processing email attachments, specifically targeting enhanced security protocols for organizations that use platforms like Outlook. It starts with the IMAP node, which is set to ingest emails and identify those with .eml attachments.

Once an email with an attachment is ingested, the workflow progresses to a conditional operation where it checks for the presence of attachments. If an attachment is found, the binary data is moved and converted to JSON format, preparing it for further analysis. This meticulous approach to detecting attachments is crucial for maintaining a robust security posture, allowing for the proactive identification and handling of potentially malicious content.

In the subsequent stage, the workflow leverages the capabilities of Sublime Security by analyzing the email attachment. The binary file is scrutinized for threats, and upon detection, the information is split to matched and unmatched data. This process not only speeds up the threat detection mechanism but also ensures compatibility with other systems, such as Slack, resulting in a smooth and efficient workflow. This automation emphasizes operational efficiency with minimal user involvement, enhancing the organization's defense against cyber threats.

The final phase of the workflow involves preparing the output for a Slack report. Whether a threat is detected or not, n8n ensures that stakeholders are immediately informed by dispatching comprehensive reports or notifications to Slack channels. This promotes a culture of transparency and prompt action within the team.

## 🔗 Nodes Used

Email Trigger (IMAP), HTTP Request, Slack, Convert to/from binary data

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
