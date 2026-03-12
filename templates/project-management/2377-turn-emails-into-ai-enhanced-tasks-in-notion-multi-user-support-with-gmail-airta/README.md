# 📋 Turn emails into AI-enhanced tasks in Notion (multi-user support) with Gmail, Airtable and Softr

> ⚡ **8,508 views** · 📋 [Project Management](../)

## Description

## Purpose

This workflow automatically creates Tasks from forwarded Emails, similar to Asana, but better. Emails are processed by AI and converted to rather actionable task.

In addition this workflow is build in a way, that multiple users can share this single process by setting up their individual configuration through a user friendly portal (internal tool) instead of the need to manage their own workflows.

## Demo

[![IMAGE ALT TEXT HERE](https://img.youtube.com/vi/7cIvSqJAY0E/0.jpg)](https://youtu.be/7cIvSqJAY0E)

## How it works

- One Gmail account is used to process inbound mails from different users.
- A custom web portal enables users to define “routes”. Thats where the mapping between an automatically generated Gmail Alias and a Notion Database URL, including the personal API Token, happens.
- Using a Gmail Trigger, new entries are split by the Email Alias, so the corresponding route can be retrieved from the Database connected to the portal.
- Every Email then gets processed by AI to get generate an actionable task and get a short summary of the original Email as well as some metadata.
- Based on a predefined structure a new Page is created in the corresponding Notion Database.
- Finally the Email is marked as “processed” in Gmail.
- If an error happens, the route gets paused for a possible overflow and the user gets notified by Email.

## Setup

- Create a new Google account (alternatively you can use an existing one and set up rules to keep your inbox organized)
- Create two Labels in Gmail: “Processed” and “Error”
- Clone [this Softr template including the Airtable dataset](https://studio.softr.io/dashboard?template_id=164f2a23-00c8-4e6b-8bb7-b413b8df6f3a) and publish the application
- Clone this workflow and choose credentials (Gmail, Airtable)
- Follow the additional instructions provided within the workflow notes
- Enable the workflow, so it runs automatically in the background

## How to use

- Open published Softr application
- Register as a new user
- Create a new route containing the Notion API key and the Notion Database URL
- Expand the new entry to copy the Email address
- Save the address as a new contact in your Email provider of choice
- Forward an Email to it and watch how it gets converted to an actionable task

## Disclamer

- Airtable was chosen, so you can setup this template fairly quickly. It is advised to replace the persistence by something you own, like a self hosted SQL server, since we are dealing with sensitive information of multiple users
- This solution is only meant for building internal tools, unless you own an embed license for n8n.

## 🔗 Nodes Used

Airtable, HTTP Request, Gmail, Gmail Trigger, Filter, AI Agent

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
