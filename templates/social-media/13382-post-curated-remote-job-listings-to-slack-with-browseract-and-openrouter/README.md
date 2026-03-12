# 📱 Post curated remote job listings to Slack with BrowserAct and OpenRouter

> ⚡ **36 views** · 📱 [Social Media & Email Marketing](../)

## Description

# Auto-post curated remote jobs to Slack with BrowserAct and OpenRouter

This workflow acts as an intelligent job board curator for your Slack community. It scrapes multiple sources (e.g., Dice, Indeed), uses AI to filter out spam and low-quality listings based on your specific profile, formats the best jobs into professional posts, and publishes them automatically on a schedule.

## Target Audience
Community managers running job boards, recruiters, and developers building niche job aggregators.

## How it works
1.  **Scheduled Fetch**: Every week (or your chosen interval), the workflow triggers.
2.  **Targeting**: It reads your configured user profile (Skills, Location, Salary) and list of target job sites.
3.  **Scraping**: **BrowserAct** scrapes the latest job listings from the specified sites (e.g., Dice, Indeed).
4.  **AI Curation**: An **AI Agent** (using OpenAI/GPT-4) reviews each job against your profile. It normalizes salaries, scores relevance, and filters out mismatches or low-quality descriptions.
5.  **Format Content**: The AI writes a structured summary for the top matches, including "Why it fits" analysis.
6.  **Publish**: The workflow sends the curated digest to your **Slack** channel.

[Image of AI job curator workflow diagram]

## How to set up
1.  **Configure Credentials**: Connect your **Slack**, **BrowserAct**, and **OpenRouter** accounts in n8n.
2.  **Prepare BrowserAct**: Ensure you have the **Job Board Aggregator** template saved in your BrowserAct account.
3.  **Configure Profile**: Open the **Add a Resume** node and update the variables (`Location`, `Skill`, `Income`, `Details`, `Target_Sites`) to match your needs.
4.  **Configure Slack**: Update the **Send a message to the Slack channel** node with your Slack Channel ID.
5.  **Activate**: Turn on the workflow.

[Image of n8n integration architecture]

## Requirements
* **BrowserAct** account with the **Job Board Aggregator** template.
* **Slack** account (Bot Token).
* **OpenRouter** account (or compatible LLM credentials).

## How to customize the workflow
1.  **Add More Sources**: Add URLs to the `Target_Sites` array in the **Add a Resume** node.
2.  **Refine Filters**: Update the system prompt in the **Analyze the jobs** agent to be stricter about seniority or specific technologies.
3.  **Change Frequency**: Adjust the **Weekly Trigger** to run daily if you want more frequent updates.

## Need Help?
* [How to Find Your BrowserAct API Key & Workflow ID](https://www.youtube.com/watch?v=pDjoZWEsZlE)
* [How to Connect n8n to BrowserAct ](https://www.youtube.com/watch?v=RoYMdJaRdcQ)
* [How to Use & Customize BrowserAct Templates](https://www.youtube.com/watch?v=CPZHFUASncY)

---
### Workflow Guidance and Showcase Video

* #### [How to Automate Your Job Hunt: n8n + AI Resume Matcher & Slack Alerts](https://youtu.be/IvgBQfmvDNI)

## 🔗 Nodes Used

Slack, Schedule Trigger, AI Agent, Structured Output Parser, OpenRouter Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)

---

## 💡 Pro Tip

Job boards are notoriously hard to scrape — CAPTCHAs, rate limits, constantly changing layouts. [ScraperNode](https://scrapernode.com) has maintained scrapers for [Indeed jobs](https://scrapernode.com/indeed/scrapers/jobs), [Glassdoor reviews](https://scrapernode.com/glassdoor/scrapers/reviews), and [Glassdoor jobs](https://scrapernode.com/glassdoor/scrapers/jobs) that handle all of that for you.
