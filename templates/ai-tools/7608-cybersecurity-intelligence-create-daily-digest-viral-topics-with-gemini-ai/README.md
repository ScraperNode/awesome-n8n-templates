# 🎯 Cybersecurity Intelligence: Create Daily Digest & Viral Topics with Gemini AI

> ⚡ **1,972 views** · 🎯 [AI Summarization & Classification](../)

## Description

## This n8n workflow template simplifies the process of digesting cybersecurity reports by summarizing, deduplicating, organizing, and identifying viral topics of interest into daily emails. 
It will generate two types of emails:
- A daily digest with summaries of deduplicated cybersecurity reports organized into various topics.
- A daily viral topic report with summaries of recurring topics that have been identified over the last seven days. 


**This workflow supports threat intelligence analysts digest the high number of cybersecurity reports they must analyse daily by decreasing the noise and tracking topics of importance with additional care, while providing customizability with regards to sources and output format.**

## How it works
The workflow follows the threat intelligence lifecycle as labelled by the coloured notes.
- Every morning, collect news articles from a set of RSS feeds.
- Merge the feeds output and prepare them for LLM consumption.
- Task an LLM with writing an intelligence briefing that summarizes, deduplicates, and organizes the topics.
- Generate and send an email with the daily digest.
- Collect the daily digests of the last seven days and prepare them for LLM consumption.
- Task an LLM with writing a report that covers 'viral' topics that have appeared prominently in the news. 
- Store this report and send out over email.

## How to use & customization
- The workflow will trigger daily at 7am. 
- The workflow can be reused for other types of news as well. The RSS feeds can be swapped out and the AI prompts can easily be altered. 
- The parameters used for the viral topic identification process can easily be changed (number of previous days considered, requirements for a topic to be 'viral').

## Requirements
- The workflow leverages Gemini (free tier) for email content generation and Baserow for storing generated reports. The viral topic identification relies on the Gemini Pro model because of a higher data quantity and more complex task.
- An SMTP email account must be provided to send the emails with. This can be through Gmail.

## 🔗 Nodes Used

Send Email, RSS Read, Baserow, Schedule Trigger, Basic LLM Chain, Structured Output Parser

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
