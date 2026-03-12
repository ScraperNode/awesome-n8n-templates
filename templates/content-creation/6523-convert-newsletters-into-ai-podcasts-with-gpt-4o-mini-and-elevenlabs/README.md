# 🎬 Convert newsletters into AI podcasts with GPT-4o Mini and ElevenLabs

> ⚡ **2,089 views** · 🎬 [Content Creation & Video](../)

## Description

# 🎧 Convert Unread Newsletters into Conversational AI Podcasts

**Turn email overload into audio insights — automatically.**

This workflow transforms unread newsletters sitting in your inbox into engaging, human-like audio conversations between two AI voices. It’s perfect for listening during your commute, workout, or while multitasking.

Inspired by Google's NotebookLM, this automation brings long-form content to life by summarizing dense text into a natural dialogue using OpenAI and generating high-quality voice narration with ElevenLabs. The result? A dynamic audio file sent right back to your inbox — hands-free, screen-free, and stress-free.

---

## 💡 What this workflow does

- ✅ Connects to your Gmail inbox to fetch unread newsletters
- 🤖 Uses GPT-4o Mini to summarize and rephrase content as a conversation
- 🗣️ Sends the dialogue to ElevenLabs to generate voice clips (`voice1` + `voice2`)
- 🔁 Merges all audio segments into a single podcast-like MP3 using FFmpeg
- 📬 Emails the final audio back to you for easy listening

---

## 🛠️ What you'll need

- A Gmail account with IMAP enabled
- An OpenAI API key (GPT-4o Mini recommended for cost/performance)
- An ElevenLabs API key + selected voice IDs
- A **self-hosted or local n8n instance with FFmpeg installed**
- Basic knowledge of binary data and audio handling in n8n

---

## ✨ Use cases

- Convert long newsletters into hands-free listening experiences
- Repurpose Substack or Beehiiv content for podcast-like distribution
- Build an internal voice dashboard for teams who prefer audio updates

---

## 🙌 Want to go further?

This workflow is modular and extensible. You can add steps to:

- Upload the final audio to Spotify, SoundCloud, or Telegram
- Publish to a private podcast RSS feed
- Create a daily audio digest from multiple newsletters

---

### 📬 Contact & Feedback

Need help customizing it? Have ideas or feedback?

Feel free to reach out:  
📩 **Luis.acosta@news2podcast.com**

If you're building something more advanced with audio + AI, like automated podcast publishing to Spotify — let me know and I’ll figure out how I can help you!

## 🔗 Nodes Used

HTTP Request, Gmail, Gmail Trigger, Read/Write Files from Disk, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
