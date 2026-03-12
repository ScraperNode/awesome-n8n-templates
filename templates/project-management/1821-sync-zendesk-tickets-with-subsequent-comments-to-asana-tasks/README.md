# 📋 Sync Zendesk tickets with subsequent comments to Asana tasks

> ⚡ **1,085 views** · 📋 [Project Management](../)

## Description

This workflow creates an Asana task when a new ticket is created in Zendesk. Subsequent comments on the ticket in Zendesk are added as comments to the task in Asana.

## Prerequisites

- Zendesk account and [Zendesk credentials](https://docs.n8n.io/integrations/builtin/credentials/zendesk/).
- Asana account and [Asana credentials](https://docs.n8n.io/integrations/builtin/credentials/Asana/).
- Asana workspace to create tasks in.

## How it works

1. The workflow listens for new tickets in Zendesk.
2. When a new ticket is created, the workflow creates a new task in Asana.
3. The Asana GID is then saved in one of the ticket's fields (in [setup](notion://www.notion.so/n8n/a1b8c2bc7d2b4aa3b90d50fa80b766d1?v=a3106a73c9fc41b88630cc9f091cf063&p=bb3006267256456d9313fa39d8cdd591&pm=s#setup) we call this "Asana GID").
4. The next time a comment is added to the ticket, the workflow retrieves the Asana GID from the ticket's field and adds the comment to the task in Asana.

## Setup

This workflow requires that you set up a webhook in Zendesk. To do so, follow the steps below:

1. In the workflow, open the `On new Zendesk ticket` node and copy the webhook URL.
2. In Zendesk, navigate to Admin Center &gt; Apps and integrations &gt; Webhooks &gt; Actions &gt; Create Webhook.
3. Add all the required details which can be retrieved from the `On new Zendesk ticket` node. The webhook URL gets added to the “Endpoint URL” field, and the “Request method” should match what is shown in n8n.
4. Save the webhook.
5. In Zendesk, navigate to Admin Center &gt; Objects and rules &gt; Business rules &gt; Triggers &gt; Add trigger.
6. Give trigger a name such as “New tickets”.
7. Under “Conditions” in “Meet ALL of the following conditions”, add “Status is New”.
8. Under “Actions”, select “Notify active webhook” and select the webhook you created previously.
9. In the JSON body, add the following:
    
    ```
    {
    	"id": "{{ticket.id}}",
    	"comment": "{{ticket.latest_comment_html}}"
    }
    ```
    
10. Save the Zendesk trigger.

You will also need to set up a field in Zendesk to store the Asana GID. To do so, follow the steps below:

1. In Zendesk, navigate to Admin Center &gt; Objects and rules &gt; Tickets &gt; Fields &gt; Add field.
2. Use the number field option and give the field a name such as “Asana GID”.
3. Save the field.
4. In n8n, open the `Update ticket` node and select the field you created in Zendesk.

## 🔗 Nodes Used

Asana, Function, Start, Webhook, Zendesk

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
