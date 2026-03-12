# ⚒️ Standardize US phone numbers with multiple format options and validation

> ⚡ **454 views** · ⚒️ [Engineering](../)

## Description

## Workflow Overview:

This n8n workflow template takes a US phone number as input, validates it, and returns it in multiple standard formats, including handling extensions. It's designed to streamline the process of standardizing phone number data within your automations.

## How it Works:

**Input:** Accepts a phone number string as input. This number can be in various common formats (e.g., `(555) 123-4567`, `555.123.4567`, `+15551234567`, `5551234567x890`).

**Formatting Removal:** Strips all non-numeric characters to isolate the core number and any potential extension.

**Validation:**

- **Country Code Check:** Verifies if the number starts with the US country code (`+1` or `1`) or assumes US if no country code is present and the length is correct.

- **Length Check:** Ensures the main number component consists of exactly 10 digits after stripping formatting and the country code.

**Output Generation (if valid):** If the number passes validation, the workflow outputs the phone number in several standardized formats:

- **Number Only:** 5551234567

- **E.164 Standard:** +15551234567

- **National Standard:** (555) 123-4567

- **Full National Standard:** 1 (555) 123-4567

- **International Standard:** 00-1-555-123-4567

**Extension Handling:** If an extension is detected in the input, it is separated and provided as:

- **Extension (Number):** 890

- **Extension (String):** "890"

**Use Cases:**

- Cleaning and standardizing phone number data in CRM systems.

- Formatting numbers before sending SMS messages via APIs.

- Validating user input from forms.

- Ensuring consistent phone number representation across different applications.

## 🔗 Nodes Used

Execute Workflow Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
