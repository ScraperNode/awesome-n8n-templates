# 🎬 Automate podcast creation with GPT, Claude & Eleven Labs text-to-speech

> ⚡ **1,379 views** · 🎬 [Content Creation & Video](../)

## Description

# ## Podcast on Autopilot — Generate Podcast Ideas, Scripts & Audio Automatically with Eleven Labs, GPT-5 and Claude Sonnet 4.0

Bring your solo podcast to life — on full autopilot. This workflow uses GPT-5 and Claude Sonnet to turn a single topic input into a complete podcast episode intro and ready-to-send audio file.

## How it works

Start a chat trigger – enter a seed idea or topic (e.g., “habits,” “failure,” “technology and purpose”).

Podcast Idea Agent (GPT-5) instantly crafts a thought-provoking, Rogan- or Bartlett-style episode concept with a clear angle and takeaway.

Podcast Script Agent (Claude 4.0 Sonnet) expands that idea into a natural, engaging 60-second opening monologue ready for recording.

Text-to-Speech via ElevenLabs automatically converts the script into a high-quality voice track.

Email automation sends the finished MP3 directly to your inbox.

## Perfect for
• Solo creators who want to ideate, script and voice short podcasts effortlessly
• Content teams prototyping daily or weekly audio snippets
• Anyone testing AI-driven storytelling pipelines


## Customization tips
• Swap ElevenLabs with your preferred TTS service by editing the HTTP Request node.
• Adjust prompt styles for tone or audience in the Idea and Script Agents.
• Modify the Gmail (or other mail service) node to send audio to any destination (Drive, Slack, Notion, etc.).
• For reuse at scale, add variables for episode number, guest name, or theme category — just clone and update the trigger node.

## Watch step-by-step tutorial (how to build it yourself)
https://www.youtube.com/watch?v=Dan3_W1JoqU

## Requirements & disclaimer
• Requires API keys for OpenAI + Anthropic + ElevenLabs (or your chosen TTS).
• You’re responsible for managing costs incurred through AI or TTS usage.
• Avoid sharing sensitive or private data as input into prompt flows.
• Designed with modularity so you can turn off or swap/deep-link any stage (idea → script → voice → email) without breaking the chain.

## 🔗 Nodes Used

HTTP Request, Gmail, AI Agent, Anthropic Chat Model, OpenAI Chat Model, Simple Memory

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
