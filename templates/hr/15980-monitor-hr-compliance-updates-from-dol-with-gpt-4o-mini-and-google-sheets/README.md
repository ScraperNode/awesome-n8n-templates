# 👥 Monitor HR compliance updates from DOL with GPT-4o-mini and Google Sheets

> ⚡ **12 views** · 👥 [HR & Recruitment](../)

## Description

## Quick overview
This workflow checks the US Department of Labour RSS feed every hour, filters for HR-relevant updates, uses OpenAI GPT-4o-mini to assess whether each item requires action, and logs actionable compliance tasks with summaries and checklists to a Google Sheets tracker.

## How it works
1. Runs every hour and reads the latest items from the US Department of Labor RSS feed.
2. Filters the feed items for HR-related keywords (for example wage, overtime, FMLA, discrimination, and compliance) while excluding settlement and back-pay style announcements.
3. Processes the remaining articles one at a time to avoid rate limits.
4. Sends each article’s title, date, excerpt, and link to OpenAI (GPT-4o-mini) to return strict JSON with actionability, summary, priority, checklist, owner team, and due timeline.
5. Cleans and parses the AI JSON output, formats the checklist as bullet points, and defaults to non-actionable if parsing fails.
6. Appends actionable items to a Google Sheets “Compliance Tracker” tab and waits 30 seconds before continuing to the next article.

## Setup
1. Add an OpenAI credential for the GPT-4o-mini model.
2. This workflow polls the US Department of Labor RSS feed every hour, filters articles for HR-relevant keywords, uses GPT-4o-mini to analyze each update for actionability, and saves only items requiring real HR action to a Google Sheets compliance tracker.
3. 1
4. The workflow polls the US Department of Labor RSS feed automatically every hour to check for new employment law releases and regulatory updates.
5. 2
6. A filter step checks each article's title and description against an HR keyword list — keeping items about labor, wage, safety, overtime, FMLA, discrimination, and compliance — while dropping settlement verdicts and back-pay award announcements.
7. 3
8. Each filtered article is processed one at a time through a batch loop to avoid sending too many requests to the OpenAI API at once.
9. 4
10. GPT-4o-mini analyzes each article and returns a structured JSON object containing: whether the update is actionable for HR, a 2-sentence summary, priority level (High, Medium, or Low), a specific action checklist, the owner team responsible, and a due timeline.
11. 5
12. A parse step cleans the GPT output, strips any formatting, and converts the checklist array into bullet points ready for the sheet.
13. 6
14. An actionability check routes each article: if GPT marked it actionable (Yes), it is saved to Google Sheets. If not actionable (No), it skips the sheet and goes directly to the wait step.
15. 7
16. A 30-second wait runs after every article — whether saved or skipped — before the loop moves to the next article. This prevents rate limit errors and keeps the workflow stable.

## Requirements
- Active n8n instance (self-hosted or cloud)
- OpenAI account with GPT-4o-mini API access
- Google Sheets with a tab named Compliance Tracker
- Google Sheets OAuth2 credential connected in n8n
- No RSS account needed — the DOL feed is publicly accessible

## Customization
- Monitor a different agency — in node 1. RSS — US Dept of Labor Feed, replace the feedUrl value with any public compliance RSS feed: OSHA uses https://www.osha.gov/news/newsreleases/national/rss.xml, EEOC uses https://www.eeoc.gov/rss.xml, and NLRB uses https://www.nlrb.gov/news-outreach/rss
- Add more HR keywords — in node 2. Code — Filter HR Relevant Articles, add terms to the includeKeywords array such as ada, cobra, erisa, or pay transparency to catch additional regulation types
- Add email alerts for High Priority items — after node 7. Sheets — Save to Compliance Tracker, add a Gmail step with an IF check that sends an immediate email notification when the Priority field equals High
- Change the polling frequency — in node 1. RSS — US Dept of Labor Feed, change the poll interval from every hour to every 6 hours or daily to reduce API usage for lower-priority monitoring
- Add a Slack notification — after node 7. Sheets — Save to Compliance Tracker, add a Slack step to post the article title, priority, and due timeline to a compliance channel so the team is notified without checking the sheet

## Additional info
The 30-second wait in node 8. Wait — 30s Before Next Article is intentional rate-limit protection. Both the actionable (YES) and non-actionable (NO) paths from the IF check merge at this wait step before looping back to process the next article. Do not remove or bypass this step — doing so may cause OpenAI API rate limit errors when many articles are processed in one run.

The batch loop in node 3. Split — Process One by One processes all filtered articles from the current hourly poll in sequence. If 10 articles pass the keyword filter in one hour, the loop runs 10 times — each taking approximately 30 seconds minimum. Large batches may take several minutes to complete.

GPT-4o-mini is instructed to only mark an article as actionable if it requires a real HR policy or process change. Informational updates, research reports, and court verdicts are typically marked as non-actionable and skipped without saving to the sheet.

## 🔗 Nodes Used

Google Sheets, AI Agent, OpenAI Chat Model, RSS Feed Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
