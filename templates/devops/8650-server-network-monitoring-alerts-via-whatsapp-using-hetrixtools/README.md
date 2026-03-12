# ⚙️ Server & network monitoring alerts via WhatsApp using HetrixTools

> ⚡ **542 views** · ⚙️ [DevOps & CI/CD](../)

## Description

This workflow integrates [HetrixTools](https://hetrixtools.com/) with WhatsApp via the GOWA API to automate notifications about server monitoring events. It distinguishes between **Uptime Monitoring** and **Resource Usage Monitoring** events, formats the message accordingly, and sends it to a WhatsApp number using the GOWA WhatsApp REST API.

It's especially useful for DevOps, sysadmins, or teams who need real-time server alerts delivered via WhatsApp.

---

## ⚙️ **Setup Instructions**

1. **Set up HetrixTools:**

   * Create a HetrixTools account at [https://hetrixtools.com/register](https://hetrixtools.com/register)
   * Create your **Uptime Monitors** and/or enable **Resource Usage Monitoring** for your servers.
   * Go to your HetrixTools contact settings and add the **n8n Webhook URL** provided by the workflow.
   * Make sure to select this contact in your monitor’s alert settings.

2. **Configure n8n Webhook:**

   * Set the Webhook node to HTTP method: `POST`
   * Ensure it is accessible via a public URL (you can use n8n Cloud, reverse proxy, or tunnel like `ngrok` for testing).

3. **Customize WhatsApp Message:**

   * The workflow includes a conditional branch to check whether the event is a Resource Usage alert or an Uptime alert.
   * Each branch contains editable text nodes for customizing the WhatsApp message content.

4. **Set up GOWA WhatsApp API:**

   * Make sure your GOWA instance is running and accessible.
   * Create necessary credentials (API key, base URL, etc.).
   * In n8n, add the credentials and fill in the **sendChatPresence** and **sendText** nodes accordingly.

5. **Deploy the Workflow:**

   * Save and activate the workflow.
   * Trigger a test alert from HetrixTools to verify if messages are received on WhatsApp.

---

## 🧱 **Prerequisites**

* An active [HetrixTools](https://hetrixtools.com/) account with Uptime Monitors or Resource Usage Monitoring enabled.
* A publicly accessible instance of **n8n** with Webhook node enabled.
* Access to a running and configured **GOWA** (WhatsApp REST API) server.
* Required credentials configured in n8n for GOWA (API key, URL, phone number, etc.).

---

## 🔗 Nodes Used

Webhook

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
