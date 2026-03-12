# 👥 Automated developer onboarding audit with ClickUp, GPT-4o-mini, and Slack alerts

> ⚡ **130 views** · 👥 [HR & Recruitment](../)

## Description

## Description:
Automate your developer onboarding quality checks with this n8n workflow template.
 Whenever a new onboarding task is created in ClickUp, the workflow logs it to Google Sheets, evaluates its completeness using Azure OpenAI GPT-4o-mini, and alerts your team in Slack if critical details are missing.
Perfect for engineering managers, DevOps leads, and HR tech teams who want to maintain consistent onboarding quality and ensure every developer gets the tools, credentials, and environment setup they need — without manual review.

## ✅ What This Template Does (Step-by-Step)

⚡ Step 1: Auto-Trigger on ClickUp Task Creation
 Listens for new task creation events (taskCreated) in your ClickUp workspace to initiate the audit automatically.

📊 Step 2: Log Task Details to Google Sheets
 Records essential task data — task name, assignee, and description — creating a central audit trail for all onboarding activities.

🧠 Step 3: AI Completeness Analysis (GPT-4o-mini)
Uses Azure OpenAI GPT-4o-mini to evaluate each onboarding task for completeness across key areas:
- Tooling requirements
- Credential setup
- Environment configuration
- Instruction clarity
Outputs:
✅ Score (0–100)
⚠️ List of Missing Items
💡 Suggestions for Improvement
🚦 Step 4: Apply Quality Gate
 Checks whether the AI-generated completeness 

score is below 80. Incomplete tasks automatically move to the alert stage for review.

📢 Step 5: Alert Team via Slack
 Sends a structured Slack message summarizing the issue, including:
1. Task name & assignee
2. Completeness score
3. Missing checklist items
4. Recommended next actions
This ensures your team fixes incomplete onboarding items before they impact new hires.

## 🧠 Key Features
 🤖 AI-driven task completeness scoring
 📊 Automatic task logging for audit visibility
 ⚙️ Smart quality gate (score threshold &lt; 80)
 📢 Instant Slack alerts for incomplete tasks
 🔄 End-to-end automation from ClickUp to Slack

## 💼 Use Cases
 🎓 Audit onboarding checklists for new developers
 🧩 Standardize environment setup and credential handover
 🚨 Identify missing steps before onboarding deadlines
 📈 Maintain onboarding consistency across teams

## 📦 Required Integrations
1. ClickUp API – to detect new onboarding tasks
2. Google Sheets API – to store audit logs and history
3. Azure OpenAI (GPT-4o-mini) – to evaluate completeness
4. Slack API – to alert the team on incomplete entries

## 🎯 Why Use This Template?
 ✅ Ensures every new developer receives a full, ready-to-start setup
 ✅ Eliminates manual checklist verification
 ✅ Improves onboarding quality and compliance tracking
 ✅ Creates a transparent audit trail for continuous improvement

## 🔗 Nodes Used

Google Sheets, Slack, ClickUp, ClickUp Trigger, AI Agent, Azure OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
