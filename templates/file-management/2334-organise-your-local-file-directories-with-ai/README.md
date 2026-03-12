# 📁 Organise your local file directories with AI

> ⚡ **17,597 views** · 📁 [File Management](../)

## Description

If you have a shared or personal drive location with a high frequency of files created by humans, it can become difficult to organise. This may not matter... until you need to search for something!

This n8n workflow works with the local filesystem to target the messy folder and categorise as well as organise its files into sub directories automatically.

## Disclaimer
Unfortunately due to the intended use-case, this workflow will not work on n8n Cloud and a self-hosted version of n8n is required.

## How it works
* Uses the local file trigger to activate once a new file is introduced to the directory
* The new file's filename and filetype are analysed using AI to determine the best location to move this file.
* The AI assess the current subdirectories as to not create duplicates. If a relevant subdirectory is not found, a new subdirectory is suggested.
* Finally, an Execute Command node uses the AI's suggestions to move the new file into the correct location.

## Requirements
* Self-hosted version of n8n. The nodes used in this workflow only work in the self-hosted version.
* If you are using docker, you must create a [bind mount](https://docs.docker.com/storage/bind-mounts/) to a host directory.
* Mistral.ai account for LLM model

## Customise this workflow

If the frequency of files created is high enough, you may not want the trigger to active on every new file created event. Switch to a timer to avoid concurrency issues.

## Want to go fully local?

A version of this workflow is available which uses Ollama instead. You can download this template here:
https://drive.google.com/file/d/1iqJ_zCGussXpfaUBYGrN5opziEFAEQMu/view?usp=sharing

## 🔗 Nodes Used

Local File Trigger, Basic LLM Chain, Structured Output Parser, Mistral Cloud Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
