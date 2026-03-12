# 🔬 Record transactions & generate budget reports with Gemini AI, Telegram & Firefly III

> ⚡ **284 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Who this is for
Anybody using Firefly III, especially home/self-hosted users, who want to add some level of automation to their transaction tracking, either in addition to or because they can't or don't want to use the [dataimporter](https://github.com/firefly-iii/data-importer)

## How it works - posting transactions
1. User sends a transaction screenshot/image or statement to a Telegram bot
2. Gemini analyzes it based on the user's requirements (asset account IDs & categories)
3. The transaction information is parsed to create a suitable POST to a Firefly instance
4. The transaction(s) are posted to Firefly via its API, using an OAuth2 credential

## How it works - requesting budget reports 
1. User sends the word 'Report' via telegram
2. A 'GET' API request is sent to Firefly for all budgets between the beginning of the month and the request date, including remaining amounts for each
3. This is converted to a CSV file
4. The CSV is sent to the user via Telegram

## Prerequisites
1. Telegram, and knowledge of how to set up a bot (search for `BotFather` in Telegram)
2. An existing instance of [Firefly III](https://docs.firefly-iii.org/) with admin access for creating OAuth2 credentials

## How to set it up - Credentials
1. Open Telegram, and search for `BotFather`
2. Create a new bot by following the instructions
3. Save the API key provided
4. In n8n, create a new `Telegram` credential using the info for the new bot
5. Create an OAuth client in Firefly, using the redirect URL found in n8n's `OAuth2 API` credential creator 
6. Fill the n8n `OAuth2 API` credential form as `Authorization Code`, filling in the remaining parameters from the info created in Firefly 
7. Create a Gemini credential following the instructions in n8n

## How to set it up - the workflow
1. Set the credential in each Telegram node
2. Set the Firefly credential in each http node
3. Set the correct base URL for the Firefly instance in each http node
4. Set the desired Gemini credential and model in each AI node
5. Set the correct Bank IDs (as per Firefly) and preferred categories in the AI node system message


## Customization options
The user can specify all types of asset and expense accounts, as well as a specific list of categories and descriptions for Gemini to use. Gemini can also be swapped out for any other AI/LLM. 

Additionally, anyone can build on this by reviewing the [Firefly API documents](https://api-docs.firefly-iii.org/) to automate almost any other part of the Firefly software.

## 🔗 Nodes Used

HTTP Request, Telegram, Telegram Trigger, AI Agent, Structured Output Parser, Convert to File

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
