# 💬 Replace your call center with an AI agent using GoHighLevel (GHL), VAPI & Twilio

> ⚡ **499 views** · 💬 [Lead Nurturing & AI Sales Agents](../)

## Description

The **AI Calling Agent** is a fully automated phone assistant built with **n8n, GoHighLevel (GHL), VAPI, and Twilio**.  
This workflow allows you to:  
- Trigger outbound calls from your CRM (GHL).  
- Use a voice AI assistant (VAPI) to talk with leads in real time.  
- Route calls through Twilio.  
- Save **appointments and full conversation summaries** directly in GHL.  

It has been tested on **real warm leads** (not random numbers) and proven stable at **up to 300 calls/day without interruption**.  
Instead of manually calling and qualifying each lead, let the agent do it automatically and focus only on booked calls.  

---

## Workflow in Action  

#### Appointment booking  
- The agent can confirm appointments and save them directly in your GHL calendar, along with the summary of the conversation.  

![GHL Appointment](https://raw.githubusercontent.com/TuguiDragos/ghl-n8n-ai-calling-agent/refs/heads/main/GHL%20appointment.png)  

#### Agent performance  
- You can monitor conversations, call logs, and outcomes directly in the VAPI dashboard.  

![VAPI Dashboard](https://raw.githubusercontent.com/TuguiDragos/ghl-n8n-ai-calling-agent/refs/heads/main/vapi%20dashboard.png)  

#### Agent working live  
- Proof that the agent can run **non-stop for hundreds of calls per day** without errors or interruptions.  
- Demonstrates reliability and stability even under continuous execution.  

![Agent in Action](https://raw.githubusercontent.com/TuguiDragos/ghl-n8n-ai-calling-agent/refs/heads/main/Agent%20working.png)  

#### Contact statuses  
- Each contact in GHL receives a status tag depending on the call result: **answered**, **invalid number**, **no response**, etc. This ensures your pipeline stays clean and updated automatically.  

![GHL Status Tags](https://raw.githubusercontent.com/TuguiDragos/ghl-n8n-ai-calling-agent/refs/heads/main/GHL%20tag-VAPI.png)  

#### The brain of the agent  
- Inside VAPI, every assistant is powered by a **command system (the brain)** where you define how it should behave during calls.  
- In this case, the brain is **propelled by OpenAI**, but VAPI also supports a wide range of AI models such as **Anthropic Claude, Google Gemini, Mistral, LLaMA** and more.  
- The same flexibility applies to voices: you can instantly switch between integrated providers like **ElevenLabs, Play.ht, Microsoft Azure Voices, Google Cloud TTS**, and others.  
- This makes the agent not only smart but also highly customizable - from the intelligence driving the conversation to the exact voice your clients will hear.  

![Agent Brain – VAPI](https://raw.githubusercontent.com/TuguiDragos/ghl-n8n-ai-calling-agent/refs/heads/main/VAPI%20promt%20model.png)   

---

## Required APIs  

To run this workflow, you need the following:  
- **VAPI API key** → for the voice AI assistant logic.  
- **Twilio API key** → to provide phone numbers and route calls.  
- **GoHighLevel (GHL) API key** → to manage contacts, pipelines, and save appointments.  
 
---

## Setup Steps  

1. **Generate API keys** for VAPI, Twilio, and GHL.  
2. **Import the n8n template** into your environment.  
3. **Configure credentials** in n8n for each API.  
4. Set your **trigger conditions in GHL** (e.g., pipeline stage changes, new leads).  
5. Test the workflow with a warm lead before scaling.  
6. (Optional) Adjust logging or sync results with Google Sheets/Notion.  

---

## 💡 Use Cases  

- **Sales Teams**: Automatically call new inbound leads, qualify them, and book appointments.  
- **Agencies**: Replace repetitive cold calling with an automated assistant, then hand over only the hot leads to human agents.  
- **Real Estate**: Pre-qualify potential buyers or renters, schedule viewings, and save results in GHL.  
- **Healthcare/Clinics**: Confirm appointments, send reminders, and reduce no-shows with an AI calling agent.  
- **Education/Coaching**: Handle inquiries for courses, book consultations, and sync data with your CRM.  
- **Inbound Calls**: The agent can also be configured to **answer incoming phone calls**, providing information, capturing lead details, or routing the caller to the right person.    

---

 With this template, you get a **scalable AI-powered sales assistant** that saves hours of manual calling while ensuring every lead gets a fast, professional response.

---

# Links
- [📂 GitHub](https://github.com/TuguiDragos/ghl-n8n-ai-calling-agent)  
- [📰 Medium Article](https://medium.com/@tuguidragos/meet-your-new-ai-phone-assistant-the-automated-call-agent-with-a-human-touch-296fb90b9429)  
- [▶️ YouTube Lite Version](https://www.youtube.com/watch?v=xgDPP_hJ7ms) – *simplified version using Google Sheets only*

## 🔗 Nodes Used

HTTP Request, HighLevel, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
