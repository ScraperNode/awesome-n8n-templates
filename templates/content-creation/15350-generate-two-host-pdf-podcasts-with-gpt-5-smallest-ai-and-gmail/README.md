# 🎬 Generate two-host PDF podcasts with GPT-5, Smallest AI, and Gmail

> ⚡ **34 views** · 🎬 [Content Creation & Video](../)

## Description

### Generate two-host AI podcast episodes from any PDF — in 9 Indian languages or your own cloned voice — powered by Smallest AI.

Turn whitepapers, research reports, blog drafts, lecture notes, or company memos into NotebookLM-style audio briefings. Native Hindi, Tamil, Telugu, Kannada, Malayalam, Bengali, Marathi, Gujarati, and Punjabi support makes this the only n8n template that ships authentic Indian-language podcast generation out of the box.

**Good to know**

- Lightning V3.1 generates ~100ms time-to-first-byte; a 5-page PDF produces a 4-minute podcast in roughly 60 seconds total
- Smallest AI offers a free tier — get an [API key](https://app.smallest.ai/dashboard/api-keys)
- Voice cloning lets you cast yourself or a colleague as one of the hosts using just a 10-second voice sample
- Pure JavaScript audio concatenation — no FFmpeg required, works on n8n Cloud

## How it works

- Upload a PDF via the form trigger
- Extract text and pass it to GPT-5 to generate a structured 2-host script in JSON
- Split the script and route each turn to the matching host's TTS branch
- Smallest AI Lightning synthesizes each turn at 24 kHz with sub-100ms latency
- A Code node concatenates all WAV chunks into a single audio file in correct conversational order
- The finished podcast is emailed to the address you specify

## Set up steps

- Install the `n8n-nodes-smallestai` community node via **Settings → Community Nodes**
- Connect Smallest AI, OpenAI, and Gmail credentials (~5 minutes)
- Pick voice IDs for Host A and Host B in the two Synthesize Host nodes (defaults: `avery` and `devansh`)
- Update the recipient email in the Gmail node
- Sticky notes inside the workflow walk you through each section

## Requirements

- **Smallest AI** account — free tier available at [smallest.ai](https://smallest.ai)
- **OpenAI** API key — GPT-5 or GPT-4o-mini both work
- **Gmail** OAuth2 credential for delivery
- **n8n-nodes-smallestai** community node installed

## Customising this workflow

- Swap the Form trigger for a Webhook to integrate with other apps or chatbots
- Change the LLM system prompt to alter podcast format (interview, debate, monologue, kids' story)
- Edit `english` in the prompt to generate podcasts in any of Smallest AI's supported languages — try `arjun` + `aanya` for Hindi, `arvind` + `niharika` for Tamil
- Use cloned voices from the Voice Clone resource for personalized hosts
- Replace Gmail with Slack, Telegram, or Drive Upload for different delivery channels

## 🔗 Nodes Used

Gmail, n8n Form Trigger, Extract from File, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
