# 📊 Conversational interviews with AI agents and n8n forms

> ⚡ **31,088 views** · 📊 [Market Research & Insights](../)

## Description

This n8n template combines an AI agent with n8n's multi-page forms to create a novel interaction which allows automated question-and-answer sessions. One of the more obvious use-cases of this interaction is what I'm calling the AI interviewer.

**You can read the full post here:** [https://community.n8n.io/t/build-your-own-ai-interview-agents-with-n8n-forms/62312](https://community.n8n.io/t/build-your-own-ai-interview-agents-with-n8n-forms/62312)

**Live demo here:** [https://jimleuk.app.n8n.cloud/form/driving-lessons-survey](https://jimleuk.app.n8n.cloud/form/driving-lessons-survey)

## How it works

* A form trigger is used to start the interview and a new session is created in redis to capture the transcript.
* An AI agent is then tasked to ask questions to the user regarding the topic of the interview. This is setup as a loop so the questions never stop unless the user wishes to end the interview.
* Each answer is recorded in our session set up earlier between questions.
* When the user requests to end the interview we break the loop and show the interview completion screen.
* Finally, the session is then saved in a Google Sheet which can then be shared with team members and for the purpose of data analysis.

## How to use

* You'll need to be on a n8n instance that is accessible to your target audience. **Not technical enough to setup your own server? [Try out n8n cloud](https://n8n.partnerlinks.io/ee7izbliiw0n) and instantly deploy template!**
* Remember to activate the workflow so the form trigger is published and available for users to use.

## Requirements
* Groq LLM for AI agent. Feel free to swap this out for any other LLM.
* Redis(-compatible) storage for capturing sessions

## Customising this workflow

* The next step would be adding tools! AI interviews with knowledge retrieval could definitely open up other possibilities. Eg. An onboarding wizard generating questions by pulling facts from internal knowledgebase.

## 🔗 Nodes Used

Google Sheets, Redis, Webhook, AI Agent, Simple Memory, n8n Form Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
