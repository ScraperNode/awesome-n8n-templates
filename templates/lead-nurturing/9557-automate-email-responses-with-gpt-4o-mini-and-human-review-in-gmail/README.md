# 💬 Automate email responses with GPT-4o-mini and human review in Gmail

> ⚡ **231 views** · 💬 [Lead Nurturing & AI Sales Agents](../)

## Description

This n8n template demonstrates a “Human-in-the-Loop” workflow where AI automatically drafts replies to inbound emails, which are then reviewed and approved by a human before being sent. This powerful pattern ensures both the efficiency of AI and the quality assurance of human oversight.

Use cases are many: Streamline sales inquiry responses, manage first-level customer support, handle initial recruitment communications, or any business process that requires personalized yet consistent email replies.

# Good to know

- At the time of writing, the cost per execution depends on your OpenAI API usage. This workflow uses a cost-effective model like gpt-4o-mini. See [OpenAI Pricing](https://openai.com/pricing) for updated info.
- The AI’s knowledge base and persona are fully customizable within the **Basic LLM Chain** node’s prompt.

# How it works

1.  The **Gmail Trigger** node starts the workflow whenever a new email arrives in the specified inbox.
2.  The **Classify Potential Leads** node uses AI to determine if the incoming email is a potential lead. If not, the workflow stops.
3.  The **Basic LLM Chain**, powered by an OpenAI Chat Model, generates a draft reply based on a detailed system prompt and your internal knowledge base.
4.  A **Structured Output Parser** is crucially used to force the AI’s output into a reliable JSON format (`{"subject": "...", "body": "..."}`), preventing errors in subsequent steps.
5.  The **Send for Review** Gmail node sends the AI-generated draft to a human reviewer and pauses the workflow, waiting for a reply.
6.  The **IF** node checks the reviewer’s reply for approval keywords (e.g., “approve”, “承認”).
7.  If approved, the **✅ Send to Customer** Gmail node sends the final email to the original customer.
8.  If not approved, the reviewer’s feedback is treated as a revision request, and the workflow loops back to the **Basic LLM Chain** to generate a new draft incorporating the feedback.

# How to use

- **Gmail Trigger** node: Configure with your own Gmail account credentials.
- **Send for Review** node: Replace the placeholder email `reviewer@example.com` with the actual reviewer's email address.
- **IF** node: You can customize the approval keywords to match your team’s vocabulary.
- **OpenAI Nodes**: Ensure your OpenAI credentials are set up. You can select a different model if needed, but the prompt is optimized for models like GPT-4o mini.

# Requirements

- An OpenAI account for the LLM.
- A Gmail account for receiving customer emails and for the review process.

# Customising this workflow

- By modifying the prompt and knowledge base in the **Basic LLM Chain**, you can adapt this agent for various departments, such as technical support, HR, or public relations.
- The approval channel is not limited to Gmail. You can easily replace the review nodes with Slack or Microsoft Teams nodes to fit your internal communication tools.

## 🔗 Nodes Used

Gmail, Gmail Trigger, Basic LLM Chain, OpenAI Chat Model, Structured Output Parser, Text Classifier

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
