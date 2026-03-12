# ⚙️ Monitor multiple Github repos via webhook

> ⚡ **6,263 views** · ⚙️ [DevOps & CI/CD](../)

## Description

## What this workflow does
This workflow allows you to monitor multiple Github repos simultaneously without polling due to use of Webhooks. It programmatically allows for adding and deleting of repos to your watchlist to make management convenient.

## Description
- Can monitor multiple repos simultaneously.
- Programmatically register or unregister repos from a list. No need for manual work.
- Webhook notification means no constant polling necessary.

## Setup
### 1. Creating Credentials on Github
Generate a personal access token on github by following these esteps;
- Right hand side of page -> Settings -> scroll to bottom -> Developer Settings > Personal Access Token > Tokens (classic) > Generate New Token
- Give scopes:
   *admin:repo_hook*
   *repo* (if you want to use it for your own private repo)

if you need more help, see here:
https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens

### 2. Setting Credentials in n8n
In `Register Github Webhook`
*Authenticaion > Generic Credential Type*
*Generic Auth Type > Header Auth*
*Header Auth > Create New Credential* with Name set to *'Authorization'* and Value set to *'Bearer <YOUR GITHUB TOKEN HERE>'*.
(You can reuse this for `Delete Github Webhook` and `Get Existing Webhooks`).
Now in `Register Github Webhook`, scroll down to Send Body > JSON and inside the JSON, change the value of *"url"* to the webhook address given as Production URL in the node `Webhook Trigger`.

### 3. Notification settings
In the third row, link up the Webhook Trigger to any API of your choice. Slack and Telegram are given as examples.
You can also format the notification message as you wish.

*Setup time: roughly 10 minutes.*

## Instructions Video:
https://vimeo.com/1013473758

## Test
## 1. Register Webhooks
- In `Repos to Monitor`, add any repo you want to monitor changes for. 
- Disable `Webhook Trigger`, Click `Test Workflow` and if your Github credentials were set correctly, it will automatically register the webhooks. - You can test this by running the single node `Get Existing Webhook` and confirming it outputs the repo addresses.
## 2. Handle Github Events
- Now that you have registered the webhooks, re-enable `Webhook Trigger` and activate the workflow.
- Make a commit to any of the registered repos.
- Confirm that the notification went through.
*That's it!*

## 🔗 Nodes Used

HTTP Request, Slack, Webhook, Telegram

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)

---

## 💡 Pro Tip

If you need GitHub data beyond what the REST API gives you, [ScraperNode](https://scrapernode.com/github) has a [repository scraper](https://scrapernode.com/github/scrapers/repositories) that extracts metadata at scale without token rate limits.
