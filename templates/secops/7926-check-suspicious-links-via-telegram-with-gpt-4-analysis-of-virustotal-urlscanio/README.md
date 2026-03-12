# 🔒 Check suspicious links via Telegram with GPT-4 analysis of VirusTotal & urlscan.io results

> ⚡ **690 views** · 🔒 [SecOps & Security Automation](../)

## Description

# **Workflow Purpose**
The workflow is designed to scan submitted URLs using urlscan.io and VirusTotal, combine the results into a single structured summary, and send the report via Telegram.

I built this workflow for people who primarily work from their phones and receive a constant stream of emails throughout the day. If a user gets an email asking them to sign a document, review a report, or take any action where the link looks suspicious, they can simply open the Telegram bot and quickly check whether the URL is safe before clicking it.

## Key Components
**1. Input / Trigger**
- Accepts URLs that need to be checked.
- Initiates requests to VirusTotal and urlscan.io.

**2. VirusTotal Scan**
- Always returns results if the URL is reachable.
- Provides reputation, malicious/clean flags, and scan metadata.

**3. urlscan.io Scan**
- Returns details on how the URL behaves when loaded (domains, requests, resources, etc.).
- Sometimes fails due to blocks or restrictions.

**4. Error Handling with Code Node**
- Checks whether urlscan.io responded successfully.
- Ensures the workflow always produces a summary, even if urlscan.io fails.

**5. Summary Generation**
- If both scans succeed → summarize combined findings from VirusTotal + urlscan.io.
- If urlscan.io fails → state clearly in the summary “urlscan.io scan was blocked/failed. Relying on VirusTotal results.”
- Ensures user still gets a complete security report.

**6. Telegram Output**
- Final formatted summary is delivered to a Telegram chat via the bot.
- Chat ID issue was fixed after the Code Node restructuring.

### Outcome
- The workflow now guarantees a consistent, user-friendly summary regardless of urlscan.io failures.
- It leverages VirusTotal as the fallback source of truth.
- The Telegram bot provides real-time alerts with clear indications of scan success/failure.


#### Prequisites
**Telegram**
- In Telegram, start a chat with @BotFather.
- Send /newbot, pick a name and a unique username.
- Copy the HTTP API token BotFather returns (store securely)
- Start a DM with your bot and send any message.
- Call getUpdates and read the chat.id

**urlscan.io**
- Create/log into your urlscan.io account.
- Go to Settings & API → New API key and generate a key.
- (Recommended) In Settings & API, set Default Scan Visibility to Unlisted to avoid exposing PII in public scans.
- Save the key securely (env var or n8n Credentials).
- Rate limits note: urlscan.io enforces per-minute/hour/day quotas; exceeding them returns HTTP 429. You can view your personal quotas on their dashboard/quotas endpoint

**Virustotal**
- Sign up / sign in to VirusTotal Community.
- Open My API key (Profile menu) and copy your Public API key.
- Store it securely (env var or n8n Credentials).
- For a more reliable connection with VirusTotal and improved scanning results, enable the Header section in the node settings. Add a header parameter with a clear name (e.g., x-apikey), and then paste your API key into the Value field.
- Rate limits (Public API): 4 requests/minute, 500/day; not for commercial workflows. Consider Premium if you’ll exceed this.

##### How to Customize the Workflow
This workflow is designed to be highly customizable, allowing users to adapt it to their specific needs and use cases. For example, additional malicious website scanners can be integrated through HTTP Request nodes. To make this work, the user simply needs to update the Merge node so that all information flows correctly through the workflow.

In addition, users can connect either Gmail or Outlook nodes to automatically test URLs, binary attachments, and other types of information received via email—helping them evaluate data before opening it.

Users can also customize how they receive reports. For instance, results can be sent through Telegram (as in the default setup), Slack, Microsoft Teams, or even saved to Google Drive or a Google Sheet for recordkeeping and audit purposes. 

For consulting and support, or if you have questions, please feel free to connect with me on [Linkedin](www.linkedin.com/in/michael-gullo-46b3b7274) or [via email](michael.gullo@outlook.com).

## 🔗 Nodes Used

Google Sheets, HTTP Request, Telegram, Telegram Trigger, urlscan.io, AI Agent

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
