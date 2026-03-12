# ⚡ Hacker News throwback machine - see what was hot on this day, every year!

> ⚡ **5,476 views** · ⚡ [Personal Productivity](../)

## Description

This is a simple workflow that grabs HackerNews front-page headlines from *today's date across every year since 2007* and uses a little AI magic (Google Gemini) to sort 'em into themes, sends a neat Markdown summary on Telegram.

**How it works**

1.  Runs daily, grabs Hacker News front page for *this day* across every year since 2007.
2.  Pulls headlines & dates.
3.  Uses Google Gemini to sort headlines into topics & spot trends.
4.  Sends a Markdown summary to Telegram.

**Set up steps**

1.  Clone the workflow.
2.  Add your Google Gemini API key.
3.  Add your Telegram bot token and chat ID.

**Built on Day-01 as part of the [#100DaysOfAgenticAi](https://github.com/ibrhdotme/100DaysOfAgenticAi/)
Fork it, tweak it, have fun!**

## 🔗 Nodes Used

HTTP Request, Telegram, Schedule Trigger, Basic LLM Chain, Google Gemini Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
