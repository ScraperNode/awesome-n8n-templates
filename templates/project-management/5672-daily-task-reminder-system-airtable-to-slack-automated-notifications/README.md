# 📋 Daily task reminder system: Airtable to Slack automated notifications

> ⚡ **1,778 views** · 📋 [Project Management](../)

## Description

# Still reminding people about their tasks manually every morning?

Let’s be honest — who wants to start the day chasing teammates about what they need to do?

What if Slack could do it for you — automatically, at 9 a.m. every day — without missing anything, and without you lifting a finger?

![AutomatisationN8NBaptisteFortslack1.png](fileId:1673)

In this tutorial, you’ll build a simple automation with n8n that checks Airtable for active tasks and sends reminders in Slack, daily.

Here’s the flow you’ll build:

**Schedule Trigger → Search Records (Airtable) → Send Message (Slack)**

## STEP 1 : Set up your Airtable base

![AutomatisationN8NBaptisteFortairtable.png](fileId:1674)

Create a new base called Tasks

Add a table (for example: Projects, To-Do, or anything relevant)

Add the following fields:

| Field    | Type              | Example                                     |
| -------- | ----------------- | ------------------------------------------- |
| Title    | Text              | Finalize quote for Client A                 |
| Assignee | Text              | Baptiste Fort                               |
| Email    | Email             | [claire@email.com](mailto:claire@email.com) |
| Status   | Single select     | In Progress / Done                          |
| Due Date | Date (dd/mm/yyyy) | 05/07/2025                                  |

Add a few sample tasks with the status In Progress so you can test your workflow later.

## STEP 2 Create the trigger in n8n

In n8n, add a Schedule Trigger node

Set it to run every day at 9:00 a.m.:

Trigger interval: Days

Days Between Triggers: 1

Trigger at hour: 9

Trigger at minute: 0

This is the node that kicks off the workflow every morning.

## STEP 3 : Search for active tasks in Airtable

This step is all about connecting n8n to your Airtable base and pulling the tasks that are still marked as "In Progress".

**1. Add the Airtable node**

In your n8n workflow, add a node called:

Airtable → Search Records

You can find it by typing "airtable" in the node search.

**2. Create your Airtable Personal Access Token**

![AutomatisationN8NBaptisteFortairtablepartie2.png](fileId:1672)

If you haven’t already created your Airtable token, here’s how:

🔗 Go to: [https://airtable.com/create/tokens](https://airtable.com/create/tokens)

Then:

Name your token something like TACHES

Under Scopes, check:

✅ data.records:read

Under Access, select only the base you want to use (e.g. “Tâches”)

Click “Save token”

Copy the personal token

**3. Set up the Airtable credentials in n8n**

In the Airtable node:

Click on the Credentials field

Select: Airtable Personal Access Token

Click Create New

Paste your token

Give it a name like: My Airtable Token

Click Save

**4. Configure the node**

![AutomatisationN8NBaptisteFortairtablepartie3.png](fileId:1676)

Now fill in the parameters:

Base: Tâches

Table: Produits (or Tâches, depending on what you called it)

Operation: Search

Filter By Formula:

{Statut} = "En cours"

Return All: ✅ Yes (make sure it’s enabled)

Output Format: Simple

**5. Test the node**

Click “Execute Node”.

You should now see all tasks with Statut = "En cours" show up in the output (on the right-hand side of your screen), just like in your screenshot.

## STEP 4: Send each task to Slack

Now that we’ve fetched all the active tasks from Airtable, let’s send them to Slack — one by one — using a loop.

![AutomatisationN8NBaptisteFortairtablepartie4.png](fileId:1677)

### Add the Slack node
Drag a new node into your n8n workflow and select:

Slack → Message

Name it something like Send Slack Message

You can find it quickly by typing "Slack" into the node search bar.

### Connect your Slack account
If you haven't already connected your Slack credentials:

Go to n8n → Credentials

Select Slack API

Click Create new

Paste your Slack Bot Token (from your Slack App OAuth settings)

Give it a clear name like Slack Bot n8n

Choose the workspace and save

Then, in the Slack node, choose this credential from the dropdown.

### Configure the message
Set these parameters:

Operation: Send

Send Message To: Channel

Channel: your Slack channel (e.g. #tous-n8n)

Message Type: Simple Text Message

Message template
Paste the following inside the Message Text field:

### Message template

![AutomatisationN8NBaptisteFortairtablepartie5.png](fileId:1675)

Paste the following inside the Message Text field: New task for {{ $json.name }}: *{{ $json["Titre"] }}* 👉 Deadline: {{ $json["Date limite"] }}

Example output:

New task for Jeremy: Relancer fournisseur X 👉 Deadline: 2025-07-04

### Test it

Click Execute Node to verify the message is correctly sent in Slack.

If the formatting works, you’re ready to run it on schedule 🚀

Want to scale your workflows? Visit [0vni – Agence automatisation](https://www.0vni.fr/).

## 🔗 Nodes Used

Airtable, Slack, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
