# 💬 AI-powered student assistant for course information via Twilio SMS

> ⚡ **3,365 views** · 💬 [Support Chatbots](../)

## Description

### This n8n template offers a simple yet capable chatbot assistant who can answer course enquiries over SMS.

Given the right access to data, AI Agents are capable of planning and performing relatively complex research tasks to get their answers. In this example, the agent must first understand the database schema, retrieve lists of values before generating it's own query to search over the database.

**Checkout the example database here - [https://airtable.com/appO5xvP1aUBYKyJ7/shr8jSFDaghubDOrw](https://airtable.com/appO5xvP1aUBYKyJ7/shr8jSFDaghubDOrw)**

### How it works
* A Twilio trigger gives us the ability to receive SMS input into our workflow via webhook.
* The message is then directed to our AI agent who is instructed to assist the user and use the course database as reference. The database is an Airtable base.
* The agent autonomously figures out which tool it needs to use and generates it's own "filter_by_formula" query to search over the available courses.
* On successful search results, the Agent can then use this information to answer the user's query.
* The Agent's output is logged in a second sheet of the Airtable base. We can use this later for analysis and lead gen.
* Finally, the response is sent back to the user through SMS using Twilio.

### How to use
* Ensure your Twilio number is set to forward messages to this workflow's webhook URL.
* Configure and update the course database as required. If you're not interested in courses, you can swap this out for inventory, deliveries or any other data relevant to your business.
* Ask questions like:
  * "Can you help me find suitable courses to fill my Wednesday mornings?"
  * "Which courses are being instructed by profession Lee?"
  * "I'm interested in creative arts. What courses are available which could be relevant to me?"

### Requirements
* Twilio for SMS receiving and sending
* OpenAI for LLM and Agent
* Airtable for Course Database

### Customising this workflow
* Add additional tools and expand the range of queries the agent is able to answer or assist with.
* Not using Airtable? This technique also works with SQL databases like PostgreSQL.

## 🔗 Nodes Used

Airtable, Twilio, AI Agent, OpenAI Chat Model, Simple Memory, Twilio Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
