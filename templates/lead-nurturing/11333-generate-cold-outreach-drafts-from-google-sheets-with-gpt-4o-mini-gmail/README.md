# 💬 Generate cold outreach drafts from Google Sheets with GPT-4o-mini & Gmail

> ⚡ **122 views** · 💬 [Lead Nurturing & AI Sales Agents](../)

## Description

**How It Works**
1. Starts with a Manual Trigger

2. Reads lead list from Google Sheet

3. Filter rows where email wasn’t sent

4. Generate personalized email body (AI)

5. Generate email subject line (AI)

6. Merge AI outputs with original row data

7. Create Gmail draft

8. Update Google Sheet with email content and date

9. Wait 3 seconds between updates to avoid API limits

**Setup Steps**
- Connect Google Sheets, Gmail, and OpenAI credentials
- Check sheet column names (business_name, email, contact_name, city, business_type, email_sent)
- Run Manual Trigger to test one row
- Adjust AI prompts if needed

**Customization**
- Add unique ID column to match rows if needed
- Change AI prompts to adjust email style
- Increase wait time to avoid rate limits

**Use Cases**
- Draft cold emails for review before sending
- Automate lead outreach while keeping human oversight
- Generate personalized emails and subject lines quickly

**Troubleshooting Tips**
- Draft not created → check Gmail credentials and scopes
- Sheet not updating → check matching column exists
- AI outputs empty → increase tokens or check response path

## 🔗 Nodes Used

Google Sheets, HTTP Request, Gmail

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
