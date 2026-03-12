# 🔒 Analyze suspicious email contents with ChatGPT Vision

> ⚡ **4,718 views** · 🔒 [SecOps & Security Automation](../)

## Description

### Phishing Email Detection and Reporting with n8n

#### Who is this for?
This workflow is designed for IT teams, security professionals, and managed service providers (MSPs) looking to automate the process of detecting, analyzing, and reporting phishing emails.

#### What problem is this workflow solving?
Phishing emails are a significant cybersecurity threat, and manually detecting and reporting them is time-consuming and prone to errors. This workflow streamlines the process by automating email analysis, generating detailed reports, and logging incidents in a centralized system like Jira.

#### What this workflow does
This workflow automates phishing email detection and reporting by integrating Gmail and Microsoft Outlook email triggers, analyzing the content and headers of incoming emails, and generating Jira tickets for flagged phishing emails. Here’s what happens:

1. **Email Triggers**: Captures incoming emails from Gmail or Microsoft Outlook.
2. **Email Analysis**: Extracts email content, headers, and metadata for analysis.
3. **HTML Screenshot**: Converts the email’s HTML body into a visual screenshot.
4. **AI Phishing Detection**: Leverages ChatGPT to analyze the email and detect potential phishing indicators.
5. **Jira Integration**: Automatically creates a Jira ticket with detailed analysis and attaches the email screenshot for review by the security team.
6. **Customizable Reports**: Includes options to customize ticket descriptions and adapt the workflow to organizational needs.

#### Setup
1. **Authentication**: Set up Gmail and Microsoft Outlook OAuth credentials in n8n to access your email accounts securely.
2. **API Keys**: Add API credentials for the HTML screenshot service (`hcti.io`) and ChatGPT.
3. **Jira Integration**: Configure your Jira project and issue types in the workflow.
4. **Workflow Configuration**: Update sticky notes and nodes to include any additional setup or configuration details unique to your system.

#### How to customize this workflow to your needs
- **Email Filters**: Modify email triggers to filter specific subjects or sender addresses.
- **Analysis Scope**: Adjust the ChatGPT prompt to refine phishing detection logic.
- **Integration**: Replace Jira with your preferred ticketing system or modify the ticket fields to include additional information.

This workflow provides an end-to-end automated solution for phishing email management, enhancing efficiency and reducing security risks. It’s perfect for teams looking to minimize manual effort and improve incident response times.

## 🔗 Nodes Used

HTTP Request, Jira Software, Gmail Trigger, Microsoft Outlook Trigger, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
