# 🎫 Gmail AI Email Manager

> ⚡ **91,991 views** · 🎫 [Ticket Management & Triage](../)

## Description

Want to check out all my flows, follow me on:

https://maxmitcham.substack.com/

https://www.linkedin.com/in/max-mitcham/

# Email Manager - Intelligent Gmail Classification

This automation flow is designed to automatically monitor incoming Gmail messages, analyze their content and context using AI, and intelligently classify them with appropriate labels for better email organization and prioritization.

⚙️ **How It Works (Step-by-Step):**

1. **📧 Gmail Monitoring (Trigger)**
Continuously monitors your Gmail inbox:
```
Polls for new emails every minute
Captures all incoming messages automatically
Triggers workflow for each new email received
```

2. **📖 Email Content Extraction**
Retrieves complete email details:
```
Full email body and headers
Sender information and recipient lists
Subject line and metadata
Existing Gmail labels and categories
Email threading information (replies/forwards)
```

3. **🔍 Email History Analysis**
AI agent checks relationship context:
```
Searches for previous emails from the same sender
Checks sent folder for prior outbound correspondence
Determines if this is a first-time contact (cold email)
Analyzes conversation thread history
```

4. **🤖 Intelligent Classification Agent**
Advanced AI categorization using:
```
Claude Sonnet 4 for sophisticated email analysis
Context-aware classification based on email history
Content analysis for intent and urgency detection
Header analysis for automated vs. human-sent emails
```

5. **🏷️ Smart Label Assignment**
Automatically applies appropriate Gmail labels:
```
To Respond: Requires direct action/reply
FYI: For awareness, no action needed
Notification: Service updates, policy changes
Marketing: Promotional content and sales pitches
Meeting Update: Calendar-related communications
Comment: Document/task feedback
```

6. **📋 Structured Processing**
Ensures consistent labeling:
```
Uses structured output parsing for reliability
Returns specific Label ID for Gmail integration
Applies label automatically to the email
Maintains classification accuracy
```

🛠️ **Tools Used:**
```
n8n: Workflow automation platform
Gmail API: Email monitoring and label management
Anthropic Claude: Advanced email content analysis
Gmail Tools: Email history checking and search
Structured Output Parser: Consistent AI responses
```

📦 **Key Features:**
```
Real-time email monitoring and classification
Context-aware analysis using email history
Intelligent cold vs. warm email detection
Multiple classification categories for organization
Automatic Gmail label application
Header analysis for automated email detection
Thread-aware conversation tracking
```

🚀 **Ideal Use Cases:**
```
Busy executives managing high email volumes
Sales professionals prioritizing prospect communications
Support teams organizing customer inquiries
Marketing teams filtering promotional content
Anyone wanting automated email organization
Teams needing consistent email prioritization
```

## 🔗 Nodes Used

Gmail, Gmail Trigger, AI Agent, Anthropic Chat Model, Structured Output Parser

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
