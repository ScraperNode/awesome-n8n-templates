# ⚒️ 🛠️ Transform JSON to XML for Enhanced AI Prompt Formatting

> ⚡ **2,204 views** · ⚒️ [Engineering](../)

## Description

## Overview

This template provides a powerful and configurable utility to convert JSON data into a clean, well-structured XML format. It is designed for developers, data analysts, and n8n users who need to interface with legacy systems, generate structured reports, or prepare data for consumption by Large Language Models (LLMs), which often exhibit improved understanding and parsing with XML-formatted input.

## Use Cases

This workflow is ideal for solving several common data transformation problems:

*   **Preparing Data for AI Prompts:** LLMs like GPT-4 often parse XML more reliably than JSON within a prompt. The explicit closing tags and hierarchical nature of XML reduce ambiguity, leading to better and more consistent responses from the AI.
*   **Interfacing with Legacy Systems:** Many enterprise systems, SOAP APIs, and older software exclusively accept or produce data in XML format. This template acts as a bridge, allowing modern JSON-based services to communicate with them seamlessly.
*   **Generating Structured Reports:** Create XML files for reporting or data interchange standards that require a specific, well-defined structure.
*   **Improving Data Readability:** For complex nested data, a well-formatted XML can be easier for humans to read and debug than a compact JSON string.

## How it works

This workflow acts as a powerful, configurable JSON to XML converter. It takes a JSON object as input and performs the following steps:

1.  **Recursively Parses JSON:** It intelligently navigates through the entire JSON structure, including nested objects and arrays.
2.  **Handles Data Types:**
    *   **Primitive Arrays** (e.g., `["a", "b", "c"]`) are joined into a single string with a safe delimiter.
    *   **Complex Arrays** (of objects) are converted into indexed XML tags (&lt;0&gt;, &lt;1&gt;, etc.).
    *   **Dates** are automatically detected and formatted into a readable `YYYY-MM-DD HH:mm:ss` format.
3.  **Generates XML String:** It constructs a final XML string based on the logic and configuration set inside the Code node. The output is provided in a single `xml` field, ready for use.

## Set up steps

**Setup time: ~1 minute**

This workflow is designed to be used as a sub-workflow (or "child workflow").

1.  In your main workflow, add an **Execute Workflow** node.
2.  In the **Workflow** parameter of that node, select this "JSON to XML Converter" workflow.
3.  That's it! You can now send JSON data to the Execute Workflow node and it will return the converted XML string in the `xml` field.

## Customization Options

The true power of this template lies in its customizability, all managed within the configuration section at the top of the Code node. This allows you to fine-tune the output XML to your exact needs.

*   **`REMOVE_EMPTY_VALUES`**: Set to `true` (default) to completely omit tags for `null`, `undefined`, or empty string values, resulting in a cleaner XML. Set to `false` to include empty tags like &lt;myTag&gt;&lt;/myTag&gt;.
*   **Newline Formatting**: Control the spacing and readability of the output with four distinct settings:
    *   `NEWLINES_TOP_LEVEL`: Adjusts the newlines between root-level elements.
    *   `NEWLINES_ARRAY_ITEMS`: Controls spacing between items in a complex array (e.g., between &lt;0&gt; and &lt;1&gt;).
    *   `NEWLINES_OBJECT_PROPERTIES`: Manages newlines between the properties of an object.
    *   `NEWLINES_WITHIN_TAGS`: Adds newlines between an opening/closing tag and its content for an "indented" look.

## Prerequisites

*   An active n8n instance.
*   Basic familiarity with JSON and XML data structures.
*   Understanding of how to use the **Execute Workflow** node to run sub-workflows.

## 🔗 Nodes Used

Execute Workflow Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
