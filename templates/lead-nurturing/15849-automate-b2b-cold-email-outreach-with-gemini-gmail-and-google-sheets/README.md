# 💬 Automate B2B cold email outreach with Gemini, Gmail and Google Sheets

> ⚡ **486 views** · 💬 [Lead Nurturing & AI Sales Agents](../)

## Description

# **Enterprise AI Outreach Automation**


## Description
This n8n template demonstrates how to build a complete AI-powered outbound email system using Google Sheets, Gmail, Gemini, and website scraping. The workflow is designed to help you move from basic lead data to personalized cold outreach without manually researching each company or writing each email yourself.

You only need to add a few lead details such as first name, last name, email, and website in your Google Sheet. From there, the workflow scrapes the lead’s website, cleans the text, analyzes the business with Gemini, generates outreach context like pain points and growth signals, creates a six-email sequence, sends the first message, schedules follow-ups, and updates the lead record automatically.

The workflow also includes protections for working hours and daily sending limits. It has a separate Gmail reply-monitoring branch that detects responses, marks leads as active or replied, and stops unnecessary future follow-ups by updating the lead sheet.

## Good to know
This workflow uses two Gemini-powered AI steps: one to generate business research from website content and another to generate the six-email sequence, so usage cost will depend on your Gemini plan and token usage. The workflow also depends on website scraping through a Puppeteer node connected to a Browserless endpoint, so you need a working scraping setup before activating the template.

It is also built around a Google Sheets structure that stores lead details, email content, send dates, send status fields, thread IDs, notes, and service information. For best results, keep the sheet columns aligned with the workflow mappings before you start using it.

## How it works
- A scheduled trigger starts the new lead flow and first passes through a working-hours protection check so emails are only processed during allowed business hours.
- The workflow reads leads from Google Sheets and filters for rows where the lead status is blank, which means only fresh leads are processed first.
- The lead website is scraped with Puppeteer, then a code node removes noisy HTML, scripts, duplicate lines, and low-value content so the AI receives cleaner business text.
- Gemini analyzes the cleaned website text and returns structured data such as company summary, industry, target audience, pain points, growth signals, automation opportunities, email angle, and a personalized opening line.
- That research is written back to the lead sheet, after which the workflow reads your service data from a separate sheet so the offer can be matched to the lead context.
- A second Gemini step generates a full six-email sequence, with only Email 1 receiving a subject line and follow-ups designed to be sent in the same Gmail thread.
- The parsed email content is cleaned and formatted, a random wait is applied before sending, Email 1 is sent through Gmail, and tracking fields such as thread ID, send dates, sent flags, sequence step, and follow-up dates are updated in Google Sheets.
- A separate scheduled branch handles Email 2 to Email 6 by checking lead status, sequence step, send dates, working hours, and daily limits before sending the next follow-up reply in the existing Gmail thread.
- Another Gmail Trigger branch monitors replies, extracts reply details, updates the lead record, and marks the lead so follow-ups stop once a response is received.

## How to use
- Add new leads to your main Google Sheet with at least First Name, Last Name, Email, and Website.
- Add your services, offers, or solution descriptions to the services sheet so the workflow can align outreach messaging with what you actually sell.
- Connect your Google Sheets, Gmail, and Gemini credentials in n8n, and configure your Browserless or Puppeteer scraping setup.
- Review the mapped sheet columns carefully, especially the fields for subject lines, email bodies, send timestamps, sent-status flags, thread IDs, notes, and sequence steps.
- Activate the workflow to allow the scheduled lead-processing flow, follow-up flow, and Gmail reply-monitoring flow to run automatically.

## Requirements
- Google Sheets account for lead storage, service data, tracking fields, and daily limit control.
- Gmail account for sending the first email, replying in existing threads, and detecting incoming replies.
- Gemini account for website analysis and AI email sequence generation.
- Puppeteer node plus a working Browserless or compatible scraping endpoint for website extraction.

## Customising this workflow
You can adapt this template to different outreach styles by changing the prompts in the “Generate Website Summary” and “Generate Email” nodes. The current setup focuses on B2B personalized outreach with a six-step sequence, but you can easily change the tone, CTA style, email lengths, service positioning, or follow-up intervals to fit agencies, consultants, SaaS founders, recruiters, or niche lead generation campaigns.

You can also adjust the sheet logic to support additional statuses, separate campaigns, multiple sender accounts, or different daily sending caps for new emails and follow-ups. Since the workflow already tracks sent counts, send windows, sequence stages, and reply updates, it provides a strong base for scaling into a more advanced outreach system.

Optional “Try it out” section
Try It Out
This n8n template is a complete AI-powered cold email outreach system for teams that want to automate lead research, email writing, follow-up scheduling, and reply tracking. You only need to provide basic lead details in Google Sheets, and the workflow handles the rest automatically.

It researches each company website, creates personalized outreach context, generates a full six-email sequence, sends emails through Gmail, updates tracking fields, and stops follow-ups once a reply is detected.

## 🔗 Nodes Used

Google Sheets, Gmail, Gmail Trigger, Schedule Trigger, Filter, Basic LLM Chain

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
