# 🔧 Solve captchas via webhook with CapSolver

> ⚡ **74 views** · 🔧 [Miscellaneous](../)

## Description

## Solve Any CAPTCHA with CapSolver

### How it works

1. The workflow is triggered by a webhook receiving requests. 2. Input validation is performed on the incoming data. 3. The type of CAPTCHA is determined and routed to the appropriate solver. 4. CAPTCHA solving is attempted using the designated CapSolver node. 5. The response is formatted and sent back via the webhook, or an error response is sent for unsupported CAPTCHA types.

### Setup steps

- [ ] Configure the webhook URL to receive requests.
- [ ] Set up input validation criteria in the Validate Input node.
- [ ] Customize the Route by CAPTCHA Type for your specific CAPTCHA types.
- [ ] Ensure all CapSolver nodes have the correct API credentials.
- [ ] Deploy the workflow and test with different CAPTCHA inputs.

### Customization

You can add or remove specific CapSolver nodes based on the types of CAPTCHA challenges you anticipate.

## 🔗 Nodes Used

Webhook

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
