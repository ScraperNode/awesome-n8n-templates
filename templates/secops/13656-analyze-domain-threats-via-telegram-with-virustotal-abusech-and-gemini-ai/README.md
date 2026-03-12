# 🔒 Analyze domain threats via Telegram with VirusTotal, AbuseCH, and Gemini AI

> ⚡ **17 views** · 🔒 [SecOps & Security Automation](../)

## Description

![WorkFlow.png](fileId:4544)

## Domain AI Analysis via Telegram, AbuseCH and VirusTotal

### Workflow Description
This workflow allows Telegram users to submit a domain for quick threat intelligence analysis. It queries VirusTotal, AbuseCH URLHaus, and AbuseCH ThreatFox, then uses Gemini AI to generate a formatted summary with key findings, assessment/analysis, and actionable recommendations.
Note: Currently supports domains only.

VirusTotal is widely known, so there’s no need for further explanation. AbuseCH, on the other hand, is a well‑known community threat intelligence project that focuses on tracking and sharing indicators related to malware, botnets, and other malicious activities.

### Who is this for?
For SOC analysts, threat hunters, security engineers, or anyone needing instant domain reputation checks via Telegram.
Delivers quick IOC validation with AI analysis and recommendations.

## Prerequisites:
**Telegram:**
Token and bot are needed
Follow the instructions here [Telegram Bot Creation](https://core.telegram.org/bots/tutorial#obtain-your-bot-token)

**VirusTotal:**
API Key is needed
Community addition is enough [VirusTotal API](https://docs.virustotal.com/docs/api-overview)

**AbuseCH URLhaus:**
API Key is needed [AbuseCH URLhaus API](https://urlhaus-api.abuse.ch/)

**AbuseCH ThreatFox:**
API Key is needed [AbuseCH ThreatFox API](https://urlhaus-api.abuse.ch/)

**Gemini AI:**
API key is needed [Gemini API](https://ai.google.dev/gemini-api/docs)


## Nodes Configuration

**Telegram Trigger**
add your credentials (token)
* it is recomended to set up the restricted Chat-ID OR/AND User-ID option

**VirusTotal, ThreatFox, URLHaus HTTP Requests**
For each one of the nodes, add your credentials

**Message an AI Model (Gemini)**
Set the model (tested with Gemini 3 Flash)
Set your credentials (token)

## Referencese:
[VirusTotal API](https://docs.virustotal.com/reference/overview)
[AbuseCH URLhaus API](https://urlhaus-api.abuse.ch/)
[AbuseCH ThreatFox API](https://urlhaus-api.abuse.ch/)
[Telegram Bot & Token Creation](https://core.telegram.org/bots/tutorial#obtain-your-bot-token)
[Gemini API](https://ai.google.dev/gemini-api/docs)

__________________________________________

## Disclaimer
* This was tested and built on self hosted Community node
* Treat output with caution—always validate independently. False positives/negatives can occur.
* Tested with Gemini 3 Flash Ai model

## 🔗 Nodes Used

HTTP Request, Telegram, Telegram Trigger, Google Gemini

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
