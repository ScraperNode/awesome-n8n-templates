# 🎫 Categorize Gmail emails using GPT-4o-mini with multi-label analysis

> ⚡ **1,714 views** · 🎫 [Ticket Management & Triage](../)

## Description

## Automatically Categorize Gmail Emails with GPT-4o-mini Multi-Label Analysis

## Description

The **"Automatically Categorize Gmail Emails with GPT-4o-mini Multi-Label Analysis"** template is designed specifically for professionals, business owners, entrepreneurs, and anyone struggling to manage a high volume of daily emails. It solves common inbox problems such as email overload, missed important messages, manual sorting inefficiencies, and unorganized inbox clutter. By using intelligent content analysis powered by GPT-4o-mini, this workflow automatically categorizes incoming Gmail messages with relevant labels, ensuring efficient email management and significantly boosting productivity.

## Workflow Overview

### How It Works

- **Email Detection**: Continuously monitors your Gmail inbox every minute to detect new incoming emails.
- **Content Extraction**: Retrieves key email components including sender details, subject line, and body content for analysis.
- **Intelligent Labeling**: Utilizes GPT-4o-mini AI to contextually analyze each email and assign 1-3 relevant labels based on your existing Gmail label structure.
- **Automatic Application**: Applies the selected labels directly to your emails, equipped with robust error-handling mechanisms to ensure accuracy and reliability.

### Key Benefits

- **Organized Inbox**: Automatically maintains inbox order and clarity.
- **Time-Saving**: Reduces manual email management effort significantly.
- **Customization**: Fully adaptable to specific labeling and organizational requirements.

## Pre-conditions

Before using this template, ensure the following prerequisites are met:

- Active Gmail account with OAuth2 enabled.
- Active OpenAI account with GPT-4o-mini API key.
- Clearly defined labels set up in your Gmail account (e.g., "Work", "Personal", "Urgent").

## Setup Instructions

Follow these straightforward setup steps to activate the workflow:

1. **Connect Gmail Account**
   - Authorize your Gmail account using OAuth2 (takes approximately 2-3 minutes).

2. **Configure OpenAI GPT-4o-mini API**
   - Enter and validate your GPT-4o-mini API key to enable advanced email analysis.

3. **Establish Gmail Labels**
   - Ensure necessary labels are created within Gmail. Examples include "Work", "Personal", and "Urgent".

4. **Activate and Verify**
   - Click the **"Activate"** button in n8n.
   - Send a test email to your Gmail inbox to confirm that labels are applied correctly.

## Customization Tips

You can easily customize this workflow to fit your specific needs:

- **Modify Gmail Labels**: Create and adapt labels to match your business or personal categorization strategy.
- **Adjust GPT-4o-mini Criteria**: Fine-tune the AI prompts to improve accuracy and relevance based on your unique email management needs.
- **Expand the Workflow**: Integrate additional conditions, actions, or external applications to further automate and optimize your email management processes.

Improve your daily workflow efficiency and achieve a clutter-free Gmail inbox by leveraging the power of GPT-4o-mini today.

## 🔗 Nodes Used

Gmail, Gmail Trigger, Basic LLM Chain, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
