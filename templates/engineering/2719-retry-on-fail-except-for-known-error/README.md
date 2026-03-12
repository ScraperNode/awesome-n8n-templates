# ⚒️ Retry on fail except for known error

> ⚡ **1,241 views** · ⚒️ [Engineering](../)

## Description

## Purpose

This workflow snippet allows for advanced error catching during retry attempts.

There are cases, where you want to check if an item exists first, so you can determine the following actions. Some API’s do not support an endpoint (e.g. Todoist: completed tasks) to do so, which is why you would work with the error branch, only that this does not work well in combination with the retry functionality.

## How it works

- Instead of the builtin retry function of a Node a custom loop is used, to get more granular control in between the iterations
- If the main executed node fails, the error can be filtered for an expected error, which can trigger a separate action
- The retries only happen, if an unexpected error happened
- The workflow only stops, if the defined amount of retries exceeded

## Setup

- Copy the nodes into your existing workflow
- Replace the “Replace me” placeholder with the Node you want to apply the retry logic on
- Follow the sticky notes for more instructions and optional settings

## 🔗 Nodes Used

Stop and Error

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
