# 📊 Discord daily digest for multiple Google Analytics accounts

> ⚡ **529 views** · 📊 [Market Research & Insights](../)

## Description

# Overview
Fetch Multiple Google Analytics GA4 metrics daily, post to Discord, update previous day’s entry as GA data finalizes over seven days.
![Discord Daily Digest for Multiple Google Analytics Accounts](https://articles.emp0.com/wp-content/uploads/2025/06/Discord-Daily-Digest-for-Multiple-Google-Analytics-Accounts.png)

## Benefits
- Automates daily traffic reporting
- Maintains single message per day, avoids channel clutter
- Provides near–real-time updates by editing prior messages

## Use Case
- Teams tracking website performance via Discord (or any chat tool) without manual copy–paste. Marketing managers, community moderators, growth hackers.
- If your manager asks you for daily marketing report every morning, you can now automate it

## Notes
- google analytics node in n8n does not provide real time data. The node updates previous values for the next 7 days
- discord node on n8n does not have features to update an exisiting message by message id. So we have used the discord api for this
- most businesses use multiple google analytics properties across their digital platforms


# Core Logic

1. Schedule trigger fires once a day.
2. Google Analytics node retrieves metrics for date ranges (past 7 days)
3. Aggregate node collates all records.
4. Discord node fetches the last 10 messages in the broadcast channel
5. Code node maps existing Discord messages by to the google analytics data using the date fields
5. For each GA record:
	1. If no message exists → send new POST to the discord channel
	2. If message exists and metrics changed, send an update patch to the existing discord message
8. Batch loops + wait nodes prevent rate-limit.

# Setup Instructions

1. Import workflow JSON into n8n.
2. [Follow the n8n guide to Create Google Analytics OAuth2 credential](https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.googleanalytics) with access to all required GA accounts. 
3. [Follow the n8n guide to Create Discord OAuth2 credential](https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.discord) for “Get Messages” operations.
4. [Follow the Discord guide to Create HTTP Header Auth credential](https://discord.com/developers/docs/reference) named “Discord-Bot” with header

```
Key: Authorization

Value: Bot &lt;your-bot-token&gt;
```


5. In the two Set nodes in the beginning of the flow, assign discord_channel_id and google_analytics_id.
![Edit discord and google analytics id](https://articles.emp0.com/wp-content/uploads/2025/06/edit-discord-and-google-analytics-id-1.png)
	1. Get your discord channel id by sending a text on your discord channel and then copy message link
	2. Paste the text below and you will see your message link in the form of https://discord.com/channels/server_id/channel_id/message_id , you will want to get the channel_id which is the number in the middle
![get discord channel id](https://articles.emp0.com/wp-content/uploads/2025/06/12345678-1.png)
	3. Find your google analytics id by going to google analytics dashboard, seeing the properties in the top right and copy paste that number to the flow
![get google analytics id ](https://articles.emp0.com/wp-content/uploads/2025/06/12345678.png)


8. Adjust schedule trigger times to your preferred report hour.

9. Activate workflow.

# Customization

Replace Discord HTTP Request nodes with Slack, ClickUp, WhatsApp, Telegram integrations by swapping POST/PATCH endpoints and authentication.

## 🔗 Nodes Used

HTTP Request, Discord, Google Analytics, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
