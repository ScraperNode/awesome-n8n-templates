# 🔧 Detect toxic language in Telegram messages

> ⚡ **2,413 views** · 🔧 [Miscellaneous](../)

## Description

This workflow detects toxic language (such as profanity, insults, threats) in messages sent via Telegram. [This blog tutorial](https://n8n.io/blog/create-a-toxic-language-detector-for-telegram/) explains how to configure the workflow nodes step-by-step.

![workflow-screenshot](https://lh3.googleusercontent.com/pSN-PhPuKlXONRTmsT6_6pNDUNHRwtaRfBpuCnslpZS4NsuZwfJmYl8ANTa4gcdL0JMUXvLEyJQP9k8It2AvNyWLHdJ0m3dJ1nSM_z-CprrOwjqNXTNjg-2WEriYJaDWVXsKZ-YZ=s0)

**Telegram Trigger**: triggers the workflow when a new message is sent in a Telegram chat.

**Google Perspective**: analyzes the text of the message and returns a probability value between 0 and 1 of how likely it is that the content is toxic.

**IF**: filters messages with a toxic probability value above 0.7.

**Telegram**: sends a message in the chat with the text "I don't tolerate toxic language" if the probability value is above 0.7.

**NoOp**: takes no action if the probability value is below 0.7.

## 🔗 Nodes Used

Telegram, Telegram Trigger, Google Perspective

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
