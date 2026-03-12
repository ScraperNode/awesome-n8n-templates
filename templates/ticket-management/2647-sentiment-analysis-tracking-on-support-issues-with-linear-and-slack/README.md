# 🎫 Sentiment analysis tracking on support issues with Linear and Slack

> ⚡ **2,454 views** · 🎫 [Ticket Management & Triage](../)

## Description

This n8n template monitors active support issues in Linear.app to track the mood of their ongoing conversation between reporter and assignee using Sentiment Analysis. When sentiment dips into the negative, a notification is sent via Slack to alert the team.

## How it works
* A scheduled trigger is used to fetch recently updated issues in Linear using the GraphQL node.
* Each issue's comments thread is passed into a simple Information Extractor node to identify the overall sentiment.
* The resulting sentiment analysis combined with the some issue details are uploaded to Airtable for review.
* When the template is re-run at a later date, each issue is re-analysed for sentiment
* Each issue's new sentiment state is saved to the airtable whilst its previous state is moved to the "previous sentiment" column.
* An Airtable trigger is used to watch for recently updated rows
* Each matching Airtable row is filtered to check if it has a previous non-negative state but now has a negative state in its current sentiment.
* The results are sent via notification to a team slack channel for priority.

**Check out the sample Airtable here**: [https://airtable.com/appViDaeaFw4qv9La/shrq6HgeYzpW6uwXL](https://airtable.com/appViDaeaFw4qv9La/shrq6HgeYzpW6uwXL)

## How to use
* Modify the GraphQL filter to fetch issues to a relevant issue type, team or person.
* Update the Slack channel to ensure messages are sent to the correct location or persons.
* The Airtable also serves to give a snapshot of Sentiment across support tickets for a given period. It's possible to use this to assess the daily operations.

## Requirements
* Linear for issue tracking (but feel free to use another system if preferred)
* Airtable for Database
* OpenAI for LLM and Sentiment Analysis

## Customising the workflow
* Add more granular levels of sentiment to reduce the number of alerts.
* Explore different types of sentiment based on issue types and customer types. This may help prioritise alerts and response.
* Run across teams or categories of issues to get an overview of sentiment across the support organisation.

## 🔗 Nodes Used

Airtable, Slack, GraphQL, Airtable Trigger, Schedule Trigger, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
