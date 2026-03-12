# 🔒 CYBERPULSE AI redOps: credential trap sim: fake login page simulation

> ⚡ **86 views** · 🔒 [SecOps & Security Automation](../)

## Description

## 📝 Description:
Simulate a phishing login page to test user behavior and SOC response. This controlled workflow sends trap links to predefined targets and logs simulated interaction results—without capturing real credentials.

## ✅ Who’s It For:
Red Teams conducting phishing awareness campaigns

SOCs validating alert triggers for credential-based phishing

GRC/Compliance teams performing control testing

## ⚙️ How It Works:
Loads test targets from Google Sheets

Generates trap page URLs (non-malicious)

Fakes login interaction upon click

Logs timestamped event and status to Google Sheet

## 📦 Requirements:
Google Sheets credentials

Optional: Use Vercel/Cloudflare to deploy a real HTML page for advanced simulation

No sensitive data is collected

## 📁 File Templates:
RedOps_CredentialTrapSim_Log_Template.xlsx

email	name	team	payload	response	status	module	timestamp
jane@org.com	Jane Doe	HR	fake-login.com	User clicked	Simulated	Credential_Trap_Sim	2025-07-27T11:00:00Z

## 🧠 Customization Tips:
Change trap content using a public static site

Connect to real EDR/alert system for end-to-end SOC validation

Adjust payload wording for different awareness campaigns

## ⚠️ Ethics & Warning:
This module is 100% simulated and does not capture real credentials. Use only in authorized environments with informed consent. It is designed for training, awareness, and control testing under ethical guidelines.

🔗 Part of the CYBERPULSE AI RedOps Suite
🌐 https://cyberpulsesolutions.com
📧 info@cyberpulsesolutions.com

## 🔗 Nodes Used

Google Sheets

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
