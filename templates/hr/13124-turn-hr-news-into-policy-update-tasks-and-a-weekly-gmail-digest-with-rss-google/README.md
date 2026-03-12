# 👥 Turn HR news into policy update tasks and a weekly Gmail digest with RSS, Google Drive, Gemini, and GPT-5.2

> ⚡ **62 views** · 👥 [HR & Recruitment](../)

## Description

# HR Weekly Radar
AI powered workflow that scans HR news via RSS, checks which of your policies or contract templates might need updates, and sends a weekly internal newsletter as HTML.

## What this template is for
If you maintain an HR policy and template library, this helps you spot relevant changes faster and turn them into a small, actionable review list.

## Good to know
* This workflow fetches article pages and sends extracted text to LLMs
* Respect the publisher’s terms and avoid redistributing full article text outside your organization
* Cost and runtime depend on how many articles you process and how long the extracted text is

## How it works
* Weekly trigger starts the workflow
* RSS feed read pulls new HR articles
* Filter keeps only the last 7 days
* Limit node caps processing to `maxArticles`
* HTTP request fetches each article page
* HTML extract + cleanup converts the article body to plain text
* Google Drive node lists your policy and template file names
* Merge combines each article with the document list
* Reading agent evaluates relevance and suggests:
  * which documents to review or update
  * what change to consider
  * missing document ideas
* Build report aggregates results across all articles
* Summary agent writes a short, scannable HTML email
* Gmail sends the newsletter to your chosen recipient

## How to use
* Add your RSS feed URL in the Workflow Configuration node (`newsUrl`)
* Set your recipient email (`userEmail`)
* Set your Google Drive folder id that contains policies and templates (`templatesFolderId`)
* Connect credentials for:
  * Google Drive
  * LLM provider nodes
  * Gmail
* Run once manually and verify the email formatting, then activate the workflow

## Requirements
* RSS feed URL with HR or compliance updates
* Google Drive folder containing policy and template files
* LLM credentials for:
  * per article analysis
  * newsletter drafting
* Gmail account to send the email

## Customising this workflow
* Increase or decrease `maxArticles` to control cost and speed
* Adjust the last 7 days filter if you want a different reporting window
* Change the HTML extraction selector if your news source has a different page layout
* Swap the final Gmail node for Slack, Teams, Notion, or Google Docs
* Add a redaction step before the Reading Agent if you want to remove signatures or long quoted sections

## 🔗 Nodes Used

HTTP Request, RSS Read, Google Drive, Gmail, Schedule Trigger, Filter

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
