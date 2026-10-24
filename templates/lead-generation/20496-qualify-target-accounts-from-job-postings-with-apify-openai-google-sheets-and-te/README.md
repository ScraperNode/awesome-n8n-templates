# 🎣 Qualify target accounts from job postings with Apify, OpenAI, Google Sheets and Telegram

> ⚡ **2 views** · 🎣 [Lead Generation & Enrichment](../)

## Description

## Quick overview
This workflow runs every Monday, reads target account domains from Google Sheets, uses Apify to collect each company’s current job postings, and uses OpenAI to score buying signals and draft short outreach openers, saving all results back to Google Sheets and sending the best opportunities to Telegram.

## How it works
1. Runs every Monday at 8am on a schedule.
2. Reads a list of company domains from a Google Sheets tab and aggregates them into a single domain list.
3. Uses Apify (Company Domain to Job Postings actor) to resolve each domain to its job board and fetch open roles with descriptions.
4. Skips job postings that were already processed in previous executions, then groups the remaining postings by company domain.
5. Sends each account’s grouped postings to OpenAI to generate a 0–100 score, a short “signal” phrase, and an evidence quote from the posting text.
6. Appends an account brief row for every scored account to a Google Sheets “Briefs” tab.
7. Filters to accounts meeting the minimum score (and caps the count), has OpenAI write a subject line and 80-word opener, and sends each brief plus opener to a Telegram chat.

## Setup
1. Create/connect Google Sheets credentials, then paste your spreadsheet URL and set the Accounts/Briefs tab names and domain column header in the workflow’s target settings.
2. Create a free Apify account at https://apify.com/?fpr=youssef and connect it in the Apify node. The node runs the Company Domain to Job Postings Actor (https://apify.com/fayoussef/company-domain-to-job-postings?fpr=youssef), which resolves each domain to the applicant tracking system that company actually uses and returns the open roles with their descriptions.
3. Add OpenAI credentials (Chat Completions) and select the model you want to use.
4. Create a Telegram bot, connect Telegram credentials, and paste your target chat ID into the workflow’s target settings.

## Requirements
- An Apify account (https://apify.com/?fpr=youssef). The free plan covers a short account list per run. An OpenAI account for the two AI steps, a Google Sheet holding your target account domains, and a Telegram bot created with @BotFather. No LinkedIn or Sales Navigator access is needed: the postings come from each company's own job board.

## Customization
- minScore sets how strict the qualification is. 60 to 70 is the useful band, and most accounts scoring under 40 in a given week is correct behaviour rather than a broken run, because the scorer is told that growth on its own is not a buying signal. titleKeywords narrows which roles are fetched at all, which is the cheapest filter available since it runs before any AI reads anything. maxAccounts caps how many openers one run writes. Change the Save every account brief node to Append or update, matching on your domain column, if you would rather write results back into your own account list; those columns have to exist in that tab first. The OpenAI model node can be swapped for Anthropic, Gemini or any other chat model without touching the rest.

## Additional info
Read every opener before you send it. The prompt forbids the model from stating the account's goals, headcount, funding, tooling or timeline unless the words appear in the quoted evidence, and the evidence has to be a phrase from the postings themselves rather than a mission statement. That removes most invented detail, but no prompt makes it guaranteed, and the message goes out under your name. Remove Duplicates sits before the scoring step on purpose, so a weekly run that finds no new postings spends nothing on AI tokens. Every account is written to the Briefs tab including the ones that score too low, which is how you tune minScore after a week of real data.

Need a custom version or another data source? See https://automationbyexperts.com

## 🔗 Nodes Used

Google Sheets, Telegram, Schedule Trigger, Filter, Basic LLM Chain, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
