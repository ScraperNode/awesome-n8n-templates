# 📱 Create daily Israeli economic newsletter using RSS and GPT-4o

> ⚡ **3,215 views** · 📱 [Social Media & Email Marketing](../)

## Description

Daily Economic News Brief for Israel (Hebrew, RTL, GPT-4o)

### Overview ###
Stay ahead of the curve with this AI-powered workflow that delivers a daily economic summary tailored for professionals tracking the Israeli economy.
At 8:00 PM Israel Time, this workflow:

- Retrieves the latest articles from Calcalist and Mako via RSS
- Filters duplicates and irrelevant stories
- Uses OpenAI’s GPT-4o to identify the 5 most important stories of the day
- Summarizes each article in concise, readable Hebrew
- Generates a fully styled, responsive HTML email (with proper RTL layout)
- Sends it to your inbox using your preferred SMTP email provider

**Perfect for economists, analysts, investors, or policymakers who want an actionable and personalized news digest -- no distractions, no fluff.**

### Setup Instructions ###
**Estimated setup time:**
- 10 minutes

**Required credentials:**

- OpenAI API Key
- SMTP credentials (for email delivery)

**Steps:**
1. Import this template into your n8n instance.
3. Add your OpenAI API Key under credentials.
5. Configure the SMTP Email node with:
	Host (e.g. smtp.gmail.com)
	Port (465 or 587)
	Username (your email)
	Password (app-specific password or login)
15. Set your target email address in the last node.
17. (Optional) Customize the GPT prompt to adjust tone or audience (e.g. general public, policy makers).
19. Activate the workflow and receive daily updates straight to your inbox.

### Customization Tips ###
- Change the RSS sources to pull from other Hebrew or international news websites
- Modify the summarization prompt to fit different sectors (e.g. tech, health, politics)
- Add integrations like Notion, Airtable, or Telegram for logging or distribution
- Apply your branding to the HTML output (logos, footer, colors)

### Why Use This? ###
This is more than a news digest. It’s an intelligent economic assistant that filters noise, highlights what matters, and keeps you informed-automatically.

**You can set it up in 10 minutes and benefit every single day.**

## 🔗 Nodes Used

Send Email, Function, HTTP Request, RSS Read, Schedule Trigger, Filter

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
