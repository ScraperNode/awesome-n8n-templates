# 🔒 Auto-classify security incidents with GPT-4 and Google Sheets for SOC teams

> ⚡ **138 views** · 🔒 [SecOps & Security Automation](../)

## Description

## 👤 Who it’s for
Blue Team leads, SOC analysts, and IT responders looking to automatically classify security alerts using AI-driven logic and asset-based risk signals.

Ideal for teams already scoring threats via CyberScan or BlueOps Module 3, and needing to prioritize next steps across Monitor / Investigate / Isolate / Escalate playbooks.

## ⚙️ How it works / What it does
Reads recent endpoint alerts from Google Sheets

Sends alert data (hostname, IP, risk score) to OpenAI GPT model

GPT returns structured JSON with:

severity tag (Low / Medium / High / Critical)

action recommendation (Monitor / Investigate / Isolate / Escalate)

Logs the full result to a centralized incident sheet

Can be expanded to trigger automated EDR actions or email alerts

## 🛠️ How to set up
Insert OpenAI API Key
Replace placeholder with your actual OpenAI secret in the HTTP Request node

Connect Sheets
Use your OAuth2 credentials to access the alerts input + classified log sheet

Tune GPT Prompt
Adjust language or risk thresholds inside the 🧠 Classify Incident (GPT) node

Automation
Add a Cron node or Webhook to run every X minutes/hours

## 📋 Requirements
OpenAI API key (GPT-4 or GPT-3.5 supported)

Google Sheets (or similar DB with alerts)

n8n credentials for Sheets access

Optional: Connected playbook actions or EDR endpoint logic

## 🧩 How to customize the workflow
Swap GPT with Claude, Gemini, or local LLM via API

Replace Google Sheets with Supabase or Airtable

Add a playbook router for Notify / Isolate logic

Integrate email or ticketing notification step

## 📦 This is a production-grade, AI-powered classification engine.
All inputs and tags are configurable. Safe placeholders are marked clearly.

## 📘 This module is part of the CYBERPULSEBlueOps Pro automation suite.
Explore the full set at 👉 cyberpulsesolutions.com/blueops

## 🔗 Nodes Used

Google Sheets, HTTP Request, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
