# 📖 Build a tax code assistant with Qdrant, Mistral.ai and OpenAI

> ⚡ **10,533 views** · 📖 [Internal Wiki & Knowledge Base](../)

## Description

This n8n workflows builds another example of creating a knowledgebase assistant but demonstrates how a more deliberate and targeted approach to ingesting the data can produce much better results for your chatbot.

In this example, a government tax code policy document is used. Whilst we could split the document into chunks by content length, we often lose the context of chapters and sections which may be required by the user.

Our approach then is to first split the document into chapters and sections before importing into our vector store. Additionally, using metadata correctly is key to allow filtering and scoped queries.

## Example

**Human**: "Tell me about what the tax code says about cargo for intentional commerce?"

**AI**: "Section 11.25 of the Texas Property Tax Code pertains to "MARINE CARGO CONTAINERS USED EXCLUSIVELY IN INTERNATIONAL COMMERCE." In this section, a person who is a citizen of a foreign country or an en..."

## How it works

* The tax code policy document is downloaded as a zip file from the government website and its pages are extracted as separate chapters.
* Each chapter is then parsed and split into its sections using data manipulation expressions.
* Each section is then inserted into our Qdrant vector store tagged with its source, chapter and section numbers as metadata.
* When our AI Agent needs to retrieve data from our vector store, we use a custom workflow tool to perform the query to Qdrant.
* Because we're relying on Qdrant's advanced filtering capabilities, we perform the search using the Qdrant API rather than the Qdrant node.
* When the AI Agent, needs to pull full wording or extracts, we can use Qdrant's scroll API and metadata filtering to do so. This makes Qdrant behave like a key-value store for our document.

## Requirements
* A Qdrant instance is required for the vector store and specifically for it's filtering functionality.
* Mistral.ai account for Embeddings and AI models.

## Customising this workflow

Depending on your use-case, consider returning actual PDF pages (or links) to the user for the extra confirmation and to build trust.

Not using Mistral? You are able to replace but note to match the distance and dimension size of Qdrant collection to your chosen embedding model.

## 🔗 Nodes Used

HTTP Request, Execute Workflow Trigger, Filter, AI Agent, OpenAI Chat Model, Simple Memory

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
