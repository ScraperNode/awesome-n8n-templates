# ⚡ Research assistant for WhatsApp using Twilio, Perplexity and Claude

> ⚡ **914 views** · ⚡ [Personal Productivity](../)

## Description

## Build an AI Research Assistant for WhatsApp with Perplexity and Claude 💡

Ever wished you could get a deep, multi-source research report on any topic, delivered directly to your WhatsApp chat in seconds? This workflow transforms your WhatsApp into a powerful, on-demand research assistant, perfect for students, professionals, and curious minds.

Leveraging the deep research capabilities of **Perplexity**, the nuanced formatting skills of **Anthropic's Claude**, and the messaging power of **Twilio**, this workflow automates the entire process from query to polished answer. Ask it anything, and receive a well-structured, easy-to-read summary moments later.

### What This Workflow Does 🚀

  * 📲 **Listens for Incoming Queries**: The workflow starts when a user sends a message to your configured Twilio WhatsApp number.
  * 🧠 **Performs Deep Research**: It takes the user's query and feeds it to the **Perplexity** node, which uses the `sonar-pro` model to conduct a comprehensive, multi-source analysis on the topic.
  * 🎨 **Polishes the Content**: The raw, detailed research report from Perplexity is then passed to an **Anthropic Claude** model. This crucial step refines the text, adds engaging emojis, ensures it's under the WhatsApp character limit, and formats it perfectly for mobile viewing.
  * 💬 **Sends an Instant Reply**: The final, beautifully formatted summary is sent directly back to the user's WhatsApp chat via **Twilio**, completing the entire request.

### Nodes Used 🛠️

  * **Webhook**: To receive the initial message from Twilio and trigger the workflow.
  * **Perplexity**: To perform the AI-powered deep research on the user's query.
  * **Anthropic (via LangChain)**: To connect to and use the Claude model for reformatting and polishing the content.
  * **Twilio**: To send the final, formatted message back to the user on WhatsApp.

### How to Set Up This Workflow ⚙️

This workflow requires careful setup between n8n and Twilio to function correctly. Follow these steps closely.

#### 1\. Prerequisites ✅

You will need accounts for the following services:

  * [n8n](https://n8n.io/) (Cloud or self-hosted)
  * [Twilio](https://www.twilio.com/try-twilio)
  * [Perplexity AI](https://docs.perplexity.ai/) (for an API key)
  * [Anthropic](https://console.anthropic.com/) (for a Claude API key)

#### 2\. Configure Credentials 🔑

In your n8n instance, add your API keys for **Twilio**, **Perplexity**, and **Anthropic**.

  - You can add credentials in n8n by going to the **Credentials** tab in the left-hand menu.
  - [Learn more about managing credentials in n8n](https://docs.n8n.io/credentials/).

#### 3\. Set Up Your Twilio WhatsApp Number 📱

1.  Log in to your Twilio account.
2.  Either purchase a phone number that is WhatsApp-enabled or use the free **Twilio Sandbox for WhatsApp** for testing.
3.  Follow Twilio's guide to connect your number or sandbox to the WhatsApp Business API.
      - [Read Twilio's Getting Started with WhatsApp Guide](https://www.twilio.com/docs/whatsapp/sandbox).

#### 4\. Expose Your n8n Webhook URL 🌐

For Twilio to communicate with n8n, your n8n webhook URL must be publicly accessible.

1.  Open the **Fetch Whatsapp Request** (Webhook) node in the workflow.
2.  You will see two URLs: **Test** and **Production**. For this guide, we will use the **Test URL**.
3.  **If you are running n8n locally or on a private server**, you must expose this URL to the public internet. You can do this easily using n8n's built-in tunnel feature.
      - Start n8n from your computer's command line with the following command:
        ```bash
        n8n start --tunnel
        ```
      - After starting, n8n will provide you with a public "tunnel URL". It will look something like `https://[subdomain].hooks.n8n.cloud/`.
      - **Copy this public tunnel URL.**
      - [Learn more about tunneling in the n8n docs](https://docs.n8n.io/hosting/installation/npm/#n8n-with-tunnel).

#### 5\. Connect Twilio to Your n8n Webhook 🔗

1.  In your [Twilio Console](https://console.twilio.com/), navigate to the settings for the phone number (or sandbox) you configured in Step 3.
2.  Scroll down to the **Messaging** section.
3.  Find the field labeled **"A MESSAGE COMES IN"**.
4.  Paste your **n8n Test URL** (or your public tunnel URL from the previous step) into this field.
5.  Ensure the dropdown next to it is set to `HTTP POST`.
6.  Click **Save**.

#### 6\. Activate and Test Your Workflow ▶️

1.  Go back to your n8n canvas.
2.  Click **"Test workflow"** in the top right corner. This will put your webhook in a "listening" state.
3.  Now, send a message from your personal WhatsApp to your configured Twilio WhatsApp number.
4.  You should see the workflow execute successfully in n8n and receive a formatted reply on WhatsApp\!
5.  Once you've confirmed it works, **save and activate** the workflow to have it run permanently.

## Further Reading 📚

  * [n8n Webhook Node Documentation](https://docs.n8n.io/nodes/n8n-nodes-base.webhook/)
  * [n8n Twilio Node Documentation](https://docs.n8n.io/nodes/n8n-nodes-base.twilio/)
  * [Perplexity API Documentation](https://docs.perplexity.ai/)
  * [Anthropic API Documentation](https://docs.anthropic.com/en/api/getting-started)

## 🔗 Nodes Used

Twilio, Webhook, Basic LLM Chain, Anthropic Chat Model, Perplexity

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
