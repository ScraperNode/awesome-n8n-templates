# ⚙️ Create & delete AWS RDS databases via email commands with Terraform

> ⚡ **542 views** · ⚙️ [DevOps & CI/CD](../)

## Description

This automated n8n workflow enables the creation and management of AWS RDS databases through email interactions. Users can send emails with commands such as "Create RDS" or "Delete RDS," including details like database engine, instance class, and credentials. The workflow parses the email, uses Terraform to execute the requested action on AWS RDS, updates a Google Sheet with the status, and sends a confirmation email.

## Fundamental Aspects
- **Gmail Trigger**: Initiates the workflow upon receiving a new email in Gmail.
- **Parse Email Content**: Analyzes the email body to extract the command (create or delete) and database details like region, identifier, engine, and credentials.
- **Manage RDS Instance**: Executes Terraform commands to create or delete the AWS RDS database instance based on the parsed details.
- **Wait For Data**: Pauses the workflow to allow time for the RDS operation to complete and data to become available.
- **Update Google Sheet**: Appends or updates the Google Sheet with the database instance details, status, and any relevant IDs.
- **Send Confirmation Email**: Formats and sends a response email confirming the action taken, including success/failure details.

## Setup Instructions
- **Import the Workflow into n8n**: Download the workflow JSON and import it via the n8n interface.
- **Configure API Credentials**:
  - Set up Gmail API credentials for email triggering and sending.
  - Configure AWS credentials with RDS management permissions.
  - Set up Google Sheets API credentials with read/write access.
  - Ensure Terraform is integrated or nodes are configured for Terraform execution.
- **Prepare Google Sheet**: Create a sheet with columns for database identifier, engine, instance class, status, and other relevant fields.
- **Run the Workflow**: Activate the Gmail trigger and test by sending an email with a create or delete command.
- **Verify Responses**: Check the Google Sheet for updates and your email for confirmation messages.
- **Adjust Parameters**: Fine-tune Terraform variables, email parsing logic, or wait times as needed.

## Columns For The Google Sheet:

1. **Database Identifier:** Unique identifier for the RDS instance (e.g., var.db_identifier).
2. **Engine:** Database engine type (e.g., MySQL, PostgreSQL) (e.g., var.db_engine).
3. **Instance Class:** RDS instance class (e.g., var.instance_class) (e.g., db.t3.micro).
4. **Allocated Storage:** Storage size in GB (e.g., var.allocated_storage) (e.g., 20).
5. **Region:** AWS region for the instance (e.g., var.aws_region) (e.g., us-east-1).
6. **Username:** Database admin username (e.g., var.db_username) (e.g., admin).
7. **Password:** Database admin password (e.g., var.db_password) (e.g., SecurePassword123).
8. **Status:** Current status of the RDS instance (e.g., creating, deleted).
9. **Database Name:** Name or tag for the database (e.g., var.db_name) (e.g., MyRDSDatabase).

## Technical Dependencies
- **Gmail API**: For receiving trigger emails and sending confirmations.
- **AWS RDS API**: For database management (via Terraform).
- **Google Sheets API**: For logging and updating database status.
- **Terraform**: For infrastructure-as-code management of RDS instances.
- **n8n**: For workflow automation and node integrations.

## Customization Possibilities
- **Support Additional Commands**: Extend to include update or snapshot operations for RDS instances.
- **Enhance Parsing**: Improve email content analysis with AI for better intent detection.
- **Add Database Engines**: Include support for more RDS engines like Oracle or SQL Server.
- **Integrate Monitoring**: Add nodes to monitor RDS performance and alert via email.
- **Customize Sheets**: Modify sheet columns or add visualizations for database metrics.
- **Security Enhancements**: Incorporate additional validation for sensitive credentials in emails.

Want a tailored workflow for your business? Our experts can craft it quickly [Contact our team](https://www.oneclickitsolution.com/contact-us/)

## 🔗 Nodes Used

Google Sheets, Gmail, SSH

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
