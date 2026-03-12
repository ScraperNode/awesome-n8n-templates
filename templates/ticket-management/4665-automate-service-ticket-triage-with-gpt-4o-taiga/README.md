# 🎫 Automate Service Ticket Triage with GPT-4o & Taiga

> ⚡ **785 views** · 🎫 [Ticket Management & Triage](../)

## Description

**Usecase**: When a new service ticket is created in Taiga, it's often unclear whether it contains sufficient details to begin work. This workflow automates the triage process by:

1. Using an AI model to extract key information from the ticket description.
2. Automatically assigning values for:
   - **Type** (Bug, Enhancement, Onboarding, Question)
   - **Severity** (Wishlist, Minor, Normal, Important, Critical)
   - **Priority** (Low, Normal, High)
   - **Status** (New, Needs More Info, etc.)
3. Detecting missing critical data and blocking the ticket if incomplete.

Setup instructions here:
https://github.com/emooney/Service_Ticket_Triage_Helper

## 🔗 Nodes Used

Taiga, Taiga Trigger, AI Agent, OpenAI Chat Model, Structured Output Parser

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
