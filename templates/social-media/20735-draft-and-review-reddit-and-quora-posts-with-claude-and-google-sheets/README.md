# 📱 Draft and review Reddit and Quora posts with Claude and Google Sheets

> ⚡ **1 views** · 📱 [Social Media & Email Marketing](../)

## Description

## Quick Overview
This workflow collects a Reddit or Quora post request via an n8n form, researches the topic with Serper Google Search, drafts platform-specific content with Anthropic Claude, saves it to Google Sheets for review, and posts approved Reddit drafts automatically while flagging Quora drafts for manual posting.

## How it works
1. Receives a topic, optional source link, target platform (Reddit or Quora), and content goal from an n8n form.
2. Queries the Serper Google Search API twice to gather common questions and recent discussions on the selected platform.
3. Sends the combined research brief and posting rules to Anthropic Claude to generate a title, post body, and suggested subreddit/Quora topic.
4. Appends the draft to Google Sheets with a unique Row ID and a Pending (or Generation failed) status.
5. Polls the Google Sheets row on an interval until the Status is set to Approved or Rejected, or until the review timeout is reached.
6. If approved, posts the draft to Reddit via the Reddit API (or marks the row as “Approved, post on Quora manually” for Quora) and writes the result and post URL back to Google Sheets.
7. If rejected or a Reddit post fails, uses the Feedback from Google Sheets to have Claude rewrite the draft, updates the row as Revised, and returns it to the review loop.

## Setup
1. Create a Serper API key and configure an HTTP Header Auth credential (header name `X-API-KEY`) for the two Serper HTTP requests.
2. Add credentials for Anthropic (Claude), Google Sheets, and Reddit (for automated Reddit posting).
3. Create a Google Sheet with columns `Row ID | Date | Platform | Topic | Source Link | Content Goal | Title | Content | Community | Status | Feedback | Post URL`, then select the target spreadsheet and sheet tab in the Google Sheets nodes.
4. Update the author context and (optionally) the platform rules, review check interval, and review timeout values in the workflow settings node.
5. Review drafts in Google Sheets by setting Status to Approved or Rejected and adding Feedback for rewrites, and ensure the suggested subreddit allows your type of post before approving.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Reddit, n8n Form Trigger, Anthropic

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
