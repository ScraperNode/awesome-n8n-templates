# 💬 Automatically reply to cold emails with GPT-4 & Instantly.ai

> ⚡ **1,642 views** · 💬 [Lead Nurturing & AI Sales Agents](../)

## Description

# AI-Powered Workflow for Auto-Responding to Positive Cold Email Replies

This workflow is designed for **agencies**, **freelancers**, and **sales teams** who want to turn **positive cold email replies into booked meetings automatically**—without hiring VAs or spending hours on manual responses.

---

## ❓ The Problem
Most teams waste time **replying manually** or **pay for virtual assistants**, leading to **delays and missed opportunities**.  
This template eliminates that bottleneck.

---

## ✅ What the Workflow Does
- Detects **positive replies** from **Instantly.ai campaigns**
- Uses **AI to analyze intent** and craft **natural, human-like responses**
- Adds **personalization** to keep replies authentic
- Includes **Calendly links, product docs, or FAQs** based on the lead’s intent
- Sends **responses instantly**—so you **never miss a hot lead again**

**No robotic AI text.** Just **smooth, human-style emails** that get booked calls faster.

---

## 👥 Who is This For?
- **Agencies** running Instantly.ai or similar outbound tools
- **Founders** handling their own cold email outreach
- **Sales teams** looking to automate follow-up and booking
- Anyone who gets **5–20 positive replies a week** and wants to **2x–4x conversions**

---

## ✅ Requirements
- **n8n** (Cloud or self-hosted)
- **Instantly.ai account** with API access
- **OpenAI API key** (stored securely in n8n credentials)
- *(Optional)* Calendly or booking link, Notion or Google Docs for resources

---

## ⚙️ How to Set Up
1. Import the **workflow** into n8n
2. Add your **Instantly.ai API credentials** and **OpenAI key** using n8n’s credential manager
3. Customize the **AI prompt** for your tone, CTA, and offer
4. Insert your **Calendly or booking link** in the response template
5. Test with **one positive reply** to confirm filtering and response quality
6. Activate the workflow to **auto-reply in real time**

---

## 🔧 How to Customize
- Adjust the **filtering logic** for different keywords or intent signals
- Add **branching** for multiple booking links (e.g., based on region or service type)
- Push **responses to a CRM** for tracking
- Include extra resources like **case studies or pricing docs**

## 🔗 Nodes Used

HTTP Request, Webhook, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
