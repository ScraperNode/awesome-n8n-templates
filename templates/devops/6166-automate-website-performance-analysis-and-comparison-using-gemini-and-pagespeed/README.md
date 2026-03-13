# ⚙️ Automate website performance analysis and comparison using Gemini and PageSpeed Insights

> ⚡ **1,483 views** · ⚙️ [DevOps & CI/CD](../)

> 💡 **Pro Tip** — For competitive intelligence, [ScraperNode](https://scrapernode.com) can automate the data collection — [Yelp reviews](https://scrapernode.com/yelp/scrapers/reviews), [Glassdoor company data](https://scrapernode.com/glassdoor/scrapers/companies), and [Crunchbase profiles](https://scrapernode.com/crunchbase/scrapers/companies) all return structured JSON you can feed straight into this workflow.

## Description

The **Page Speed Insight** workflow automates website performance analysis by integrating Google PageSpeed Insights API with Discord messaging and Gemini. This n8n workflow provides expert-level performance audits and comparisons, delivering actionable insights for website owners, SEO professionals, and developers.

![Screenshot 20250719 at 14.25.27.png](fileId:1807)

Disclaimer: this workflow using community nodes [Google PageSpeed Insights Community Node](https://www.npmjs.com/package/n8n-nodes-google-pagespeed) 


## 💡 Why Use Page Speed Insight?

- **Save Time:** Instantly analyze and compare website speeds without manual tool usage
- **Eliminate Guesswork:** Receive expert audit reports that translate technical data into clear, actionable insights
- **Improve Website Outcomes:** Identify critical bottlenecks and enhancements prioritized by AI-driven analysis
- **Seamless Integration:** Pull URLs and deliver reports directly via Discord for team collaboration and immediate response


## ⚡ Who Is This For?

- Webmasters and website owners seeking fast, automated performance checks
- SEO analysts who need consistent, data-backed website comparisons
- Developers requiring clear, prioritized action points from performance audits
- Digital agencies managing multiple client sites with ongoing monitoring needs


## 🔧 What This Workflow Does

- **⏱ Trigger:** Discord message containing URLs or scheduled execution
- **📎 Parse:** Extracts URLs and determines analysis type (single/comparison)
- **🔍 Analyze:** Calls Google PageSpeed API for performance data
- **🤖 Process:** AI generates user-friendly reports from raw Lighthouse JSON
- **💌 Deliver:** Sends chunked reports to Discord channels
- **🗂 Log:** Stores execution data for review and improvement

![Screenshot 20250719 at 14.27.24.png](fileId:1806)

## 🔐 Setup Instructions

1. Import the provided JSON workflow into your n8n instance

2. Set up credentials for:
   - Google PageSpeed API (ensure you have a valid API key — get yours [here](https://developers.google.com/speed/docs/insights/v5/get-started))
   - Discord Bot API with permissions to read messages and send messages in your chosen guild/channel

3. Customize the workflow by adjusting:
   - Discord guild and channel IDs where messages are monitored and results posted
   - Scheduled trigger interval if needed
   - Any prompt text or AI model parameters to tailor report tone and detail level

4. Test thoroughly with real URLs and Discord interaction to confirm smooth data flow and output quality


## 🧩 Pre-Requirements

- Active n8n instance (Cloud or self-hosted)
- [n8n Google PageSpeed community node](https://www.npmjs.com/package/n8n-nodes-google-pagespeed)
- Google PageSpeed Insights API key
- Discord Bot credentials with channel access
- Google Gemini AI credentials (recommended)


## 🛠️ Customize It Further

- Extend to analyze desktop performance or other device types easily by modifying the PageSpeed API call
- Integrate with Slack, email, or other team tools alongside Discord for broader notification
- Enhance report depth by adding more AI-driven insights like competitor site recommendations or historical trend tracking



## 🧠 Nodes Used

- [Google PageSpeed Insights Community Node](https://www.npmjs.com/package/n8n-nodes-google-pagespeed)
- Discord (getAllMessages, sendMessage)
- Code (URL parsing, message chunking)
- AI Language Model (Google Gemini)
- Schedule Trigger
- Switch (message type handling)
- Sticky Notes (workflow guidance)



## 📞 Support

Made by: **[khaisa Studio](https://khaisa.studio?utm_source=n8nofficial)**  
**Tag:** automation, performance, SEO, google-pagespeed, discord  
**Category:** Monitoring & Reporting  

Need a custom solution? **[Contact Me](https://khaisa.studio/pages/contact)**

## 🔗 Nodes Used

Discord, Schedule Trigger, Basic LLM Chain, Google Gemini Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
