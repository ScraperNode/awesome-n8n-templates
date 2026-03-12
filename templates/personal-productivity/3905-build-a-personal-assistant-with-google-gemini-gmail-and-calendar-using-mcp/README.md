# ⚡ Build a personal assistant with Google Gemini, Gmail and Calendar using MCP

> ⚡ **36,602 views** · ⚡ [Personal Productivity](../)

## Description

### Talk to Your Apps: Building a Personal Assistant MCP Server with Google Gemini

Wouldn't it be cool to just *tell* your computer or phone to "schedule a meeting with Sarah next Tuesday at 3 PM" or "find John Doe's email address" and have it actually *do* it? That's the dream of a personal assistant!

With n8n and the power of MCP and AI models like Google Gemini, you can actually build something pretty close to that. We've put together a workflow that shows you how you can use a natural language chat interface to interact with your other apps, like your CRM, email, and calendar.

### What You Need to Get Started

Before you dive in, you'll need a few things:

* **n8n:** An n8n instance (either cloud or self-hosted) to build and run your workflow.
* **Google Gemini Access:** Access to the Google Gemini model via an API key.
* **Credentials for Your Apps:** API keys or login details for the specific CRM, Email, and Calendar services you want to connect (like Google Sheets for CRM, Gmail, Google Calendar, etc., depending on your chosen nodes).
* **A Chat Interface:** A way to send messages to n8n to trigger the workflow (e.g., via a chat app node or webhook).

### How it Works (In Simple Terms)

Imagine this workflow is like a helpful assistant who sits between you and your computer.

**Step 1: You Talk, the AI Agent Listens**

It all starts when you send a message through your connected chat interface. Think of this as you speaking directly to your assistant.

**Step 2: The Assistant's Brain (Google Gemini)**

Your message goes straight to the assistant's "brain." In this case, the brain is powered by a smart AI model like Google Gemini. In our template we are using the latest Gemini 2.5 Pro. But this is totally up to you. Experiment and track which model fits the kind of tasks you will pass to the agent. Its job is to *understand* exactly what you're asking for.

* Are you asking to create something?
* Are you asking to find information?
* Are you asking to update something?

The brain also uses a "memory" so it can remember what you've talked about recently, making the conversation feel more natural. We are using the default context window, which is the past 5 interactions.

**Step 3: The Assistant Decides What Tool to Use**

Once the brain understands your request, the assistant figures out the best way to help you. It looks at the request and thinks, "Okay, to do this, I need to use one of my tools."

**Step 4: The Assistant's Toolbox (MCP & Your Apps)**

Here's where the "MCP" part comes in. Think of "MCP" (Model Context Protocol) as the assistant's special toolbox. Inside this toolbox are connections to all the different apps and services you use – your CRM for contacts, your email service, and your calendar.

The MCP system acts like a manager for these tools, making them available to the assistant whenever they're needed.

**Step 5: Using the Right Tool for the Job**

Based on what you asked for, the assistant picks the correct tool from the toolbox.

* If you asked to find a contact, it grabs the "Get Contact" node from the CRM section.
* If you wanted to schedule a meeting, it picks the "Create Event" node from the Calendar section.
* If you asked to draft an email, it uses the "Draft Email" node.

**Step 6: The Tool Takes Action**

Now, the node or set of nodes get to work! It performs the action you requested within the specific app.

* The CRM tool finds or adds the contact.
* The Email tool drafts the message.
* The Calendar tool creates the event.

**Step 7: Task Completed!**

And just like that, your request is handled automatically, all because you simply told your assistant what you wanted in plain language.

### Why This is Awesome

This kind of workflow shows the power of combining AI with automation platforms like n8n. You can move beyond clicking buttons and filling out forms, and instead, interact with your digital life using natural conversation. n8n makes it possible to visually build these complex connections between your chat, the AI brain, and all your different apps.

### Taking it Further (Possible Enhancements)

This is just the start! You could enhance this personal assistant by:

* Connecting more apps and services (task managers, project tools, etc.).
* Adding capabilities to search the web or internal documents.
* Implementing more sophisticated memory or context handling.
* Getting a notification when the AI agent is done completing each task such as in Slack or Microsoft Teams.
* Allowing the assistant to ask clarifying questions if needed. Building a robust prompt for the AI agent.

### Ready to Automate Your Workflow?

Imagine the dozens of hours your team could save weekly by automating repetitive tasks through a simple, natural language interface. 

### Need help?
Feel free to contact us at [1 Node](https://1node.ai).
Get instant access to a library of [free resources](https://1node.ai/resources) we created.

## 🔗 Nodes Used

AI Agent, Simple Memory, Chat Trigger, Google Gemini Chat Model, MCP Client Tool, MCP Server Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
