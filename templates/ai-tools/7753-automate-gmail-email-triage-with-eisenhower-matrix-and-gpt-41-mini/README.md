# 🎯 Automate Gmail email triage with Eisenhower Matrix and GPT-4.1-mini

> ⚡ **6,497 views** · 🎯 [AI Summarization & Classification](../)

## Description

## Who is this workflow for
This workflow is designed for busy professionals, productivity enthusiasts, and teams drowning in email overload. Whether you're a startup founder, operations manager, executive assistant, or team lead, this solution helps you bring structure and clarity to your inbox. If you struggle to identify which emails deserve immediate attention versus which can be scheduled, delegated, or ignored, this workflow is for you.

## What it does / How it works
This n8n automation integrates Gmail and OpenAI to apply the Eisenhower Matrix—a classic productivity framework—to incoming emails. It reads each new unread email from your inbox and automatically classifies it into one of four categories based on urgency and importance:

- **Urgent + Important**: Critical messages requiring immediate action (e.g., legal, financial, investor or user-blocking issues).
- **Not Urgent + Important**: High-value strategic emails you should schedule time for (e.g., partnership opportunities, key coordination).
- **Urgent + Not Important**: Time-sensitive but delegable tasks (e.g., routine operations or technical updates).
- **Not Urgent + Not Important**: Low-value noise like spam or promotions that should be archived or batch-reviewed later.

The classification is powered by a GPT model with custom prompts tailored to understand email context and assign the right category with high accuracy. After classification, the workflow adds the appropriate label in Gmail and automatically archives emails marked as low-priority.

The result: your inbox becomes a dynamic priority system, helping you make faster, smarter decisions without the mental load of constant triage.

## How to set it up
1. **Create Gmail Labels**: Manually create these four labels in your Gmail account:
   - Urgent + Important
   - Not Urgent + Important
   - Urgent + Not Important
   - Not Urgent + Not Important

2. **Connect Accounts in n8n**:
   - Set up **Gmail OAuth2** credentials in your n8n instance to allow reading and labeling emails.
   - Add your **OpenAI API key** to enable the AI classification.

3. **Update Label IDs**: In the Gmail nodes of the workflow, replace the label IDs (e.g., `Label_4335697733647997523`) with the IDs from your own Gmail account. You can find these by creating a dummy workflow with a “Gmail → Get All Labels” node.

4. **Test and Deploy**: 
   - You can run the workflow manually using the “Execute Workflow” trigger or set it to run automatically with the Gmail Trigger that polls every minute.
   - Review your Gmail inbox to see how labels are applied and ensure the archive function is working as expected.

## Requirements
- A free or paid n8n instance (self-hosted or cloud)
- Gmail account with OAuth2 access configured in n8n
- OpenAI API key (GPT-4.1-mini recommended for accuracy)
- Four predefined Gmail labels that match the Eisenhower Matrix
- Basic familiarity with editing Gmail node parameters in n8n

## How to customize the workflow
- **Tailor the AI prompts**: Update the Text Classifier node with your own examples or definitions of what counts as urgent or important based on your business context.
- **Refine inputs**: Add filters to process only emails from specific senders or domains (e.g., VIP clients, your team).
- **Extend outcomes**: Trigger Slack alerts for urgent messages, auto-reply to certain senders, or sync scheduled items to your calendar.
- **Localization**: Adjust labels and prompts to match your preferred language or naming conventions.
- **Archive rules**: Modify the "Remove Labels" node to exclude specific categories from archiving or add additional cleanup actions.

## Why this improves productivity
This workflow removes decision fatigue from your email routine. By automatically labeling and sorting emails according to urgency and importance, you:
- Spend less time sorting emails manually
- Focus energy on what truly matters
- Schedule strategic tasks thoughtfully
- Delegate or ignore distractions confidently

Instead of reacting to your inbox, you take control of it—turning email chaos into a structured priority system that aligns with your goals.

## 🔗 Nodes Used

Gmail, Gmail Trigger, Filter, OpenAI Chat Model, Text Classifier

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
