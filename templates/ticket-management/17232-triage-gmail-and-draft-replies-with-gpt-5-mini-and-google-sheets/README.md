# 🎫 Triage Gmail and draft replies with GPT-5 Mini and Google Sheets

> ⚡ **24 views** · 🎫 [Ticket Management & Triage](../)

## Description

## Quick overview
This workflow watches your Gmail inbox for new unread emails, uses OpenAI (GPT-5 Mini) to classify each message by priority and category, logs the triage results to Google Sheets, and creates a Gmail draft reply only when the email needs a personal response.

## How it works
1. Triggers every minute when a new unread email arrives in Gmail.
2. Applies your configured preferences (name, role, categories, and drafting style) to guide the triage.
3. Sends the email content to OpenAI (GPT-5 Mini) to return a structured priority, category, one-line summary, whether a reply is needed, and an optional draft reply.
4. Appends or updates a row in Google Sheets with the email details and triage results.
5. If the email needs a reply, creates a draft reply in Gmail in the same thread addressed to the original sender.

## Setup
1. Connect your Gmail account (Gmail Trigger and Gmail Draft) and ensure the trigger is set to monitor unread mail as desired.
2. Add an OpenAI credential and select the GPT-5 Mini chat model in the OpenAI node.
3. Connect Google Sheets OAuth credentials, then set the target spreadsheet document ID and sheet name for the triage dashboard.
4. Create a Google Sheet with columns for Date, From, Subject, Priority, Category, Summary, and Needs Reply, and update “Your Settings (EDIT ME)” with your name, role, categories, and draft guidance.

## 🔗 Nodes Used

Google Sheets, Gmail, Gmail Trigger, AI Agent, OpenAI Chat Model, Structured Output Parser

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
