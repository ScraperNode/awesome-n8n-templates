# 💬 Create a knowledge-powered chatbot with Claude, Supabase & Postgres

> ⚡ **1,232 views** · 💬 [Support Chatbots](../)

## Description

# Intelligent chatbot with custom knowledge base
## Who's it for
Businesses, developers, and organizations who need a customizable AI chatbot for internal documentation access, customer support, e-commerce assistance, or any use case requiring intelligent conversation with access to specific knowledge bases.
## What it does
This workflow creates a fully customizable AI chatbot that can be deployed on any platform supporting webhook triggers (websites, Slack, Teams, etc.). The chatbot accesses a personalized knowledge base stored in Supabase and can perform advanced actions like sending emails, scheduling appointments, or updating databases beyond simple conversation.
## How it works
The workflow combines several powerful components:

Webhook Trigger: Accepts messages from any platform that supports webhooks
AI Agent: Processes user queries with customizable personality and instructions
Vector Database: Searches relevant information from your Supabase knowledge base
Memory System: Maintains conversation history for context and traceability
Action Tools: Performs additional tasks like email sending or calendar booking

## Technical architecture

Chat trigger connects directly to AI Agent
Language model, memory, and vector store all connect as tools/components to the AI Agent
Embeddings connect specifically to the Supabase Vector Store for similarity search

## Requirements

Supabase account and project
AI model API key (any LLM provider of your choice)
OpenAI API key (for embeddings - this is covered in Cole Medin's tutorial)
n8n built-in PostgreSQL access (for conversation memory)
Platform-specific webhook configuration (optional)

## How to set up
### Step 1: Configure your trigger

The template uses n8n's default chat trigger
For external platforms: Replace with webhook trigger and configure your platform's webhook URL
Supported platforms: Any service with webhook capabilities (websites, Slack, Teams, Discord, etc.)

### Step 2: Set up your knowledge base
For creating and managing your vector database, follow this comprehensive guide:

Watch Cole Medin's tutorial on document vectorization
This video shows how to build a complete knowledge base on Supabase
The tutorial covers document processing, embedding creation, and database optimization
Important: The video explains the OpenAI embeddings configuration required for vector search

### Step 3: Configure the AI agent

Define your prompt: Customize the agent's personality and role

Example: "You are the virtual assistant for example.com. Help users by answering their questions about our products and services."


Select your language model: Choose any AI provider you prefer (OpenAI, Anthropic, Google, etc.)
Set behavior parameters: Define response style, tone, and limitations

### Step 4: Connect Supabase Vector Store

Add the "Supabase Vector Store" tool to your agent
Configure your Supabase project credentials
Mode: Set to "retrieve-as-tool" for automatic agent integration
Tool Description: Customize description (default: "Database") to describe your knowledge base
Table configuration:

Specify the table containing your knowledge base (example shows "growth_ai_documents")
Ensure your table name matches your actual knowledge base structure
Multiple tables: You can connect several tables for organized data structure


The agent will automatically decide when to search the knowledge base based on user queries

### Step 5: Set up conversation memory (recommended)

Use "Postgres Chat Memory" with n8n's built-in PostgreSQL credentials
Configure table name: Choose a name for your chat history table (will be auto-created)
Context Window Length: Set to 20 messages by default (adjustable based on your needs)
Benefits:

Conversation traceability and analytics
Context retention across messages
Unique conversation IDs for user sessions
Stored in n8n's database, not Supabase



## How to customize the workflow
### Basic conversation features

Response style: Modify prompts to change personality and tone
Knowledge scope: Update Supabase tables to expand or focus the knowledge base
Language support: Configure for multiple languages
Response length: Set limits for concise or detailed answers
Memory retention: Adjust context window length for longer or shorter conversation memory

### Advanced action capabilities
The chatbot can be extended with additional tools for:

Email automation: Send support emails when users request assistance
Calendar integration: Book appointments directly in Google Calendar
Database updates: Modify Airtable or other databases based on user interactions
API integrations: Connect to external services and systems
File handling: Process and analyze uploaded documents

### Platform-specific deployments
#### Website integration

Replace chat trigger with webhook trigger
Configure your website's chat widget to send messages to the n8n webhook URL
Handle response formatting for your specific chat interface

#### Slack/Teams deployment

Set up webhook trigger with Slack/Teams webhook URL
Configure response formatting for platform-specific message structures
Add platform-specific features (mentions, channels, etc.)

#### E-commerce integration

Connect to product databases
Add order tracking capabilities
Integrate with payment systems
Configure support ticket creation

## Results interpretation
### Conversation management

Chat history: All conversations stored in n8n's PostgreSQL database with unique IDs
Context tracking: Agent maintains conversation flow and references previous messages
Analytics potential: Historical data available for analysis and improvement

### Knowledge retrieval

Semantic search: Vector database returns most relevant information based on meaning, not just keywords
Automatic decision: Agent automatically determines when to search the knowledge base
Source tracking: Ability to trace answers back to source documents
Accuracy improvement: Continuously refine knowledge base based on user queries

## Use cases
### Internal applications

Developer documentation: Quick access to technical guides and APIs
HR support: Employee handbook and policy questions
IT helpdesk: Troubleshooting guides and system information
Training assistant: Learning materials and procedure guidance

### External customer service

E-commerce support: Product information and order assistance
Technical support: User manuals and troubleshooting
Sales assistance: Product recommendations and pricing
FAQ automation: Common questions and instant responses

### Specialized implementations

Lead qualification: Gather customer information and schedule sales calls
Appointment booking: Healthcare, consulting, or service appointments
Order processing: Take orders and update inventory systems
Multi-language support: Global customer service with language detection

## Workflow limitations

Knowledge base dependency: Quality depends on source documentation and embedding setup
Memory storage: Requires active n8n PostgreSQL connection for conversation history
Platform restrictions: Some platforms may have webhook limitations
Response time: Vector search may add slight delay to responses
Token limits: Large context windows may increase API costs
Embedding costs: OpenAI embeddings required for vector search functionality

## 🔗 Nodes Used

AI Agent, Embeddings OpenAI, Anthropic Chat Model, Supabase Vector Store, Chat Trigger, Postgres Chat Memory

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
