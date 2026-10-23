# 📖 Answer portfolio questions with live profile data, Groq and chat memory

> ⚡ **25 views** · 📖 [Internal Wiki & Knowledge Base](../)

## Description

Build a conversational AI chatbot for your personal portfolio that answers
  questions about your experience, skills, projects, and contact info —
  powered by Groq and live profile data fetched from a JSON endpoint.

  ## How it works

  1. A visitor sends a message via the public chat widget
  2. The workflow fetches your latest profile data from a hosted JSON URL
  3. Profile data + chat input are prepared and passed to the AI agent
  4. The Groq-powered agent answers questions using only your profile data
  5. Chat memory retains the last 10 messages for context-aware replies

  ## Setup

  1. Replace the profile JSON URL in **Get Profile** with your own hosted endpoint
  2. Connect your **Groq API** credential
  3. Update the system prompt in **Chat Agent** with your name
  4. Activate and embed the chat widget on your portfolio site

  ## Requirements

  - Groq API key (free tier works)
  - A publicly accessible JSON file containing your profile data

## 🔗 Nodes Used

AI Agent, Simple Memory, Chat Trigger, Groq Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
