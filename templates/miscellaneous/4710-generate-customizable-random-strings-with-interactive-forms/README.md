# 🔧 Generate customizable random strings with interactive forms

> ⚡ **522 views** · 🔧 [Miscellaneous](../)

## Description

## contract
* input: length of the strings and number of copies
* output: random strings as specified.
  * randomness determined by Crypto node (generate/base64)

## How to run the workflow
1. Import the workflow into your n8n project
2. Click the Form Trigger to specify the length of the strings and how many copies to generate
3. The workflow runs then displays the generated random strings

## How to set up
* No additional set up is necessary to execute the workflow manually.

## integration Patterns of interests
* formTrigger node to submit a form, then use form (end) node to display results at the end of the triggered workflow.
* set(dup)-summarize(concatenate) to run a part of the workflow multiple times then merge the results to one piece of data

## 🔗 Nodes Used

n8n Form Trigger, Summarize, n8n Form

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
