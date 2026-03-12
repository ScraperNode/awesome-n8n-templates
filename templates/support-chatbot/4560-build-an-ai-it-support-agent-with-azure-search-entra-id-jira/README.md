# 💬 Build an AI IT support agent with Azure Search, Entra ID & Jira

> ⚡ **2,002 views** · 💬 [Support Chatbots](../)

## Description

An intelligent IT support agent that uses Azure AI Search for knowledge retrieval, Microsoft Entra ID integration for user management, and Jira for ticket creation. The agent can answer questions using internal documentation and perform administrative tasks like password resets.

## How It Works

The workflow operates in three main sections:

**Agent Chat Interface**: A chat trigger receives user messages and routes them to an AI agent powered by Google Gemini. The agent maintains conversation context using buffer memory and has access to multiple tools for different tasks.

**Knowledge Management**: Users can upload documentation files (.txt, .md) through a form trigger. These documents are processed, converted to embeddings using OpenAI's API, and stored in an Azure AI Search index with vector search capabilities.

**Administrative Tools**: The agent can query Microsoft Entra ID to find users, reset passwords, and create Jira tickets when issues need escalation. It uses semantic search to find relevant internal documentation before responding to user queries.

The workflow includes a separate setup section that creates the Azure AI Search service and index with proper vector search configuration, semantic search capabilities, and the required field schema.

## Prerequisites

To use this template, you'll need:

- n8n cloud or self-hosted instance
- Azure subscription with permissions to create AI Search services
- Microsoft Entra ID (Azure AD) access with user management permissions
- OpenAI API account for embeddings
- Google Gemini API access
- Jira Software Cloud instance
- Basic understanding of Azure resource management

## Setup Instructions

1. **Import the template into n8n.**

2. **Configure credentials:**
   - Add Google Gemini API credentials
   - Add OpenAI API credentials for embeddings
   - Add Microsoft Azure OAuth2 credentials with appropriate permissions
   - Add Microsoft Entra ID OAuth2 credentials
   - Add Jira Software Cloud API credentials

3. **Update workflow parameters:**
   - Open the "Set Common Fields" nodes
   - Replace `&lt;azure subscription id&gt;` with your Azure subscription ID
   - Replace `&lt;azure resource group&gt;` with your target resource group name
   - Replace `&lt;azure region&gt;` with your preferred Azure region
   - Replace `&lt;azure ai search service name&gt;` with your desired service name
   - Replace `&lt;azure ai search index name&gt;` with your desired index name
   - Update the Jira project ID in the "Create Jira Ticket" node

4. **Set up Azure infrastructure:**
   - Run the manual trigger "When clicking 'Test workflow'" to create the Azure AI Search service and index
   - This creates the vector search index with semantic search configuration

5. **Configure the vector store webhook:**
   - Update the "Invoke Query Vector Store Webhook" node URL with your actual webhook endpoint
   - The webhook URL should point to the "Semantic Search" webhook in the same workflow

6. **Upload knowledge base:**
   - Use the "On Knowledge Upload" form to upload your internal documentation
   - Supported formats: .txt and .md files
   - Documents will be automatically embedded and indexed

7. **Test the setup:**
   - Use the chat interface to verify the agent responds appropriately
   - Test knowledge retrieval with questions about uploaded documentation
   - Verify Entra ID integration and Jira ticket creation

## Security Considerations

- Use least-privilege access for all API credentials
- Microsoft Entra ID credentials should have limited user management permissions
- Azure credentials need Search Service Contributor and Search Index Data Contributor roles
- OpenAI API key should have usage limits configured
- Jira credentials should be restricted to specific projects
- Consider implementing rate limiting on the chat interface
- Review password reset policies and ensure force password change is enabled
- Validate all user inputs before processing administrative requests

## Extending the Template

You could enhance this template by:

- Adding support for additional file formats (PDF, DOCX) in the knowledge upload
- Implementing role-based access control for different administrative functions
- Adding integration with other ITSM tools beyond Jira
- Creating automated escalation rules based on query complexity
- Adding analytics and reporting for support interactions
- Implementing multi-language support for international organizations
- Adding approval workflows for sensitive administrative actions
- Integrating with Microsoft Teams or Slack for notifications

## 🔗 Nodes Used

HTTP Request, Webhook, AI Agent, Simple Memory, n8n Form Trigger, Chat Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
