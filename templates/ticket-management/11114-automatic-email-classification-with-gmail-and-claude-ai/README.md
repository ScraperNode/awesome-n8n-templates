# 🎫 Automatic email classification with Gmail and Claude AI

> ⚡ **523 views** · 🎫 [Ticket Management & Triage](../)

## Description

**How It Works**
1.Gmail Trigger

- Continuously monitors your Gmail inbox for new messages.
- Captures the email’s subject, body, and metadata.
- Sends the extracted content to the Email Content Classifier.

2.Email Content Classification

The Email Content Classifier analyzes the email content using natural language processing.

Compares the message against predefined Gmail labels:
- Ads
- Work
- Personal
- Financial
- Other (fallback label)

Users can add or rename categories to match their specific needs.

Uses context, tone, and keywords to determine the most accurate label.

3.Applying Gmail Labels

- Sends the classification result to the corresponding Gmail label node.
- Automatically applies the matching Gmail label in your inbox.
- If the classifier cannot confidently match the message, the Other label is used as a fallback.

**Setup Steps**

- Connect Gmail Accounts
- Connect your Gmail account in the Gmail Trigger and in each Gmail label node.
- Configure the Email Content Classifier
- Map the incoming Gmail message body to inputText.
- Ensure the classifier node has access to a language model credential (Anthropic or other).
- Test the Workflow
- Send a few sample emails to yourself to confirm that labels are correctly applied.
- Tweak Categories if Needed
- Adjust category names in the classifier node to match your Gmail labels exactly.

**Customization**

- Add or rename categories in the classifier to reflect your specific email types.
- Create corresponding Gmail label nodes for each new category.
- Expand or modify categories as your workflow evolves to improve organization and efficiency.

**Use Cases**

- Automatic inbox organization and sorting.
- Separation of work, personal, financial, and promotional emails.
- Improved productivity by making important emails easier to locate.
- Custom categorization for specialized workflows.

**Troubleshooting Tips**

- Emails not being labeled → check API permissions and message ID references.
- Wrong label assigned → update classifier examples or refine category descriptions.
- Classifier not returning a category → confirm fallback category “Other” is configured.
- Workflow not triggering → reconnect Gmail Trigger authentication and ensure the workflow is active.

## 🔗 Nodes Used

Gmail, Gmail Trigger, Anthropic Chat Model, Text Classifier

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
