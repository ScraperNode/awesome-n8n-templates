# ⚙️ Automate website performance analysis and comparison using Gemini and PageSpeed Insights

> ⚡ **1,713 views** · ⚙️ [DevOps & CI/CD](../)

> 💡 **Pro Tip** — For competitive intelligence, [ScraperNode](https://scrapernode.com) can automate the data collection — [Yelp reviews](https://scrapernode.com/yelp/scrapers/reviews), [Glassdoor company data](https://scrapernode.com/glassdoor/scrapers/companies), and [Crunchbase profiles](https://scrapernode.com/crunchbase/scrapers/companies) all return structured JSON you can feed straight into this workflow.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

Know exactly how fast your site is, without opening a single tool. The **Page Speed Insight** workflow audits website performance with the Google PageSpeed Insights API and Gemini, then delivers clear, actionable reports straight to Discord. Single URL or side-by-side comparison, your call.

![Screenshot 20250719 at 14.25.27.png](fileId:1807)

Disclaimer: this workflow uses the community node [Google PageSpeed Insights Community Node](https://www.npmjs.com/package/n8n-nodes-google-pagespeed)

*Last updated: September 2026.*

## Why Use Page Speed Insight?

- **Save Time:** Analyze and compare website speeds instantly, no manual tool juggling.
- **Eliminate Guesswork:** Get audit reports that turn technical data into clear next steps.
- **Improve Website Outcomes:** Spot critical bottlenecks and fixes, prioritized by AI analysis.
- **Seamless Integration:** Drop in URLs and receive reports via Discord, ready for team discussion.


## Who Is This For?

- Webmasters and website owners seeking fast, automated performance checks
- SEO analysts who need consistent, data-backed website comparisons
- Developers requiring clear, prioritized action points from performance audits
- Digital agencies managing multiple client sites with ongoing monitoring needs


## What This Workflow Does

- **Trigger:** Discord message containing URLs or scheduled execution
- **Parse:** Extracts URLs and determines analysis type (single/comparison)
- **Analyze:** Calls Google PageSpeed API for performance data
- **Process:** AI turns raw Lighthouse JSON into user-friendly reports
- **Deliver:** Sends chunked reports to Discord channels
- **Log:** Stores execution data for review and improvement

![Screenshot 20250719 at 14.27.24.png](fileId:1806)

## Setup Instructions

1. Import the provided JSON workflow into your [n8n](https://n8n.partnerlinks.io/creator-khmuhtadin) instance

2. Set up credentials for:
   - Google PageSpeed API (ensure you have a valid API key — get yours [here](https://developers.google.com/speed/docs/insights/v5/get-started))
   - Discord Bot API ([developer docs](https://discord.com/developers/docs/intro)) with permissions to read messages and send messages in your chosen guild/channel

3. Customize the workflow by adjusting:
   - Discord guild and channel IDs where messages are monitored and results posted
   - Scheduled trigger interval if needed
   - Any prompt text or AI model parameters to tailor report tone and detail level

4. Test thoroughly with real URLs and Discord interaction to confirm smooth data flow and output quality


## Pre-Requirements

- Active [n8n](https://n8n.partnerlinks.io/creator-khmuhtadin) instance (Cloud or self-hosted)
- [n8n Google PageSpeed community node](https://www.npmjs.com/package/n8n-nodes-google-pagespeed)
- Google PageSpeed Insights API key
- Discord Bot credentials with channel access
- Google Gemini AI credentials (recommended)


## Customize It Further

- Extend to analyze desktop performance or other device types easily by modifying the PageSpeed API call
- Integrate with Slack, email, or other team tools alongside Discord for broader notification
- Enhance report depth by adding more AI-driven insights like competitor site recommendations or historical trend tracking



## Nodes Used

- [Google PageSpeed Insights Community Node](https://www.npmjs.com/package/n8n-nodes-google-pagespeed)
- Discord (getAllMessages, sendMessage)
- Code (URL parsing, message chunking)
- AI Language Model (Google Gemini)
- Schedule Trigger
- Switch (message type handling)
- Sticky Notes (workflow guidance)

### Quick Answers
**How do I run an audit?**  
Send URLs in a Discord message or let the schedule trigger it automatically.  
**Single URL or comparison?**  
Both. It detects whether you sent one URL or several and adjusts the analysis.  
**What do I need first?**  
A Google PageSpeed API key, Discord bot credentials, and Gemini credentials.  

## Support

Made by: **[khmuhtadin](https://khmuhtadin.com)**  
**Tag:** automation, performance, SEO, google-pagespeed, discord  
**Category:** Monitoring & Reporting  

Need a custom solution? **[Contact Me](https://khmuhtadin.com/contact)**

## Additional info
Built with [n8n](https://n8n.partnerlinks.io/creator-khmuhtadin). Need an assessment on your business? Feel free to reach out at [https://khmuhtadin.com/consultation/](https://khmuhtadin.com/consultation/)

## 🔗 Nodes Used

Discord, Schedule Trigger, Basic LLM Chain, Google Gemini Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
