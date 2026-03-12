# ⚒️ Convert POML to AI-Ready Prompts & Chat Messages with Zero Dependencies

> ⚡ **162 views** · ⚒️ [Engineering](../)

## Description

### _POML → Prompt/Messages (No-Deps)_
![Poml Logo](https://poml-team.gallerycdn.vsassets.io/extensions/poml-team/poml/0.0.7/1753436631886/Microsoft.VisualStudio.Services.Icons.Default)
## What this does

Turns **POML** markup into either a single Markdown **prompt** or chat-style **messages\[]** — using a **zero-dependency** n8n Code node. It supports variable substitution (via `context`), basic components (headings, lists, code, images, tables, line breaks), and optional schema-driven validation using `componentSpec` + `attributeSpec`.

## Credits
**Created by** [**_Real Simple Solutions_**](https://realsimple.dev) as an n8n **template friendly POML compiler** (_no dependencies_) for full POML feature parity.
### _View more of our_ [_templates here_](https://joeperes.gumroad.com/)

## Who’s it for

Teams who author prompts in **POML** and want a **template-safe** way to turn them into either a single Markdown prompt or **chat-style messages**—without installing external modules. Works on **n8n Cloud and self-hosted**.

## What it does

This workflow converts POML into:

* **`prompt`** (Markdown) for single-shot models, or
* **`messages[]`** (`system|user|assistant`) for chat APIs when `speakerMode` is true.

It supports variable substitution via a `context` object (`{{dot.path}}`), lists, headings, code blocks, images (incl. base64 → `data:` URL), tables from JSON (`records`/`columns`), and basic message components.

## How it works

* **Set (Specs & Context):** Provide `componentSpec` (allowed attrs per tag), `attributeSpec` (typing/coercion), and optional `context`.
* **Code (POML → Prompt/Messages):** A zero-dependency compiler parses the POML and emits `prompt` or `messages[]`.

&gt; Add a **yellow Sticky Note** that includes this description and any setup links. Use additional neutral sticky notes to explain each step.

## How to set up

1. Import the template.
2. Open the first **Set** node and paste your `componentSpec`, `attributeSpec`, and `context` (examples included).
3. In the **Code** node, choose:

   * `speakerMode: true` to get `messages[]`, or `false` for a single `prompt`.
   * `listStyle`: `dash | star | plus | decimal | latin`.
4. Run → inspect `prompt`/`messages` in the output.

## Requirements

* No credentials or community nodes.
* Works without external libraries (template-compliant).

## How to customize

* Add message tags (`&lt;system-msg&gt;`, `&lt;user-msg&gt;`, `&lt;ai-msg&gt;`) in your POML when using `speakerMode: true`.
* Extend `componentSpec`/`attributeSpec` to validate or coerce additional tags/attributes.
* Preformat arrays in `context` (e.g., `bulleted`, `csv`) for display, or add a small Set node to build them on the fly.
* Rename nodes and keep all user-editable fields grouped in the first Set node.

## Security & best practices

* **Never** hardcode API keys in nodes.
* Remove any personal IDs before publishing.
* Keep your Sticky Note(s) up to date and instructional.

## 🔗 Nodes Used

AI Agent, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
