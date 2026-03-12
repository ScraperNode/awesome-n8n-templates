# 🔧 Discover real market problems from Reddit posts with OpenAI

> ⚡ **902 views** · 🔧 [Miscellaneous](../)

## Description

## Automate Market Problem Discovery from Reddit with OpenAI

### Who’s it for  
This workflow is perfect for **entrepreneurs, startup founders, product managers, researchers, and market analysts** who want to **automatically discover and analyze real market problems** from online discussions.  
While this example focuses on identifying issues in the **future of work** and **future of education**, it can be fully adapted to detect **any type of market pain point** by changing the data sources and AI prompts.

If you’re looking to **automate market research**, **find customer pain points**, or **detect unmet needs** in your industry, this template is for you.

### What it does  
This no-code n8n automation:
1. **Collects fresh discussions from Reddit** (default: `Teachers`, `Education`, `RemoteWork` subreddits).
2. **Filters posts by engagement** (more than 5 upvotes by default).
3. **Uses OpenAI GPT-4.1** to:
   - Detect if a post describes a real market problem.
   - Identify the **underlying pain or unmet need**.
   - Suggest a **practical, tech/AI-based solution**.
   - Score the problem’s **Impact**, **Confidence**, and **Ease of prototyping** (ICE framework).
4. **Saves results to Google Sheets** for easy prioritization and action.

This allows you to **automate the detection of market opportunities** without manually reading through hundreds of posts.

### How it works  
- **Schedule Trigger**: Runs the workflow at your preferred interval (daily, hourly, etc.).  
- **Reddit Nodes**: Pull posts from the targeted subreddits (you can replace them with any niche communities).  
- **Filter Node**: Keeps only posts with engagement above your threshold.  
- **OpenAI Node**: Analyzes each post using a **User Prompt** and **System Prompt** in English, returning structured JSON data.  
- **Google Sheets Node**: Stores all results with full scoring for later review and prioritization.

### Requirements  
- Reddit OAuth2 API credentials.  
- OpenAI API key.  
- Google Sheets OAuth2 API credentials.  
- A Google Sheet with these columns:  
  `SubReddit, Title, Content, Short Description, Detected Pain, Possible Solution, Impact, Confidence, Ease, URL, ICE Score`

### How to customize  
- **Change the market focus**: Replace example subreddits with your own industry forums or communities.  
- **Adjust the filter criteria**: Modify the upvote threshold or other parameters.  
- **Edit the AI prompts**: Tailor them to detect specific types of problems (healthtech, fintech, sustainability, etc.).  
- **Integrate more sources**: Add Twitter, LinkedIn, or customer support logs for richer insights.

---

💡 With this automation, you can **continuously monitor and capture market pain points**, turning raw online discussions into **actionable business opportunities**.

## 🔗 Nodes Used

Google Sheets, Reddit, Schedule Trigger, Filter, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)

---

## 💡 Pro Tip

For competitive intelligence, [ScraperNode](https://scrapernode.com) can automate the data collection — [Yelp reviews](https://scrapernode.com/yelp/scrapers/reviews), [Glassdoor company data](https://scrapernode.com/glassdoor/scrapers/companies), and [Crunchbase profiles](https://scrapernode.com/crunchbase/scrapers/companies) all return structured JSON you can feed straight into this workflow.
