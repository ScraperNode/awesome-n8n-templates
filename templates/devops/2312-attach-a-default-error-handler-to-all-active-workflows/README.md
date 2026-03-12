# ⚙️ Attach a default error handler to all active workflows

> ⚡ **4,781 views** · ⚙️ [DevOps & CI/CD](../)

## Description

**How it works:**

Did you ever miss any errors in your workflow executions? I did! And I usually only realised a few days or weeks later. 🙈

This template attaches a default error workflow to all your active workflows. From now on, you'll receive a notification whenever a workflow errors and you'll have peace of mind again.

It runs every night at midnight so you never have to think of this again. Of course, you can also run it manually.

**Steps to set up:**

1. Update the Gmail note with your own email address, or replace it with any other notification mechanism. You can also use Slack, Discord, Telegram or text messages.. 
2. Activate the workflow.
3. Relax.

**Caveats:**

I did not add any rate limiting, so if you have a workflow that runs very frequently and it errors... well let's say your mailbox will not be a nice place anymore.

**Ideas for improvement?**

If you have any suggestions for improvement, feel free to reach out to me at bart@n8n.io.

Enjoy!

## 🔗 Nodes Used

Gmail, n8n, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
