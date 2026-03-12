# 📋 Create new Clickup tasks from Slack commands

> ⚡ **2,456 views** · 📋 [Project Management](../)

## Description

## Create new Clickup Tasks from Slack commands
This workflow aims to make it easy to create new tasks on Clickup from normal Slack messages using simple slack command. 

For example We can have a slack command as 

/newTask Set task to update new contacts on CRM and assign them to the sales team
This will have an new task on Clickup with the same title and description on Clickup 

For most teams, getting tasks from Slack to Clickup involves manually entering the new tasks into Clickup. What if we could do this with a simple slash command?

## Step 1
The first step is to Create an endpoint URL for your slack command by creating an events API from the link [below] https://api.slack.com/apps/)

## STEP 2 
Next step is defining the endpoint for your URL
Create a new webhook endpoint from your n8n with a POST and paste the endpoint URL to your event API. This will send all slash commands associated with the Slash to the desired endpoint

## Step 3
Log on to slack API (https://api.slack.com/) and create an application. This is the one we use to run all automation and commands from Slack. Once your app is ready, navigate to the Slash Commands and create a new command
 ![image.png](fileId:784)

This will include the command, the webhook URL and a description of what the slash command is all about
![image.png](fileId:786)

Now that this is saved you can do a test by sending a demo task to your endpoint
![image.png](fileId:785)
Once you have tested the webhook slash command is working with the webhook, create a new Clickup API that can be used to create new tasks in ClickUp



This workflow creates a new task with the start dates on Clikup that can be assigned to the respective team members

More details about the document setup can be found on this document [below](https://docs.google.com/document/d/1jw_UP6sXmGsIMktW0Z-b-yQB1leDLatUY2393bA4z8s/edit?usp=sharing)

   ####  Happy Productivity

## 🔗 Nodes Used

Webhook, ClickUp

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
