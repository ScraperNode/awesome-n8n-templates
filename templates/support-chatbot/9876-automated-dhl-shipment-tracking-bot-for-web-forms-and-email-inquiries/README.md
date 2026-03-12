# 💬 Automated DHL shipment tracking bot for web forms and email inquiries

> ⚡ **3,945 views** · 💬 [Support Chatbots](../)

## Description

This n8n template automates responses to customer inquiries about DHL shipment status, handling requests from both web forms and emails.

## Use cases

- **Automate Customer Support**: Provide 24/7 instant answers to the common "Where is my order?" question without human intervention.
- **Reduce Support Tickets**: Decrease the volume of repetitive tracking inquiries by providing customers with immediate, self-service information.
- **Enhance Customer Experience**: Offer a consistent and rapid response across multiple channels (your website and email), allowing customers to use their preferred method of contact.

## Good to know

- **DHL API Key is required**: You'll need to register on the [DHL Developer Portal](https://developer.dhl.com/) to get your API key.
- This workflow requires **Gmail credentials** (OAuth2) to monitor incoming emails and send replies.
- The webhook URL must be configured in your website's contact or tracking form to receive submissions.

## How it works

1.  The workflow is initiated by one of two triggers: a **Webhook** (from a website form) or a **Gmail Trigger** (when a new email arrives).
2.  A **Merge node** combines the data from both triggers into a single, unified flow.
3.  The "Extract Tracking Number" **Code node** intelligently parses the tracking number from either the form data or the email body. It also extracts the customer's name and email address.
4.  The **HTTP Request node** sends the extracted tracking number to the DHL API to fetch the latest shipment status.
5.  The "Format Response Message" **Code node** takes the API response and composes a user-friendly message for the customer. It also handles cases where tracking information is not found.
6.  An **If node** checks the original source of the inquiry to determine whether it came from the webhook or email.
7.  If the request came from the webhook, a **Respond to Webhook node** sends the tracking data back as a JSON response.
8.  If the request came from an email, the **Gmail node** sends the formatted message as an email reply to the customer.

## How to use

1.  **Configure the Triggers**:
    - **Webhook Trigger**: Copy the Test URL and set it as the action endpoint for your web form. Once you activate the workflow, use the Production URL.
      ```
      Webhook URL: https://your-n8n-instance.com/webhook/dhl-tracking-inquiry
      ```
    - **Gmail Trigger**: Connect your Gmail account using OAuth2 credentials and set the desired filter conditions (e.g., unread emails with a specific subject).

2.  **Set up the DHL API**:
    - Open the "Get DHL Tracking Status" (HTTP Request) node and navigate to the "Headers" tab.
    - Replace `YOUR_DHL_API_KEY` with your actual DHL API key.
      ```json
      {
        "DHL-API-Key": "YOUR_DHL_API_KEY"
      }
      ```

3.  **Configure the Gmail Send Node**:
    - Connect the same Gmail credentials to the "Send Gmail Response" node.
    - Customize options like the `replyTo` address as needed.

4.  **Activate the workflow**.

## Requirements

- A **DHL Developer Portal account** to obtain an API key.
- A **Gmail account** configured with OAuth2 in n8n.

## Customising this workflow

- **Add More Carriers**: Duplicate the HTTP Request node and response formatting logic to support other shipping carriers like FedEx or UPS.
- **Log Inquiries**: Add a node to save inquiry details (tracking number, customer email, status) to a Google Sheet or database for analytics.
- **Advanced Error Handling**: Implement more robust error handling, such as sending a Slack notification to your support team if the DHL API is down or returns an unexpected error.

## 🔗 Nodes Used

HTTP Request, Webhook, Gmail, Gmail Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
