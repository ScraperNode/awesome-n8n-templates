# 📱 Send private welcome messages to new WhatsApp group members with Evolution API

> ⚡ **1,938 views** · 📱 [Social Media & Email Marketing](../)

## Description

## Who's it for

This template is perfect for community managers, business owners, and WhatsApp group administrators who want to create a welcoming experience for new members. Whether you're running a support group, managing a business community, or moderating a hobby group, this automation ensures every new member feels valued from the moment they join.

## How it works

The workflow automatically detects when someone joins your WhatsApp group and sends them a personalized welcome message directly to their private chat. It uses Evolution API to interface with WhatsApp Business and includes a natural delay to make the interaction feel more human. The entire process is hands-off once configured, ensuring consistent engagement with new members 24/7.

## What it does

1. **Monitors group activity** - Receives real-time notifications when members join or leave
2. **Filters for your specific group** - Ensures messages are only sent for your designated group
3. **Validates new joins** - Confirms the event is a member joining (not leaving)
4. **Adds natural timing** - Waits a customizable period before sending the message
5. **Sends private welcome** - Delivers your welcome message directly to the new member's chat

## Requirements

- **Evolution API instance** (self-hosted or cloud service)
- **WhatsApp Business account** connected to Evolution API
- **Group admin permissions** for the WhatsApp group
- **n8n instance** (self-hosted or cloud)

## How to set up

1. **Import the workflow** into your n8n instance
2. **Configure the Set Variables node** with:
   - Your WhatsApp group ID (format: xxxxxxxxxxxxx@g.us)
   - Evolution API key
   - Instance name from Evolution API
   - Evolution API URL
   - Custom welcome message
   - Delay time in minutes

3. **Copy the webhook URL** from the Webhook node
4. **Configure Evolution API** to send group notifications to your webhook URL
5. **Test the workflow** by having someone join your group
6. **Activate the workflow** for continuous operation

For a detailed video tutorial on setting up this workflow, check out: https://youtu.be/WO2MJoQqLvo

## How to customize the workflow

- **Welcome message**: Edit the message in the Set Variables node to match your group's tone
- **Timing**: Adjust the wait time to send messages immediately or after several minutes
- **Multiple groups**: Duplicate the workflow and change the group ID for each group
- **Rich media**: Extend the HTTP Request node to send images or documents with the welcome
- **Conditional messages**: Add IF nodes to send different messages based on time of day or member count
- **Follow-up sequence**: Chain additional HTTP Request nodes to create a welcome series

## 🔗 Nodes Used

HTTP Request, Webhook, Filter

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
