# 📋  Trello to Slack Notification Trigger: Task/Card Move Alerts 

> ⚡ **261 views** · 📋 [Project Management](../)

## Description

Sends a Slack notification whenever a Trello card is moved between lists on a specific board. Message format (bolded parts):  
`Task: *{{ $json.Task }}* moved from *{{ $json['Previous Step'] }}* to *{{ $json['New Step'] }}*`

## ⚙️ Setup Instructions

### 1️⃣ Connect Trello (Developer API)
1. Get your **API key** here → [Trello App Key](https://trello.com/app-key)  
2. On the same page, generate a **Token** (click **Token**).  
3. In n8n → **Credentials → New → Trello API** → paste **API Key** + **Token**, then save.  
4. Open each Trello node (**Get Board**, **Get Lists**, **Get Cards**) and select your Trello credential.  

---

### 2️⃣ Connect Slack
1. Go to [Slack API Apps](https://api.slack.com/apps) and create a new app.  
2. Add **OAuth & Permissions** → include scopes like:  
   - `chat:write` (to send messages)  
   - `users:read` (if targeting specific users)  
3. Install the app to your workspace → copy the **Bot User OAuth Token**.  
4. In n8n → **Credentials → New → Slack OAuth2 API** → paste the token and save.  
5. In your **Slack node** (e.g., *Send a message*), select your Slack credential, and choose whether to send messages to a **channel** or a **user**.  

3️⃣ Get Your Trello Board ID

Find your board’s shortlink in the URL (e.g. in https://trello.com/b/DCpuJbnd/administrative-tasks, the shortlink is DCpuJbnd).

Run this request in an HTTP node (replace placeholders with your values):

GET https://api.trello.com/1/boards/{BOARD_SHORTLINK}?fields=id&key={YOUR_TRELLO_KEY}&token={YOUR_TRELLO_TOKEN}


Copy the "id" from the response — that’s your board ID.

Paste it into the Trello Trigger node under Model ID.


## 📬 Contact
Need help customizing this workflow or building automations?  

📧 [robert@ynteractive.com](mailto:robert@ynteractive.com)  
🔗 [Robert Breen](https://www.linkedin.com/in/robert-breen-29429625/)  
🌐 [ynteractive.com](https://ynteractive.com)

## 🔗 Nodes Used

HTTP Request, Slack, Trello Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
