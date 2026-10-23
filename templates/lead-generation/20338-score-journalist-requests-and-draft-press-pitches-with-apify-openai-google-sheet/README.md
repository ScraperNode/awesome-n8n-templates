# 🎣 Score journalist requests and draft press pitches with Apify, OpenAI, Google Sheets and Telegram

> ⚡ **0 views** · 🎣 [Lead Generation & Enrichment](../)

## Description

## Quick overview
This workflow runs every morning to pull open journalist requests via Apify, score each request with OpenAI against your expertise, log all scores to Google Sheets, and send high-scoring draft pitch replies to you in Telegram.

## How it works
1. Runs every morning at 8am on a schedule.
2. Uses Apify (Journalist Request Finder) to fetch open-deadline journalist requests from the configured sources and keywords.
3. Skips requests that were already shown in previous workflow executions.
4. Uses OpenAI to score each request (0–100) and generate a short reason and suggested angle based on your profile.
5. Appends every scored request (including low scores) to Google Sheets for tracking and tuning.
6. Filters requests below your minimum score threshold and limits the number of pitches drafted per run.
7. Uses OpenAI to draft a concise reply in your voice using the suggested angle.
8. Sends each draft to Telegram with the request details and a link to respond.

## Setup
1. Add an Apify connection and ensure you can run the Journalist Request Finder actor in your Apify account.
2. Add an OpenAI API credential and select the model to use for scoring and drafting.
3. Create a Google Sheet for logging results, then paste its URL into the workflow and ensure the target sheet/tab is accessible.
4. Create a Telegram bot, connect Telegram credentials in n8n, and paste your Telegram chat ID into the workflow.
5. Fill in yourName, yourRole and yourCredentials. Both the scoring and the drafts are built entirely from these three fields, so be specific: numbers, years, what you have actually built or measured. A vague profile produces vague pitches. Then set minScore and maxPitches to control how selective the workflow is and what one day can cost.

## Requirements
- An Apify account (https://apify.com/?fpr=youssef): the free plan returns 25 requests per run and holds back the last 48 hours, while a paid plan returns every request as soon as it is posted. An OpenAI account for the scoring and drafting, or any other chat model node you prefer. A Google account for Google Sheets. A Telegram bot created with @BotFather, plus your chat id.

## Customization
- Raise minScore if you get too many weak matches, lower it if you get too few. The scorer is strict on purpose: on a real run of ten mixed requests against a well-written profile, the best match scored 60 and everything off-topic landed between 10 and 30, so 55 to 65 is the useful band and 70 or above will often return nothing. maxPitches caps what one day costs in tokens and in replies you have to read. Edit the system prompt in Draft the pitch to change the voice, the length or the sign-off. Swap the OpenAI model node for Anthropic, Gemini or any other chat model and nothing else changes.

## Additional info
HARO closed in December 2024 and the source requests that replaced it are scattered, so this pulls SourceBottle call-outs together with the #journorequest hashtag on Bluesky and Mastodon. Three things worth knowing. Every request is written to the sheet with its score and reason, including the ones that fail, which is how you tune minScore rather than guessing at it. Remove Duplicates sits before the scoring step, so a repeat run costs no AI tokens at all. And the drafting prompt requires every number in a pitch to appear verbatim in your credentials and forbids estimating or rounding, because the draft may be sent to a journalist under your name; even so, read each draft before you send it, since no prompt makes that guaranteed.

Need a custom version or another data source? See https://automationbyexperts.com

## 🔗 Nodes Used

Google Sheets, Telegram, Schedule Trigger, Filter, Basic LLM Chain, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
