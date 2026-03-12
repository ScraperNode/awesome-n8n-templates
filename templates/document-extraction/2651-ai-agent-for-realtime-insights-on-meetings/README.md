# 🔬 AI agent for realtime insights on meetings

> ⚡ **18,388 views** · 🔬 [Document Extraction & Analysis](../)

## Description

### Video Guide


I prepared a detailed guide explaining how to build an AI-powered meeting assistant that provides real-time transcription and insights during virtual meetings.

[![Test](https://res.cloudinary.com/de9jgixzm/image/upload/v1739773273/Youtube%20Thumbs/Realtim%20AI%20Agent.png)](https://www.youtube.com/watch?v=rtaX6BMiTeo)

[Youtube Link](https://www.youtube.com/watch?v=rtaX6BMiTeo)

### Who is this for?
This workflow is ideal for business professionals, project managers, and team leaders who require effective transcription of meetings for improved documentation and note-taking. It's particularly beneficial for those who conduct frequent virtual meetings across various platforms like Zoom and Google Meet.

### What problem does this workflow solve?
Transcribing meetings manually can be tedious and prone to error. This workflow automates the transcription process in real-time, ensuring that key discussions and decisions are accurately captured and easily accessible for later review, thus enhancing productivity and clarity in communications.

### What this workflow does
The workflow employs an AI-powered assistant to join virtual meetings and capture discussions through real-time transcription. Key functionalities include:
- Automatic joining of meetings on platforms like Zoom, Google Meet, and others with the ability to provide real-time transcription.
- Integration with transcription APIs (e.g., AssemblyAI) to deliver seamless and accurate capture of dialogue.
- Structuring and storing transcriptions efficiently in a database for easy retrieval and analysis.

1. **Real-Time Transcription**: The assistant captures audio during meetings and transcribes it in real-time, allowing participants to focus on discussions.
2. **Keyword Recognition**: Key phrases can trigger specific actions, such as noting important points or making prompts to the assistant.
3. **Structured Data Management**: The assistant maintains a database of transcriptions linked to meeting details for organized storage and quick access later.

### Setup

#### Preparation

1. **Create Recall.ai API key**
2. **Setup Supabase account and table**
```
create table
  public.data (
    id uuid not null default gen_random_uuid (),
    date_created timestamp with time zone not null default (now() at time zone 'utc'::text),
    input jsonb null,
    output jsonb null,
    constraint data_pkey primary key (id),
  ) tablespace pg_default;

```
3. **Create OpenAI API key**

#### Development

1. **Bot Creation**: 
   - Use a node to create the bot that will join meetings. Provide the meeting URL and set transcription options within the API request.

2. **Authentication**: 
   - Configure authentication settings via a Bearer token for interacting with your transcription service.

3. **Webhook Setup**: 
   - Create a webhook to receive real-time transcription updates, ensuring timely data capture during meetings.

4. **Join Meeting**: 
   - Set the bot to join the specified meeting and actively listen to capture conversations.

5. **Transcription Handling**: 
   - Combine transcription fragments into cohesive sentences and manage dialog arrays for coherence.

6. **Trigger Actions on Keywords**: 
   - Set up keyword recognition that can initiate requests to the OpenAI API for additional interactions based on captured dialogue.

7. **Output and Summary Generation**: 
   - Produce insights and summary notes from the transcriptions that can be stored back into the database for future reference.

## 🔗 Nodes Used

HTTP Request, Postgres, Webhook, Supabase, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
