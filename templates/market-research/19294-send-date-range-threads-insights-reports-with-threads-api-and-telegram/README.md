# 📊 Send date-range Threads insights reports with Threads API and Telegram

> ⚡ **2 views** · 📊 [Market Research & Insights](../)

## Description

## Quick overview
This workflow pulls Threads Insights for a specified date range via the Threads Graph API, generates a self-contained HTML performance report (metrics, trend chart, and follower demographics), and delivers the report as a document to a Telegram chat.

## How it works
1. Starts manually when you run the workflow.
2. Reads the configured date range, Threads access token, Threads user ID, and target Telegram chat ID.
3. Validates the inputs, converts the date range to Unix timestamps (GMT+6), and builds Threads Graph API request URLs for metrics, followers, demographics, and profile data.
4. Calls the Threads Graph API for each request and collects the JSON responses.
5. Consolidates all request/response pairs into one structured dataset for the reporting period.
6. Generates a styled HTML report with summary totals, a daily views line chart, and top follower demographics (country, city, gender), and attaches it as an HTML file.
7. Sends the HTML report file to the configured Telegram chat as a document with an auto-generated caption.

## Setup
1. Create or obtain a Threads long-lived access token and set the token plus your numeric Threads user ID in the input fields.
2. Add a Telegram Bot credential in n8n, ensure the bot can message the target chat, and set the Telegram chat ID.
3. Update the from/to dates (YYYY-MM-DD) to the reporting period you want, and adjust the timezone handling in the request builder if you don’t want GMT+6.

## Requirements
- ### X Token
- You will need a **Threads access token** to perform this task. To obtain it, you first need to create an app within your **Meta Developer account**. After creating the app, select **Threads** from the available use cases and enable the required **Insights API** permissions. From there, you will be able to obtain the **Threads access token and Threads user ID**. Make sure to securely collect and store these credentials, and enable any additional permissions required for the API calls to work properly. Without the necessary permissions and credentials, the automation will not function correctly.
- You will also need a **Telegram account**. To use Telegram with the automation, you need to obtain your **Telegram User ID**. You can use a Telegram bot to retrieve your personal User ID. Providing the correct User ID is important; without it, the automation will not be able to send messages to your account.
- In addition, you need to create your own **Telegram bot** using **@BotFather**. Once the bot is created, connect it to your **n8n automation workflow** using the appropriate Telegram bot credentials. After completing these steps, n8n will be able to communicate with your Telegram bot and send the required notifications or data to your Telegram account.

## Customization
- You can further customize this automation according to your requirements. For example, you can schedule it to run at a specific time, or configure it to automatically send a report on the **30th of every month** containing the data and insights from the previous 30 days. You can also customize the reporting period by defining a specific **date range**, allowing you to generate reports for any timeframe you need. Alternatively, you can add a **Webhook node** to the workflow so that the automation can be triggered externally whenever a request is sent to the webhook.
- Reports like these can be extremely useful in a variety of situations. They provide valuable insights into the overall performance of a **Threads account**, including which content is generating the most reach, how views and engagement are changing compared with the previous month, and how the follower count is growing over time. This information is particularly important for **media agencies, content creators, and marketing teams**, as it helps them understand which types of content are performing well and where improvements may be needed.
- These insights are also highly valuable for **advertising and marketing campaigns**. If an account is being used for advertising or is associated with advertisers, having a detailed account insights report can help evaluate campaign performance, audience growth, content reach, and overall engagement. This makes automated reporting a useful tool for tracking performance, making data-driven marketing decisions, and presenting clear performance reports to clients or stakeholders.

## 🔗 Nodes Used

HTTP Request, Telegram

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
