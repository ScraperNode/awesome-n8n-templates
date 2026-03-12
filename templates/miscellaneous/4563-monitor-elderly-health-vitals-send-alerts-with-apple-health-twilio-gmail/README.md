# 🔧 Monitor elderly health vitals & send alerts with Apple Health, Twilio & Gmail

> ⚡ **949 views** · 🔧 [Miscellaneous](../)

## Description

# What is Elderwatch
Elder Watch is a simple system that checks daily vitals — like heart rate, oxygen, and walking symmetry — using data from an iPhone or Apple Watch.
If something looks off — say oxygen drops or heart rate spikes — it flags that as “attention required.”
And depending on that status, it can either:
Email a daily report to a caregiver
Or if there’s an alert — trigger a phone call via Twilio
 
## Why do we need this
Elder Watch can help older people living alone for children or care givers to keey an eye on without obsessively checking apps.
It’s useful for clinics that run home-care programs.

## Requirements
1. Self hosted or cloud N8N
2. Apple health vis iphone/watch
3. Twilio VOIP phone number (to place a call)

### Workflows
1. Core workflow for getting health data, processing and making a phone call.
2. Twilio workflow to invoke Calls API to place an outbound voice call. 

### twilio workflow
```json
{
  "name": "Twilio Bridge Caller copy",
  "nodes": [
    {
      "parameters": {
        "httpMethod": "POST",
        "path": "twilio-call",
        "responseMode": "responseNode",
        "options": {}
      },
      "type": "n8n-nodes-base.webhook",
      "typeVersion": 2,
      "position": [
        0,
        0
      ],
      "id": "ca3e6c69-3e7f-4d28-b699-4789a6fa2a6d",
      "name": "Webhook",
      "webhookId": "eb3d63df-800c-401d-931a-c6fba7d834ae"
    },
    {
      "parameters": {
        "respondWith": "text",
        "responseBody": "={{ $json.body }}",
        "options": {
          "responseCode": 200,
          "responseHeaders": {
            "entries": [
              {
                "name": "Content-Type",
                "value": "text/xml"
              }
            ]
          }
        }
      },
      "type": "n8n-nodes-base.respondToWebhook",
      "typeVersion": 1.1,
      "position": [
        580,
        0
      ],
      "id": "6587b7e2-ace8-4e2b-9f4b-ed028a363c25",
      "name": "Respond to Webhook"
    },
    {
      "parameters": {
        "jsCode": "const summary = $input.first().json.query.summary || 'No summary, check mail for critical health info';\n\nreturn [\n  {\n    json: {\n      body: `&lt;Response&gt;\n  &lt;Say voice=\"alice\"&gt;${summary}&lt;/Say&gt;\n&lt;/Response&gt;`\n    }\n  }\n];\n"
      },
      "type": "n8n-nodes-base.code",
      "typeVersion": 2,
      "position": [
        340,
        0
      ],
      "id": "0d4abf87-daf3-4533-8811-64ae61265f5d",
      "name": "Voice Twilio response"
    }
  ],
  "pinData": {
    "Webhook": [
      {
        "json": {
          "headers": {
            "host": "n8n.domain.com",
            "user-agent": "curl/8.7.1",
            "content-length": "0",
            "accept": "*/*",
            "accept-encoding": "gzip, br"
            
          },
          "params": {},
          "query": {
            "lead": " 44711111111111"
          },
          "body": {},
          "webhookUrl": "https://n8n.domain.com/webhook/twilio-call",
          "executionMode": "production"
        }
      }
    ]
  },
  "connections": {
    "Webhook": {
      "main": [
        [
          {
            "node": "Voice Twilio response",
            "type": "main",
            "index": 0
          }
        ]
      ]
    },
    "Voice Twilio response": {
      "main": [
        [
          {
            "node": "Respond to Webhook",
            "type": "main",
            "index": 0
          }
        ]
      ]
    }
  },
  "active": true,
  "settings": {
    "executionOrder": "v1"
  },
  "versionId": "b58c5a12-75be-4b1d-b144-8c7251468021",
  "meta": {
    "instanceId": "8dc0e8a0878d0086b2f46ef04bb00ae07186c936d82d0f0a67563e9652996d33"
  },
  "id": "RHaKqf8Wqt7fIuGH",
  "tags": []
}

```


### Samples
![image.png](fileId:1421)
![image.png](fileId:1422)

## Resources
https://www.youtube.com/watch?v=HYk5_jtMlgc

## Questions/Support
Contact me on info@pankstr.com.

## 🔗 Nodes Used

HTTP Request, Webhook, Gmail

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
