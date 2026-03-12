# 🎫 Automated support ticket system with Gmail, Trello, and Slack notifications

> ⚡ **755 views** · 🎫 [Ticket Management & Triage](../)

## Description

### **Automated Support Ticket & Customer Notification System**

Let's build this workflow to streamline your customer support. Here is a detailed, node-by-node explanation of how it works and how to set it up in n8n.

---

### How It Works

This workflow transforms your support inbox into a structured ticket system. When a new email arrives at your support address, the system automatically creates a new ticket (e.g., a Trello card), sends an instant confirmation email to the customer, and notifies your support team. This ensures every customer inquiry is captured, organized, and confirmed, guaranteeing no request gets missed.

---

### Setup Steps

#### **1. Gmail Trigger: Watch Support Inbox**
* **Node Type:** `Gmail Trigger`
* **Credentials:** `YOUR_GMAIL_CREDENTIAL`
* **Parameters:**
    * **Operation:** `Watch for New Mails`
    * **Folder:** `Inbox` (or a specific folder for support emails, like `Support`)
    * **To:** `your-support-email@example.com`
* **Explanation:** This node is the starting point. It connects to your support email address and listens for new messages. As soon as a new email arrives, it triggers the rest of the workflow.

#### **2. Trello: Create New Support Ticket**
* **Node Type:** `Trello`
* **Credentials:** `YOUR_TRELLO_CREDENTIAL`
* **Parameters:**
    * **Operation:** `Create Card`
    * **Board ID:** `YOUR_SUPPORT_BOARD_ID`
    * **List ID:** `YOUR_INCOMING_LIST_ID` (e.g., "New Tickets")
    * **Name:** `New Support Request from {{ $json.from }}`
    * **Description:** `Subject: {{ $json.subject }} Body: {{ $json.body }}`
* **Explanation:** This node takes the details from the incoming email and creates a new card on your Trello board. This turns every email into an actionable, trackable ticket for your support team.

#### **3. Gmail: Send Automatic Confirmation**
* **Node Type:** `Gmail`
* **Credentials:** `YOUR_GMAIL_CREDENTIAL`
* **Parameters:**
    * **Operation:** `Send`
    * **To:** `={{ $json.from }}`
    * **Subject:** `Re: {{ $json.subject }}`
    * **Body:** `Hi there, thanks for reaching out. We've received your request and have created a new ticket. Our team will get back to you shortly.`
* **Explanation:** This node sends a quick, professional, and automated email back to the customer. This provides immediate peace of mind for the customer and confirms that their inquiry was successfully received.

#### **4. Slack: Notify Support Team (Optional)**
* **Node Type:** `Slack`
* **Credentials:** `YOUR_SLACK_CREDENTIAL`
* **Parameters:**
    * **Operation:** `Post Message`
    * **Channel:** `YOUR_SUPPORT_CHANNEL_ID` (e.g., `#support-channel`)
    * **Text:** `*New Support Ticket!* A new ticket from *{{ $json.from }}* has been created in Trello.`
* **Explanation:** This optional but recommended node sends a real-time notification to your support team on Slack, letting them know that a new ticket is waiting for their attention.

### **Final Step: Activation**

1.  After configuring the nodes and connecting all credentials, click **"Save"** at the top of the canvas.
2.  Click the **"Active"** toggle in the top-right corner. The workflow is now live!
3.  **Note:** You can easily swap out the `Trello` node with a `Zendesk` or `Jira` node, and the `Slack` node with a `Telegram` or `Microsoft Teams` node, depending on your team's tools.

## 🔗 Nodes Used

Slack, Trello, Gmail, Gmail Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
