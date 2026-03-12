# ⚡ Send pre-meeting attendee context with OpenAI, Google Calendar, and Slack

> ⚡ **131 views** · ⚡ [Personal Productivity](../)

## Description

## Overiew

This workflow builds an AI meeting assistant who sends information-dense pre-meeting notifications for a user's upcoming meetings. 

### How It Works

* A scheduled trigger fires hourly and checks for upcoming meetings within the hour.
* When found, a search for last correspondence + recent activity is performed for each attendee.
* Using available correspondance, an AI/LLM is used to summarize this information and generate a short notification message which should help the user prepare for the meeting.
* The notification is finally sent to the user's Slack.

### Set up Steps

#### Google Cloud
Create the [credentials](https://console.cloud.google.com/apis/credentials) and replace them in the workflow.
Please [enable](https://console.cloud.google.com/apis/dashboard) the following APIs:
- Gmail API
- Google Calendar API

#### OpenAI

- Create the [credentials](https://docs.n8n.io/integrations/builtin/credentials/openai/) as instructed
- Replace your credentials and connect.

#### Slack

- Create the [credentials](https://docs.n8n.io/integrations/builtin/credentials/slack/?utm_source=n8n_app&utm_medium=credential_settings&utm_campaign=create_new_credentials_modal) as instructed
- Replace your credentials and connect.

## 🔗 Nodes Used

Slack, Google Calendar, Gmail, Schedule Trigger, Basic LLM Chain, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
