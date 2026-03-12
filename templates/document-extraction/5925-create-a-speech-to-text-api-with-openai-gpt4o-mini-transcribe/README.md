# 🔬 Create a speech-to-text API with OpenAI GPT4o-mini transcribe

> ⚡ **4,638 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Description

This template provides a simple and powerful backend for adding speech-to-text capabilities to any application. It creates a dedicated webhook that receives an audio file, transcribes it using OpenAI's `gpt-4o-mini` model, and returns the clean text.

To help you get started immediately, you'll find a **complete, ready-to-use HTML code example** right inside the workflow in a sticky note. This code creates a functional recording interface you can use for testing or as a foundation for your own design.

## Who is this for?

* **Developers:** Quickly add a transcription feature to your application by calling this webhook from your existing frontend or backend code.
* **No-code/Low-code builders:** Embed a functional audio recorder and transcription service into your projects by using the example code found inside the workflow.
* **API enthusiasts:** A lean, practical example of how to use n8n to wrap a service like OpenAI into your own secure and scalable API endpoint.

## **What problem does this solve?**

* **Provides a ready-made API:** Instantly gives you a secure webhook to handle audio file uploads and transcription processing without any server setup.
* **Decouples frontend from backend:** Your application only needs to know about one simple webhook URL, allowing you to change the backend logic in n8n without touching your app's code.
* **Offers a clear implementation pattern:** The included example code provides a working demonstration of how to send an audio file from a browser and handle the response—a pattern you can replicate in any framework.

## How it works

This solution works by defining a clear API contract between your application (the client) and the n8n workflow (the backend).

1.  **The client-side technique:**
    * Your application's interface records or selects an audio file.
    * It then makes a `POST` request to the n8n webhook URL, sending the audio file as `multipart/form-data`.
    * It waits for the response from the webhook, parses the JSON body, and extracts the value of the `Transcript` key. You can see this exact pattern in action in the example code provided in the workflow's sticky note.

2.  **The n8n workflow (backend):**
    * The **Webhook** node catches the incoming `POST` request and grabs the audio file.
    * The **HTTP Request** node sends this file to the OpenAI API.
    * The **Set** node isolates the transcript text from the API's response.
    * The **Respond to Webhook** node sends a clean JSON object (`{"Transcript": "your text here..."}`) back to your application.

## **Setup**

1.  **Configure the n8n workflow:**
    * In the **Transcribe with OpenAI** node, add your OpenAI API credentials.
    * Activate the workflow to enable the endpoint.
    * Click the "Copy" button on the **Webhook** node to get your unique **Production Webhook URL**.
2.  **Integrate with the frontend:**
    * Inside the workflow, find the sticky note labeled "Example Frontend Code Below". Copy the complete HTML from the note below it.
    * **⚠️ Important:** In the code you just copied, find the line `const WEBHOOK_URL = 'YOUR WEBHOOK URL';` and replace the placeholder with the Production Webhook URL from n8n.
    * Save the code as an HTML file and open it in your browser to test.

## **Taking it further**

* **Save transcripts:** Add an **Airtable** or **Google Sheets** node to log every transcript that comes through the workflow.
* **Error handling:** Enhance the workflow to catch potential errors from the OpenAI API and respond with a clear error message.
* **Analyze the transcript:** Add a **Language Model** node after the transcription step to summarize the text, classify its sentiment, or extract key entities before sending the response.

## 🔗 Nodes Used

HTTP Request, Webhook

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
