# 🔧 Role-based access control (RBAC) for Telegram automations

> ⚡ **167 views** · 🔧 [Miscellaneous](../)

## Description

# 🔐 n8n Workflow: Role-Based Access Control (RBAC) for Telegram Automations
This n8n workflow lets you control access to your internal Telegram bots and automation systems based on user roles and departments.
It ensures that only authorized team members — defined in your employee database — can interact with specific parts of your workflow.
Perfect for agencies, internal tools, or multi-team organizations where permissions differ across roles (e.g., Marketing, Sales, Administration).

## 📌 Section 1: Trigger & Input
⚡ Receive Message (Telegram Trigger)
Purpose: Captures incoming messages from users interacting with your Telegram bot.

### How it works:
When a user sends any message to the bot, the workflow retrieves their Telegram username and triggers the process.

### Benefit:
Provides a secure and instant entry point for validating user identity before running any internal logic.

## 📌 Section 2: Role Lookup
📋 Employee Database (Data Table Node)
Purpose: Fetches user details such as Position and Type from your internal employee table.

Structure Example:

UserName===Position===Type
User_1===Marketing===SEO
User_2===Administration===Manager
User_3===Marketing===Target

### Benefit:
Centralized employee management — you can update access levels (roles or departments) directly in the data table without editing the workflow.

## 📌 Section 3: Position & Role Check
### 🧩 Choose Position (Switch Node)
Purpose: Determines the user’s department or role level (e.g., Marketing, Sales, Administration).

### 🧩 Check Role Type (Switch Node)
Purpose: Performs a second-level check — filters users by Type (e.g., SEO, SMM, Target).

### Logic:
Marketing → SEO → Send to SEO workflow branch
Marketing → Target → Send to Ads branch
Administration → Manager → Grant full access
Sales → Employee → Limited access

### Benefit:
Allows multi-level, role-based logic with different automation paths for each team or position.

## 📌 Section 4: Action Routing
💬 No Operation Nodes (Placeholders)
Purpose: Represent different action branches — each can later be replaced with the logic specific to that department.

### Examples:
“Target” branch → connect to ad performance automation
“SEO” branch → connect to Google Search Console reports
“Sales” branch → connect to CRM updates

### Benefit:
A flexible access framework — ready to integrate with any process per department.

📊 Workflow Overview Table

Section	Node Name	Purpose
1. Trigger	Telegram Trigger	Captures user messages
2. Lookup	Employee Database	Fetches user position and type
3. Check	Choose Position / Role Switch	Defines access path based on role
4. Routing	No Operation Nodes	Separate workflows per department

## 🎯 Key Benefits

🔐 Granular Access Control: Multi-level permission logic (Position + Role).
⚙️ Dynamic Role Management: Update access directly in your data table — no redeployment needed.
🧱 Modular Design: Add or replace department branches without affecting core logic.
🚀 Scalable Foundation: Perfect base for enterprise-grade permission systems or multi-team bots.
📈 Cross-Platform Ready: Can be adapted for Slack, Discord, or internal chat tools.

## 🔗 Nodes Used

Airtable, Google Sheets, Telegram Trigger, Notion, Schedule Trigger, Filter

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
