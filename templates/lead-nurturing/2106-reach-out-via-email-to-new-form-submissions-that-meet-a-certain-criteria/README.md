# 💬 Reach out via email to new form submissions that meet a certain criteria

> ⚡ **2,075 views** · 💬 [Lead Nurturing & AI Sales Agents](../)

## Description

# Use case
When collecting new leads via a form, you need to follow up on new submissions. Often, this required a lot of manual work that includes reviewing each submission, checking if they meet your criteria and then outreaching. With this workflow you can do all of that fully automatically and save a lot of your valuable time.
# What this workflow does
This workflow runs every time you're receiving a new submission from an n8n form. It then filters out typical personal emails (such as Gmail, Hotmail, Yahoo etc.) before enriching the submission via Clearbit. It then checks, if the company of the submitter is a B2B company and has more than 499 employees. If it does, it sends an email via Gmail to the user.
# Setup
1. Add the `Clearbit` and `Gmail` credentials
2. Click on `Test Workflow`
3. Enter your own email (which needs to be a business email to work) in the Form
4. Check your email
5. Once you're happy don't forget to activate this workflow
# How to adjust this template
- Replace the form trigger with your form provider of choice (e.g. Typeform, SurveyMonkey, Google Forms etc.)
- Adjust the criteria to your needs via the `If node`
- Adjust the email you're sending in the `Gmail node`

## 🔗 Nodes Used

Clearbit, Gmail, Filter, n8n Form Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
