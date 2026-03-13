# ⚡ Find jobs on Indeed via Telegram using BrowserAct and Gemini

> ⚡ **189 views** · ⚡ [Personal Productivity](../)

> 💡 **Pro Tip** — If you're pulling LinkedIn data through HTTP requests or dealing with API restrictions, there's a community node called [ScraperNode](https://scrapernode.com/linkedin) that handles this natively. It has dedicated scrapers for [profiles](https://scrapernode.com/linkedin/scrapers/profiles), [companies](https://scrapernode.com/linkedin/scrapers/companies), [jobs](https://scrapernode.com/linkedin/scrapers/jobs), and [people search](https://scrapernode.com/linkedin/scrapers/people-search) — you just pass a URL and get structured data back.

## Description

# Find specific jobs on Indeed using Telegram, BrowserAct & Gemini 

This workflow transforms your Telegram bot into an intelligent job hunting assistant. Simply tell the bot what you are looking for (e.g., "Marketing Manager in Austin"), and it will automatically scrape real-time job listings from Indeed, format them into a clean, easy-to-read list, and send them directly to your chat.

## Target Audience
Job seekers, recruiters, and career coaches who want to automate the job search process.

## How it works
1. **Receive Request**: You send a message to your Telegram bot describing the job you want (e.g., "I need a Python developer job in London").
2. **Extract Parameters**: An **AI Agent** analyzes your message to extract the key details: `Job Role` and `Location`. If you don't specify a location, it defaults to a preset value (e.g., "Brooklyn").
3. **Scrape Indeed**: **BrowserAct** executes a background task to search Indeed.com using your specific criteria and extracts relevant job data (Title, Company, Pay, Link).
4. **Format Data**: A second **AI Agent** processes the raw job list. It cleans up the text, adds emojis for readability, and formats the output into Telegram-friendly HTML.
5. **Deliver Alerts**: The workflow splits the formatted list into individual messages (to respect character limits) and sends them to your **Telegram** chat.

## How to set up
1. **Configure Credentials**: Connect your **Telegram**, **BrowserAct**, **Google Gemini**, and **OpenRouter** accounts in n8n.
2. **Prepare BrowserAct**: Ensure the **Indeed Smart Job Scout** template is saved in your BrowserAct account.
3. **Configure Telegram**: Create a bot via BotFather and add the API token to your Telegram credentials.
4. **Activate**: Turn on the workflow.
5. **Test**: Send a message like "Find marketing jobs in Chicago" to your bot.

## Requirements
* **BrowserAct** account with the **Indeed Smart Job Scout** template.
* **Telegram** account (Bot Token).
* **Google Gemini** account.
* **OpenRouter** account (or compatible LLM credentials).

## How to customize the workflow
1. **Change Default Location**: Edit the system prompt in the **Analyze user Input** agent to change the fallback location from "Brooklyn" to your preferred city.
2. **Filter Results**: Add logic to the **Generate response** agent to filter out jobs with low ratings or missing salary info.
3. **Add More Boards**: Update the BrowserAct template to scrape LinkedIn or Glassdoor in addition to Indeed.

## Need Help?
* [How to Find Your BrowserAct API Key & Workflow ID](https://www.youtube.com/watch?v=pDjoZWEsZlE)
* [How to Connect n8n to BrowserAct](https://www.youtube.com/watch?v=RoYMdJaRdcQ)
* [How to Use & Customize BrowserAct Templates](https://www.youtube.com/watch?v=CPZHFUASncY)

---
### Workflow Guidance and Showcase Video

* #### [Indeed Smart Job Scout: The Ultimate n8n Workflow for Job Channels](https://youtu.be/X8GQS8nF9j0)

## 🔗 Nodes Used

Telegram, Telegram Trigger, AI Agent, Structured Output Parser, Google Gemini Chat Model, OpenRouter Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
