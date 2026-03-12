# 💬 Chat with your event schedule from Google Sheets in Telegram

> ⚡ **4,634 views** · 💬 [Support Chatbots](../)

## Description

## What it is

Chat with your event schedule from Google Sheets in Telegram:

* "When is the next meetup?"
* "How many events are there next month?"
* "Who presented most often?"
* "Which future meetups have no presenters yet?"

This workflow lets you chat with a telegram bot about past, present and future events that are scheduled in a Google Spreadsheet.

(Info: This proof-of-concept was created as a demo for a hackathon of an AI & Developer Meetup in Da Nang (Vietnam) that uses a telegram group to organize)

## Who it is for

If you want an easy way for your audience to get information about your events, you can us this workflow for the same purpose, or easily adapt it to your needs and different use-cases where you want to query smaller amounts of tabular data in natural language.

## How it works

Upon getting triggered by a chat message to a telegram bot, the schedule of meetups is retrieved from Google Spreadsheets, converted into a markdown table syntax and fed into the system prompt of an LLM (we're using OpenRouter in this example), whose output is posted back as answer into the same telegram chat.

## Setup steps

### TO REVIEWING IN ACTION

As the reviewer of this workflow, you can temporarily use it via an existing telegram bot, simply point your telegram client to https://t.me/AiDaNangBot and start to ask questions like:
* "When is the next meetup?"
* "What future meetings do not have presenters?"
* "Who presented on Future of Human Relationships?"


## To build upon this workflow:

* Import the workflow
* Customize the Google Docs credentials for your individual access
* [Create a telegram bot](https://core.telegram.org/bots#how-do-i-create-a-bot) and connect it to the workflow by entering its API token into the credentials used in the telegram trigger node
* In the "Settings" node, replace the "scheduleURL" with the URL of your own copy of the [Google Spreadsheet](https://docs.google.com/spreadsheets/d/1BJFS9feEy94_WgIgzWZttBwzjp09siOw1xuUgq4yuI4) or a copy of the [Event Schedule Template Sheet](https://docs.google.com/spreadsheets/d/1fAxGcdOZzQZpsvhiB-ULEDndb4AVKOA_B-sKoTfKvyE/edit?usp=sharing) to spin off your own – whereby the structure of the spreadsheet doesn't matter, it's just important that you semantically structure your information in dedicated columns clearly labeled in the header row.

## 🔗 Nodes Used

Google Sheets, Telegram, Telegram Trigger, AI Agent, Simple Memory, Chat Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
