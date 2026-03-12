# ⚙️ Launch AWS EC2 instances from Google Sheets using Terraform

> ⚡ **855 views** · ⚙️ [DevOps & CI/CD](../)

## Description

This automated n8n workflow enables launching AWS EC2 instances directly from a Google Sheets document. Users can specify instance details (e.g., region, instance type, key pair) in a Google Sheet, triggering the workflow to create EC2 instances via the AWS API. The workflow updates the sheet with instance information and sends confirmation emails.

## Fundamental Aspects
- **Google Sheets Trigger**: Initiates the workflow when a new row is added or updated in the Google Sheet.
- **Extract Instance Details**: Parses region, instance type, key pair name, and instance name from the sheet.
- **Validate Inputs**: Checks for required fields and valid AWS configurations.
- **Launch EC2 Instance**: Uses the AWS EC2 API to launch the specified instance.
- **Update Google Sheet**: Adds instance ID and status to the sheet.
- **Send Confirmation Email**: Notifies the user via email with instance details.

## Setup Instructions
- **Import the Workflow into n8n**: Download the workflow JSON and import it via the n8n interface.
- **Configure API Credentials**:
  - Set up Google Sheets API credentials with appropriate permissions.
  - Configure AWS IAM credentials with EC2 launch permissions.
  - Configure SMTP credentials for email notifications.
- **Prepare Google Sheet**: Create a sheet with columns for region, instance type, key pair name, instance name, instance ID, and status.
- **Run the Workflow**: Activate the Google Sheets trigger and test by adding a row with instance details.
- **Verify Responses**: Check the Google Sheet for updated instance IDs and emails for confirmation.
- **Adjust Parameters**: Fine-tune AWS region settings or email templates as needed.

## Technical Dependencies
- **Google Sheets API**: For reading and writing data.
- **AWS EC2 API**: For launching and managing instances.
- **SMTP Service**: For sending confirmation emails.
- **n8n**: For workflow automation and integration.

## Customization Possibilities
- **Add Instance Types**: Support additional EC2 instance types.
- **Enhance Validation**: Add checks for AWS limits or quotas.
- **Support Tags**: Include custom tags for launched instances.
- **Add Logging**: Integrate with a logging service for workflow tracking.
- **Customize Emails**: Adjust email content or add attachments.

## 🔗 Nodes Used

Google Sheets, Gmail, SSH, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
