# 🔧 Create daily trivia icebreakers in Slack with OpenTDB & Google Sheets log

> ⚡ **33 views** · 🔧 [Miscellaneous](../)

## Description

**Who this workflow is for**

This template is for teams who want a lightweight “daily icebreaker” in Slack and creators who’d like to build a reusable trivia database over time. It works well for remote teams, communities, and any workspace that enjoys a quick brain teaser each day.

**What this workflow does**

The workflow fetches a random multiple-choice question from the Open Trivia Database (OpenTDB), posts a nicely formatted trivia message to a Slack channel, and logs the full question and answers into a Google Sheets spreadsheet. Over time, this creates a searchable “trivia archive” you can reuse for quizzes, content, or community events.

**How it works**

A Schedule Trigger runs once per day at a time you define.

A Set node randomly chooses a difficulty level (easy, medium, or hard).

A Switch node routes to the matching OpenTDB HTTP request.

Each branch normalizes the API response into common fields (timestamp, date, difficulty, category, question, correct, incorrect, messageTitle, messageBody).

A Merge node combines the three branches into a single stream.

Slack posts the trivia message.

Google Sheets appends the same data as a new row.

**How to set up**

Connect your Slack OAuth2 credentials and choose a target channel.

Connect your Google Sheets credentials and select the spreadsheet and sheet.

Adjust the schedule (time and frequency) to match your use case.

**How to customize**

Change the Slack message format (for example, add emojis or hints).

Filter categories or difficulty levels instead of picking them fully at random.

Add additional logging (e.g., user reactions, answer stats) in Sheets or another datastore.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Slack, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
