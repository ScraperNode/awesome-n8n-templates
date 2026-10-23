# 🎣 Generate and verify email patterns from chat input with Reoon Email Verifier

> ⚡ **10 views** · 🎣 [Lead Generation & Enrichment](../)

## Description

## Quick overview
This workflow collects a person’s name and company website in an n8n chat, generates common email address patterns for the domain, verifies each candidate using the Reoon Email Verifier API, and returns the first address that meets a minimum score and deliverability/safety checks.

## How it works
1. Receives a chat message to start the flow and prompts the user for first name, last name, and company website.
2. Builds a company domain from the website and generates a list of common email address variations (for example first.last@domain).
3. Iterates through the generated email candidates and verifies each one via the Reoon Email Verifier API.
4. Normalizes the verification response to extract the email, overall score, status, and deliverability flags.
5. If the overall score is greater than 70, it returns the verified email details to the chat.
6. If the score is not high enough, it checks whether the result is marked safe or deliverable and either returns the email details or continues testing the next variation.
7. If no candidate passes the checks, it replies in chat that no verified email was found.

## Setup
1. Add your Reoon Email Verifier API key and replace the hard-coded key in the Reoon verification HTTP request URL.
2. Configure and enable the n8n Chat trigger, then use the provided chat/webhook endpoint in your chat client or n8n chat UI.
3. Adjust the acceptance rules (for example the overall score threshold of 70 and the safe/deliverable checks) to match your verification standards.

## 🔗 Nodes Used

HTTP Request, Chat

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
