# 📱 Post to an XMLRPC API via the HTTP Request node

> ⚡ **958 views** · 📱 [Social Media & Email Marketing](../)

## Description

## What this does

* Show you how to us XMLRPC APIs via the generic HTTP-Request-node, by the example of posting to a wordpress blog
* This is also a feasible workaround if a specific n8n integration does not work or stops working (which happens e.g. with the Wordpress node)

## How it works

* First, the XML payload for the request is being prepared (in a code node, which also properly escapes special character in the values that you want to send to the XMLRPC endpoint)
* Then, the HTTP Request node sends the request using the HTTP post method
* Last, the returned XML response is converted to JSON which a conditional node uses to determine whether th operation was successful or not

## Setup steps:

* Import workflow
* Ensure you have a wordpress blog with a user that has an [_app_-Password](https://wordpress.com/support/security/two-step-authentication/application-specific-passwords/)
* Edit the "Settings"-node and enter your individual values for url/user/app-pw

## 🔗 Nodes Used

HTTP Request

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
