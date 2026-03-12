# 📊 Create a Google Analytics data report with AI and sent it to e-mail and Telegram

> ⚡ **12,524 views** · 📊 [Market Research & Insights](../)

## Description

## What this workflow does
This workflow retrieves Google Analytics data from the last 7 days and the same period in the previous year. The data is then prepared by AI as a table, analyzed and provided with a small summary.
The summary is then sent by email to a desired address and, shortened and summarized again, sent to a Telegram account.

This workflow has the following sequence:

1. time trigger (e.g. every Monday at 7 a.m.)
2. retrieval of Google Analytics data from the last 7 days
3. assignment and summary of the data
4. retrieval of Google Analytics data from the last 7 days of the previous year
5. allocation and summary of the data
6. preparation in tabular form and brief analysis by AI.
7. sending the report as an email
8. preparation in short form by AI for Telegram (optional)
9. sending as Telegram message.

## Requirements
The following accesses are required for the workflow:
- Google Analytics (via Google Analytics API): [Documentation](https://docs.n8n.io/integrations/builtin/credentials/google/)
- AI API access (e.g. via OpenAI, Anthropic, Google or Ollama)
- SMTP access data (for sending the mail)
- Telegram access data (optional for sending as Telegram message): [Documentation](https://docs.n8n.io/integrations/builtin/credentials/telegram/)

Feel free to [contact me via LinkedIn](https://www.linkedin.com/in/friedemann-schuetz), if you have any questions!

## 🔗 Nodes Used

Send Email, Telegram, Google Analytics, Schedule Trigger, Calculator, Summarize

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
