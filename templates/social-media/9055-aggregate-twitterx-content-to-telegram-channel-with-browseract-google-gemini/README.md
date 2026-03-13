# 📱 Aggregate Twitter/X content to Telegram channel with BrowserAct & Google Gemini

> ⚡ **336 views** · 📱 [Social Media & Email Marketing](../)

> 💡 **Pro Tip** — For competitive intelligence, [ScraperNode](https://scrapernode.com) can automate the data collection — [Yelp reviews](https://scrapernode.com/yelp/scrapers/reviews), [Glassdoor company data](https://scrapernode.com/glassdoor/scrapers/companies), and [Crunchbase profiles](https://scrapernode.com/crunchbase/scrapers/companies) all return structured JSON you can feed straight into this workflow.

## Description

## Automate social media content aggregation to a Telegram channel

### This n8n template automatically aggregates and analyzes key updates from your social media platforms Home Page, delivering them as curated posts to a Telegram channel.

This workflow is perfect for **digital marketers, brand managers, or data analysts and Busy people,** seeking to monitor real-time trends and competitor activity without manual effort.

---
### How it works
* The workflow is triggered automatically on a schedule to aggregate the latest social media posts.
* A series of **If** and **Wait** nodes monitor the data processing job until the full data is ready.
* An **AI Agent**, powered by **Google Gemini**, refines the content by summarizing posts and removing duplicates.
* An **If** node checks for an image in the post to decide if a photo or a text message should be sent.
* Finally, the curated posts are sent to your Telegram channel as rich media messages.

---
### How to use
1.  **Set up BrowserAct Template:** In your **BrowserAct** account, set up **“Twitter/X Content Aggregation”** template.
 
2.  **Set up Credentials:** Add your credentials for **BrowserAct** In Run Node , **Google Gemini** in Agent Node, and **Telegram** in Send Node.

3.  **Add Workflow ID:** Change the `workflow_id` value inside the **HTTP Request** inside the **Run Node**, to match the one from your BrowserAct workflow.

4.  **Activate Workflow:** To enable the automated schedule, simply activate the workflow.

---
### Requirements
* **BrowserAct** API account
* **BrowserAct** **“Twitter/X Content Aggregation”** Template
* **Gemini** account
* **Telegram** credentials

---
### customizing this workflow
This workflow provides a powerful foundation for social media monitoring. You could:
* Replace the Telegram node with an email or Slack node to send notifications to a different platform.
* Add more detailed prompts to the AI Agent for more specific analysis or summarization.
* customize BrowserAct Workflow to reach your desire.
---

### Need Help ?
* #### [How to Find Your BrowseAct API Key & Workflow ID](https://www.youtube.com/watch?v=pDjoZWEsZlE)
* #### [How to Connect n8n to Browseract](https://www.youtube.com/watch?v=RoYMdJaRdcQ)
* #### [How to Use & Customize BrowserAct Templates](https://www.youtube.com/watch?v=CPZHFUASncY)
---
### Workflow Guidance and Showcase

* #### [Automate Your Social Media: Get All X/Twitter Updates Directly in Telegram!](https://youtu.be/6CXe6k9vihk)

## 🔗 Nodes Used

HTTP Request, Telegram, Schedule Trigger, AI Agent, Structured Output Parser, Google Gemini Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
