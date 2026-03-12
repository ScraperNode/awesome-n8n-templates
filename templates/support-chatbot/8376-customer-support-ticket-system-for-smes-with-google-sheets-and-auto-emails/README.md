# 💬 Customer support ticket system for SMEs with Google Sheets and auto-emails

> ⚡ **373 views** · 💬 [Support Chatbots](../)

## Description

# How it Works

This workflow automates customer support for SMEs in five simple steps:

1. **Capture requests** via a Webhook connected to a contact form.
2. **Extract the message** to make processing easier.
3. **Check categories** (e.g., refund-related requests) using an IF node.
4. **Save all tickets** to a Google Sheet for tracking.
5. **Send an acknowledgment email** back to the customer automatically.

This setup ensures all customer inquiries are logged, categorized, and acknowledged without manual effort.

---

# Setup Steps

1. **Webhook**

   * Add a Webhook node with the path `customer-support`.
   * Configure your contact form or system to send `name`, `email`, and `message` to this webhook.

2. **Extract Message (Set Node)**

   * Add a Set node.
   * Map the incoming `message` field to make it available for other nodes.

3. **Check Category (IF Node)**

   * Insert an IF node.
   * Example: check if the `message` contains the word “refund”.
   * This allows you to route refund-related requests differently if needed.

4. **Save Ticket (Google Sheets)**

   * Connect to Google Sheets with OAuth2 credentials.
   * Operation: `Append`.
   * Range: `Tickets!A:C`.
   * Map the fields `Name`, `Email`, and `Message`.

5. **Send Acknowledgement (Email Send)**

   * Configure the Email Send node with your SMTP credentials.
   * `To`: `={{$json.email}}`.
   * Subject: `Support Ticket Received`.
   * Body: personalize with `{{$json.name}}` and include the `{{$json.message}}`.

---

👉 With this workflow, SMEs can handle incoming support tickets more efficiently, maintain a simple ticket log, and improve customer satisfaction through instant acknowledgment.

## 🔗 Nodes Used

Send Email, Google Sheets, Webhook

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
