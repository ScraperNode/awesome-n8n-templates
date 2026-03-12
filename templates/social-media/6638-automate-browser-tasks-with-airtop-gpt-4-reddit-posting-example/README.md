# 📱 Automate browser tasks with Airtop & GPT-4 - Reddit posting example

> ⚡ **1,533 views** · 📱 [Social Media & Email Marketing](../)

## Description

## Overview

This n8n workflow creates an intelligent AI agent that automates browser interactions through Airtop's browser automation platform. The agent can control real browser sessions, navigate websites, interact with web elements, and maintain detailed session records - all while providing live viewing capabilities for real-time monitoring.

Youtube Tutorial: https://www.youtube.com/watch?v=XoZqFY7QFps

## What This Workflow Does

The AI agent acts as your virtual assistant in the browser, capable of:

- **Session Management**: Creates, monitors, and terminates browser sessions with proper tracking
- **Web Navigation**: Visits websites, clicks elements, fills forms, and performs complex interactions
- **Multi-Window Support**: Manages multiple browser windows within sessions
- **Live Monitoring**: Provides real-time viewing URLs so you can watch the automation
- **Data Tracking**: Maintains comprehensive records of all browser activities
- **Profile Integration**: Uses Airtop profiles for authenticated sessions
- **Email Notifications**: Sends live URLs and status updates via Gmail

## Demo Use Case: Automated Reddit Posting

The tutorial demonstrates the agent's capabilities by:

1. **Logging into Reddit** using pre-configured Airtop profile credentials
2. **Navigating to a specific subreddit** based on user input
3. **Creating and publishing a new post** with title and content
4. **Tracking the entire process** with detailed session records
5. **Providing live viewing access** throughout the automation

## Core Workflow Components

### 1. Chat Interface Trigger
- **Node Type**: Chat Trigger
- **Purpose**: Accepts user commands for browser automation tasks
- **Input**: Natural language instructions (e.g., "Create a Reddit post in r/automation")

### 2. AI Agent Processing
- **Node Type**: OpenAI GPT-4
- **Purpose**: Interprets user requests and determines appropriate browser actions
- **System Message**: Contains the comprehensive agent instructions from your documentation
- **Capabilities**:
  - Understands complex web interaction requests
  - Plans multi-step browser workflows
  - Manages session states intelligently
  - Handles error scenarios gracefully

### 3. Google Sheets Data Management
Multiple Google Sheets nodes manage different aspects of session tracking:

#### Browser Sessions Sheet
- **Fields**: `session_id`, `description`, `status`, `created_date`
- **Purpose**: Tracks active browser sessions
- **Operations**: Create, read, update session records

#### Window Sessions Sheet  
- **Fields**: `session_id`, `window_id`, `description`, `airtop_live_view_url`, `status`
- **Purpose**: Tracks individual browser windows within sessions
- **Operations**: Create, read, update window records

#### Airtop Profiles Sheet
- **Fields**: `platform_name`, `platform_url`, `profile_name`
- **Purpose**: Stores available authenticated profiles
- **Operations**: Read available profiles for session creation

### 4. Airtop Browser Automation Nodes
Multiple specialized nodes for browser control:

#### Session Management
- **create_session**: Creates new browser sessions with optional profile authentication
- **terminate_session**: Closes browser sessions and updates records
- **read_airtop_profiles**: Retrieves available authentication profiles

#### Window Management
- **create_window**: Opens new browser windows with specified URLs
- **query_page**: Analyzes page content and identifies interactive elements

#### Web Interaction
- **click_element**: Clicks specific page elements based on AI descriptions
- **type_text**: Inputs text into form fields and input elements

### 5. Gmail Integration
- **Node Type**: Gmail Send
- **Purpose**: Sends live viewing URLs and status updates
- **Recipients**: User email for real-time monitoring
- **Content**: Complete Airtop live view URLs for browser session observation

### 6. Error Handling & Validation
- **Input Validation**: Ensures required parameters are present
- **Session State Checks**: Verifies browser session status before operations
- **Error Recovery**: Handles failed operations gracefully
- **Data Consistency**: Maintains accurate session records even during failures

## Technical Requirements

### API Credentials Needed
1. **Airtop.ai API Key**
   - Sign up at airtop.ai
   - Generate API key from dashboard
   - Required for all browser automation functions

2. **OpenAI API Key**
   - OpenAI account with GPT-4 access
   - Required for AI agent intelligence and decision-making

3. **Google Sheets Access**
   - Google account with Google Sheets API access
   - Copy the provided template and get your sheet URL
   - Required for session and profile data management

4. **Gmail OAuth**
   - Google account with Gmail API access
   - Required for sending live viewing URLs and notifications

### Airtable Base Structure
Create three tables in your Airtable base:

#### 1. Browser Details (Sessions)
```
- session_id (Single line text)
- description (Single line text)
- status (Single select: Open, Closed)
- created_date (Date)
```

#### 2. Window Details (Windows)
```
- session_id (Single line text)
- window_id (Single line text)
- description (Single line text)
- airtop_live_view_url (URL)
- status (Single select: Open, Closed)
```

#### 3. Airtop Profiles
```
- platform_name (Single line text)
- platform_url (URL)
- profile_name (Single line text)
```

## Workflow Logic Flow

### User Request Processing
1. **User Input**: Natural language command via chat interface
2. **AI Analysis**: OpenAI processes request and determines required actions
3. **Session Check**: Agent reads current browser session status
4. **Action Planning**: AI creates step-by-step execution plan

### Browser Session Lifecycle
1. **Session Creation**:
   - Check for existing open sessions
   - Ask user about profile usage if needed
   - Create new Airtop session
   - Record session details in Airtable

2. **Window Management**:
   - Create browser window with target URL
   - Capture live viewing URL
   - Record window details in Airtable
   - Send live URL via Gmail

3. **Web Interactions**:
   - Query page content for element identification
   - Execute clicks, form fills, navigation
   - Monitor page state changes
   - Handle dynamic content loading

4. **Session Cleanup**:
   - Terminate browser session when complete
   - Update all related records to "Closed" status
   - Send completion notification

### Data Flow Architecture
```
User Input → AI Processing → Session Management → Browser Actions → Data Recording → User Notifications
```

## Key Features & Benefits

### Intelligent Automation
- **Natural Language Control**: Users can describe tasks in plain English
- **Context Awareness**: AI understands complex multi-step workflows
- **Adaptive Responses**: Handles unexpected page changes and errors
- **Profile Integration**: Seamlessly uses stored authentication credentials

### Real-Time Monitoring
- **Live View URLs**: Watch browser automation as it happens
- **Status Updates**: Real-time notifications of task progress
- **Session Tracking**: Complete audit trail of all browser activities
- **Multi-Window Support**: Handle complex workflows across multiple tabs

### Enterprise-Ready Features
- **Error Recovery**: Robust handling of network issues and page failures
- **Session Persistence**: Maintains state across workflow interruptions
- **Data Integrity**: Consistent record-keeping even during failures
- **Scalable Architecture**: Can handle multiple concurrent automation tasks

## Use Cases Beyond Reddit

This workflow architecture supports automation for any website:

### Social Media Management
- **Multi-platform posting**: Facebook, Twitter, LinkedIn, Instagram
- **Community engagement**: Responding to comments, messages
- **Content scheduling**: Publishing posts at optimal times
- **Analytics gathering**: Collecting engagement metrics

### Business Process Automation
- **CRM data entry**: Updating customer records across platforms
- **Support ticket management**: Creating, updating, routing tickets
- **E-commerce operations**: Product listings, inventory updates
- **Report generation**: Gathering data from multiple web sources

### Personal Productivity
- **Travel booking**: Comparing prices, making reservations
- **Bill management**: Paying utilities, checking statements
- **Job applications**: Submitting applications, tracking status
- **Research tasks**: Gathering information from multiple sources

## Advanced Configuration Options

### Custom Profiles
- Create Airtop profiles for different websites
- Store authentication credentials securely
- Switch between different user accounts
- Handle multi-factor authentication flows

### Workflow Customization
- Modify AI system prompts for specific use cases
- Add custom validation rules
- Implement retry logic for failed operations
- Create domain-specific interaction patterns

### Integration Extensions
- Connect to additional data sources
- Add webhook notifications
- Implement approval workflows
- Create audit logs and reporting

## Getting Started

1. **📊 [Copy the Google Sheets Template](https://docs.google.com/spreadsheets/d/1SZ_P9Ike3xodjAVEsoxfJzgk0kKyaL-EJAEQ7UVibFs/edit?usp=sharing)** - Just click and make a copy!
2. **Set up credentials** for Airtop, OpenAI, and Gmail
3. **Import workflow** into your n8n instance
4. **Configure node credentials** with your API keys and Google Sheets URL
5. **Test with simple commands** like "Visit google.com"
6. **Expand to complex workflows** as you become comfortable

## Best Practices

### Session Management
- Always check for existing sessions before creating new ones
- Properly terminate sessions to avoid resource waste
- Use descriptive names for sessions and windows
- Regularly clean up old session records

### Error Handling
- Implement timeout handling for slow-loading pages
- Add retry logic for network failures
- Validate element existence before interactions
- Log detailed error information for debugging

### Security Considerations
- Store sensitive credentials in Airtop profiles, not workflow
- Use webhook authentication for production deployments
- Implement rate limiting to avoid being blocked by websites
- Regular audit of browser session activities

This workflow transforms n8n into a powerful browser automation platform, enabling you to automate virtually any web-based task while maintaining full visibility and control over the automation process.

## 🔗 Nodes Used

AI Agent, OpenAI Chat Model, Simple Memory, Chat Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
