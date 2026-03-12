# 🎫 Categorize emails & get Telegram alerts with Azure OpenAI & Google Sheets

> ⚡ **584 views** · 🎫 [Ticket Management & Triage](../)

## Description

*This workflow contains community nodes that are only compatible with the self-hosted version of n8n.*

## Understanding This Workflow

- In simple terms, this workflow triggers when you receive an e-mail in your inbox; classifies this e-mail based on the subject and notifies you using Telegram. It's fully customizable so you can change, add categoies and continue each data flow separately.

- E-Mails can hold pretty important information. But one can forget to check-up or rather not prefer to do so. This workflow keeps you updated of what's most important to you. Not only that, you can always talk to the bot to checkup on E-Mails you've missed.

### Set Up Overview
- **IMAP E-Mail Trigger:** You can switch to a Gmail node aswell.
- **Google Sheets:** Google Sheets is easy to use so I recommend you to keep it.
- **AI Model:** Use any model of your preferance. As long as it is smart and uses less tokens.
- **Telegram:** Refer to documentation to understand how to create a bot.

	&gt; There is no correct line of setting up these credentials, as the workflow needs all to work; as long as you don't change the logic of the workflow.

#### Note
Please refer to the sticky notes in the workflow for a clear guide on setup, workflow description etc. If you need any help or need a hand, you can always message me. 
&gt;https://community.n8n.io/u/mookie_lian

## 🔗 Nodes Used

Email Trigger (IMAP), Google Sheets, Telegram, Telegram Trigger, AI Agent, Simple Memory

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
