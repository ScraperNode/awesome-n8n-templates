# 🎫 Parse Gmail inbox and transform into Todoist tasks with Solve Propositions

> ⚡ **4,698 views** · 🎫 [Ticket Management & Triage](../)

## Description

# Who is it for? #

If you are getting a lot of emails into your Gmail inbox, then probably some of those can be solved easly by replying or by doing specific short tasks. But analyzing whole email thread content just to catch up with multiple threads can be very wasteful. So by using AI you can actually get simple propositions of what should be done before closing this specific email and actual proposed answer to that email. 

This is especially useful if you need to do some actions before replying to email. In that case you can simply assign task to specific person, await until it's done, copy-paste AI answer when it's done, and close.

Another good use would be if on one inbox there are working multiple people. It can make the process much more streamlined.

# How It Works? #

1. Script runs on your selected trigger. If you are using section "Read and Star", then you may use "Email Trigger".
2. Automation is looking for exiting open Todoist tasks, that have the same title as email
3. If task does not exist, then we are asking AI to analyze thread and give output that is Todoist-API-ready:
	1. having summary of email content
	2. having proposed actions to be taken
	3. having proposed answer to this email
4. If email was unstarred for some reason but task was not closed, then task is being closed automatically.
5. Script **FOR PURPOSE** is not trying to unstar messagess which have closed tasks, because this could lead to some inconsistencies.

# How to set up? #

1. Select and setup your triggers, depending on your needs
2. Setup connections using N8N instructions. You will need:
	1. Gmail
	2. Todoist
	3. AI (in this workflow OpenAI is used)
3. (Optional) Remove "Read and Star" section if you don't want tasks automatically read and starred.
4. (Optional) Adjust AI node - especially useful if you want to use different model or have response in different language

**NOTE** Chat does not heave memory attached on purpose. The purpose is that it should analyze each inbox message separately, not in thread. When using memory, it can get lost easily.

**NOTE2** You might want to adjust limits on nodes "Get Unread From Inbox", "Get Starred From Inbox" and "Get Open Tasks", especially if having issues with model complying to output structure.

And that's it. I hope that this automation will make your Gmail &lt;-&gt; Todoist process much more streamlined!

# What's More? #

There is actually more that you could do with this automation, but it really depends on your needs. For example, you could add Form trigger to handle incoming support requests. Another thing is that you could replace Todoist with Asana or any database (like NocoDB) if you are using it for your task management.

## 🔗 Nodes Used

Email Trigger (IMAP), Todoist, Gmail, Schedule Trigger, AI Agent, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
