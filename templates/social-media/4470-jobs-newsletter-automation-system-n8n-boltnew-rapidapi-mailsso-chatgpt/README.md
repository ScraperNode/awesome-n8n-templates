# 📱 Jobs newsletter automation system (N8N, Bolt.new, RapidAPI, Mails.so & ChatGPT)

> ⚡ **1,809 views** · 📱 [Social Media & Email Marketing](../)

> 💡 **Pro Tip** — Job boards are notoriously hard to scrape — CAPTCHAs, rate limits, constantly changing layouts. [ScraperNode](https://scrapernode.com) has maintained scrapers for [Indeed jobs](https://scrapernode.com/indeed/scrapers/jobs), [Glassdoor reviews](https://scrapernode.com/glassdoor/scrapers/reviews), and [Glassdoor jobs](https://scrapernode.com/glassdoor/scrapers/jobs) that handle all of that for you.

## Description

![Black and White Clean Videocentric YouTube Thumbnail 2.png](fileId:1413)
[**Watch on Youtube▶️**](https://www.youtube.com/watch?v=2Xbi-8ywPXg)

Welcome to this complete step-by-step guide on how to build your own newsletter automation system using n8n, Bolt.new, and RapidAPI. Whether you're a solo founder, indie hacker, or community builder, this setup will allow you to collect subscribers, send them curated job updates, and manage unsubscriptions — all with full control and zero reliance on third-party newsletter tools.

## 🚀 Goal of This Guide

By the end of this guide, you will have a fully working system that allows you to:
- Collect user subscriptions from a modern frontend interface
- Send welcome or rejection emails (using your own SMTP)
- Automatically scrape jobs via an API and send them to subscribers weekly or daily
- Manage unsubscriptions with confirmation and webhook logic
- Customize and manage all this using n8n workflows with no-code/low-code skills

This system is perfect for niche job boards, community newsletters, or any project that needs automated content delivery to subscribers.

## 🧱 Tools You'll Be Using

- **n8n** – for automation workflows and acting as your backend
- **Bolt.new** – to build your newsletter landing page and subscription interface
- **Google Sheets** – to act as your lightweight subscriber/job database
- **RapidAPI** – to pull job listings from the Jobs Search API
- **Custom SMTP Email (Optional)** – to send branded emails using your own domain

## 📄 Step 1: Set Up Your Google Sheets Database

Make a copy of this Google Sheets template that will serve as your database:

🔗 **Click here to copy the Google Sheet template](https://docs.google.com/spreadsheets/d/11vxYkjfwIrnNHN6PIdAOa_HZdTvMXI0lm_Jecac4YO0/edit?gid=0#gid=0)**

This includes:
- A Subscribers sheet to store new signups
- An Unsubscribers sheet to prevent duplicates
- A Jobs sheet to store scraped job listings

## ⚙ Step 2: Get Your API Key for Jobs Scraping

We use this API from RapidAPI to pull job listings programmatically:

🔗 **[Jobs Search API on RapidAPI](https://rapidapi.com/rphrp1985/api/jobs-search-api/playground/apiendpoint_a166931a-12c8-4513-bcd3-f4c0f3f34a5b)**

1. Sign up or log into RapidAPI
2. Subscribe to the Jobs Search API
3. Copy your API key — you'll need this in n8n

## ⚙ Step 3: Get Your API Key for Email Validation

We use this API from Mails.so to confirm email's validity before adding them to our database:

🔗 **[Mails.so API](http://mails.so/dashboard/api)**

1. Sign up or log into mails dot so
2. Visit the dashboard, then click on API
3. Copy the cURL command and import on http request node

## 🌐 Step 4: Set Up Your Frontend with Bolt.new

You'll be building a beautiful, modern newsletter landing page using Bolt.new.

Use this link for prompts to generate:
- Your landing page
- Email templates (welcome, already subscribed, unsubscribe confirmation)
- Terms & Privacy Policy pages
- Unsubscribe confirmation page

🔗 **[Access the Bolt.new Prompt Document](https://docs.google.com/document/d/1DX6FgTyJYHxxyrqCt1b9-ejYCUUYyADGWHw5P4AqjZM/edit?tab=t.0)**

This includes:
- A homepage form with input fields (Name, Email) and consent checkbox
- Logic to send data to n8n webhook using `fetch()`
- UI logic for showing webhook response (Success, Already Exists, Invalid Email)
- Unsubscribe page handling

*(Make your own copy so that you can edit it while we format the prompts)*

## 📤 Step 5: Set Up Email Sending With Your Custom Domain (Optional but Recommended)

To send branded HTML emails from your own domain, follow this tutorial to configure SMTP properly on n8n with your cPanel email account:

🔗 **[Guide: How to Set Up SMTP with cPanel Email on n8n](https://community.n8n.io/t/how-to-configure-smtp-on-n8n-using-a-cpanel-email-add-a-dmarc-record/113056)**

This setup helps:
- Improve deliverability
- Avoid Gmail spam filters
- Send beautiful HTML emails you can customize fully

## 🔄 Step 6: Create n8n Workflows for Subscription Management

In n8n, you'll need to build these workflows:

### ✅ 1. Handle Subscriptions
- Receives webhook from frontend with `name` and `email`
- Validates email (using mails.so)
- Checks if already subscribed
- Sends appropriate HTML email (Welcome, Already Exists, Invalid Email)
- Adds to Google Sheet database

### ✅ 2. Scrape Jobs and Email Subscribers
- Use Cron node to run daily/weekly
- Use RapidAPI to fetch new jobs
- Format jobs into readable HTML
- Send jobs to all active subscribers via SMTP

### ✅ 3. Handle Unsubscriptions
- Expose a webhook for `/unsubscribe`
- Confirm email, show a button
- On confirmation, add email to Unsubscribers sheet
- Show feedback and redirect user back to homepage after 2 seconds

## 🧠 What You're Learning Along the Way

- How to use n8n as a backend service (reliable, scalable, visual)
- How to use webhooks to connect frontend and backend logic
- How to scrape APIs, format JSON data, and convert it to HTML emails
- How to use Function nodes for data processing
- How to build logic with IF and Switch nodes
- How to design a minimal, clean frontend with Bolt.new
- How to control the entire newsletter system without external platforms

---

Follow me on twitter [@juppfy](https://x.com/juppfy) | or check out my [agency website](https://automate.uppfy.com).

## 🔗 Nodes Used

Send Email, Google Sheets, HTTP Request, Webhook, Gmail, Stop and Error

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
