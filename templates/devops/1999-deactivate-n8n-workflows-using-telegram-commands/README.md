# ⚙️ (De)activate n8n workflows using Telegram commands

> ⚡ **2,822 views** · ⚙️ [DevOps & CI/CD](../)

## Description

# Telegram N8N workflow (de)activator

## What does it do?
This workflow helps you to quickly activate or deactivate a workflow through Telegram. Sometimes we are not able to access a PC to resolve an issue if something goes wrong with a workflow. If you, like me, use Telegram to send yourself error reports, you can quickly react in case of urgency. Just by sending '/stop' combined with the name you use for a workflow, you can deactivate a workflow, or reactivate it with '/start'. For example '/stop marketing'.

Walkthrough: [https://watch.screencastify.com/v/uWQ88gZKj57WTGOOqSW2](https://watch.screencastify.com/v/uWQ88gZKj57WTGOOqSW2) (6min)

## Instructions
1. Create a Telegram API key through botfather ([https://t.me/botfather](https://t.me/botfather)). Add it to the telegram credentials.
2. For the N8N nodes, go to settings in your n8n instance. Then 'n8n API' and 'create an API key'. 
3. To ensure that only we can send commands to the bot, we need the chat ID of our DM with our newly created bot. Open the the Telegram trigger and click on 'listen to events'.
4. Go to Telegram and send a direct message to the bot, this will trigger the Telegram node.
5. Go to the filter node and fill in the chat id you want to filter for with the data you got from the test event in the Telegram node.
6. In the first Switch node you can find the commands, in this case it is '/start' and '/stop'. When you send a message to your bot starting with either of those, it will go to the next switch nodes.
7. Next it will check what other word it contains. As an example I have used the words 'marketing' and 'sales', both corresponding to a marketing and sales workflow. 
8. The last nodes will either activate or deactivate a workflow.

## 🔗 Nodes Used

Telegram Trigger, n8n, Filter

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
