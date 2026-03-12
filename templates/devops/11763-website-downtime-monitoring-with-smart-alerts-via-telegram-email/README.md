# ⚙️ Website downtime monitoring with smart alerts via Telegram & Email

> ⚡ **282 views** · ⚙️ [DevOps & CI/CD](../)

## Description

Get ==Instant== Alerts When Your Website Goes Down — Using ==n8n== as ==Website Downtime Checker Robot==

If you manage websites (your own or clients’), downtime alerts are critical. But most monitoring tools create alert fatigue — ==emails for every tiny hiccup==, even 30–60 second outages.
This setup shows how to use n8n as a smart uptime monitor: 
✅ No extra subscriptions 
✅ No false-positive spam 
✅ Alerts only for real downtime 
✅ Optional instant phone notifications

Why Use n8n for Website Monitoring?
Traditional tools like Uptime Robot become limiting or expensive as you scale.
With n8n, you get:
* Full control over alert logic
* Custom timing & thresholds
* No forced notification rules
* One tool for uptime and other automations
You decide when, how, and why alerts are sent.

**Quick Start:** 
Free n8n Website Monitoring Workflow
Get running in minutes:
* Use the prebuilt n8n template
* Sign up for n8n Cloud or self-host for free
* Set your schedule (default: hourly)
* Add the websites you want to monitor


**Key Setting** (Important)
Wait time: ==300 seconds (5 minutes)==
&gt;Recommended*

 If a site goes down, the workflow waits before alerting. 
➡️ Short hiccups = ignored 
➡️ Real outages = ==alerted==

**How to Test & Use**
1. Activate the workflow Toggle it on — monitoring runs automatically.
2. Test instantly Add a fake or non-existent URL and run the workflow. After the wait period, you’ll receive an alert.
3. Stay organized Alerts arrive cleanly in your inbox (Tip: pair with an AI email labeling workflow for color-coded alerts)

Get Critical Alerts on Your Phone (Telegram)
Email is fine — but critical sites need instant mobile alerts.
Best option: Telegram bots
* Free
* Fast
* No extra APIs or subscriptions


How It Works
* Create a Telegram bot via BotFather
* Add the bot token & chat ID to n8n
* Receive downtime alerts instantly on your phone
No missed notifications. No noise.


**FAQ**
* Can I monitor unlimited sites? 
&gt; ==Yes== — just add more URLs.

* What about short downtime (seconds)?
&gt; Filtered out by the 5-minute wait.

* Do I need a paid n8n plan? 
&gt; ==No.== Self-hosting is ==free==, and this works on free plans.

* Why not SMS or WhatsApp? 
&gt; **Telegram** is ==faster, simpler, and doesn’t require paid APIs.==



📩 **Contact Me**

If you have any questions, ideas to share, or would like to collaborate on a project, feel free to reach out. I’m always open to meaningful discussions, feedback, and new opportunities.

🔗 ==Connect with me==
* [Facebook](https://facebook.com/the.mubiin)

* [LinkedIn](https://www.linkedin.com/in/mubiiin/)


💬 You’re welcome to send me a message on any platform, and I’ll get back to you as soon as possible.

## 🔗 Nodes Used

Send Email, HTTP Request, Telegram, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
