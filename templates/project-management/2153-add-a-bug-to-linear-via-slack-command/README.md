# 📋 Add a bug to Linear via Slack command

> ⚡ **573 views** · 📋 [Project Management](../)

## Description

## Use Case
When building a product it's important to discover and eliminate bugs as quickly as possible. Since we're using our product at n8n a lot, we wanted to make it as easy as possible for everyone to add bugs with the needed level of detail. That's why we built this workflow that allows everyone to add bugs to our Linear account easily directly from Slack
## What this workflow does
This workflow waits for a webhook call within Slack, that gets fired when users use the `/bug` command on a bot that you will create as part of this template. It then adds the bug to Linear using a pre-defined description and a defined label. It then notifies the user about the newly added bug as you can see below:

![image 17.png](fileId:762)

## How to create your Slack bot
1. Visit https://api.slack.com/apps, click on New App and choose a name and workspace.
2. Click on OAuth & Permissions and scroll down to Scopes -&gt; Bot token Scopes
3. Add the `chat:write` scope
4. Head over to `Slash Commands` and click on `Create New Command`
5. Use `/bug` as the command
6. Copy the test URL from the **Webhook** node into `Request URL`
7. Add whatever feels best to the description and usage hint
8. Go to `Install app` and click install

## Setup
1. Configure your Slack bot using the sticky to the left
2. Fill the `Set me up` node. You can find the IDs easily using the Helper nodes section
3. Make sure to exchange the `Request URL` in your Slack with the Prod URL of the Webhook node before activating this workflow  

## How to adjust it to your needs
- Add zero, one, two or many labels when creating the new ticket
- Change the Slack message according to your needs
- Change the default description for a new bug ticket
- Rename the Slack command as it works best for you

## How to enhance this workflow
At n8n we use this workflow in combination with some others. E.g. we have the following things on top:
- We're using AI to classify the bugs and move them to the right team as soon as they get added to Linear (see [this template](https://n8n.io/workflows/2154-classify-new-bugs-in-linear-with-openais-gpt-4-and-move-them-to-the-right-team))
- We also added other commands like `/pain` and `/idea` that allow us to submit other things to Notion. You can see the workflow for that here.

## 🔗 Nodes Used

HTTP Request, Webhook

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
