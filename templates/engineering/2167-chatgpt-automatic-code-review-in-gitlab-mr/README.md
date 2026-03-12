# ⚒️ ChatGPT Automatic Code Review in Gitlab MR

> ⚡ **32,826 views** · ⚒️ [Engineering](../)

## Description

## Who this template is for
This template is for every engineer who wants to automate their code reviews or just get a 2nd opinion on their PR.

## How it works
This workflow will automatically review your changes in a Gitlab PR using the power of AI. It will trigger whenever you comment with `+0` to a Gitlab PR, get the code changes, analyze them with GPT, and reply to the PR discussion.

## Set up Steps
- Set up webhook of `note_events` in Gitlab repository (see [here](https://docs.gitlab.com/ee/user/project/integrations/webhooks.html#:~:text=Configure%20a%20webhook%20in%20GitLab,-To%20configure%20a&text=In%20your%20project%20or%20group,one%20or%20more%20special%20characters.) on how to do it)
- Configure ChatGPT credentials
- Note "+0" in MergeRequest to trigger automatic review by ChatGPT

## 🔗 Nodes Used

HTTP Request, Webhook, Basic LLM Chain, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
