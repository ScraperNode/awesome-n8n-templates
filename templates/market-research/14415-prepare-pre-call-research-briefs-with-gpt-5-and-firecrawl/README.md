# 📊 Prepare pre-call research briefs with GPT-5 and Firecrawl

> ⚡ **72 views** · 📊 [Market Research & Insights](../)

## Description

### Say Goodbye to Manual Prospect Research!

Walk into every discovery call fully prepared: company background, recent news, and tailored questions ready, with zero minutes spent prepping.

This AI-powered workflow watches your Google Calendar for upcoming discovery calls, sends an AI out to research your prospects across the web, and drops a neat briefing into Slack and Google Drive. Research that ate 45 minutes per call now runs itself.

*Last updated: September 2026.*

### Why You'll Love This Workflow

* **Get your time back:** Prep time drops from 45 minutes to zero. 
* **Save money:** No pricey sales intelligence tools, no virtual assistants hired just to google companies.
* **Zero duplicates:** It remembers which calls it already prepped for, so no repeat alerts.
* **Built to scale:** 1 call or 20 tomorrow, prep quality stays the same.

### Who Is This For?

* **Sales Reps (AEs & SDRs):** Nail high-stakes discovery calls with automated background checks and news updates.
* **Founders & Consultants:** Spot pain points and company growth signals before you even say hello.
* **Agency Ops Teams:** Standardize team prep and organize all client data neatly into Google Drive folders.

### How The Magic Happens

1.  **The Kickoff:** Every day at 4:00 PM, the automation wakes up to prep for tomorrow's meetings.
2.  **Finding the Meetings:** It grabs all your upcoming events from Google Calendar.
3.  **Filtering:** It specifically looks for keywords (like "discovery" or "call") and ignores any meetings it has already researched for you.
4.  **The AI Researcher:** An AI agent uses **Firecrawl** to scour the web, read the company’s website, and dig up recent news, leadership changes, and funding info.
5.  **Filing It Away:** The workflow creates a dedicated client folder in Google Drive (or finds the existing one) and saves a structured research doc.
6.  **The Ping:** You get a handy summary in your #ops Slack channel with the brief and a direct link to the Drive folder.

### What You Need to Get Started

* [n8n instance](https://n8n.partnerlinks.io/creator-khmuhtadin) *(The engine that runs the automation)*
* [Google Calendar](https://calendar.google.com) *(To find your meetings)*
* [OpenAI API](https://openai.com/api/) *(The brain doing the research)*
* [Firecrawl API](https://firecrawl.dev) *(For reading websites)*
* [Google Drive](https://drive.google.com) *(For saving the docs)*
* [Slack](https://slack.com) *(For sending you alerts)*

### Easy Setup Steps

1.  Import the JSON file to your [n8n instance](https://n8n.partnerlinks.io/creator-khmuhtadin).
2.  **Connect your accounts:** Log into your Google, OpenAI, Firecrawl, and Slack accounts so the workflow has permission to do its job.
3.  **Tell it where to put things:** In the **Search Client Folder** node, pick your main "CLIENTS" Drive folder. In the **Notify Ops Channel** node, pick the Slack channel you want the alerts to go to.
4.  **Tweak the keywords:** If you call your meetings something specific (like "Intro" or "Demo"), update the keywords in the **Extract Call Details** node.
5.  **Give it a test run:** Trigger the workflow manually to make sure it catches a test event and generates a brief!

### Make It Your Own

**The Basics:**
* Change the trigger words to match how you name your meetings.
* Adjust the timer! If you'd rather have the briefs run at 6:00 AM instead of 4:00 PM, just change the schedule node.

**Take It to the Next Level:**
* **LinkedIn Sync:** Add a tool like Proxycurl to pull the prospect's actual LinkedIn profile.
* **CRM Integration:** Have it drop the notes directly into Salesforce or HubSpot instead of just Google Drive.
* **Email Delivery:** Set it up to email the brief to you 15 minutes before the meeting starts.

### Quick Troubleshooting

* **Not finding any events?** Make sure your calendar invites actually have the trigger words in the title.
* **Research coming up blank?** If the prospect used a personal `@gmail.com` email to book, the AI won't be able to scan a company website.
* **Getting duplicates?** If you restart or move your [n8n](https://n8n.partnerlinks.io/creator-khmuhtadin) instance, it might "forget" what it already researched. 

---

### Quick Answers
**When does it prep?**  
Daily at 4:00 PM for tomorrow's meetings. Change the schedule node for 6:00 AM briefs instead.  
**How does it find my calls?**  
It scans Google Calendar for keywords like "discovery" or "call" and skips already-researched meetings.  
**Where does the brief land?**  
A structured doc in your CLIENTS Drive folder plus a summary with link in your #ops Slack channel.  

**Made by:** [khmuhtadin](https://khmuhtadin.com) | **Category:** Sales & CRM | **Tags:** AI Agent, Google Workspace, Slack, Research, Automation  
**Need custom workflows?** [Contact me](https://khmuhtadin.com/contact)

**Connect with the creator:** [Portfolio](https://khmuhtadin.com) • [Store](https://khaisa.studio/products/) • [LinkedIn](https://www.linkedin.com/in/khmuhtadin/) • [Medium](https://medium.com/@khaisastudio) • [Threads](https://www.threads.com/@khmuhtadin)

## Additional info
Built with [n8n](https://n8n.partnerlinks.io/creator-khmuhtadin). Need an assessment on your business? Feel free to reach out at [https://khmuhtadin.com/consultation/](https://khmuhtadin.com/consultation/)

## 🔗 Nodes Used

Slack, Google Drive, Google Calendar, Schedule Trigger, AI Agent, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
