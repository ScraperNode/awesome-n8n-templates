# 📁 Monitor file changes with Google Drive push notifications

> ⚡ **1,236 views** · 📁 [File Management](../)

## Description

**Tired of being let down by the Google Drive Trigger? Rather not exhaust system resources by polling every minute? Then this workflow is for you!**

Google drive is a great storage option for automation due to its relative simplicity, cheap costs and readily-available integrations. Using Google Drive as a trigger is the next logically step but many n8n users quickly realise the built-in Google Drive trigger just isn't that reliable. Disaster!

Typically, the workaround is to poll the Google Drive search API in short intervals but the trade off is wasted server resources during inactivity. The ideal solution is of course, push notifications but they seem quite complicated to implement... or are they?

This template demonstrates that setting up **Google Push Notifications for Google Drive File Changes** actually isn't that hard! Using this approach, Google sends a POST request every time something in a drive changes which solves reliability of events and efficiency of resources.

### How it works
1. We begin with registering a **Notification channel (webhook)** with the Google Drive API. 2 key pieces of information is (a) the webhook URL which notifications will be pushed to and (b) because we want to scope to a single location, the driveId. Good to know that you can register as many as you like using http calls but you have to manage them yourself, there's no google dashboard for notification channels!
2. The registration data along with the startPageToken are saved in `workflowStaticData` - This is a convenient persistence which we can use to hold small bits of data between executions.
3. Now, whenever files or folders are created or updated in our target Google Drive, Google will send push notifications to our webhook trigger in this template.
4. Once triggered, we need still need to call Google Drive's `Changes.list` to get the actual change events which were detected. we can do this with the HTTP request node.
5. The Changes API will also return the `nextPageToken` - a marker to establish where next to get the new batch of changes. It's important that we use this token the next time we request from the changes API and so, we'll update the `workflowStaticData` with this updated value.
6. Unfortunately, the `changes.list` API isn't able to filter change events by folder or action and so be sure to do your own set of filtering steps to get the files you want.
7. Finally with the valid change events, optionally fetch the file metadata which gives you more attributes to play with. For example, you may want to know if the change event was triggered by n8n, in which case you'll want to check "ModifiedByMe" value.

### How to use
* Start with Step 1 and fill in the "Set Variables" node and Click on the Manual Execute Trigger. This will create a single Google Drive Notification Channel for a specific drive.
* Activate the workflow to start recieving events from Google Drive.
* To test, perform an action eg. create a file, on the target drive. Watch the webhook calls come pouring in!
* Once you have the desired events, finish off this template to do something with the changed files.

### Requirements
* Google Drive Credentials. Note this workflow also works on Shared Drives.

### Optimising This Workflow
* With bulk actions, you'll notice that Google gradually starts to send increasingly large amounts of push notifications - sometimes numbering in the hundreds! For cloud plan users, this could easily exhaust execution limits if lots of changes are made in the same drive daily. One approach is to implement a throttling mechanism externally to batch events before sending them to n8n.
* This throttling mechanism is outside the scope of this template but quite easy to achieve with something like Supabase Edge Functions.

## 🔗 Nodes Used

HTTP Request, Webhook, Execute Sub-workflow, Execute Workflow Trigger, Schedule Trigger, Filter

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
