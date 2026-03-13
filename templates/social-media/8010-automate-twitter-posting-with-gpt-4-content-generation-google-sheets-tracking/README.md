# 📱 Automate Twitter posting with GPT-4 content generation & Google Sheets tracking

> ⚡ **1,166 views** · 📱 [Social Media & Email Marketing](../)

> 💡 **Pro Tip** — Twitter's API is paid now, which makes simple data pulls expensive. [ScraperNode](https://scrapernode.com/twitter) is a community node that scrapes [Twitter profiles](https://scrapernode.com/twitter/scrapers/profiles) and [posts](https://scrapernode.com/twitter/scrapers/posts) without needing API access.
>
> <a href="https://scrapernode.com/twitter"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## This n8n template from [Intuz](https://www.intuz.com/) provides a complete and automated solution for creating an autonomous social media manager. 
This workflow uses an AI agent to intelligently generate unique, high-quality content, check for duplicates, and post it on a consistent schedule to automate your entire Twitter presence.

## Who's this workflow for?
- Social Media Managers
- Marketing Teams & Agencies
- Startup Founders & Solopreneurs
- Content Creators

## How it works
**1. Runs on a Schedule:** The workflow automatically starts at a set interval (e.g., every 6 hours), ensuring a consistent posting schedule.

**2. AI Generates a New Tweet:** An advanced AI Agent, powered by OpenAI, uses a detailed prompt to craft a new, engaging tweet. The prompt defines the tone, topics, character limits, and hashtags.

**3. Checks for Duplicates:** Before finalizing the tweet, the AI Agent is equipped with a tool to read a Google Sheet containing a log of all previously published posts. This allows it to ensure the new content is always unique.

**4. Posts to Twitter (X):** The final, unique tweet is automatically posted to your connected Twitter account.

**5. Logs the New Post:** After posting, the workflow logs the new tweet back into the Google Sheet, updating the history for the next run. This completes the autonomous loop.

## Setup Instructions
1. Schedule Your Posts: In the Start Workflow (Schedule Trigger) node, set the frequency you want the workflow to run (e.g., every 6 hours).

2. Connect OpenAI:
- Add your OpenAI API key in the OpenAI Chat Model node.
- Customize the prompt in the AI Agent node to match your brand's voice, target keywords, and specific URLs.

3. Configure Google Sheets:
- Connect your Google Sheets account.
- Create a sheet with two columns: Tweet Content and Status.
- In both the Get Data from Google Sheet and Add new Tweet to Google sheet nodes, select your credentials and specify the Document ID and Sheet Name.

4. Connect Twitter (X):
- In the Create Tweet node, connect the Twitter account where you want to post.

5. Activate Workflow:
- Save the workflow and toggle the "Active" switch to ON. Your AI social media manager is now live!

## Key Requirements to Use This Template
Before you start, please ensure you have the following accounts and assets ready:

- An n8n Instance: An active n8n account (Cloud or self-hosted) where you can import and run this workflow.

- OpenAI Account: An active OpenAI account with an API Key. You will need to have billing enabled to use the language models for tweet generation.

- Google Account & Sheet: A Google account and a pre-made Google Sheet. The sheet must have two specific columns: Tweet Content and Status.

- Twitter (X) Developer Account: A Twitter (X) account with an approved Developer profile. You need an App created within the Developer Portal with the necessary permissions (v2 API access with Write scopes) to post tweets automatically.

## Connect with us
- Website: https://www.intuz.com/n8n-workflow-automation-templates
- Email: getstarted@intuz.com
- LinkedIn: https://www.linkedin.com/company/intuz
- Get Started: https://n8n.partnerlinks.io/intuz

## For Custom Worflow Automation
Click here- [Get Started](https://www.intuz.com/get-started)

## 🔗 Nodes Used

Google Sheets, X (Formerly Twitter), Schedule Trigger, AI Agent, OpenAI Chat Model, Simple Memory

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
