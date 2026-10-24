# 👥 Coach job interviews with Whisper, GPT-4.1, and OpenAI text-to-speech

> ⚡ **5 views** · 👥 [HR & Recruitment](../)

## Description

## Quick overview
This workflow runs as a webhook-based, voice-first mock interview coach that transcribes a candidate’s audio with OpenAI, analyzes delivery metrics, uses an OpenAI chat agent with session memory to generate coaching feedback and a follow-up question, and returns a spoken TTS response after delivery confirmation.

## How it works
1. Receives a POST webhook request containing a sessionId, role, turnNumber, and an audio recording from the candidate.
2. Sends the audio to OpenAI Speech-to-Text (Whisper) to generate a transcript.
3. Analyzes the transcript to compute delivery metrics such as filler-word usage, words per minute, pace assessment, short-answer flags, and whether the session reached the final turn.
4. Uses an OpenAI chat agent with Window Buffer Memory keyed by sessionId to produce structured JSON coaching feedback, encouragement, a score, and the next interview question (or a wrap-up on the final turn).
5. Converts the agent’s feedback and next question into audio using OpenAI Text-to-Speech.
6. Waits for a delivery-confirmation callback and then responds to the original webhook with the transcript, coaching outputs, score, next question, and generated audio (or returns a retry message if not confirmed).

## Setup
1. Add an OpenAI API credential used by the transcription (Whisper), chat model, and text-to-speech HTTP requests.
2. Configure your client app to POST the audio binary as audioData along with sessionId, role (optional), and turnNumber (optional) to the workflow’s webhook endpoint.
3. Update the configuration values (role default, maxTurns, and the STT/TTS URLs, models, and voice) in the workflow’s config step as needed.
4. Copy the Wait node’s resume webhook URL and have your client app call it with deliveryConfirmed=true after the generated audio is ready/played.

## 🔗 Nodes Used

HTTP Request, Webhook, AI Agent, OpenAI Chat Model, Simple Memory

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
