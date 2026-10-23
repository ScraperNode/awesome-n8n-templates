# 💬 Draft and approve Gmail replies and follow-ups with OpenAI

> ⚡ **22 views** · 💬 [Lead Nurturing & AI Sales Agents](../)

## Description

## Quick overview
This workflow monitors your Gmail inbox for new unread messages, uses OpenAI to classify them and draft fact-based replies, and then emails the draft to an owner for approval before replying in the original Gmail thread.

## How it works
1. Triggers every minute when a new unread email arrives in Gmail, excluding messages from yourself, no-reply senders, and promotional/social/update/forum categories.
2. Sends the email content and your predefined business facts to OpenAI to categorize the message and generate a draft reply in the requested tone and language.
3. Validates and safety-checks the AI output, flagging complaints, money-related topics, empty/overlong drafts, malformed responses, or amounts not present in your business facts.
4. If the draft is safe, sends an approval email to the owner in Gmail and pauses up to 2 days for an approve/decline response.
5. If approved, replies to the customer in the same Gmail thread using the suggested draft; if declined or timed out, no message is sent.
6. If the draft is not safe, sends the owner a “needs your answer” email with the reason, the original message, and any suggested draft without replying to the customer.

## Setup
1. Connect your Gmail OAuth2 credentials for the Gmail trigger and the Gmail send/reply steps.
2. Add your OpenAI API credentials and confirm the chat model selection in the OpenAI step.
3. Update “Your settings” with the owner email address, business facts allowed for drafting, desired tone, sign-off name, and maximum draft length.
4. Review and adjust the Gmail search filter (query/labels/categories) to match which inbox messages should be included.
5. Send a test email from another address and verify the approve/decline flow before activating the workflow.

## Requirements
- A Gmail account and an OpenAI API key.

## Customization
- To handle only some emails, add a label to the trigger filter (for example label:support), change the model in OpenAI model, and edit the rules in Classify and draft a reply and the checks in Check the draft.

## Additional info
Nothing reaches a customer without the owner pressing Send this reply. Do not send, or no answer within 2 days, sends nothing. Money questions, complaints and drafts that fail the checks go to the owner to answer.

## 🔗 Nodes Used

Gmail, Gmail Trigger, Schedule Trigger, Basic LLM Chain, OpenAI Chat Model, Data table

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
