# 💬 Book dental appointments via chat using OpenAI, Qdrant, and Google Calendar

> ⚡ **7 views** · 💬 [Support Chatbots](../)

## Description

## Quick overview
This chat-based dental receptionist answers clinic questions using documents stored in Qdrant, checks Google Calendar availability, and books appointments after patient confirmation. It includes authenticated knowledge uploads, configurable clinic hours, timezone-aware slot calculations, and booking error handling

## How it works
1. An administrator uploads a text file containing approved clinic information through an authenticated form.
2. The workflow extracts and splits the text, generates OpenAI embeddings, and stores the document chunks in Qdrant
3. Patients interact through n8n chat. An OpenAI agent uses conversation memory and retrieves clinic information from Qdrant to answer questions.
4. For appointment requests, the agent calls an authenticated calendar endpoint. The workflow validates the date and calculates available slots using configured opening hours, working days, timezone, appointment duration, and Google Calendar busy periods.
5. The agent collects the patient’s name and email and requests confirmation of the appointment details.
6. Before booking, the workflow checks availability again and creates a private Google Calendar event, requesting an invitation to the patient.
7. The workflow reports a confirmed booking only after Google returns an event ID. Invalid requests, unavailable slots, and uncertain booking outcomes receive explicit responses.

## Setup
1. Connect OpenAI credentials to the chat model and both embedding nodes. Connect the same Qdrant credentials to both vector store nodes.
2. Create a Qdrant collection named dental_clinic_knowledge with 1536 dimensions and Cosine distance for text-embedding-3-small
3. In Configure and Validate Calendar Request, enter your Google Calendar ID and configure the clinic timezone, opening hours, working days, slot duration, minimum notice, and booking horizon. Connect the same Google Calendar OAuth2 credentials to both Google HTTP Request nodes.
4. In Configure Chat Endpoint, enter your n8n HTTPS base URL. Create an HTTP Header Auth credential with its Name field set to X-Clinic-Key and its Value field set to a strong secret. Select this same credential on Calendar API and both calendar tools. Assign separate Basic Auth credentials to the knowledge upload form
5. Upload approved clinic information, activate/publish the workflow to register its calendar endpoint, and test through the editor chat. Verify knowledge retrieval, unavailable slots, and a successful test booking before enabling public chat.

## Requirements
- An n8n instance with the included node versions available.
- OpenAI API access with available credit.
- A Qdrant instance and configured collection.
- Google Calendar OAuth2 credentials with permission to read availability and create events.
- An HTTPS n8n URL reachable from the workflow.
- A UTF-8 text file containing approved clinic information.

## Customization
- Change clinic hours, working days, timezone, appointment duration, and booking notice.
- Update the clinic knowledge documents and receptionist instructions.
- Change the Qdrant collection in both vector store nodes.
- Replace Simple Memory with shared persistent memory for queue-mode deployments.

## Additional info
This template supports chat-based questions and appointment booking for one clinic calendar. SMS, voice calls, rescheduling, and cancellation are not included.
Knowledge uploads append documents; remove outdated documents in Qdrant before uploading replacements. Avoid uploading patient records.
Availability is checked before booking, but Google Calendar checking and event creation are not atomic. Concurrent external bookings can still cause overlaps. Uncertain booking outcomes require staff review before retrying. Calendar invitations are requested, but delivery is not verified.

## 🔗 Nodes Used

HTTP Request, Webhook, AI Agent, Embeddings OpenAI, OpenAI Chat Model, Simple Memory

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
