# ⚒️ Generating image embeddings via textual summarisation

> ⚡ **9,492 views** · ⚒️ [Engineering](../)

## Description

This n8n template demonstrates an approach to image embeddings for purpose of building a quick image contextual search. Use-cases could for a personal photo library, product recommendations or searching through video footage.

## How it works
* A photo is imported into the workflow via Google Drive.
* The photo is processed by the edit image node to extract colour information. This information forms part of our semantic metadata used to identify the image.
* The photo is also processed by a vision-capable model which analyses the image and returns a short description with semantic keywords.
* Both pieces of information about the image are combined with the metadata of the image to form a document describing the image.
* This document is then inserted into our vector store as a text embedding which is associated with our image.
* From here, the user can query the vector store as they would any document and the relevant image references and/or links should be returned.

## Requirements
* Google account to download image files from Google Drive.
* OpenAI account for the Vision-capable AI and Embedding models.

## Customise this workflow

Text summarisation is just one of many techniques to generate image embeddings. If the results are unsatisfactory, there are dedicated image embedding models such as [Google's vertex AI multimodal embeddings](https://cloud.google.com/vertex-ai/generative-ai/docs/embeddings/get-multimodal-embeddings).

## 🔗 Nodes Used

Edit Image, Google Drive, Embeddings OpenAI, Recursive Character Text Splitter, Simple Vector Store, Default Data Loader

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
