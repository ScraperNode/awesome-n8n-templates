# 🤝 Send subscription renewal reminders with Email and ClickUp

> ⚡ **33 views** · 🤝 [CRM & Sales Operations](../)

## Description

# Subscription Renewal Reminder – Email & ClickUp

Automate the tracking of customer subscription expiry dates, create renewal tasks in ClickUp, and dispatch friendly email reminders before the due date. The workflow listens for incoming subscription data, schedules reminder sequences, and updates ClickUp so your support or sales team never misses a renewal opportunity.

&gt; **Community Template Disclaimer**  
&gt; This workflow is provided by the n8n community for educational and demonstration purposes. Review, test, and adapt it to your own requirements before using in production.


## Pre-conditions/Requirements

### Prerequisites
- n8n instance (self-hosted or n8n.cloud)
- Active ClickUp workspace & ClickUp API token
- SMTP credentials or n8n Email node configured (e.g., Gmail, SendGrid, SES)
- (Optional) Publicly reachable URL for the Webhook trigger

### Required Credentials
- **ClickUp API** – Create renewal tasks and update task status
- **Email / SMTP** – Send renewal reminder emails to end-users

### Specific Setup Requirements
| Item                     | Recommendation                                    | Notes                                                    |
|--------------------------|---------------------------------------------------|----------------------------------------------------------|
| ClickUp Folder/Space     | `Subscriptions`                                   | Tasks will be created here                               |
| Email “From” Address     | `renewals@yourdomain.com`                         | Ensure DMARC/SPF alignment                               |
| Webhook Security         | Signature header or basic authentication (opt.)   | Protects against unauthorized calls                      |

## How it works

Automate the tracking of customer subscription expiry dates, create renewal tasks in ClickUp, and dispatch friendly email reminders before the due date. The workflow listens for incoming subscription data, schedules reminder sequences, and updates ClickUp so your support or sales team never misses a renewal opportunity.

## Key Steps:
- **Webhook Trigger**: Receives subscription information (email, plan, renewal date).
- **Set Node**: Formats incoming data and calculates reminder dates (e.g., T-30, T-7, T-1).
- **ClickUp Task Creation**: Generates a task with custom fields for each customer subscription.
- **Split In Batches**: Processes large subscription lists in manageable chunks.
- **Wait Node(s)**: Pauses until the calculated reminder timestamp is reached.
- **Email Send**: Sends renewal reminder to the customer using a branded template.
- **If Node**: Determines whether the customer renewed and, if so, closes the ClickUp task.
- **Code Node**: Optional JS logic for dynamic email content or additional API calls.

## Set up steps

**Setup Time: 15–25 minutes**

1. **Import Workflow**: In n8n, choose “Import” → paste the JSON or select the `.json` file.
2. **Configure Webhook**:  
   a. Open the Webhook node → set HTTP Method to `POST`.  
   b. Copy the Test URL and integrate it with your billing platform or form.  
3. **Add ClickUp Credentials**:  
   a. Create a personal ClickUp token (`Settings → Apps → API`).  
   b. In n8n, Credentials → “ClickUp API”, paste the token.  
4. **Create ClickUp Folder**: Inside your Workspace create a folder or list called `Subscriptions` with optional custom fields: `Plan`, `Renewal Date`, `Status`.  
5. **Configure Email Node**:  
   a. Select SMTP or a pre-configured Email credential.  
   b. Set “From” address and default subject (`Your Subscription is Renewing Soon`).  
6. **Edit Wait Durations**: Open each Wait node and set “Wait Until” to `{{$json["reminderDate"]}}` (already pre-mapped). Adjust offsets if needed.  
7. **Activate Workflow**: Switch the workflow to “Active”. Live URL replaces test URL automatically—update your external integration if required.  
8. **Test**: Send a sample POST payload to confirm task creation and email delivery.

## Node Descriptions

### Core Workflow Nodes:
- **Webhook** – Initial trigger that captures subscription data sent from an external service.
- **Set (Prepare Data)** – Normalizes fields, converts dates, and pre-calculates reminder times.
- **ClickUp (Create Task)** – Adds a renewal task in the designated ClickUp list.
- **Split In Batches** – Handles multiple subscriptions to prevent hitting ClickUp rate limits.
- **Wait (Reminder Schedule)** – Delays execution until each reminder date.
- **Email Send** – Dispatches the reminder email to the customer.
- **If (Renewal Check)** – Determines if the subscription was renewed and marks the task “Done”.
- **Code (Helpers)** – Optional JavaScript for advanced customization.

### Data Flow:
1. **Webhook** → **Set** → **ClickUp Task**  
2. **ClickUp Task** → **Split In Batches** → **Wait**  
3. **Wait** → **Email Send** → **If** → **ClickUp Task Update**

## Customization Examples

### Change Reminder Offsets
```javascript
// inside the Set node
const renewalDate = new Date($json.renewalDate);
item.firstReminder = new Date(renewalDate.getTime() - 30*24*3600*1000); // 30 days before
item.secondReminder = new Date(renewalDate.getTime() - 7*24*3600*1000);  // 7 days before
return item;
```

### Dynamic Email Template Based on Plan
```javascript
// Code node before Email Send
const plan = $json.plan.toLowerCase();
if (plan === 'premium') {
  item.subject = '⏰ Premium Plan Renewal';
  item.body = 'Thanks for being a Premium member...';
} else {
  item.subject = 'Your Subscription is Expiring';
  item.body = 'Hi there! Your plan will renew soon...';
}
return item;
```

## Data Output Format

The workflow outputs structured JSON data:

```json
{
  "customerEmail": "user@example.com",
  "plan": "Pro Monthly",
  "renewalDate": "2024-12-31",
  "reminderSent": true,
  "clickUpTaskId": "9012abcd",
  "status": "Pending Renewal"
}
```

## Troubleshooting

### Common Issues
1. **Emails not sending** – Verify SMTP credentials and allow-list the server IP with your mail provider.
2. **ClickUp task not created** – Check that the API token has write permission and the list/folder ID is correct.
3. **Workflow not triggering in production** – Ensure you replaced the test Webhook URL with the production URL in your external system.

### Performance Tips
- Batch process subscriptions (e.g., 20 per batch) to respect ClickUp’s API rate limits.
- Use “Execute Node” during testing instead of running the full workflow each time.

**Pro Tips:**
- Add an additional Wait & Email chain for a post-expiration “We Miss You” message.  
- Store subscription data in a database (e.g., Postgres) to make the workflow idempotent.  
- Use environment variables for API keys and email addresses to simplify migration across environments.

## 🔗 Nodes Used

Send Email, Webhook

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
