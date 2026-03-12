# 🔬 Translate cocktail instructions using DeepL

> ⚡ **1,425 views** · 🔬 [Document Extraction & Analysis](../)

## Description

This workflow allows you to translate cocktail instructions using DeepL.

![workflow-screenshot](fileId:455)

**HTTP Request node:** This node will make a GET request to the API `https://www.thecocktaildb.com/api/json/v1/1/random.php` to fetch a random cocktail. This information gets passed on to the next node in the workflow. Based on your use case, replace the node with the node from where you might receive the data.

**DeepL node:** This node will translate the cocktail instructions that we got from the previous node to French. To translate the instructions in your language, select your language instead.

## 🔗 Nodes Used

HTTP Request, DeepL

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
