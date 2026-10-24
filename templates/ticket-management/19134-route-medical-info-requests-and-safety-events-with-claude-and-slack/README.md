# 🎫 Route medical info requests and safety events with Claude and Slack

> ⚡ **7 views** · 🎫 [Ticket Management & Triage](../)

## Description

## Quick overview
This workflow receives medical information questions via webhook, uses Anthropic Claude to classify topic/urgency/complexity and detect potential safety signals, retrieves content from an approved knowledge base to draft sourced replies, then either emails a response or escalates via case creation and Slack, while logging outcomes for compliance.

## How it works
1. Receives an incoming medical information request via a POST webhook with the question, requester details, and product name.
2. Uses Anthropic Claude to classify the request’s topic, urgency, and complexity and to flag any potential adverse event or safety signal.
3. If a safety signal is flagged (or classification parsing fails), creates an urgent Pharmacovigilance case via an HTTP API and sends an immediate alert to the Drug Safety Slack channel.
4. Otherwise, searches an approved medical-information knowledge base via HTTP, evaluates source coverage, and uses Anthropic Claude to draft a response strictly from the retrieved sources with citations.
5. Determines whether the request can be auto-answered (Standard complexity, Routine urgency, sufficient coverage, and a complete draft) and selects the appropriate Medical Information team/channel based on the topic.
6. Emails the sourced answer to the requester for auto-answerable requests, or creates an escalated Medical Information case via HTTP and posts an alert to the routed team’s Slack channel.
7. Logs the request, classification, routing outcome, and related data to a compliance log via an HTTP API.

## Setup
1. Add an Anthropic credential for the Claude chat model used for classification and response drafting.
2. Configure HTTP header authentication credentials for your approved knowledge base API, safety/pharmacovigilance case system API, medical-information case system API, and compliance log API.
3. Add Slack credentials and ensure the configured channels exist (for example #drug-safety and your Medical Information team channels).
4. Add SMTP/email credentials and set the sender address, then update the default config values (API URLs, routing map JSON, and channels) in the configuration step.
5. Copy the webhook URL from n8n and configure your intake form or upstream system to send POST requests to the webhook path with the expected fields (question, requesterName, requesterEmail, requesterType, productName).

## 🔗 Nodes Used

Send Email, HTTP Request, Slack, Webhook, AI Agent, Anthropic Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
