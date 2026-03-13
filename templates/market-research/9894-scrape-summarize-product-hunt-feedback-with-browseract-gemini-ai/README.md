# 📊 Scrape & summarize Product Hunt feedback with BrowserAct & Gemini AI

> ⚡ **161 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

![Product Hunt Launch Monitor](https://i.postimg.cc/zBFxDV3c/Screen-Shot-20251025115027.png)

## Product Hunt Launch Monitor - Scraping & Summarization of Product Hunt Feedbacks

### This n8n template provides automated competitive intelligence by scraping and summarizing Product Hunt launch feedback with a specialized AI analyst.

This workflow is essential for product managers, marketing teams, and founders who need to quickly gather and distill actionable insights from competitor launches to inform their own product strategy and positioning.

---
### **Self-Hosted Only** 
This Workflow uses a community contribution and is designed and tested for **self-hosted n8n instances** only.

---
### How it works
* The workflow can be triggered **manually** but is designed to be easily switched to a **Schedule Trigger** for continuous competitive monitoring.
* A **Google Sheet** node fetches a list of product names you wish to monitor, which the workflow processes in a loop.
* A **BrowserAct** node then initiates a web scraping task to collect all the public comments from the specified Product Hunt launch page.
* An **AI Agent**, powered by **Google Gemini**, acts as a competitive intelligence analyst, processing the raw comments.
* The AI distills the feedback into a structured format, providing a concise **Summary**, pinpointing key **Positive** and **Negative** feedback, and generating **Recommendations** for a similar product to be successful.
* The structured analysis is saved to a **Google Sheet** for easy review and tracking.
* Finally, a **Slack** notification confirms that the Product Hunt results have been processed and updated.

---
### Requirements
* **BrowserAct** API account for web scraping
* **BrowserAct** "**Product Hunt Launch Monitor**" Template
* **BrowserAct** n8n Community Node -&gt; ([n8n Nodes BrowserAct](https://www.npmjs.com/package/n8n-nodes-browseract-workflows))
* **Gemini** account for the AI Agent
* **Google Sheets** credentials for input and saving the analysis
* **Slack** credentials for sending notifications

---

### Need Help?
* #### [How to Find Your BrowseAct API Key & Workflow ID](https://www.youtube.com/watch?v=pDjoZWEsZlE)
* #### [How to Connect n8n to Browseract](https://www.youtube.com/watch?v=RoYMdJaRdcQ)
* #### [How to Use & Customize BrowserAct Templates](https://www.youtube.com/watch?v=CPZHFUASncY)
* #### [How to Use the BrowserAct N8N Community Node](https://youtu.be/j0Nlba2pRLU)

---
### Workflow Guidance and Showcase

* #### [Steal Your Competitor's Weaknesses (Product Hunt + BrowserAct + n8n)](https://youtu.be/87327LGJYi8)

## 🔗 Nodes Used

Google Sheets, Slack, AI Agent, Structured Output Parser, Google Gemini Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
