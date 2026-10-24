# 🎬 Send lecture study digests to WhatsApp with WayinVideo, GPT-4o-mini and Twilio

> ⚡ **49 views** · 🎬 [Content Creation & Video](../)

## Description

## Quick Overview
This workflow collects a lecture video URL and student details via an n8n form, summarizes the video with the WayinVideo Summarization API, refines the output into a study digest with OpenAI GPT-4o-mini, then sends the digest to WhatsApp via Twilio and logs it to Google Sheets.

## How it works
1. Receives a student submission from an n8n form with their name, WhatsApp number, subject, lecture video URL, and an exam revision flag.
2. Validates the required fields, normalizes the phone number, and formats the recipient as a Twilio WhatsApp address.
3. Submits the lecture video URL to the WayinVideo Summarization API and waits 90 seconds for initial processing.
4. Polls the WayinVideo results endpoint every 30 seconds until the summarization status is SUCCEEDED.
5. Sends the returned summary, highlights, and tags to OpenAI GPT-4o-mini to produce 5 key learning points, 3 exam-important concepts, and one “never-forget” line.
6. Formats the AI output into a WhatsApp-ready message and sends it via Twilio while appending the digest details to a Google Sheets tab.

## Setup
1. Create a WayinVideo API key and replace `YOUR_WAYINVIDEO_API_KEY` in the submit and results HTTP requests.
2. Add an OpenAI credential for GPT-4o-mini to the OpenAI chat model used by the AI Agent.
3. Configure Twilio WhatsApp (Sandbox or approved sender), then replace `YOUR_TWILIO_ACCOUNT_SID`, `YOUR_TWILIO_AUTH_TOKEN`, and `YOUR_TWILIO_WHATSAPP_NUMBER` in the Twilio HTTP request.
4. Connect a Google Sheets OAuth credential, set `YOUR_GOOGLE_SHEET_ID`, and ensure a sheet named “Lecture Digests” exists with columns matching the appended fields (Student, Phone, Subject, Video URL, Key Points, Exam Concepts, Exam Tag, Date).

## 🔗 Nodes Used

Google Sheets, HTTP Request, AI Agent, OpenAI Chat Model, n8n Form Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
