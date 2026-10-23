# 🔬 Generate Financial Risk Reports 📈 from ElevenLabs interviews 🎙️using OpenAI

> ⚡ **91 views** · 🔬 [Document Extraction & Analysis](../)

## Description

This workflow automates the process of receiving a post-call audio file and transcription from [ElevenLabs](https://try.elevenlabs.io/ahkbf00hocnu), processing them, and generating a financial risk report.

---

### Key Advantages

#### 1. ✅ End-to-End Automation

The workflow fully automates the process from raw input (audio/transcript) to final delivery (email report), eliminating manual intervention.

#### 2. ✅ AI-Powered Decision Making

It leverages language models to:

* Analyze qualitative interview responses
* Convert them into quantitative scores
* Produce consistent and objective evaluations

#### 3. ✅ Structured Data Extraction

Automatically extracts critical business information, reducing human error and ensuring standardized outputs.

#### 4. ✅ Scalability

The webhook-based architecture allows the system to handle large volumes of interviews in parallel without additional effort.

#### 5. ✅ Modular & Extensible Design

Each step (audio processing, extraction, scoring, reporting) is modular, making it easy to:

* Replace models
* Add new analysis layers
* Integrate additional services

#### 6. ✅ Professional Output Generation

Generates clean, ready-to-send HTML reports compatible with email clients, improving communication with stakeholders.

#### 7. ✅ Data Traceability & Storage

Audio files are stored in Google Drive, ensuring:

* Auditability
* Easy retrieval of original data

#### 8. ✅ Consistency & Standardization

The evaluation logic ensures that all interviews are assessed using the same criteria, reducing subjective bias.

---

### How it works

1.  **Receiving and Routing Data**: The workflow starts with a **Webhook** that listens for incoming data from ElevenLabs. A **Switch** node then routes the data based on the `body.type` field.
    - **Post Call Audio**: If the type is `post_call_audio`, the workflow processes the audio.
    - **Post Call Transcription**: If the type is `post_call_transcription`, the workflow processes the transcription.

2.  **Audio Processing Path**: For an audio file, a **Code** node extracts the Base64 audio data and the `conversation_id` from the webhook payload. It converts the Base64 string into a binary audio buffer (MP3). This binary data is then passed to a **Google Drive** node, which uploads the file to a specified folder (the user's root folder).

3.  **Transcription Processing Path**: For a transcription, a **Set** node extracts the transcript array from the payload. A subsequent **Code** node processes this array, combining all messages from the conversation into a single, readable full text string, prefixed by the speaker's role.

4.  **Data Enrichment and Analysis**: The full transcript text is then used by two nodes in parallel:
    - **Information Extractor**: This LangChain node uses an OpenAI model (`gpt-5-mini`) to extract structured data from the text, specifically the `company_name`, the CEO's `name`, the `address`, and the `vat_number`.
    - **Calculate Rating**: This LangChain node uses another OpenAI model to perform a quantitative evaluation. It follows a provided system prompt to assign a numerical `score`, a final `verdict` (POSITIVE/NEUTRAL/NEGATIVE), and a `reason` based on the interviewee's responses. Its output is parsed by a **Structured Output Parser** to ensure it is valid JSON.

5.  **Report Generation and Delivery**: The outputs from the **Information Extractor** and **Calculate Rating** nodes are merged into a single data object. This object is passed to the **Financial Report Generator**, a final LangChain node that acts as a professional analyst. Using the merged data (company details, score, verdict, etc.), it generates a polished, formatted HTML email body. Finally, a **Gmail** node sends this HTML report as an email to the specified recipient.

---

### Set up steps

1.  **Configure Credentials**:
    - **OpenAI**: Set up an OpenAI API credential for the three language model nodes. Ensure it has access to the `gpt-5-mini` model.
    - **Google Drive**: Configure OAuth2 credentials for the "Upload audio" node to allow file uploads.
    - **Gmail**: Set up OAuth2 credentials for the "Send report" node.

2.  **Configure Webhook**:
    - Note the webhook ID and path. This URL must be configured in ElevenLabs to send post-call data to this n8n instance.

3.  **Update Node Parameters**:
    - **Google Drive**: Modify the "Upload audio" node if the target folder (`folderId`) is not the root.
    - **Information Extractor**: The extraction attributes (company, name, address, VAT) are pre-configured. No changes are needed unless the target data fields change.
    - **Gmail**: Update the **Gmail** node with the recipient email address (`xxx@xxx.com`) and verify the email subject line formatting.

4.  **Activate Workflow**: Once all credentials and parameters are set, toggle the workflow from `active: false` to `active: true` in the n8n editor to start listening for webhook calls.

---

👉 [Subscribe to my new **YouTube channel**](https://youtube.com/@n3witalia). Here I’ll share videos and Shorts with practical tutorials and **FREE templates for n8n**.

[![image](https://n3wstorage.b-cdn.net/n3witalia/youtube-n8n-cover.jpg)](https://youtube.com/@n3witalia)


---

### **Need help customizing?**  
[Contact me](mailto:info@n3w.it) for consulting and support or add me on [Linkedin](https://www.linkedin.com/in/davideboizza/).

## 🔗 Nodes Used

Webhook, Google Drive, Gmail, Basic LLM Chain, OpenAI Chat Model, Structured Output Parser

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
