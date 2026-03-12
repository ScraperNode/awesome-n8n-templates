# 💬 Email-based book recommendations with Ollama LLM and OpenLibrary API

> ⚡ **538 views** · 💬 [Support Chatbots](../)

## Description

This workflow listens for incoming book request emails, extracts the user's intent using the Ollama LLM, queries book data (title, summary, details) via an API, and sends a personalized recommendation email. Ideal for automated book suggestions using LLMs and structured APIs, great for newsletters, reading clubs, and educational bots.

## How It Works

1. **Email Request:** Triggers the workflow when a new email with a book request is received.
2. **Analyze Email with Ollama:** Extracts user intent and book preferences using the Ollama LLM.
3. **Create Book Search Query:** Generates a query based on the analyzed intent.
4. **Book Search API:** Fetches book data (title, summary, details) from an API.
5. **Check API Response:** Validates the API response for book availability.
6. **Handle No Book Found:** Manages cases where no suitable book is found.
7. **Extract Book Summary:** Pulls the summary from the API response.
8. **Wait for Summary Response:** Pauses to ensure summary data is ready.
9. **Retrieve Book Details:** Gathers additional book details.
10. **Format Book Data:** Structures the book information for the recommendation.
11. **Enhance Data with Code:** Refines the data using custom code.
12. **Generate Email Content:** Creates a personalized email recommendation.
13. **Send Email:** Delivers the recommendation to the user.

## How to Use

- Import the workflow into n8n.
- Configure email credentials for the Email Request node.
- Set up Ollama LLM API credentials and endpoint.
- Configure the Book Search API with appropriate credentials and endpoint.
- Test with a sample email requesting a book recommendation.
- Adjust the Generate Email Content node for custom email templates if needed.
- Ensure the Send Email node is linked to a valid email service.

## Requirements

- Email service API credentials (e.g., Gmail, SMTP)
- Ollama LLM API access
- Book Search API credentials

## Customizing This Workflow

1. Modify the Analyze Email with Ollama node to refine intent extraction for specific genres.
2. Adjust the Book Search API query to target different book databases.
3. Customize the Generate Email Content node to include additional details like author bios.

## 🔗 Nodes Used

Email Trigger (IMAP), Send Email, HTTP Request, AI Agent, Ollama Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
