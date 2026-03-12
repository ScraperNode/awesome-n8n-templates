# 🔒 Analyze & sort suspicious email contents with ChatGPT

> ⚡ **8,781 views** · 🔒 [SecOps & Security Automation](../)

## Description

### Analyze & Sort Suspicious Email Contents with ChatGPT and Jira

#### Who is this for?
This workflow is tailored for IT security teams, managed service providers (MSPs), and organizations aiming to streamline the detection and reporting of phishing emails. It's especially useful for teams handling high email volumes and requiring quick, automated analysis.

#### What problem is this workflow solving?
Phishing emails pose a significant cybersecurity threat, and manual review processes are time-consuming and prone to human error. This workflow automates the identification of malicious emails, provides AI-driven insights, and generates structured reports, enabling faster and more efficient responses to email-based threats.

#### What this workflow does
This workflow integrates Gmail or Microsoft Outlook to monitor and capture incoming emails. It processes the email content and headers, converts the email's body to a visual screenshot for clarity, and uses ChatGPT's advanced AI to analyze the email for phishing indicators. Based on the analysis, it categorizes emails as potentially malicious or benign, creating detailed Jira tickets for each case. Attachments, including the email body and screenshots, are automatically uploaded for comprehensive reporting.

**Key steps include:**
1. **Email Integration**: Captures emails from Gmail or Microsoft Outlook.
2. **Content Processing**: Extracts and organizes email content and metadata.
3. **AI Analysis**: Uses ChatGPT to evaluate email content and headers.
4. **Classification**: Categorizes emails as malicious or benign.
5. **Automated Reporting**: Creates Jira tickets with detailed analysis and attachments.

#### Setup
1. **Authentication**: Configure Gmail or Microsoft Outlook credentials in n8n.
2. **API Keys**: Add credentials for the HTML screenshot service (`hcti.io`) and OpenAI.
3. **Jira Configuration**: Set up project and issue types in the Jira nodes.
4. **Customization**: Update sticky notes and nodes to fit your organizational requirements, such as modifying the AI prompt or Jira ticket fields.

#### How to customize this workflow to your needs
- Adjust email triggers to include or exclude specific senders or subjects.
- Refine the AI prompt in the ChatGPT node to tailor phishing detection criteria.
- Modify Jira ticket content to include additional fields or match specific workflows.

This workflow is ideal for automating email threat detection, reducing response times, and enhancing overall cybersecurity processes. By leveraging AI-powered insights, it helps organizations stay ahead of phishing attacks.

## 🔗 Nodes Used

HTTP Request, Jira Software, Gmail Trigger, Convert to File, Microsoft Outlook Trigger, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
