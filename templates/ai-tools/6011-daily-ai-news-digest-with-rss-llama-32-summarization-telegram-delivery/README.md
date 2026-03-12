# 🎯 Daily AI news digest with RSS, Llama 3.2 summarization & Telegram delivery

> ⚡ **2,338 views** · 🎯 [AI Summarization & Classification](../)

## Description

Daily AI News Digest with RSS, Llama 3.2 Summarization & Telegram Delivery

AIDailyNews is an intelligent, privacy-focused agent that automatically collects, summarizes, and delivers daily news updates to your Telegram via local AI processing. It is designed to run entirely offline on devices like the Raspberry Pi 5, using no paid APIs or external cloud services.

## Prerequisites
Before you begin, ensure you have the following set up:

n8n Instance: A running instance of n8n.

Local LLM Server (Ollama): This workflow requires Ollama to be running locally with a downloaded language model (e.g., llama3.2:1b). It's designed for deployment on a home server or a device like a Raspberry Pi 5.

Telegram Bot: You need a Telegram bot with its API token. You can create one by talking to the BotFather.

Telegram Chat ID: You'll need the numeric ID of the user or group chat where the news digest will be sent.

## How It Works
Scheduled Trigger: The workflow runs automatically on a daily schedule.

News Collection: It fetches the latest articles from multiple pre-configured RSS feeds.

Filtering: It filters the articles to keep only those published on the previous day, ensuring you get a daily recap.

Local Summarization: Each article's content is sent to your local Ollama instance. A large language model (LLM) like LLaMA 3.2 processes the text and generates a concise summary.

Formatting & Delivery: The summarized news, along with the title, author, and link, is formatted into a clean message and sent to your specified Telegram chat.

## Setup Instructions
Configure the Schedule: The workflow is set to run daily by default. If you wish to change the time or frequency, adjust the settings in the Schedule Trigger node.

Add Your RSS Feeds: You can customize your news sources by modifying the RSS Read nodes. Change the URLs to your favorite feeds, or add/remove nodes to adjust the number of sources.

Configure the Ollama Model:

Click on the Ollama Model node.

Select your Ollama API credentials from the dropdown.

In the "Model" field, ensure the model name matches one that you have downloaded in Ollama (e.g., llama3.2:1b).

Configure the Telegram Node:

Click on the Send News Digest to Telegram node.

Select your Telegram API credentials.

In the Chat ID field, enter the numeric ID of the user or group you want to send the news to. (Tip: You can get this ID by sending a message to a bot like @userinfobot.)

Activate Workflow: Save your changes and activate the workflow. You will now receive a daily news digest in your Telegram chat.

## Customization
Change the Summary Style: Modify the prompt in the Summarize Article with Ollama node to change how the news is summarized. For example, you could ask for a single-paragraph summary instead of bullet points.

Adjust Message Format: Edit the Text field in the Send News Digest to Telegram node to change the layout of the final message. You can use HTML for formatting like bold or italics.

## 🔗 Nodes Used

RSS Read, Telegram, Schedule Trigger, Filter, Basic LLM Chain, Ollama Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
