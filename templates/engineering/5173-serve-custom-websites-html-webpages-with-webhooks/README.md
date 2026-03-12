# ⚒️ 🗲 Serve custom websites (HTML webpages) with webhooks

> ⚡ **2,643 views** · ⚒️ [Engineering](../)

## Description

## How it works

This workflow demonstrates how to use n8n to serve a complete, styled HTML webpage. It acts as a mini web server, responding to browser requests with your custom HTML content.

1.  **Webhook Trigger:** The workflow starts with a `Webhook` node configured to listen for `GET` requests on a specific path. When you visit this node's Production URL in a browser, it triggers the workflow.
2.  **Respond with HTML:** The `Respond to Webhook` node is configured to send a response back to the browser.
    *   **Content-Type Header:** It sets a crucial response header, `Content-Type: text/html`, which tells the browser to render the response as a webpage, not just plain text.
    *   **HTML Body:** The entire HTML, CSS, and JavaScript for the webpage is pasted directly into the `Body` field of this node.

When activated, visiting the webhook URL will instantly display the custom webpage.

## Set up steps

**Setup time: &lt; 1 minute**

This workflow is ready to use out-of-the-box.

1.  **Activate the workflow.**
2.  Open the **`Your WebPage`** (Webhook) node and copy its **Production URL**.
3.  Paste the URL into your browser to see the live tutorial page.
4.  To use your own HTML, simply open the **`Site`** (Respond to Webhook) node and replace the content in the `Body` field with your own code.

## 🔗 Nodes Used

Webhook

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
