# 💬 Customer authentication for chat support with OpenAI and Redis session management

> ⚡ **1,687 views** · 💬 [Support Chatbots](../)

## Description

### This n8n template demonstrates one approach to customer authentication via chat agents.

Unlike approaches where you have to authenticate users prior to interacting with the agent, this approach allows guest users to authenticate at any time during the session or not at all. 

**Note about Security**: this template is for illustration purposes only and requires much more work to be ready for production!

### How it works
* A conversational agent is used for this demonstration. The key component is the Redis node just after the chat trigger which acts as the session context.
* For guests, the session item is blank. for customers, the session item is populated with their customer profile.
* The agent is instructed to generate a unique login URL only for guests when appropriate or upon request.
* This login URL redirects the guest user to a simple n8n form also hosted in this template. The login URL has the current sessionID as a query parameter as the way to pass this data to the form.
* Once login is successful, the matching session item by sessionId is populated with the customer profile. The user can now return to the chat window.
* Back to the agent, now when the user sends their next message, the Redis node will pick up the session item and the customer profile associated with it. The system prompt is updated with this data which let's the agent know the user is now a customer.

### How to use
* You'll need to update the "auth URL" tool to match the URL of your n8n instance. Better yet, copy the production URL of your form from the trigger.
* Activate the workflow to turn on production mode which is required for this workflow.
* Implement the authentication logic in step 3. This could be sending the user and pass to a postgreSQL data for validation.

### Requirements
* OpenAI for LLM (feel free to swap to any provider)
* Redis for Cache/Sessions (again, feel free to swap this out for postgresql or other database)

### Customising this workflow
* Consider not populating the session item with the user data as it can become stale. Instead, just add the userId and instruct the agent to query using tools.
* Extend the Login URL idea by experimenting with signup URLs or single-use Urls.

## 🔗 Nodes Used

Redis, Execute Workflow Trigger, AI Agent, OpenAI Chat Model, Simple Memory, Call n8n Workflow Tool

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
