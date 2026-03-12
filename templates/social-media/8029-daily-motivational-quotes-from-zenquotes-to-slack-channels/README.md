# 📱 Daily motivational quotes from ZenQuotes to Slack channels

> ⚡ **413 views** · 📱 [Social Media & Email Marketing](../)

## Description

# 🌟 Send Daily Motivational Quote to Slack

This workflow automatically posts an inspiring motivational quote to your Slack channel every morning at **8 AM**. It uses the free [ZenQuotes.io](https://zenquotes.io) API (no API key required) to fetch quotes and delivers them to your team in Slack.

---

## ⚙️ How It Works

1. **Trigger at 8 AM**  
   A **Cron node** runs daily at **8 AM EST** (America/New_York timezone by default).

2. **Fetch a Random Quote**  
   The workflow sends an **HTTP Request** to [ZenQuotes.io API](https://zenquotes.io/api/random) to retrieve a motivational quote.

3. **Format the Message**  
   A **Code node** structures the quote into a Slack-friendly message, adding styling, emojis, and the author’s name.

4. **Post to Slack**  
   Finally, the **Slack node** sends the motivational message to your chosen Slack channel (default: `#general`).

---

## 🛠️ Setup Steps

### 1. Connect Slack App
- Go to [api.slack.com](https://api.slack.com) → Create a new app.  
- Add OAuth scopes:  
  - `chat:write`  
  - `channels:read`  
- Install the app to your Slack workspace.  
- Copy credentials into n8n.

### 2. Configure Slack Channel
- Default is `#general`.  
- Update the **Slack node** if you want to post to another channel.

### 3. Adjust Timezone (Optional)
- Workflow is set to **America/New_York** timezone.  
- Change under workflow → settings → timezone if needed.

---

## ✅ Example Slack Output

🌟 Daily Motivation 🌟
"Success is not final, failure is not fatal: it is the courage to continue that counts."
— Winston Churchill

---

⚡ Once enabled, your team will receive a motivational quote in Slack every morning at 8 AM — simple, automatic, and uplifting!

## 🔗 Nodes Used

Cron, HTTP Request, Slack

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
