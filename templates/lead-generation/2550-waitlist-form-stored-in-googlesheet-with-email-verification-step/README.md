# 🎣 Waitlist form stored in GoogleSheet with email verification step

> ⚡ **2,252 views** · 🎣 [Lead Generation & Enrichment](../)

## Description

## Instructions

This automation streamlines the process of **collecting user information** using a Form Node, enabling individuals to join a **waitlist managed via Google Sheets.**

It also **generates a verification code**, prompting users to input this code in the Second Form Step. If the code is _nvalid, the workflow keeps the user in a verification loop until a valid code is entered.

Once a **valid code is provided**, the workflow proceeds to the final step, where **additional information** can be collected.

All e**ntered data and intermediate states** are securely **stored in the Google Sheet**.

### Structure of the GoogleSheet

Firstname | Lastname | Email | Company | Verification-Code | Verified | Intended Use
Marcel | Claus-Ahrens | foo[at]bar| foobar | abc123 | TRUE | Just testing

### Setup

1. Set Up a Google Sheet: Create a Google Sheet with the specified columns, or customize them to suit your needs.
2. Verify the "Send Mail" Node: Ensure your "Send Mail" node is functional, or replace it with another email-sending node.
3. Customize Texts and Fields: Update email content, form texts, and form fields to align with your specific use case.
4. Done!

![Image](https://cloud.let-the-work-flow.com/logo-64.png)  
Enjoy the workflow! ❤️  
[let the workf low](https://let-the-work-flow.com) — Workflow Automation & Development

## 🔗 Nodes Used

Send Email, Google Sheets, n8n Form Trigger, n8n Form

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
