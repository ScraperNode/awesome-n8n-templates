# ⚙️ Fetch the public IP addresses of your n8n instance

> ⚡ **1,315 views** · ⚙️ [DevOps & CI/CD](../)

## Description

## Why
If you need to use n8n to connect to service providers of yours,  some of which happen to  rely on firewall white-listing as part of their access control, you'll need to determine or verify the public IP addresses of your n8n instance(s).

## How does it work
* The webhook, upon invocation, will use **Http Request** node to request public IP address information from ++api.ipify.org++ in json format, for 10 times, then **aggregate** results to an array.
  * The reason to repeat, is to get all the potential public IP addresses of your n8n instance.
  * Often than not, enterprises or network providers deploy at least a pair of gateway devices at the border for redundancy.
* built-in array functions in a javascript expression are used to **pluck** all the values under 'ip' key, and to dedup to an array as response body.

## How to set it up
* import the workflow
* set up your own header-auth credential
* update the workflow to use the new credential
* test or activate workflow as usual.

## example invocation
```
$ curl -H "api-key: super-long-api-token" http://localhost:5678/webhook-test/4879bc79-d6f8-48df-bfe4-613366c7f399
["88.88.88.66", "88.88.88.88"]
```

## 🔗 Nodes Used

HTTP Request, Webhook

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
