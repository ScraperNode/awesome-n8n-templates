# 🧾 Track SaaS spend from email invoices with AgentMail, JigsawStack and Postgres

> ⚡ **28 views** · 🧾 [Invoice Processing](../)

## Description

## WHAT you need 

1. Jigsaw API key for image processing, I use this as a gatekeeper/second pair of eyes.  
3. LINK to their website
 https://jigsawstack.com/
6. SECOND A postgress DATABASE (I use [Supabase](Supabase))
8. [LlamaCloud](LlamaCloud) for the parsing (you can replace this with Jigsaw if you like)
9. Redis (Optional , but I would strongly advise using it)
10. [agentMail](agentMail) , this is your trigger email adress and BOX
11. Webhook Trigger ([Svix](Svix) or n8n's builtin webhook)

## WHAT is it? 
This is an easy way to track your SaaS spending, especially for small business owners or solopreneurs. It's essentially exactly what tools like Spendbase and Ramp do, without the virtual card.

## HOW it works 
After getting your API keys, all you need to do is set up an AgentMail inbox for your invoices. This is your trigger.

In the current setup, the workflow will only trigger if you send an attachment.

You can find more information on how to use the workflow in the workflow notes.

## The database schema
You can find it as a deactivated code node in the workflow.

## Free 15 min Onboarding Coffee 
 
If you want I can walk you through the setup and you will have it up and running in no time.
[Free onboarding chat](https://app.reclaim.ai/m/n8n-onboarding/n8n)

## 🔗 Nodes Used

HTTP Request, Postgres, Webhook, Execute Sub-workflow, Stop and Error, Execute Workflow Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
