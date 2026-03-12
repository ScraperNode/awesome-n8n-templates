# 💬 Dynamically switch between LLMs for AI agents using LangChain code

> ⚡ **5,412 views** · 💬 [Support Chatbots](../)

## Description

# Dynamically switch between LLMs for AI Agents using LangChain Code

## Purpose

This example workflow demonstrates a way to connect multiple LLMs to a single AI Agent/LangChain Node and programmatically use one – or in this case loop through them.

## What it does

This AI workflow takes in customer complaints and generates a response that is being validated before returned. If the answer was not satisfactory, the response will be generated again with a more capable model.

## How it works

- A LangChain Code Node allows multiple LLMs to be connected to a single Basic LLM Chain. On every call only one LLM is actually being connected to the Basic LLM Chain, which is determined by the index defined in a previous Node.
- The AI output is later validated by a Sentiment Analysis Node
- If the result was not satisfactory, it loops back to the beginning and executes the same query with the next available LLM
- The loop ends either when the result passed the requirements or when all LLMs have been used before.

## Setup
- Clone the workflow and select the belonging credentials. You'll need an OpenAI Account, alternatively you can swap the LLM nodes with ones from a different provider like Anthropic after the import.

## How to use

*Beware that the order of the used LLMs is determined by the order they have been added to the workflow, not by the position on the canvas.*

After cloning this workflow into your environment, open the chat and send this example message:

&gt; I really *love* waiting two weeks just to get a keyboard that doesn’t even work. Great job. Any chance I could actually use the thing I paid for sometime this month?

Most likely you will see that the first validation fails, causing it to loop back to the generation node and try again with the next available LLM.

*Since AI responses are unpredictable, the results and number of tries will differ for each run.*

## Disclaimer
Please note, that this workflow can only run on self-hosted n8n instances, since it requires the LangChain Code Node.

## 🔗 Nodes Used

Basic LLM Chain, LangChain Code, OpenAI Chat Model, Chat Trigger, Sentiment Analysis

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
