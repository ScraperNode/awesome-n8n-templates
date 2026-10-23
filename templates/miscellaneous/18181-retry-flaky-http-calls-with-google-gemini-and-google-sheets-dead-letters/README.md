# 🔧 Retry flaky HTTP calls with Google Gemini and Google Sheets dead letters

> ⚡ **3 views** · 🔧 [Miscellaneous](../)

## Description

## Quick Overview
This workflow makes unreliable HTTP requests safer by using Google Gemini to classify failures, retry only transient errors with exponential backoff, and log non-retriable or exhausted failures to a Google Sheets dead-letter register that is replayed nightly.

## How it works
1. Receives inputs from another workflow (job name, URL, method, body, and retry budget) or runs nightly on a schedule to sweep a Google Sheets dead-letter register.
2. Initializes an attempt counter and calls the target endpoint using an HTTP request with error output captured as data.
3. When the call fails, sends the error details to Google Gemini to classify the failure (transient, permanent, or needs_human) and recommend a backoff time.
4. Tracks attempts and either waits for the suggested backoff before retrying the HTTP request or stops retrying when the budget is exhausted or the failure is not transient.
5. Appends failed jobs to a Google Sheets “Dead Letters” tab with the payload, diagnosis, and any required human action, and returns a structured failure response to the caller.
6. On successful responses, returns a structured success result and, if the success came from a nightly replay, updates the corresponding Google Sheets entry to close it.

## Setup
1. Add Google Gemini (PaLM) API credentials for the Gemini chat model used to triage failures.
2. Add Google Sheets OAuth2 credentials and select the spreadsheet and “Dead Letters” sheet used as the dead-letter register.
3. Create the “Dead Letters” sheet columns expected by the workflow (for example: Failed At, Job, Endpoint, Class, Attempts Used, Diagnosis, Someone Must, Payload, Status, Execution).
4. In the calling workflow, use Execute Workflow to trigger this workflow and pass jobName, url, method, body, and maxAttempts.
5. Activate the workflow so the nightly 2am sweep runs and can replay eligible transient failures from the register.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Execute Workflow Trigger, Schedule Trigger, Basic LLM Chain, Structured Output Parser

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
