# 🔒 Scan single URLs for security vulnerabilities with GPT-4 (JS, PHP, Python)

> ⚡ **830 views** · 🔒 [SecOps & Security Automation](../)

## Description

## Overview
This **workflow** automates static security analysis for **JavaScript, PHP, and Python** codebases.  
It’s designed for **bug bounty hunters** and **security researchers** who need fast, structured, and AI-assisted vulnerability detection across multiple sources.

---

## Features

- 🤖 **AI-Powered Analysis**:
  - Specialized agents for each language:
    - **AI JavaScript Expert**
    - **AI PHP Expert**
    - **AI Python Expert**
  - Each agent detects **only exploitable vulnerabilities** (AST + regex heuristics).
  - Returns strict JSON with:
    ```json
    {
      "results": [
        {
          "url": "file or URL",
          "code": "lines + snippet",
          "severity": "medium|high|critical",
          "vuln": "vulnerability type"
        }
      ]
    }
    ```

- 🧩 **Post-Processing**:
  - Cleans, formats, and validates JSON results.
  - Generates **HTML tables** with clear styling for quick visualization.

---

## Output
- ✅ JSON vulnerability reports per file.
- 📊 HTML table summaries grouped by language and severity.

---

## Usage
1. Import the workflow into **n8n**.
2. Configure credentials:
   - OpenAI API key  
   - GitHub API Key
   - Google Drive API Key
3. Run via the provided **webhook form**.
4. Select analysis mode and input target.
5. View structured vulnerability reports directly in n8n or Google Drive.

---

## Notes
- Performs **static analysis only** (no code execution).
- Detects **exploitable findings only**; ignores low-impact issues.

---

## 🔗 Nodes Used

Google Drive, Filter, AI Agent, OpenAI Chat Model, n8n Form Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
