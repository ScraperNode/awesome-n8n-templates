# ⚡ Use a custom URL for recurring Zoom meetings

> ⚡ **1,570 views** · ⚡ [Personal Productivity](../)

## Description

### Use case

Instead of this:
`https://us06web.zoom.us/j/83456429326?pwd=1hVesbyHCsOfstyVU3z4CR6D46A8K.1`

share this:
`mydomain.com/meet-me`

Do you ever wish you had one, simple URL that you can share with people to hop on a Zoom meeting? 😃

~~You could waste time:~~ 👎👎

* creating a recurring Zoom meeting 😫
* saving the link somewhere 😵‍💫
* finding it, copying it each time you need it 😭
* sharing an ugly long link with everyone 🤢

Or...

You could create a 🌹 beautiful link using your own domain/website that redirects to your Zoom meeting, and share that beautified URL with everyone. 😌 And it will be easy for you to remember 💡

&gt; NOTE
Zoom now forces a one-year max lifetime on recurring videos. 😐 So I created this simple workflow to solve a few headaches. ☺️

### What this workflow does

- Triggers once, annually (360 days)
- Creates a new, recurring meeting in Zoom
- Updates a redirect script with the new Zoom URL on a Wordpress Page
- Notifies you in a Slack channel

What this workflow lacks in breakthrough innovation, it makes up for with usefulness and peace of mind.

Have fun and make it your own!

### Setup
1. **Add your credentials** in each node
	1. this pre-requires you have a Zoom, Wordpress and Slack account, and have gotten API access on those accounts
3. **Create a Page in Wordpress**, and get its ID.
(Or create a new Page in WP.)
4. **Configure node parameters** according to your needs.
5. **TEST!!!!** Don't ever skip this step. Ever.
6. **Set it and forget it.**

&gt; NOTE
You can replace the Wordpress node with another website CMS node, or generic HTTP request for a non-wordpress site.
You can also remove or replace the Slack node with other notification functionality (eg. sms, whatsapp, email...)

Template was created in n8n `v1.58.2`

## 🔗 Nodes Used

Slack, Wordpress, Zoom, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
