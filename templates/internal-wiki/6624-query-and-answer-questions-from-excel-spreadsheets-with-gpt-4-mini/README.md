# 📖 Query and answer questions from Excel spreadsheets with GPT-4 Mini

> ⚡ **252 views** · 📖 [Internal Wiki & Knowledge Base](../)

## Description

This workflow creates an intelligent chatbot that uses your Microsoft Excel workbooks as a knowledge base. The AI agent can automatically query your Excel spreadsheets to provide accurate, contextual responses based on your stored data and information.

![825shots_so 1.jpg](fileId:1893)

## Who's it for

This template is perfect for:
* Business teams who maintain their knowledge base in Excel spreadsheets
* Organizations with existing data and processes in Microsoft 365
* Small businesses using Excel for inventory, customer data, or documentation
* Teams wanting to make their Excel data conversationally accessible without complex database setup
* Companies looking to leverage familiar Excel workflows with AI capabilities

## How it works

The workflow combines OpenAI's language model with Microsoft Excel's spreadsheet capabilities to create a smart chatbot. When users ask questions, the AI agent automatically determines which Excel worksheets and data ranges are relevant and uses that information to generate helpful responses. The system maintains conversation history for natural, contextual interactions.

## How to set up

1. **Add your credentials:**
   - Configure your **Microsoft Excel** (Office 365) credentials in the Get Excel Data node
   - Set up your **OpenAI API** credentials in the OpenAI Chat Model node

2. **Configure your Excel connection:**
   - Click the **Get Excel Data** node
   - Select your Excel workbook containing your knowledge base data
   - The AI will automatically determine relevant worksheets and data ranges

3. **Customize the AI model:**
   - Open the **OpenAI Chat Model** node
   - Choose your preferred model (GPT-4, GPT-3.5-turbo, etc.)
   - Adjust token limits if needed

4. **Test the chatbot:**
   - Click the **Chat** button to start a conversation
   - Ask questions related to your Excel data

5. **Optional - Make it public:**
   - Enable public access in the Chat Trigger node
   - Embed the provided code into your website

## Requirements

- n8n instance (cloud or self-hosted)
- Microsoft 365 account with Excel Online access
- Excel workbooks with data you want to query
- OpenAI API key with available credits
- Microsoft Graph API permissions for Excel access

## How to customize the workflow

**Change the AI Provider:**
You can replace the OpenAI Chat Model with other providers like Anthropic Claude, Google Gemini, or local models by swapping the language model node.

**Adjust Context Window:**
Modify the "Remember Chat History" node to increase or decrease how many previous messages the AI remembers (default is 10 interactions).

**Update System Instructions:**
Edit the Smart AI Agent's system message to change how the assistant behaves or add specific instructions for your use case.

**Connect Multiple Workbooks:**
Add additional Get Excel Data nodes to give the AI access to multiple Excel workbooks within your Microsoft 365 environment.

**Add Data Validation:**
Include nodes to validate Excel data format and structure before processing to ensure consistent AI responses.

**Add More Tools:**
Extend the AI agent with additional tools like web search, email sending, or integration with other Microsoft 365 services.

## Workflow Structure

```
Chat Trigger → Smart AI Agent ← OpenAI Chat Model
                     ↓
              Get Excel Data
                     ↑
           Remember Chat History
```

The Smart AI Agent orchestrates the conversation, deciding when to query Excel and how to use the retrieved data in responses. The memory buffer ensures natural conversation flow by maintaining context across interactions.

## 🔗 Nodes Used

AI Agent, OpenAI Chat Model, Simple Memory, Chat Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
