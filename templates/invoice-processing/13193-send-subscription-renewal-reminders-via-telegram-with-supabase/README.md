# 🧾 Send subscription renewal reminders via Telegram with Supabase

> ⚡ **27 views** · 🧾 [Invoice Processing](../)

## Description

# Subscription Renewal Reminder – Telegram & Supabase

This workflow tracks upcoming subscription expiry dates stored in Supabase and automatically sends personalized renewal-reminder messages to each customer via Telegram. It is designed to be triggered by an HTTP Webhook (manually or on a schedule) and ensures that customers are notified a configurable number of days before their subscription lapses.

&gt; **Community Template Disclaimer**  
&gt; This is a community-contributed n8n workflow template. It is provided “as-is” without official support from n8n GmbH. Always test thoroughly before using in production.

## Pre-conditions/Requirements

### Prerequisites
- n8n instance (self-hosted or n8n.cloud)
- Supabase project with a `subscriptions` table  
  (`id`, `customer_name`, `expiration_date`, `telegram_chat_id`, `notified`)
- A Telegram Bot created via **@BotFather**
- Outbound HTTPS access from n8n to api.telegram.org and your Supabase project REST endpoint

### Required Credentials
- **Supabase Service Role Key** – Full access for reading/writing the `subscriptions` table  
- **Telegram Bot Token** – To send messages from your bot  
- **n8n Webhook URL** – Auto-generated when you activate the workflow

*(ScrapeGraphAI API Key is **not** required for this non-scraping workflow.)*

### Specific Setup Requirements
| Environment Variable | Example Value | Purpose |
|----------------------|--------------|---------|
| `SUPABASE_URL`       | `https://xyzcompany.supabase.co` | Base URL for Supabase REST API |
| `SUPABASE_KEY`       | `eyJhbGciOiJI...`               | Service Role Key |
| `TELEGRAM_TOKEN`     | `609012345:AA...`               | Bot token obtained from BotFather |
| `REMINDER_DAYS`      | `3`                             | Days before expiry to notify |

## How it works

This workflow tracks upcoming subscription expiry dates stored in Supabase and automatically sends personalized renewal-reminder messages to each customer via Telegram. It is triggered by an HTTP Webhook (manually or via external scheduler) and ensures that customers are notified a configurable number of days before their subscription lapses.

## Key Steps:
- **Receive Trigger (Webhook)**: External call fires the workflow or an internal Cron node can be added.
- **Set Static Parameters**: The Set node calculates “today + REMINDER_DAYS”.
- **Query Supabase**: Fetch all subscriptions expiring on or before the calculated date and not yet notified.
- **Branch Logic (If node)**: Check if any subscriptions were returned.
- **Loop & Dispatch (Code + Telegram nodes)**: Iterate over each customer row, compose a message, and send via Telegram.
- **Flag as Notified (Supabase Update)**: Update each processed row to prevent duplicate reminders.
- **Respond to Webhook**: Return a concise JSON summary for logging or downstream integrations.

## Set up steps

**Setup Time: 15–20 minutes**

1. **Create Telegram Bot**  
   a. Open Telegram and talk to **@BotFather** → `/newbot`  
   b. Copy the given bot token; paste it into n8n Telegram credentials.

2. **Prepare Supabase**  
   a. Create a table named `subscriptions` with columns:  
      `id (uuid)`, `customer_name (text)`, `expiration_date (date)`,  
      `telegram_chat_id (text)`, `notified (bool, default false)`  
   b. Obtain the Service Role Key from `Project Settings → API`.

3. **Import the Workflow**  
   a. In n8n, click **Templates → Import** and select “Subscription Renewal Reminder – Telegram & Supabase”.  
   b. Replace placeholder credentials in the Supabase and Telegram nodes.

4. **Define Environment Variables (Optional but recommended)**  
   Add `SUPABASE_URL`, `SUPABASE_KEY`, `TELEGRAM_TOKEN`, and `REMINDER_DAYS` in **Settings → Environment Variables** for easy maintenance.

5. **Activate the Workflow**  
   Copy the production webhook URL and (optionally) set up a cron job or n8n Cron node to hit it daily.

## Node Descriptions

### Core Workflow Nodes:
- **Webhook** – Entry point; triggers the workflow via HTTP request.
- **Set (Calculate Target Date)** – Defines `targetDate = today + REMINDER_DAYS`.
- **Supabase (Select)** – Retrieves expiring subscriptions that haven’t been notified.
- **If (Rows &gt; 0?)** – Determines whether to continue or exit early.
- **Code (For-Each Loop)** – Iterates through each returned row to send messages and update status.
- **Telegram** – Sends a personalized renewal reminder to the customer’s chat.
- **Supabase (Update)** – Flags the subscription row as `notified = true`.
- **Respond to Webhook** – Returns a JSON summary with counts of sent messages.
- **Sticky Notes** – Inline documentation for maintainers (non-executable).

### Data Flow:
1. **Webhook** → **Set** → **Supabase (Select)** → **If** → **Code** → **Telegram** → **Supabase (Update)** → **Respond to Webhook**

## Customization Examples

### Send Slack Notifications Instead of Telegram
```javascript
// Replace Telegram node with Slack node
const message = `Hi ${item.customer_name}, your subscription expires on ${item.expiration_date}.`;
return [{ text: message, channel: item.slack_channel_id }];
```

### Notify 7 Days & 1 Day Before Expiry
```javascript
// In Set node
items[0].json.reminderOffsets = [7, 1]; // days
return items;
```

## Data Output Format

The workflow outputs structured JSON data:

```json
{
  "totalSubscriptionsChecked": 42,
  "remindersSent": 13,
  "timestamp": "2024-05-27T09:15:22.000Z"
}
```

## Troubleshooting

### Common Issues
1. **No messages sent** – Check the `If` node; ensure `REMINDER_DAYS` is set correctly and the Supabase query returns rows.  
2. **Telegram error 403** – The user hasn’t started a chat with your bot. Ask the customer to click “Start” in Telegram.

### Performance Tips
- Batch database updates instead of row-by-row when dealing with thousands of records.
- Cache Supabase responses if you expect multiple workflows to query the same data within seconds.

**Pro Tips:**
- Use the Cron node inside n8n instead of external schedulers for a fully self-contained setup.
- Add an Email node after the Telegram node for multi-channel reminders.
- Store template messages in Supabase so non-developers can update wording without editing the workflow.

## 🔗 Nodes Used

Webhook, Telegram, Supabase

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
