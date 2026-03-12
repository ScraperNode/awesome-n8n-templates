# 🎬 Author and publish blog posts from Google Sheets

> ⚡ **7,300 views** · 🎬 [Content Creation & Video](../)

## Description

### What it is:

* An automation to plan→draft→finalize and publish your textual blog post ideas to your wordpress blog
* Works in stages and hand back control to you in between those
* You can use a Google Spreadsheet for planning topics and configuring LLM models and prompts

### What it does:

* plans→drafts→finalizes blog post topics you specify in a Google Spreadsheet using an LLM with prompts that also ar configured in that spreadsheet (even which model to use)
* savs the results in the corresponding 
columns of the "Schedule" sheet in the spreadsheet
* hands control back to the user for inspecting or changing the results and for setting the next "Action" for th workflow
* Finally publishes the blog post to your Wordpress instance

### Limitations
* Probably _slightly_ over-engineered ;-)
* No media generation yet
* some LLM models don't work because of their output format

### How it works:

* The Workflow is triggered manually or scheduled every hour
* It ingests a [Google Spreadsheet](https://docs.google.com/spreadsheets/d/1Kg1-U6mJF4bahH1jCw8kT48MiKz1UMC5n-9q77BHM3Q/edit?usp=sharing) to get
  * Config for prompts/context tc
  * Blog-Topics and their status and next action
* Depending on each blog topics "Status" and "Action" it then either uses an LLM for th next action ("plan"→"draft"→"final" actions) or publishes the written content to your Wordpress instance ("publish" actions)

### Set up steps:

* Import the workflow
* Make your own copy of the [Google Spreadsheet](https://docs.google.com/spreadsheets/d/1Kg1-U6mJF4bahH1jCw8kT48MiKz1UMC5n-9q77BHM3Q/edit?usp=sharing)
* Update the credentials using your individual credentials for:
  * Google Spreadsheets
  * OpenRouter
* Edit the "Settings" node and enter your individual values for
  * Your spreadsheet copy URL
  * Your wordpress blog URL
  * Your wordpress blog username
  * Your wordpress blog _app_ password (a 4x4 alphanumeric sequence), that you probably have to create first, for which your wordpress user has to have 2-factor-authentication enabled.
* In your own copy of the spreadsheet:
  * individualize the "Config" sheet's "Value" column for the prompts/context/etc
  * Populate the "Schedule" sheet with at least one line in which you specify
    * a "Topic"
    * a "Schedulded" date (YYYY-MM-DD HH:mm:ss)
    * a "Status" of "idea"
    * an "Action" of "plan" (to kick off that action)

## 🔗 Nodes Used

Google Sheets, HTTP Request, Schedule Trigger, Basic LLM Chain, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
