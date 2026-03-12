# 💬 Send chat message notifications from Tawk.to to Gmail

> ⚡ **300 views** · 💬 [Support Chatbots](../)

## Description

This automation workflow captures incoming chat messages from your **Tawk.to** live chat widget and sends alert emails via **Gmail** to notify your support team instantly. It is designed to help you respond promptly to visitors and improve your customer support experience.

---

### Prerequisites

- **Tawk.to account:** You must have an active Tawk.to account with a configured live chat widget on your website.
- **Gmail account:** A Gmail account with API access enabled and configured in n8n for sending emails.
- **n8n instance:** Access to an n8n workflow automation instance where you will import and configure this workflow.

---

### Step-by-Step Setup Instructions

#### 1. Configure Tawk.to Webhook

- Log in to your Tawk.to dashboard.
- Navigate to **Administration &gt; Webhooks**.
- Click **Add Webhook** and enter the following:
  - **URL:** Your n8n webhook URL from the **Receive Tawk.to Request** node (e.g., `https://your-n8n-instance.com/webhook/a4bf95cd-a30a-4ae0-bd2a-6d96e6cca3b4`)
  - **Method:** POST
  - **Events:** Select the chat message event (e.g., `Visitor Message` or `Chat Message Received`)
- Save the webhook configuration.

#### 2. Configure Gmail Credentials in n8n

- In your n8n instance, go to **Credentials**.
- Add a new **Gmail OAuth2** credential:
  - Follow Google's instructions to create a project, enable Gmail API, and obtain client ID and secret.
  - Authenticate and authorize n8n to send emails via your Gmail account.

#### 3. Import and Activate Workflow

- Import the provided workflow JSON into n8n.
- Verify the **Receive Tawk.to Request** webhook node path matches the webhook URL configured in Tawk.to.
- Enter the email address you want the alerts sent to in the **Send alert email** node’s `sendTo` parameter.
- Activate the workflow.

---

### Workflow Explanation

1. **Receive Tawk.to Request:**  
   This webhook node listens for POST requests from Tawk.to containing chat message data.

2. **Format the message:**  
   Extracts relevant data from the incoming payload such as chat ID, visitor name, country, and message text, and assigns them to new fields for easy use downstream.

3. **Send alert email:**  
   Uses Gmail node to send a notification email to your support team with all relevant chat details formatted in a clear, concise text email.

---

### Customization Guidance

- **Email Recipient:**  
  Update the `sendTo` field in the **Send alert email** node to specify your support team’s email address.

- **Email Content:**  
  Modify the message template in the **Send alert email** node’s `message` parameter to suit your tone or include additional details like timestamps or chat URLs.

- **Additional Processing:**  
  You can extend the workflow by adding nodes for logging chats, triggering Slack notifications, or storing messages in a database.

---

By following these instructions, your support team will receive immediate email alerts whenever a new chat message arrives on your website, improving response times and customer satisfaction.

---

## 🔗 Nodes Used

Webhook, Gmail

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
