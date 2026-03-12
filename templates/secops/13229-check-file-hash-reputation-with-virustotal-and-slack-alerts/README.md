# 🔒 Check file hash reputation with VirusTotal and Slack alerts

> ⚡ **9 views** · 🔒 [SecOps & Security Automation](../)

## Description

## 🧩 Template Description
**File Hash Reputation Checker** is a security automation workflow that validates file hashes (**MD5**, **SHA1**, **SHA256**) and checks their reputation using the **VirusTotal API**. It is designed for SOC teams, security engineers, and automation pipelines that need fast and consistent malware verdicts from a single hash input.

The workflow supports **two input methods**:
- An **HTTP webhook** for API-based integrations

- A **Slack slash command** (`/hash-check`) for quick analyst-driven checks directly from Slack

Once a hash is submitted, the workflow normalizes and validates the input, queries VirusTotal for detection statistics, and determines whether the file is **Malicious**, **Suspicious**, **Clean**, or **Unknown**. Results are returned as a structured JSON response and also posted to Slack with severity-based formatting.

### ⚙️ How It Works
1. A file hash is submitted via **HTTP POST** or Slack using `/hash-check FILE_HASH`.

2. The hash is normalized (lowercased and trimmed).

3. The workflow validates the hash format (**MD5**, **SHA1**, or **SHA256**).

4. VirusTotal is queried for hash reputation data.

5. Detection statistics are analyzed to calculate a verdict:
	* **Malicious**
	* **Suspicious** 	
	* **Clean** 
	* **Unknown**

6.  A Slack message is sent for **all verdicts**, with alert-style formatting for malicious results.

7. A structured **JSON response** is returned to the requester.

## 🛠️ Setup Steps

1. **VirusTotal API** 
	* Create or use an existing VirusTotal account.

	* Add your API key to n8n as **VirusTotal API credentials**.

2. **Slack Configuration**
	* Create a Slack App. 
	* Enable **Slash Commands** and create `/hash-check`.
	* Set the Request URL to the n8n webhook endpoint. 
	* Connect your Slack account in n8n credentials.

3. **Activate the Workflow**
	* Activate the workflow in n8n. 
	* Test using:

		* HTTP POST: `{ "text": "file_hash" }`

		* Slack: `/hash-check FILE_HASH;`

## 🎛️ Customization Ideas

- Route Slack messages to different channels based on severity.

- Add additional outputs (email, SIEM, ticketing systems).

- Extend the workflow to support multiple hashes per request.

## 🔗 Nodes Used

HTTP Request, Slack, Webhook

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
