# 🔧 Run a timed email-verified quiz with n8n forms, SMTP and data tables

> ⚡ **21 views** · 🔧 [Miscellaneous](../)

## Description

## Quick overview
This workflow runs an email-verified, timed quiz using n8n Forms, n8n Data Tables, and SMTP email sending, including resend limits, one-attempt-per-email enforcement, random question selection, automatic scoring, and saving results.

## How it works
1. Receives a quiz sign-up through an n8n Form with a name and email address.
2. Normalizes and validates the entry, checks n8n Data Tables to see if the email has already participated, and applies per-email and per-hour rate limits for verification codes.
3. If allowed, generates a 6-digit verification code, sends it via SMTP email, and logs only a SHA-256 hash of the code to the quiz_codes n8n Data Table.
4. Prompts the participant to enter the emailed code in a second n8n Form and verifies it against the latest stored hash while enforcing code expiry and a maximum number of attempts.
5. When the code is valid, creates a participant record in the quiz_results n8n Data Table and selects 10 random multiple-choice questions plus 1 feedback question from the quiz_questions n8n Data Table.
6. Presents the timed quiz form, then scores submitted answers (or records a timeout/late submission), updates the participant’s result in n8n Data Tables, and shows the score completion page when applicable.

## Setup
1. Create an SMTP credential (for example Cloudflare Email Routing/Email Sending over SMTP) and update the sender details used to send the verification email.
2. Run the one-time manual setup path to create the quiz_codes and quiz_results n8n Data Tables.
3. Create and populate a quiz_questions n8n Data Table with columns qid, type, difficulty, text, options, answer, and active, ensuring at least 10 active mcq questions (4 options separated by |) and at least 1 active text question.
4. Activate the workflow and share the public URL of the entry form so participants can start the sign-up process.

## Requirements
- 1) Three data tables - quiz_questions, quiz_codes, quiz_results created from the provided CSV files. 2. Claudeflare SMTP credential with 

## Customization
- Change the time limit and the difficulty mix in **Pick Questions1**.
- Change the code expiry and resend limits in **Check Request**.
- Edit the result messages in **Score Answers1**.

## 🔗 Nodes Used

Send Email, n8n Form Trigger, n8n Form, Data table

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
