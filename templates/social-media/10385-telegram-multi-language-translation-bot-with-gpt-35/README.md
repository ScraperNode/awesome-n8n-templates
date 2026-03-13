# 📱 Telegram multi-language translation bot with GPT-3.5

> ⚡ **145 views** · 📱 [Social Media & Email Marketing](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.

## Description

SmartPoll Automator is an n8n-powered workflow that automatically creates and publishes polls in Telegram. It helps teams, communities, and businesses run polls without manual work.

You simply send a command or submit a form — the workflow creates the poll and posts it in your selected Telegram group/channel.

### **Key Features**

* Create polls automatically from a webhook or form input
* Support for single-choice and multi-vote polls
* Option to schedule polls
* Logs all poll requests and results
* Sends confirmation and status updates
* Works across multiple Telegram groups/channels

### **Use Cases**

* Daily team check-in polls
* Customer feedback polls
* Community/Q&A voting
* Training/quiz polls
* Opinion surveys for Telegram groups
* Marketing campaign polls

### **Workflow Steps**

| Step | Action                 | Description                                     |
| ---- | ---------------------- | ----------------------------------------------- |
| 1    | Webhook Trigger        | Receives poll request data (question + options) |
| 2    | Data Validation        | Checks if poll question & options are valid     |
| 3    | Poll Formatting        | Structures poll text and options                |
| 4    | Telegram API Poll Send | Sends poll to selected Telegram group/channel   |
| 5    | Optional Scheduler     | Delay or schedule poll time                     |
| 6    | Logging                | Stores poll details for logs                    |
| 7    | Confirmation           | Sends success message to user or admin          |

### **Input Format**

Example JSON input via webhook:

```json
{
  "poll_question": "Which feature should we build next?",
  "options": [
    "AI Email Assistant",
    "Scraper Automation",
    "DevOps Bot"
  ],
  "multiple_answers": false,
  "target_chat_id": "123456789",
  "schedule_time": ""
}
```

### **Output**

* Poll posted in Telegram group
* Confirmation message returned
* Log entry stored

Example confirmation response:

```
Poll successfully created and posted to Telegram!
```

### **Requirements**

* Telegram Bot Token
* Telegram Chat ID
* n8n instance
* Webhook URL or Google Form/CRM connection

### **Benefits**

* Saves time
* Ensures consistent poll format
* Improves engagement in Telegram communities
* Enables automated market research & internal feedback
* No coding required after setup

### **Enhancement Ideas**

* Add AI to generate poll questions
* Add Google Sheets poll request form
* Add analytics dashboard
* Trigger polls from Slack/CRM

### **Status**

✅ Fully Automated
✅ Multi-group support
✅ Real-time logging
🕒 Optional scheduling

## 🔗 Nodes Used

HTTP Request, Webhook

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
