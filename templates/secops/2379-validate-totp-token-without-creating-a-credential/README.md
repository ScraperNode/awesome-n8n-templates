# 🔒 Validate TOTP token (without creating a credential)

> ⚡ **629 views** · 🔒 [SecOps & Security Automation](../)

## Description

## TOTP Validation with Function Node

This template allows you to verify if a 6-digit TOTP code is valid using the corresponding TOTP secret. It can be used in an authentication system.
The inputs need to be: 
- a base32 totp secret (String)
- a 6 digits code (String)

++Important:++ The 6-digit code must be in text format. If the code starts with zeros and is treated as a number, it could cause validation issues.

The function node will generate a 6-digit code from the TOTP secret, then compare it with the provided code. If they match, it will return `1` otherwise, it will return `0`.
## Example usage:

- You retrieve the user's TOTP secret from a database, then you want to verify if the 2FA code provided by the user is valid.

## Setup Guidelines
You only need the ==`TOTP VALIDATION`== node.
==You will need to modify lines `39` and `40`== of the node with the correct values for your specific context.

## Testing the Template
You can define a sample secret and code in the `EXAMPLE FIELDS` node of the template, then click `"Test Workflow"`.
If the code is valid for the provided secret, the flow will proceed to the `true` branch of the `IF CODE IS VALID` node. Otherwise, it will go to the `false` branch.

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
