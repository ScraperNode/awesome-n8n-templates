# 🤝 Manage KlickTipp contacts via Telegram Bot with GPT-5 mini agent

> ⚡ **495 views** · 🤝 [CRM & Sales Operations](../)

## Description

![Screenshot 20250915 at 18.02.43.png](fileId:2633)

**Community Node Disclaimer**: This workflow uses KlickTipp community nodes.

### How It Works

**AI Agent and KlickTipp Tools Integration via Telegram:**
This component connects a large language model (LLM), such as Claude or OpenAI, to the KlickTipp contact management platform through Telegram messaging. The AI Agent interprets natural language queries received from Telegram and dynamically maps them to KlickTipp API operations, enabling intuitive and automated contact handling through a familiar messaging interface.

### Key Features

**Telegram & LLM Interaction Setup:**
- Captures messages received via Telegram bot as an alternative to the chat message node.
- Maintains conversation state using a memory buffer tied to Telegram chat IDs.
- Interprets user input using an LLM (Claude or OpenAI).
- Routes interpreted commands to specific KlickTipp tools based on detected intent.
- Sends responses back to Telegram users with operation results.


**KlickTipp Integration:**
Complete set of KlickTipp API endpoints included:
- **Contact Management:** Add, update, get, list, delete, and unsubscribe contacts.
- **Contact Tagging:** Tag, untag, list tagged contacts.
- **Tag Operations:** Create, get, update, delete, list tags.
- **Opt-In Processes:** List and retrieve opt-in process details.
- **Data Fields:** List and get custom data fields.
- **Redirects:** Retrieve redirect URLs.


**Use Cases Supported:**
- Query contact information via email or name through Telegram messages.
- Identify and segment contacts by city, region, or behavior via Telegram commands.
- Create or update contacts from data provided in Telegram messages.
- Dynamically apply or remove tags to initiate campaigns through Telegram bot interactions.
- Automate targeted outreach based on contact attributes using Telegram as the control interface.

### Setup Instructions

**Install and Configure Nodes:**
- Set up a Telegram bot using [BotFather](https://core.telegram.org/bots#6-botfather) and obtain the bot token.
- Configure the Telegram Trigger node in n8n with your bot token.
- Configure the LLM model (e.g., OpenAI or Claude) and memory node if used.
- Connect all required KlickTipp nodes and authenticate using valid API credentials.
- Activate the workflow.


**Define Tagging and Field Mapping:**
- Identify which fields and tags are relevant to your use cases.
- Ensure necessary tags and custom fields are already created in KlickTipp.


**Workflow Logic:**
1. **Trigger via Telegram:** A message is received by the Telegram bot and passed to the AI Agent.
2. **Query Handling via LLM Agent:** AI interprets the natural language input and determines the action.
3. **Contact Search & Segmentation:** Searches contacts using identifiers (email, address) or criteria.
4. **Data Operations:** Retrieves, updates, or manages contact and tag data based on interpreted command.
5. **Campaign Preparation:** Applies tags or sends campaign triggers depending on query results.
6. **Response via Telegram:** Sends formatted results back to the Telegram user.


**Benefits:**
- **Mobile-First Interface:** Users can manage KlickTipp contacts directly from Telegram on any device.
- **AI-Powered Automation:** Reduces manual contact search and tagging efforts through intelligent processing.
- **Scalable Integration:** Built-in support for full range of KlickTipp operations allows diverse use-case handling.
- **Data Consistency:** Ensures structured data flows between Telegram, AI, and KlickTipp, minimizing errors.


**Testing and Deployment:**
Use defined Telegram messages such as:
- “Tell me something about the contact with email address X”
- “Tag all contacts from region Y”
- “Send campaign Z to customers in area A”


Validate expected actions in KlickTipp after message execution and confirm responses in Telegram.


**Notes:**
- **Customization:** Adjust tag logic, AI prompts, and contact field mappings based on project needs.
- **Extensibility:** The template can be expanded with further logic for Google Sheets input or campaign feedback loops

**Resources:**  
- [Use KlickTipp Community Node in n8n](https://www.klicktipp.com/support/knowledge-base/install-klicktipp-node-n8n/)
- [Automate Workflows: KlickTipp Integration in n8n](https://www.klicktipp.com/support/knowledge-base/klicktipp-integration-n8n/)

## 🔗 Nodes Used

Telegram, Telegram Trigger, AI Agent, OpenAI Chat Model, Simple Memory, Code Tool

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
