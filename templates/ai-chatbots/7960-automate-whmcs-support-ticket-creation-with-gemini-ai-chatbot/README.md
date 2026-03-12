# 🤖 Automate WHMCS support ticket creation with Gemini AI chatbot

> ⚡ **611 views** · 🤖 [AI Chatbots & Agents](../)

## Description

## This n8n template implements an AI-Powered Chatbot for Automated WHMCS Support Ticket Creation

## Who's it for

This template is designed for **web hosting companies, domain registrars, and IT service providers** who want to automate their customer support ticket creation process. It's perfect for businesses looking to streamline support operations by automatically converting customer chat conversations into structured WHMCS support tickets while maintaining professional, empathetic customer interactions.

## How it works / What it does

This workflow creates an **AI-powered chatbot** that automatically converts customer chat messages into structured support tickets within the WHMCS system. The AI agent automatically:

1. **Receives customer queries** through a webhook endpoint
2. **Processes natural language requests** using Google Gemini AI
3. **Extracts key information** from customer conversations:
   - Customer name and email
   - Issue description and subject
   - Appropriate support department
   - Priority level (Low, Medium, High)
4. **Fetches valid support departments** from WHMCS using the GetSupportDepartments API
5. **Creates structured support tickets** via WHMCS OpenTicket API
6. **Maintains conversation context** with session-based memory
7. **Provides professional responses** while gathering necessary information

The system ensures **100% accuracy** by always mapping to valid WHMCS departments and never inventing ticket fields, maintaining data integrity and proper ticket routing.

## How to set up

### 1. Configure Google Gemini API
- Set up your Google Gemini API credentials in the Google Gemini Chat Model node
- Ensure you have sufficient API quota for your expected usage

### 2. Configure WHMCS API
- Update the WHMCS API credentials in both HTTP Request Tool nodes
- Replace `https://WHMCS_URL.com/includes/api.php` with your actual WHMCS API endpoint
- Ensure your WHMCS API has the necessary permissions for:
  - `GetSupportDepartments` action
  - `OpenTicket` action

### 3. Customize AI Agent Behavior
- Modify the system message in the AI Agent node to match your company's tone and policies
- Adjust the agent's response style and ticket creation workflow
- Customize department mapping and priority assignment logic

### 4. Set up the Webhook
- The workflow creates a unique webhook endpoint for receiving customer queries
- Use this endpoint URL in your customer-facing chat interface
- Ensure proper security measures for webhook access

### 5. Test Department Integration
- Verify that the `GetSupportDepartments` API call returns your actual support departments
- Test ticket creation with various customer scenarios
- Ensure proper error handling for API failures

## Requirements

- **Google Gemini API account** with appropriate credentials
- **n8n instance** (self-hosted or cloud)
- **WHMCS installation** with API access enabled
- **Support department structure** already configured in WHMCS
- **Customer chat interface** or messaging system

## How to customize the workflow

### Modify AI Agent Behavior
- Edit the system message in the AI Agent node to change the bot's personality and response style
- Adjust ticket creation logic and required field validation
- Customize priority assignment algorithms based on keywords or urgency indicators

### Enhance Ticket Creation
- Add custom fields to the ticket creation process
- Implement ticket categorization based on conversation content
- Add automatic assignment to specific support staff members

### Improve Customer Experience
- Add ticket confirmation and tracking information
- Implement follow-up message scheduling
- Add customer satisfaction surveys after ticket resolution

### Security Enhancements
- Implement API key rotation and monitoring
- Add request validation and sanitization
- Set up usage analytics and abuse prevention

## Key Features

- **Automatic ticket creation** from natural language conversations
- **Intelligent department mapping** using WHMCS API
- **Professional customer interaction** with empathetic responses
- **Session-based memory** for contextual conversations
- **Structured ticket data** with proper validation
- **Priority assignment** based on conversation analysis
- **Scalable webhook architecture** for high-volume usage
- **Direct WHMCS integration** for seamless ticket management

## Use Cases

- **24/7 automated support ticket creation** for web hosting companies
- **Customer service automation** with human-like interaction
- **Support team efficiency** by reducing manual ticket entry
- **Consistent ticket formatting** across all customer interactions
- **Improved response times** through immediate ticket creation
- **Customer self-service** with professional guidance

## Chat Session Management

The workflow automatically manages chat sessions with the following features:

- **Unique Session IDs** for each customer conversation
- **Automatic information extraction** from customer messages
- **Conversation history tracking** with chronological message storage
- **Session persistence** across multiple interactions
- **Contextual responses** based on conversation history

## Example Customer Interactions

The AI agent can handle various customer scenarios:

- **Technical Issues**: "My website is down" → Creates ticket in Technical Support department
- **Billing Questions**: "I need help with my invoice" → Creates ticket in Billing department
- **Domain Services**: "I want to transfer my domain" → Creates ticket in Domain Services department
- **General Support**: "I have a question about my hosting plan" → Creates ticket in General Support department

## Ticket Creation Process

The workflow follows a structured approach:

1. **Information Gathering**: The AI agent identifies missing required information (email, name, etc.)
2. **Department Selection**: Fetches available departments from WHMCS and maps customer needs appropriately
3. **Priority Assessment**: Determines ticket priority based on urgency indicators in the conversation
4. **Ticket Creation**: Generates a well-structured ticket with clear subject and detailed message
5. **Confirmation**: Provides customer with ticket creation confirmation and next steps

This template transforms your web hosting business by providing instant, automated support ticket creation while maintaining the personal touch that customers expect from professional service providers. The AI agent becomes an extension of your support team, handling routine inquiries and ensuring no customer request goes unaddressed.

## 🔗 Nodes Used

AI Agent, Simple Memory, Chat Trigger, Google Gemini Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
