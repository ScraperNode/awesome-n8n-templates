# 🔬 🦜✨Use OpenAI to transcribe audio + summarize with AI + save to Google Drive

> ⚡ **23,387 views** · 🔬 [Document Extraction & Analysis](../)

## Description

# Automate Audio Transcription, AI Summarization, and Google Drive Storage

## Who is this for?  
**Content Teams**, **Researchers**, and **Administrators** who need to automatically process voice memos, meeting recordings, or interview audio into structured, searchable documents.

## What problem does this solve?  
Eliminates manual transcription work by automatically converting audio files into organized text documents with AI analysis, while maintaining human oversight through approval workflows.

## What this workflow does  
1. **Smart Audio Processing**:  
   - Triggers when new .m4a files appear in Google Drive  
   - Uses OpenAI's Whisper for accurate transcription  
   - Implements dual-format reporting (JSON + Markdown)  

2. **Human Oversight (optional)**:  
   - Requires email approval before processing  
   - 45-minute response window with escalation options  

3. **AI-Powered Analysis**:  
   - Generates structured JSON reports with:  
     - Key points & action items  
     - Sentiment analysis  
     - Technical terminology glossary  
   - Creates Markdown versions for easy reading  

4. **Document Management**:  
   - Stores raw transcripts + reports in Google Drive  
   - Automatic file naming with timestamps  
   - Sends completion alerts via Email/Telegram  

Workflow visualization showing audio file processing path

## Setup  
1. **Credentials Needed**:  
   - Google Drive API access  
   - OpenAI API key (GPT-4o-mini)  
   - Gmail & Telegram integrations  

2. **Configuration**:  
   - Set your Google Drive folder ID in 3 nodes  
   - Update email addresses in Gmail nodes  
   - Customize approval timeout in "Gmail User for Approval"  

3. **Customization Points**:  
   - File extension filters (.m4a)  
   - AI report templates and prompts  
   - Notification channels (Email/Telegram)  

## How to customize  
- **Approval Process**: Add SMS/Teams notifications via additional nodes  
- **File Types**: Modify filter node for .mp3/.wav support  
- **Analysis Depth**: Adjust GPT-4 prompts in "Summarize to JSON" nodes  
- **Storage**: Connect to Notion/Airtable instead of Google Drive

## 🔗 Nodes Used

Telegram, Google Drive, Gmail, Google Drive Trigger, Filter, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
