# 🎬 Process audio with ElevenLabs via KIE.AI: transcribe, TTS, and isolate audio

> ⚡ **103 views** · 🎬 [Content Creation & Video](../)

## Description

**This n8n template provides a comprehensive suite of ElevenLabs audio processing capabilities through the KIE.AI API. The workflow includes three independent audio processing workflows: speech-to-text transcription, text-to-speech generation, and audio isolation. Each workflow can be used independently or combined to create complete audio processing pipelines.**

**Use cases are many:** Transcribe audio files to text with speaker diarization, convert text to natural-sounding speech audio, isolate and clean audio by removing background noise, create complete audio processing pipelines from transcription to speech generation, automate podcast transcription and audio enhancement, generate voiceovers from text content, clean up recordings by removing unwanted audio elements, create accessible content by converting text to audio, or process audio files in batch for content creation workflows!

### **Good to know**

- The workflow includes three independent ElevenLabs audio processing capabilities via KIE.AI API:
  - **Speech-to-Text:** Transcribes audio to text with speaker diarization and audio event tagging
  - **Text-to-Speech:** Converts text to natural-sounding speech with voice customization options
  - **Audio Isolation:** Removes background noise and isolates audio sources
- Each workflow can be used independently or combined for complete audio processing pipelines
- Speech-to-text supports speaker diarization (identifying different speakers) and audio event tagging
- Text-to-speech supports multiple voices (Rachel, Adam, Antoni, Arnold, and more) with customizable stability, similarity boost, style, and speed
- Audio isolation removes background noise and separates audio sources for cleaner output
- KIE.AI pricing: Check current rates at https://kie.ai/ for audio processing costs
- Processing time: Varies based on audio length and KIE.AI queue, typically 10-30 seconds for text-to-speech, 30 seconds to 5 minutes for transcription and isolation
- Audio requirements: Files must be publicly accessible via URL (HTTPS recommended)
- Supported audio formats: MP3, WAV, M4A, FLAC, and other common audio formats
- Automatic polling system handles processing status checks and retries for all workflows

### **How it works**

The template includes three independent workflows that can be used separately or combined:

**1. Speech-to-Text Transcription:**
1. **Audio URL Setup:** Set the audio file URL in 'Set Audio URL' node
2. **Transcription Submission:** Audio URL is submitted to KIE.AI API using ElevenLabs speech-to-text model with diarization and event tagging
3. **Processing Wait:** Workflow waits 5 seconds, then polls the transcription status
4. **Status Check:** Checks if transcription is complete, queuing, generating, or failed
5. **Polling Loop:** If still processing, workflow waits and checks again until completion
6. **Text Extraction:** Once complete, extracts the transcribed text from the API response

**2. Text-to-Speech Generation:**
1. **Text Input Setup:** Set the text to convert to speech in 'Set Text Input' node
2. **Speech Generation Submission:** Text is submitted to KIE.AI API using ElevenLabs text-to-speech multilingual v2 model
3. **Processing Wait:** Workflow waits 5 seconds, then polls the generation status
4. **Status Check:** Checks if audio generation is complete, queuing, generating, or failed
5. **Polling Loop:** If still processing, workflow waits and checks again until completion
6. **Audio URL Extraction:** Once complete, extracts the generated audio file URL from the API response

**3. Audio Isolation:**
1. **Audio URL Setup:** Set the audio file URL in 'Set Audio URL 1' node
2. **Isolation Submission:** Audio URL is submitted to KIE.AI API using ElevenLabs audio isolation model
3. **Processing Wait:** Workflow waits 5 seconds, then polls the isolation status
4. **Status Check:** Checks if audio isolation is complete, queuing, generating, or failed
5. **Polling Loop:** If still processing, workflow waits and checks again until completion
6. **Isolated Audio URL Extraction:** Once complete, extracts the isolated audio file URL from the API response

All workflows automatically handle different processing states (queuing, generating, success, fail) and retry polling until processing is complete. Each workflow operates independently, allowing you to use only the features you need.

### **How to use**

1. **Setup Credentials:** 
   - Configure KIE.AI API key as HTTP Bearer Auth credential (used for all three workflows)
2. **Choose Your Workflow:**
   - **For Transcription:** Update 'Set Audio URL' node with your audio file URL (must be publicly accessible)
   - **For Text-to-Speech:** Update 'Set Text Input' node with your text content
   - **For Audio Isolation:** Update 'Set Audio URL 1' node with your audio file URL (must be publicly accessible)
3. **Configure Voice Settings (Text-to-Speech only):** Adjust voice, stability, similarity_boost, style, and speed in 'Submit Text for Speech Generation' node
4. **Deploy Workflow:** Import the template and activate the workflow
5. **Trigger Processing:** Use manual trigger to test, or replace with webhook/other trigger
6. **Receive Output:** Get transcribed text, generated audio URL, or isolated audio URL depending on which workflow you use

**Pro tip:** You can use these workflows independently or chain them together. For example, transcribe audio to text, then convert that text to speech with a different voice, or isolate audio first, then transcribe the cleaned audio. Ensure your audio files are hosted on public URLs (HTTPS recommended) for best results. The workflows automatically handle polling and status checks, so you don't need to worry about timing. For text-to-speech, experiment with voice settings - higher stability (0.7-1.0) creates more consistent voice, while higher similarity boost (0.7-1.0) makes the voice more similar to the original.

### **Requirements**

- **KIE.AI API** account for accessing ElevenLabs audio processing models
- **Audio File URL** (for transcription and isolation) that is publicly accessible (HTTPS recommended)
- **Text Input** (for text-to-speech) to convert to speech
- **n8n** instance (cloud or self-hosted)
- Supported audio formats: MP3, WAV, M4A, FLAC, or other formats supported by KIE.AI

### **Customizing this workflow**

**Workflow Selection:** Use only the workflows you need by removing or disabling nodes for transcription, text-to-speech, or audio isolation. Each workflow operates independently.

**Trigger Options:** Replace the manual trigger with webhook trigger for API-based audio/text submission, schedule trigger for batch processing, or form trigger for user uploads.

**Voice Customization (Text-to-Speech):** Modify voice, stability, similarity_boost, style, and speed parameters in 'Submit Text for Speech Generation' node to fine-tune voice characteristics. Experiment with different voices (Rachel, Adam, Antoni, Arnold, etc.).

**Transcription Options:** Adjust diarization and audio event tagging settings in 'Submit Audio for Transcription' node to customize transcription output.

**Workflow Chaining:** Connect workflows together - transcribe audio to text, then convert that text to speech, or isolate audio first, then transcribe the cleaned audio.

**Batch Processing:** Add loops to process multiple audio files or text inputs from a list or spreadsheet automatically.

**Storage Integration:** Add nodes to save transcribed text, generated audio, or isolated audio to Google Drive, Dropbox, S3, or other storage services.

**Post-Processing:** Add nodes after audio generation to download audio files, convert formats, apply additional audio filters, or integrate with video editing tools.

**Error Handling:** Add notification nodes (Email, Slack, Telegram) to alert when processing completes, fails, or encounters errors.

**Content Management:** Add nodes to log transcriptions, track audio processing results, or store outputs in databases or spreadsheets.

**Multi-Language Support:** For text-to-speech, add language detection or selection before conversion for multilingual content creation.

**Audio Quality Enhancement:** Chain multiple audio processing steps - isolate audio, then transcribe, or transcribe, then generate speech with different voices.

## 🔗 Nodes Used

HTTP Request

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
