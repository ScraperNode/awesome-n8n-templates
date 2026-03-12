# 🧾 AI-powered invoice reminder & payment tracker for finance & accounting

> ⚡ **4,723 views** · 🧾 [Invoice Processing](../)

## Description

Streamline invoice management with this automated n8n workflow. Triggered daily at 9 AM, it fetches pending invoices, filters overdue ones, uses AI to generate personalized reminders, and sends them to clients. It also tracks payments via webhooks, updates statuses, and provides daily summaries to the finance team, ensuring efficient cash flow oversight.

### Key Features  
- Daily checks at 9 AM ensure timely invoice tracking.  
- AI generates personalized reminders and payment confirmations.  
- Real-time webhook integration for payment updates.  
- Daily summaries and activity logs enhance financial visibility.  

### Workflow Process  
- **Schedule Daily Check** runs every day at 9 AM to initiate the workflow.  
- **Fetch Pending Invoices** queries the database for unpaid invoices.  
- **Filter Overdue Invoices** separates overdue invoices based on due dates.  
- **Calculate Reminder Logic** applies smart logic for reminder timing and urgency.  
- **Prepare AI Prompt** formats data into a tailored prompt for AI.  
- **AI Agent for Generate Email** uses AI to create personalized reminder emails.  
- **Format Email** styles the email with HTML for a professional look.  
- **Send Email Reminder** delivers the reminder to clients.  
- **Update Reminder Status** logs the sent reminder in the database.  
- **Create Activity Log** generates a manual log for auditing.  
- **Save Input Log** archives raw input data for analysis.  
- **Generate Daily Summary** creates a report of daily metrics.  
- **Send Summary to Finance Team** emails the summary to the team.  
- **Webhook Payment Received** captures payment confirmations via POST.  
- **Update Payment Status** updates the invoice status to "paid" in the database.  
- **Webhook Response** sends an acknowledgment to the payment gateway.  
- **Webhook Logic Filtering** validates webhook data.  
- **Prepare AI Prompt (in payment branch)** formats payment data for AI.  
- **Chat Memory Tool (in payment branch)** maintains context for AI.  
- **Generate Email (in payment branch)** creates a payment confirmation email.  
- **Send Payment Confirmation** emails the confirmation to the client.  

### Setup Instructions  
- Import the workflow into n8n and configure database credentials (e.g., Google Sheets or SQL) for "Fetch Pending Invoices."  
- Set up the AI service (e.g., OpenAI GPT) with an API key for email generation.  
- Configure Gmail API Key for sending emails and Slack (if integrated) for team alerts.  
- Test the workflow by adding overdue invoices and simulating a payment webhook.  
- Adjust reminder logic and thresholds (e.g., 7 days overdue) as needed.  

### Prerequisites  
- Database access (e.g., Google Sheets OAuth2 or SQL credentials)  
- OpenAI API key for AI email generation  
- Gmail API Key for email notifications  
- Payment gateway webhook integration (e.g., Stripe)  
- Structured invoice data format  

**Database Structure:**  
1. Create a table/sheet with columns:  
   - Invoice ID  
   - Client Name  
   - Amount  
   - Due Date  
   - Status  
   - Reminder Sent  
   - Payment Date  

### Modification Options  
- Adjust the "Schedule Daily Check" to a different time (e.g., 8 AM IST).  
- Customize "Calculate Reminder Logic" for escalation (e.g., multiple reminders).  
- Modify AI prompts for branded or localized email content.  
- Integrate with accounting software (e.g., QuickBooks) for real-time data.  
- Enhance "Generate Daily Summary" with custom financial metrics.  

**Discover more workflows – [Get in touch with us](https://www.oneclickitsolution.com/contact-us/)**

## 🔗 Nodes Used

Send Email, Postgres, Webhook, Schedule Trigger, AI Agent, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
