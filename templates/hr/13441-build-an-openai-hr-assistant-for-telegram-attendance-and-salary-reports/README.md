# 👥 Build an OpenAI HR assistant for Telegram attendance and salary reports

> ⚡ **6 views** · 👥 [HR & Recruitment](../)

## Description

## What Problem Does It Solve?
- HR managers waste hours manually logging attendance, calculating work hours, and tracking salary advances in spreadsheets.
- Onboarding new staff often involves messy paperwork or scattered chat messages.
- Salary calculations are prone to errors when manually tallying absence, overtime, and penalties.
- This workflow solves these by:
-- Allowing employees to check in/out and request loans via a simple Telegram chat.
-- Automatically calculating work hours and applying penalties for early departure.
-- Registering new employees through an interactive AI chat.
-- Generating instant financial reports including net salary, deductions, and overtime.

## How to Configure It
- Google Sheets Setup
-- Create a Google Sheet with two tabs: one for "Employee Data" (Columns: ID, Name, Role, Branch, Salary) and one for "Logs" (Attendance history).
-- Connect your Google Sheets OAuth2 credentials in n8n and select this sheet in all related nodes.
- Telegram Setup
-- Create a new bot via BotFather and connect your Telegram credentials.
-- (Optional) Set the "Admin Chat ID" in the Daily Report node to receive absentee lists.
- AI Setup
-- Add your OpenAI API key (used for intent classification and conversational agents).
-- The included prompts are currently in Egyptian Arabic — you can translate them to English or your local language in the "System Message" of the Agent nodes.
- Timezone
-- Adjust the timezone in the "Context" section of the AI Agent nodes to match your company's location (currently set to Africa/Cairo).

## How It Works
- Telegram Trigger catches every message sent to the HR Bot.
- AI Classifier analyzes the text to determine intent:
-- New Employee: Triggers a conversation to collect Name, ID, Salary, and Branch -&gt; Validates data -&gt; Adds to "Employee Data" sheet.
-- Attendance (Check-in): Logs the timestamp immediately.
-- Departure (Check-out): Looks up arrival time, calculates total hours worked. If under 8 hours, it flags "Early Departure" and logs it with a penalty note.
-- Financial Request: Logs salary advances (loans) directly to the sheet.
-- Report Request: An AI Analyst calculates net salary (Basic + Overtime - Absence - Advances) and replies with a detailed breakdown.
- Daily Schedule:
-- Every day at 1:00 PM, the workflow compares today's attendance logs against the full employee list.
-- It generates a list of absentees and sends a summary report to the HR Manager.

## Customization Ideas
- Change the Logic: Edit the JavaScript node to change the "8-hour work day" rule to match your company policy.
- Multi-Platform: Swap the Telegram Trigger for WhatsApp or Slack to match your team's communication tool.
- PDF Payslips: Add a node to generate a PDF payslip based on the AI's financial report and email it to the employee.
- Face Recognition: Integrate an image analysis node if you want employees to send a selfie for attendance verification.
- For more info [Contact Me](https://www.linkedin.com/in/khaledyasser01/)

## 🔗 Nodes Used

Google Sheets, Telegram, Telegram Trigger, Schedule Trigger, Filter, AI Agent

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
