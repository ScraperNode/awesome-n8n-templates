# 📊 Track n8n community topics with keywords and save to Google Sheets

> ⚡ **929 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

This template is designed for community managers, developers, and enthusiasts who want to monitor and capture discussions on the n8n community forum by specific keywords. By tracking new topics that match your provided keyword, the workflow automatically logs them into a Google Sheet, helping you keep a pulse on trending discussions and manage community insights effortlessly.

### How it Works
**Keyword Monitoring:** The workflow continuously monitors the n8n community forum for new topics containing your specified keyword.

**Data Extraction:** When a matching topic is found, relevant details such as id, title, URL, and posting time are extracted.

**Google Sheets Integration:** The extracted information is automatically appended as a new row in your Google Sheet, providing an organized log of community discussions.

**Alert Option:** Optionally, you can add notifications (e.g., Slack messages or emails) to alert you when a new topic is captured, ensuring you never miss an important update.

### Set Up Steps

**Import the Workflow:** Download and import the workflow into your n8n instance.

**Configure Keyword Monitoring:** In the HTTP Request node, set your desired keyword to filter the n8n community topics.

**Set Up Google Sheets:** Connect your Google Sheets account and specify the target sheet where the new topics should be logged.

**Customize Data Fields:** Adjust the data extraction node parameters if you wish to capture additional details from each topic.

**Deploy and Test:** Deploy the workflow and perform a test run to confirm that new topics matching the keyword are correctly added to your Google Sheet.

**Set Up Messaging Channels (Optional):** Connect to Slack, Email or other providers to get instant messages when new topics are added into your Google Sheet.

This template streamlines the process of tracking community discussions, ensuring you have timely and organized insights to enhance your community engagement and strategic decision-making. Enjoy seamless monitoring and easy data management with this ready-to-use n8n workflow template!

## 🔗 Nodes Used

Send Email, Google Sheets, HTTP Request, Slack, Schedule Trigger, Google Sheets Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
