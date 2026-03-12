# 🎣 Lead scoring & auto-assignment with GPT-4 and GoHighLevel + Slack alerts

> ⚡ **250 views** · 🎣 [Lead Generation & Enrichment](../)

## Description

This workflow automatically scores and categorizes new GoHighLevel contacts using AI (GPT-4), then tags and assigns them to the appropriate team member based on their score. Hot leads also trigger a Slack notification for immediate follow-up.

### What does it do?
- Triggers when a new contact is added in GoHighLevel.
- Fetches full contact details and recent engagement data.
- Uses AI (GPT-4) to analyze and score the lead (1-100), categorize it (Hot, Warm, Cold), and provide an explanation.
- Tags the contact in GoHighLevel based on the score.
- Assigns the lead to the correct sales or nurturing team member.
- Sends a Slack alert for Hot leads to ensure fast response.

### Use case
Use this workflow to automate lead qualification and assignment in sales teams using GoHighLevel. It helps prioritize high-quality leads, ensures fast follow-up, and reduces manual work.

### How to configure
1. **GoHighLevel API:**  
   - Set your GoHighLevel API URL and API key in the `Workflow Configuration` node.
   - Update user IDs for assignment as needed.

2. **Slack Integration:**  
   - Add your Slack webhook URL or credentials in the `Slack Notify Hot Lead` node.

3. **AI Provider:**  
   - Configure your OpenAI (or compatible) credentials in the `AI Lead Scoring (GPT-4)` node.

4. **Adjust thresholds:**  
   - If needed, change the score thresholds in the IF nodes to match your business logic.

5. **Activate the workflow:**  
   - Once configured, activate the workflow to start processing new leads automatically.

---

**Tip:**  
You can further customize the workflow to fit your sales process, add more notifications, or integrate with other tools as needed.

## 🔗 Nodes Used

HTTP Request, Slack, Webhook, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
