# 💬 Telegram AI bot-to-human handoff for sales calls

> ⚡ **16,939 views** · 💬 [Lead Nurturing & AI Sales Agents](../)

## Description

### This n8n template demonstrates an approach to perform bot-to-human handoff using Human-in-the-loop functionality as a switch.

In this experiment, we play with the idea of states we want our agent to be in which controls it's interacton with the user.
* **First state** - the agent is onboarding the user by collecting their details for a sales inquiry. After which, they are handed-off / transferred to a human to continue the call.
* **Second state** - the agent is essentially "deactivated" as further messages to the bot will not reach it. Instead, a canned response is given to the user. The human agent must "reactivate" the bot by completing the human-in-the-loop form and give a summary of their conversation with the user.
* **Third state** - the agent is "reactivated" with context of the human-to-user conversation and is set to provide after sales assistance. An tool is made available to the agent to again delegate back to the human agent when requested.

### How it works
* This template uses telegram to handle the interaction between the user and the agent.
* Each user message is checked for a session state to ensure it is guided to the right stage of the conversation. For this, we can use Redis as a simple key-value store.
* When no state is set, the user is directed through an onboarding step to attain their details. Once complete, the agent will "transfer" the user to a human agent - technically, all this involves is an update to the session state and a message to another chat forwarding the user's details.
* During this "human" state, the agent cannot reply to the user and must wait until the human "transfers" the conversation back. The human can do this by replying to "human-in-the-loop" message with a summary of their conversation with the user. This session state now changes to "bot" and the context is implanted in the agent's memory so that the agent can respond to future questions.
* At this stage of the conversation, the agent is now expected to handle and help the user with after-sales questions. The user can at anytime request transfer back to the human agent, repeating the previous steps as necessary.

### How to use
* Plan your user journey! Here is a very basic example of a sales inquiry with at most 3 states. More thought should be developed when many more states are involved.
* You may want to better log and manage session states so no user is left in limbo. Try connecting the user and sessions to your CRM.
* Note, the Onboarding agent and After-Sales agent have separate chat memories. When adding more agents, it is recommend to continue having separate chat memories to help focus between states.

### Requirements
* Telegram for chatbot & interface
* Redis for session store and chat memory
* OpenAI for AI agent

### Customising this workflow
* Not using Telegram? This template works with Whatsapp and other services with equivalent functionality.

## 🔗 Nodes Used

Redis, Telegram, Telegram Trigger, Execute Sub-workflow, Execute Workflow Trigger, AI Agent

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
