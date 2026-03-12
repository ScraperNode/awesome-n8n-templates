# 💬 End of turn detection for smoother AI agent chats with Telegram and Gemini

> ⚡ **1,317 views** · 💬 [Support Chatbots](../)

## Description

### This n8n template demonstrates one approach to achieve a more natural and less frustration conversations with AI agents by reducing interrupts by predicting the end of user utterances.

When we text or chat casually, it's not uncommon to break our sentences over multiple messages or when it comes to voice, break our speech with the odd pause or umms and ahhs. If an agent replies to every message, it's likely to interrupt us before we finish our thoughts and it can get very annoying!

Previously, I demonstrated a [simple technique for buffering each incoming message by 5 seconds](https://n8n.io/workflows/2346-enhance-customer-chat-by-buffering-messages-with-twilio-and-redis/) but that approach still suffers in some scenarios when more time is needed. This technique has no arbitrary time limit and instead uses AI to figure out when its the agent's turn based on the user's message, allowing for the user to take all the time they need.

### How it works
* Telegram messages are received but no reply is generated for them by default. Instead they are sent to the prediction subworkflow to determine if a reply should be generated.
* The prediction subworkflow begins by checking Redis for the current user's prediction session state. If this is a new "utterance", it kicks off the "predict end of utterance" loop - the purpose of which is to buffer messages in a smart way!
* New users message can continue to be accepted by the workflow until enough is collected to allow our prediction classifier to determine the end of the utterance has been reached.
* The loop is then broken and the buffered chat messages are combined and sent to the AI agent to generate a response and sent to the user via the telegram node.
* The prediction session state is then deleted to signal the workflow is ready to start again with a new message.

### How to use
* This system sits between your preferred chat platform and the AI agent so all you need to do is replace the telegram nodes as required.
* Where LLM-only prediction isn't working well enough, consider more traditional code-based checking of heuristics to improve the detection.
* Ideally you'll want a fast but accurate LLM so your user isn't waiting longer than they have to - at time of writing Gemini-2.5-flash-lite was the fastest in testing but keep a look out for smaller and more powerful LLMs in the future.

### Requirements
* Gemini for LLM
* Redis for session management
* Telegram for chat platform

## 🔗 Nodes Used

HTTP Request, Redis, Telegram, Telegram Trigger, Execute Sub-workflow, Execute Workflow Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
