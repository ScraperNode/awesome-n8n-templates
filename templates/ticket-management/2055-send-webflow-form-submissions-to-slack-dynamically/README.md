# 🎫 Send Webflow form submissions to Slack dynamically

> ⚡ **1,095 views** · 🎫 [Ticket Management & Triage](../)

## Description

**What it does:**
This automation will dynamically create Slack channels for your Webflow forms and send formatted messages to those channels for every form submission you receive. When a new form is dedected, a message is sent in the #general Slack channel with a hyperlink to the new channel.

**This is useful for:**
Webflow form submissions can only notify a single user email as standard, but by using this workflow you can notify team members of new submissions instead of having to login into Webflow to go download form submissions.

**Usage guide**
[Full written and video guide](https://blog.kreonovo.co.za/send-webflow-form-submissions-to-slack-automatically/)

The main steps are to create credentials for Webflow and Slack, connect them, and start using the workflow. The video guide illustrates a realword usecase using a Webflow template. The video also breaks down each node in detail to explain what it does in case you want to make modifications.

## 🔗 Nodes Used

Slack, Webflow Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
