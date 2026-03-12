# 🔒 AI-Powered Vendor Policy & RSS Feed Analysis with Integrated Risk Scoring

> ⚡ **1,937 views** · 🔒 [SecOps & Security Automation](../)

## Description

## 🧠 Overview

A dual-engine, AI-driven **n8n** workflow that automates the monitoring of both vendor policy webpages and compliance-related RSS feeds. It intelligently detects recent updates, evaluates their potential risk, and delivers a structured HTML digest categorized by severity — right to your inbox.

---

## ⚙️ How It Works

1️⃣ **Scheduled Execution**  
⏰ Runs daily at 3 AM to ensure timely and consistent monitoring.

2️⃣ **Dual Data Streams**  
- 📰 **RSS Feed Monitoring**: Ingests articles from selected feeds focused on security, privacy, and compliance.  
- 🌐 **Vendor Webpage Monitoring**: Fetches specified policy URLs and checks for updates using `Last-Modified` headers and in-page content analysis.

3️⃣ **Content Filtering**  
🧹 Applies logic to filter out stale or irrelevant data, focusing only on updates within the past 24 hours.

4️⃣ **AI-Powered Risk Categorization**  
🤖 Two dedicated AI agents (one per stream) analyze content to:  
- 📝 Generate a 2-line compliance/risk-focused summary  
- 🚦 Assign a risk score: **High**, **Medium**, **Low**, or **Informational**

5️⃣ **Digest Generation**  
🖼️ Summaries are grouped by risk level and formatted into a visually polished HTML report, using category-specific styles and color coding.

6️⃣ **Email Delivery**  
📧 Automatically sends out two separate email reports via Gmail:  
- 🗂️ One for vendor **webpage updates**  
- 📰 One for **RSS feed-based** vendor news

---

## ✨ Key Features

- 🔁 **Automates daily monitoring** across feeds and policy pages  
- 🤖 **AI-driven summarization** and structured risk scoring  
- 🧾 **Clean, HTML-formatted digests** grouped by risk category  
- 🧩 **Fully customizable**: feed sources, vendor URLs, AI prompts, and email styling  
- 🛡️ **Designed for compliance, security, and risk teams** needing proactive intelligence

## 🔗 Nodes Used

HTTP Request, RSS Read, Gmail, Schedule Trigger, Filter, AI Agent

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
