# 🎯 Auto-categorize YNAB transactions with GPT-5-Mini and Discord notifications

> ⚡ **647 views** · 🎯 [AI Summarization & Classification](../)

## Description

## YNAB Super Budget

Ever wish that Y.N.A.B was just a little smarter when auto-categorizing your transactions?

Now you can supercharge your YNAB budget with ChatGPT! No more manual categorization. 

## Setup
1. Get a [YNAB Api Key](https://api.ynab.com/)
2. Get YNAB Budget ID & Account ID (They are part of the URL) `https://app.ynab.com/BUDGETID/accounts/ACCOUNTID`

## Additional information

Every transaction that this workflow modifies will be tagged with `n8n` and color `yellow`. You can easily review all changes by selecting just that tag. 

![Screenshot 20250814 at 21.02.07.png](fileId:2142)

## Customization

By default it pulls transactions from the last 30 days. 
This workflow will post a message in a discord channel showing which transactions it modified and what categories it chose. 

Discord notifications are optional. 

![Screenshot 20250818 at 23.41.54.png](fileId:2141)



## Considerations
YNAB allows for `200` api calls per hour. If you have more than 200 Uncategorized transactions, consider reducing the `previous_days` value.

## 🔗 Nodes Used

HTTP Request, Discord, Filter, AI Agent, OpenAI Chat Model, Structured Output Parser

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
