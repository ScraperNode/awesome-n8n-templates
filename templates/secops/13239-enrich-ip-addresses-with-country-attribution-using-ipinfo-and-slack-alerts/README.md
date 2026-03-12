# 🔒 Enrich IP addresses with country attribution using IPinfo and Slack alerts

> ⚡ **8 views** · 🔒 [SecOps & Security Automation](../)

## Description

## 🧩 Template Description

**IP Enrichment & Country Attribution** is a lightweight cybersecurity automation that enriches IP addresses with geographic and network intelligence. It validates incoming **IPs**, filters out **private** or **invalid addresses**, and enriches public IPs using an open-source IP enrichment service.


## 🔄 How It Works
1. Receives an IP address via webhook (**API** or **Slack**). 
2. Validates the IP format and rejects invalid input.
3. Checks for private or internal IP ranges.
4. Ignores private IPs with a clear response.
5. Enriches public IPs using an open-source IP intelligence service.
6. Normalizes **country**, **ISP**, and **ASN** data and applies a **severity** label.
7. Slack notifications are sent for enriched public IPs.
8. Returns a structured **JSON** response.

## ⚙️ Setup Steps
1. Import & Activate Workflow
	- Import the JSON template into n8n
	- Actvate the workflow
2. Set Up Webhook
	- Copy the **webhook URL**
	- Send a **POST** request with the IP in the body, e.g.:
	` { "text" : "8.8.8.8" }`
	- Using `curl`:
	`curl -X POST https://YOUR_N8N_WEBHOOK_URL \
  -H "Content-Type: application/json" \
  -d '{"text":"8.8.8.8"}'`
3. Configure **Slack** (Slack Alert)
	- Create or select Slack credentials in **n8n**
	- Make sure the bot is in your target channel
	- Update the Slack node with correct channel.
	
4. Slack **Slash Command** Setup (Optional)
- Enable Slash Commands and create new command (for example `/ip-enrich`).
- Set the **Request URL** to your n8n webhook endpoint.
- Choose **POST** as the request method.
- Install the app to your workspace.
**Usage example**:
`/ip-enrich 8.8.8.8`


## 🎛️ Customization Options
- Enrichment source: Replace or extend the IP intelligence API with additional providers (for example reputation or abuse scoring).
- Slack formatting: Customize the Slack message text, emojis, or use threads for better alert grouping.
- Input sources: Reuse the webhook for other integrations such as SIEM alerts or security tools.

## 🔗 Nodes Used

HTTP Request, Slack, Webhook

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
