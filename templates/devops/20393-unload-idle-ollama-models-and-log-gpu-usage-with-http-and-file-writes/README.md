# ⚙️ Unload idle Ollama models and log GPU usage with HTTP and file writes

> ⚡ **1 views** · ⚙️ [DevOps & CI/CD](../)

## Description

## Quick Overview
This workflow runs manually or every 10 minutes to check which Ollama models are loaded, log state changes to a file, and optionally unload models that have been idle too long to free GPU memory.

## How it works
1. Runs on a manual trigger or on a 10-minute schedule.
2. Loads configuration values (Ollama URL, idle thresholds, dry-run mode, and log file path).
3. Calls Ollama’s `/api/ps` endpoint to list currently loaded models and their `expires_at` timestamps.
4. Calculates which models are idle (and which are “pinned” based on a far-future `expires_at`) and marks each model as keep, pinned-skip, would-unload, or unload while tracking the previous state.
5. Appends a log line to the configured file only when a model’s state changes since the last run.
6. When dry-run is disabled, sends a POST request to Ollama’s `/api/generate` with `keep_alive: 0` for each model marked for unload.

## Setup
1. Ensure your n8n instance can reach your Ollama server and set the correct base URL in the workflow settings (for example `http://host.docker.internal:11434` when using Docker).
2. Create the log directory and update `logPath` to a writable location for the n8n runtime.
3. Review and adjust `idleMinutes`, `assumedKeepAliveMinutes` (to match your Ollama keep-alive behavior), and whether pinned models can be unloaded (`unloadPinned`).
4. Run the workflow once with `dryRun` set to true and verify the log output, then set `dryRun` to false to enable live unloading.

## 🔗 Nodes Used

HTTP Request, Schedule Trigger, Read/Write Files from Disk

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
