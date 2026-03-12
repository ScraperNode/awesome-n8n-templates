# ⚙️ Monitor workflow audits and failures with InfluxDB dashboard

> ⚡ **582 views** · ⚙️ [DevOps & CI/CD](../)

## Description

## Who is it for
This workflow is for anyone who is using N8N. It's especially helpful if you are a DevOps and your N8N instance is self hosted. If you carea lot about security and number of failed executions and at the same time you are using InfluxDB to monitor status of your systems, this will perfectly fit in your stack.

## How it works
This automation is fairly simple. It uses native N8N nodes to gather data from itself. Then it is parsing this data to be compatible with InfluxDB input. And finally it is sending this data to InfluxDB for further processing.

## Remember to set up
Setup is really simple and you just need to provide just three variables. First is your InfluxDB URL, second is your InfluxDB organization, and third is your InfluxDB bucket name.

Of course, to set up N8N nodes and gather data from them, you will need your instance API key.

And that's all.

## How it looks in InfluxDB?
See below

![N8N data in InfluxDB.png](fileId:1738)

## Schedule Audits
Audits don't need to be run often, but I would recommend it to be run on regular basis. This way you can see real data series in InfluxDB. I think that once a day should be enough, but it depends on your N8N usage of course

## Thank you, perfect!

Glad I could help. Visit my profile for other automations for businesses. And if you are looking for dedicated software development, do not hesitate to reach out!

You can also see automations on my [Sailing Byte's GitHub N8N repository](https://github.com/lukasz-pawlowski/sailing-byte-free-business-automations).

## 🔗 Nodes Used

HTTP Request, n8n, Schedule Trigger, Summarize

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
