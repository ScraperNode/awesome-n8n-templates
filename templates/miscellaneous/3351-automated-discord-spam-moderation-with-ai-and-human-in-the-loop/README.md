# 🔧 Automated discord spam moderation with AI and human-in-the-loop

> ⚡ **1,764 views** · 🔧 [Miscellaneous](../)

## Description

### This n8n template demonstrates how you can automate community moderation using human-in-the-loop functionality for Discord.

The use-case is for detecting and dealing with spam messages in a predefined and consistent way. Human-in-the-loop allows for a balance between overly aggressive bots and time and effort from the moderation team.

### How it works
* A scheduled trigger is used to scan the most recent messages in a Discord Channel. Messages are tagged via the "Remove Duplicates" node so they don't get processed again in the future.
* Messages are grouped by user to allow for minimising of number of notifications sent.
* An AI text classifier node is then used to detect for spam in each user's message.
* When detected, a notification is sent to a moderation channel using the Send-and-wait mode for Discord. This notification comes with an n8n form and dropdown list of predefined actions to take in dealing with the spam messages. Once sent the workflow waits until a response is received.
* Once a moderator selects an action, the workflow continues and carries out a predefined moderation action.

### How to use
* Depending on how busy your community is and subject to spammers, you may need to increase the scheduled interval.
* Add as many or few moderation actions as required.
* Remember to activate the workflow to  get it started.

### Requirements
* Discord channel for messages to moderate
* OpenAI for text classification

### Customising this template
* It is possible to cover multiple channels. Add as many as your community needs.
* Not using Discord. The template can also work in slack or other services which offer the same bot functionality.

## 🔗 Nodes Used

Discord, Execute Sub-workflow, Execute Workflow Trigger, Schedule Trigger, Filter, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
