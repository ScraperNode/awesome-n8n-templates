# 🎯 Generate SSL/TLS certificate expiry reports with AWS ACM and AI for Slack & email

> ⚡ **159 views** · 🎯 [AI Summarization & Classification](../)

## Description

# Automated SSL/TLS Certificate Expiry Report for AWS
![](https://wisestackai.s3.ap-southeast-1.amazonaws.com/Blue+and+Yellow+Gradient+Meditation+Youtube+Thumbnail.jpg)
&gt; Automatically generates a weekly report of all AWS ACM certificates, including status, expiry dates, and renewal eligibility. The workflow formats the data into both Markdown (for PDF export to Slack) and HTML (for email summary), helping teams stay on top of certificate compliance and expiration risks.

## **Who’s it for**
This workflow is designed for **DevOps engineers**, **cloud administrators**, and **compliance teams** who manage AWS infrastructure and need **automated weekly visibility** into the status of their SSL/TLS certificates in **AWS Certificate Manager (ACM)**. It's ideal for teams that want to reduce the risk of expired certs, track renewal eligibility, and maintain reporting for audit or operational purposes.

## **How it works / What it does**
This n8n workflow performs the following actions on a weekly schedule:

1. **Trigger**: Automatically runs once a week using the `Weekly schedule trigger`.
2. **Fetch Certificates**: Uses `Get many certificates` action from AWS Certificate Manager to retrieve all certificate records.
3. **Parse Data**: Processes and reformats certificate data (dates, booleans, SANs, etc.) into a clean JSON object.
4. **Generate Reports**:
   - 📄 **Markdown Report**: Uses the `Certificate Summary Markdown Agent` (OpenAI) to generate a Markdown report for PDF export.
   - 🌐 **HTML Report**: Uses the `Certificate Summary HTML Agent` to generate a styled HTML report for email.
5. **Deliver Reports**:
   - Converts Markdown to PDF and sends it to Slack as a file.
   - Sends HTML content as a formatted email.

## **How to set up**

1. **Configure AWS Credentials** in n8n to allow access to AWS ACM.
2. Create a new workflow and use the following nodes in sequence:
   - `Schedule Trigger`: Weekly (e.g., every Monday at 08:00 UTC)
   - `AWS ACM → Get many certificates`
   - `Function Node → Parse ACM Data`: Converts and summarizes certificate metadata
   - `OpenAI Chat Node (Markdown Agent)` with a system/user prompt to generate Markdown
   - `Configure Metadata` → Define file name and MIME type (`.md`)
   - `Create document file` → Converts Markdown to document stream
   - `Convert to PDF`
   - `Slack Node` → Upload the PDF to a channel
   - *(Optional)* Add a second `OpenAI Chat Node` for generating HTML and sending it via email

3. **Connect Output**:
   - Markdown report → Slack file upload
   - HTML report → Email node with embedded HTML

## **Requirements**

- 🟩 **n8n instance** (self-hosted or cloud)
- 🟦 **AWS account** with access to ACM
- 🟨 **OpenAI API key** (for ChatGPT Agent)
- 🟥 **Slack webhook or OAuth credentials** (for file upload)
- 📧 **Email integration** (e.g., SMTP or SendGrid)
- 📝 Permissions to write documents (Google Drive / file node)

## **How to customize the workflow**

- **Change report frequency**: Adjust the `Weekly schedule trigger` to daily or monthly as needed.
- **Filter certificates**:
  - Modify the function node to only include `EXPIRED`, `IN_USE`, or `INELIGIBLE` certs.
  - Add tags or domains to include/exclude.
- **Add visuals**: Enhance the HTML version with colored rows, icons, or company branding.
- **Change delivery channels**:
  - Replace Slack with Microsoft Teams, Discord, or Telegram.
  - Send Markdown as email attachment instead of PDF.
- **Integrate ticketing**:
  - Create a JIRA/GitHub issue for each certificate that is `EXPIRED` or `INELIGIBLE`.

## 🔗 Nodes Used

HTTP Request, Slack, Google Drive, SendGrid, AWS Certificate Manager, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
