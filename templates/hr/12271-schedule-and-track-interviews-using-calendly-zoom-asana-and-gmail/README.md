# 👥 Schedule and track interviews using Calendly, Zoom, Asana, and Gmail

> ⚡ **82 views** · 👥 [HR & Recruitment](../)

## Description

## 📊 Description
This workflow automates interview scheduling by orchestrating Calendly, Zoom, Asana, and Gmail into a single, reliable hiring pipeline. When a candidate books an interview, the automation ensures the interview is properly scheduled, tracked, assigned, and communicated — without any manual follow-ups.
The workflow listens for new Calendly bookings, normalizes scheduling data, creates a Zoom meeting, assigns a structured interview task in Asana, and notifies the appropriate interviewer via email. Conditional routing ensures the right stakeholders are involved while keeping candidate communications separate.
Designed for real-world hiring operations, this automation provides consistency, accountability, and scalability as interview volume grows.

## 🔁 What this template does
- Receives interview booking events from Calendly via webhook.
- Normalizes and structures scheduling details such as time, timezone, and invitee information.
- Creates a Zoom meeting automatically for the scheduled interview.
- Routes the interview based on type (for example, HR or Technical).
- Creates a structured Asana task assigned to the appropriate interviewer.
- Stores interview context and Zoom meeting links directly in the Asana task.
- Sends automated email notifications to interviewers with complete interview details.
- Ensures interviewer-side visibility without exposing candidate-facing communications.
- Executes fully automatically with no manual intervention.

## ⭐ Key benefits
- Eliminates manual interview coordination and follow-ups
- Ensures every interview has a correctly configured Zoom meeting
- Keeps interviewers aligned through structured Asana task tracking
- Provides reliable, role-based notifications
- Reduces scheduling errors and missed interviews
- Production-ready automation for growing hiring teams

## 🧩 Features
- Calendly webhook-based trigger
- Normalized interview data handling
- Automated Zoom meeting creation
- Interview-type routing and interviewer assignment
- Interview-focused Asana task management
- Automated Gmail notifications
- Clean, interviewer-only communication flow
- Scalable interview orchestration design

## 🔐 Requirements
- Calendly account with webhook access enabled
- Zoom API credentials
- Asana OAuth2 credentials
- Gmail OAuth2 credentials
- n8n (cloud or self-hosted)

## 🎯 Target audience
- Hiring managers
- Technical interviewers
- HR and recruitment teams
- Startups and SaaS companies
- Automation engineers building internal hiring pipelines

## 🔗 Nodes Used

Asana, Calendly Trigger, Zoom, Gmail

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
