# 💬 Automate interior design lead qualification with AI & human approval to Notion

> ⚡ **308 views** · 💬 [Lead Nurturing & AI Sales Agents](../)

## Description

## Overview
This automated workflow intelligently qualifies interior design leads, generates personalized client emails, and manages follow-up through a human-approval process. Built with n8n, Claude AI, Telegram approval, and Notion database integration.

![image.png](fileId:3035)

## ⚠️ Hosting Options
This template works with both **n8n Cloud** and **self-hosted** instances. Most nodes are native to n8n, making it cloud-compatible out of the box.

## What This Template Does

**Automated Lead Management Pipeline:**
- Captures client intake form submissions from website or n8n forms
- AI-powered classification into HOT/WARM/COLD categories based on budget, project scope, and commitment indicators
- Generates personalized outreach emails tailored to each lead type
- Human approval workflow via Telegram for quality control
- Email revision capability for rejected drafts
- Automated client email delivery via Gmail
- Centralized lead tracking in Notion database

## Key Features

✅ **Intelligent Lead Scoring**: Analyzes 12+ data points including budget (AED), space count, project type, timeline, and style preferences

✅ **Personalized Communication**: AI-generated emails reference specific client details, demonstrating genuine understanding

✅ **Quality Control**: Human-in-the-loop approval via Telegram prevents errors before client contact

✅ **Smart Routing**: Different workflows for qualified leads (meeting invitations) vs. unqualified leads (respectful alternatives)

✅ **Revision Loop**: Rejected emails automatically route to revision agent for improvements

✅ **Database Integration**: All leads stored in Notion for pipeline tracking and analytics

## Use Cases

- Interior design firms managing high-volume lead intake
- Architecture practices with complex qualification criteria
- Home renovation companies prioritizing project value
- Any service business requiring budget-based lead scoring
- Sales teams needing approval workflows before client contact

## Prerequisites

### Required Accounts & API Keys:
1. **Anthropic Claude API** - For AI classification and email generation
2. **Telegram Bot Token** - For approval notifications
3. **Gmail Account** - For sending client emails (or any SMTP provider)
4. **Notion Account** - For lead database storage
5. **n8n Account** - Cloud or self-hosted instance

### Technical Requirements:
- Basic understanding of n8n workflows
- Ability to create Telegram bots via BotFather
- Gmail app password or OAuth setup
- Notion database with appropriate properties

## Setup Instructions

### Step 1: Clone and Import Template
1. Copy this template to your n8n instance (cloud or self-hosted)
2. All nodes will appear as inactive - this is normal

### Step 2: Configure Form Trigger
1. Open the **Client Intake Form Trigger** node
2. Choose your trigger type:
   - For n8n forms: Configure form fields matching the template structure
   - For webhook: Copy webhook URL and integrate with your website form
3. Required form fields:
   - First Name, Second Name, Email, Contact Number
   - Project Address, Project Type, Spaces Included
   - Budget Range, Completion Date, Style Preferences
   - Involvement Level, Previous Experience, Inspiration Links

### Step 3: Set Up Claude AI Credentials
1. Obtain API key from https://console.anthropic.com
2. In n8n: Create new credential → Anthropic → Paste API key
3. Apply credential to these nodes:
   - **AI Lead Scoring Engine**
   - **Personalized Client Outreach Email Generator**
   - **Email Revision Agent**

### Step 4: Configure Telegram Approval Bot
1. Create bot via Telegram's @BotFather
2. Copy bot token
3. Get your Telegram Chat ID (use @userinfobot)
4. In n8n: Create Telegram credential with bot token
5. Configure **Human-in-the-Loop Email Approval** node:
   - Add your Chat ID
   - Customize approval message format if desired

### Step 5: Set Up Gmail Sending
1. Enable 2-factor authentication on Gmail account
2. Generate app password: Google Account → Security → App Passwords
3. In n8n: Create Gmail credential using app password
4. Configure **Client Email Delivery** node with sender details

### Step 6: Connect Notion Database
1. Create Notion integration at https://www.notion.so/my-integrations
2. Copy integration token
3. Create database with these properties:
   - Client Name (Title), Email (Email), Contact Number (Phone)
   - Project Address (Text), Project Type (Multi-select)
   - Spaces Included (Text), Budget (Select), Timeline (Date)
   - Classification (Select: HOT/WARM/COLD), Confidence (Select)
   - Estimated Value (Number), Status (Select)
4. Share database with your integration
5. In n8n: Add Notion credential → Paste token
6. Configure **Notion Lead Database Manager** with database ID

### Step 7: Customize Classification Rules (Optional)
1. Open **AI Lead Scoring Engine** node
2. Review classification criteria in the prompt:
   - HOT: 500k+ AED, full renovations, 2+ spaces
   - WARM: 100k+ AED, 2+ spaces
   - COLD: &lt;100k AED OR single space
3. Adjust thresholds to match your business requirements
4. Modify currency if not using AED

### Step 8: Personalize Email Templates
1. Open **Personalized Client Outreach Email Generator** node
2. Customize:
   - Company name and branding
   - Signature placeholders ([Your Name], [Title], etc.)
   - Tone and style preferences
   - Alternative designer recommendations for COLD leads

### Step 9: Test the Workflow
1. Activate the workflow
2. Submit a test form with sample data
3. Monitor each node execution in n8n
4. Check Telegram for approval message
5. Verify email delivery and Notion database entry

### Step 10: Set Up Error Handling (Recommended)
1. Add error workflow trigger
2. Configure notifications for failed executions
3. Set up retry logic for API failures

## Workflow Node Breakdown

### 1. Client Intake Form Trigger
Captures lead data from website forms or n8n native forms with all project details.

### 2. AI Lead Scoring Engine
Analyzes intake data using structured logic: budget validation, space counting, and multi-factor evaluation. Returns HOT/WARM/COLD classification with confidence scores.

### 3. Lead Classification Router
Routes leads into three priority workflows based on AI classification, optimizing resource allocation.

### 4. Sales Team Email Notifier
Sends instant alerts to sales representatives with complete lead details and AI reasoning for internal tracking.

### 5. Personalized Client Outreach Email Generator
AI-powered composer creating tailored responses demonstrating genuine understanding of client vision, adapted by lead type.

### 6. Latest Email Version Controller
Captures most recent email output ensuring only final approved version proceeds to delivery.

### 7. Human-in-the-Loop Email Approval
Telegram-based review checkpoint sending generated emails to team member for quality control before client delivery.

### 8. Approval Decision Router
Evaluates reviewer's response, routing approved emails to client delivery or rejected emails to revision agent.

### 9. Email Revision Agent
AI-powered editor refining rejected emails based on feedback while maintaining personalization and brand voice.

### 10. Client Email Delivery
Sends final approved personalized emails demonstrating understanding of project vision with clear next steps.

### 11. Notion Lead Database Manager
Records all potential clients with complete intake data, classification results, and tracking information for pipeline management.

## Customization Tips

**Adjust Classification Thresholds:**
Modify budget ranges and space requirements in the AI Lead Scoring Engine prompt to match your market and service level.

**Multi-Language Support:**
Update all AI agent prompts with instructions for your target language. Claude supports 100+ languages.

**Additional Routing:**
Add branches for special cases like urgent projects, VIP clients, or specific geographic regions.

**CRM Integration:**
Replace Notion with HubSpot, Salesforce, or Airtable using respective n8n nodes.

**SMS Notifications:**
Add Twilio node for immediate HOT lead alerts to mobile devices.

## Troubleshooting

**Issue: Telegram approval not received**
- Verify bot token is correct
- Confirm chat ID matches your Telegram account
- Check bot is not blocked

**Issue: Claude API errors**
- Verify API key validity and credits
- Check prompt length isn't exceeding token limits
- Review rate limits on your Anthropic plan

**Issue: Gmail not sending**
- Confirm app password (not regular password) is used
- Check "Less secure app access" if using older method
- Verify daily sending limits not exceeded

**Issue: Notion database not updating**
- Confirm integration has access to database
- Verify property names match exactly (case-sensitive)
- Check property types align with data being sent

## Template Metrics

- **Execution Time**: ~30-45 seconds per lead (including AI processing)
- **API Calls**: 2-3 Claude requests per lead (classification + email generation, +1 if revision)
- **Cost Estimate**: ~$0.05-0.15 per lead processed (based on Claude API pricing)

## Support & Community

- **n8n Community Forum**: https://community.n8n.io
- **Template Issues**: Report bugs or suggest improvements via n8n template feedback
- **Claude Documentation**: https://docs.anthropic.com
- **Notion API Docs**: https://developers.notion.com

## License

This template is provided as-is under MIT license. Modify and adapt freely for your business needs.

---

**Version**: 1.0
**Last Updated**: October 2025
**Compatibility**: n8n v1.0+ (Cloud & Self-Hosted), Claude API v2024-10+

## 🔗 Nodes Used

Telegram, Gmail, Notion, AI Agent, OpenAI Chat Model, Structured Output Parser

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
