# 🔒 Automated weekly security audit reports with Gmail delivery

> ⚡ **474 views** · 🔒 [SecOps & Security Automation](../)

## Description

# 🔒 N8N Security Audit Report - Automated Weekly Email

## 🎯 What does this workflow do?

This workflow automatically generates and emails a comprehensive security audit report for your N8N instance every week. It identifies potential security risks related to:

- **Credentials** 🔑 : Exposed or insecure credentials
- **Nodes** 🧩 : Sensitive nodes (Code, HTTP Request, SSH, FTP, etc.)
- **Instance settings** 🏢 : Global security configuration
- **Community nodes** 📦 : Third-party nodes that may pose risks

The report includes direct links to affected workflows, execution statuses, and actionable recommendations.

---

## ✨ Key Features

### 📊 **Smart Risk Assessment**
- Calculates overall risk level: 🟩 Low / 🟧 Moderate / 🟥 High
- Tracks unique credentials (not just total occurrences)
- Provides detailed breakdown by node type

### 🔗 **Direct Workflow Links**
- Clickable links to each workflow mentioned
- Shows last execution status (🟢 success / 🔴 failed)
- Displays execution timestamps

### 🌍 **Bilingual Support**
- Full support for French and English
- Switch language with a single variable

### 📧 **Beautiful HTML Email**
- Clean, professional formatting
- Color-coded risk levels
- Emoji icons for easy scanning

---

## 🚀 Quick Setup (5 minutes)

### 1️⃣ Configure Credentials
- **N8N API**: Generate an API key in your N8N settings
- **Gmail OAuth2**: Set up OAuth2 for Gmail sending

### 2️⃣ Set Your Variables
Edit the "Set Config Variables" node:
```javascript
{
  "email_to": "your.email@domain.com",
  "project_name": "My-N8N-Project",
  "server_url": "https://n8n.yourdomain.com",  // NO trailing slash!
  "Language": "EN"  // or "FR"
}
```

### 3️⃣ Test & Activate
- Click "Execute Workflow" to test
- Check your email inbox
- Activate for weekly automation

---

## 📧 Example Report Output

**Subject**: 🔒 Audit Report My-Project – Risk 🟧 Moderate

**Content**:
```
📊 Summary
• Credentials involved: 8 (5 unique)
• Nodes involved: 12
  - 💻 code: 4
  - 🌐 httpRequest: 3
  - 🔐 ssh: 2
• Community nodes: 1
• Overall risk level: 🟧 Moderate

🔐 Credentials Risk Report
🔹 Credentials with full access
- 🔑 My AWS Credentials
- 🔑 Database Admin

📋 Workflow: Data Processing Pipeline 🟢 (25-10-2024 06:15 → 06:16)
  - 💻 Process Data
  - 🌐 API Call

🧩 Nodes Risk Report
[...detailed node analysis...]
```

---

## 🎨 Customization Options

### Change Schedule
Modify the "Schedule Trigger" node to run:
- Daily at 8 AM
- Monthly on the 1st
- Custom cron expression

### Add Recipients
Add multiple emails in the Gmail node's `toList` parameter

### Adjust Risk Thresholds
Edit the JavaScript in "Format Audit Report" nodes to customize when risk levels change

### Use Different Email Service
Replace Gmail node with:
- SMTP
- Microsoft Outlook
- SendGrid
- Any email service N8N supports

---

## 💡 Use Cases

✅ **Compliance Monitoring**: Track security posture for audits  
✅ **Team Awareness**: Keep your team informed of security status  
✅ **Change Detection**: Notice when new risky nodes are added  
✅ **Best Practices**: Get recommendations to improve security  
✅ **Multi-Environment**: Run separate instances for dev/staging/prod

---

## 🔧 Technical Details

**Nodes Used**: 8  
**Credentials Required**: 2 (N8N API + Gmail OAuth2)  
**External Dependencies**: None  
**N8N Version**: Compatible with latest N8N versions  
**Execution Time**: ~10-20 seconds

---

## 📋 Requirements

- N8N instance with API access
- Gmail account (or other email service)
- N8N API key with audit permissions
- Valid SSL certificate for workflow links (recommended)

---

## 🐛 Troubleshooting

**Empty report?**  
→ Check your N8N API key has audit permissions

**Workflow links don't work?**  
→ Verify `server_url` is correct and has no trailing slash

**No execution status shown?**  
→ Workflows must have been executed at least once

**Wrong language displayed?**  
→ Set `Language` to exactly "FR" or "EN" (uppercase)

---

## 🌟 Why This Template?

Unlike basic monitoring tools, this workflow:
- ✅ Provides **context-aware** security analysis
- ✅ Links directly to **affected workflows**
- ✅ Shows **real execution data** (not just theoretical risks)
- ✅ Calculates **unique credential exposure** (not just counts)
- ✅ Supports **bilingual** reports
- ✅ Delivers **actionable recommendations**

---

## 🤝 Feedback & Support

Found this helpful? Please rate the template!  
Have suggestions? Drop a comment below.  

**Pro tip**: Combine this with N8N's native alerting for real-time incident response!

---

**Tags**: #security #audit #monitoring #compliance #automation #email #reporting #credentials #governance

---

## 📜 License

MIT - Feel free to modify and share!

## 🔗 Nodes Used

Cron, Gmail, n8n

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
