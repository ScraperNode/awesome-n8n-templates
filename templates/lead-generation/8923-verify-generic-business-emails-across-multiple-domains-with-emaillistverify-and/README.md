# 🎣 Verify generic business emails across multiple domains with EmailListVerify and Google Sheets

> ⚡ **157 views** · 🎣 [Lead Generation & Enrichment](../)

## Description

## Who is this template for?
Growth teams and SDR targeting small companies.

In small companies, it is common for the founder to monitor the contact@ email, so generic emails can give you good results.


## What problem does this workflow solve?
Get from a list of domain names to a list of email addresses.

This workflow allows you to choose which email pattern you are looking for. So you can use it to find function emails like hr@ or accounting@. This is a great way to get in touch with your ICP.

## What this workflow does
Think workflow will:
- Generate email candidates based on the domain name and root you are providing
- Check if those email addresses are valid using EmailListVerify
##  Requirement
This template uses:
Google Sheet to handle input and output data
[EmailListVerify](https://www.emaillistverify.com?utm_source=n8n&utm_medium=referral&utm_campaign=genericEmailFinder) to discover email (from $0.05 per email)
## Setup (10 minutes)
**1:** Make a copy of the [GoogleSheet template](https://docs.google.com/spreadsheets/d/11JW2e9w00bZO_ORe0FNaK_u5tnchI8ZOwcq8qN1toZw/edit?gid=1262572795#gid=1262572795)
**2:** In "[Input] pattern" sheet, write the root email you want to check, like contact or accounting
**3:** In "[Input] domain", put the domain for which you want to find email addresses. Write the domain without http or www in front.
**4:** Add your [EmailListVerify API key](https://app.emaillistverify.com/api?utm_source=n8n&utm_medium=referral&utm_campaign=genericEmailFinder) to setting to the 3rd step
**5:** Update Google Sheet node to point to your copy of the template
**6:** Trigger the workflow

## 🔗 Nodes Used

Google Sheets, HTTP Request

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
