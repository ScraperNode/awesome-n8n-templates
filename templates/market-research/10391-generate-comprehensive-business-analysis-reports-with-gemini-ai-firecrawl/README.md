# 📊 Generate comprehensive business analysis reports with Gemini AI & Firecrawl

> ⚡ **655 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.

## Description

This workflow automates business intelligence. Submit one URL, and it scrapes the website, uses AI to perform a comprehensive analysis, and generates a professional report in Google Doc and PDF format.

It's perfect for agencies, freelancers, and consultants who need to streamline client research or competitive analysis.

## How It Works

The workflow is triggered by a form input, where you provide a single website URL.

1.  **Scrape:** It uses **Firecrawl** to scrape the sitemap and get the full content from the target website.
2.  **Analyze:** The main workflow calls a **Tools Workflow** (included below) which uses **Google Gemini** and **Perplexity** AI agents to analyze the scraped content and extract key business information.
3.  **Generate & Deliver:** All the extracted data is formatted and used to populate a template in **Google Docs**. The final report is saved to **Google Drive** and delivered via **Gmail**.

## What It Generates

The final report is a comprehensive business analysis, including:

  * **Business Overview:** A full company description.
  * **Target Audience Personas:** Defines the demographic and psychographic profiles of ideal customers.
  * **Brand & UVP:** Extracts the brand's personality matrix and its Unique Value Proposition (UVP).
  * **Customer Journey:** Maps the typical customer journey from Awareness to Loyalty.

## Required Tools

This workflow requires n8n and API keys/credentials for the following services:

  * **Firecrawl** (for scraping)
  * **Perplexity** (for AI analysis)
  * **Google Gemini** (for AI analysis)
  * **Google Services** (for Docs, Drive, and Gmail)

## ⚠️ Required: Tools Workflow

This workflow **will not work** without its "Tools" sub-workflow. Please create a **new, separate workflow** in n8n, name it (e.g., "Business Analysis Tools"), and paste the following code into it.

```json
{
  "name": "Business Analysis Workflow Tools",
  "nodes": [
    {
      "parameters": {
        "workflowInputs": {
          "values": [
            {
              "name": "function"
            },
            {
              "name": "keyword"
            },
            {
              "name": "url"
            },
            {
              "name": "location_code"
            },
            {
              "name": "language_code"
            }
          ]
        }
      },
      "type": "n8n-nodes-base.executeWorkflowTrigger",
      "typeVersion": 1.1,
      "position": [
        -448,
        800
      ],
      "id": "e79e0605-f9ac-4166-894c-e5aa9bd75bac",
      "name": "When Executed by Another Workflow"
    },
    {
      "parameters": {
        "rules": {
          "values": [
            {
              "conditions": {
                "options": {
                  "caseSensitive": true,
                  "leftValue": "",
                  "typeValidation": "strict",
                  "version": 2
                },
                "conditions": [
                  {
                    "id": "8d7d3035-3a57-47ee-b1d1-dd7bfcab9114",
                    "leftValue": "serp_search",
                    "rightValue": "={{ $json.function }}",
                    "operator": {
                      "type": "string",
                      "operation": "equals",
                      "name": "filter.operator.equals"
                    }
                  }
                ],
                "combinator": "and"
              },
              "renameOutput": true,
              "outputKey": "serp_search"
            },
            {
              "conditions": {
                "options": {
                  "caseSensitive": true,
                  "leftValue": "",
                  "typeValidation": "strict",
                  "version": 2
                },
                "conditions": [
                  {
                    "id": "bb2c23eb-862d-4582-961e-5a8d8338842c",
                    "leftValue": "ai_mode",
                    "rightValue": "={{ $json.function }}",
                    "operator": {
                      "type": "string",
                      "operation": "equals",
                      "name": "filter.operator.equals"
                    }
                  }
                ],
                "combinator": "and"
              },
              "renameOutput": true,
              "outputKey": "ai_mode"
            },
            {
              "conditions": {
                "options": {
                  "caseSensitive": true,
                  "leftValue": "",
                  "typeValidation": "strict",
                  "version": 2
                },
                "conditions": [
                  {
                    "id": "4603eee1-3888-4e32-b3b9-4f299dfd6df3",
                    "leftValue": "internal_links",
                    "rightValue": "={{ $json.function }}",
                    "operator": {
                      "type": "string",
                      "operation": "equals",
                      "name": "filter.operator.equals"
                    }
                  }
                ],
                "combinator": "and"
              },
              "renameOutput": true,
              "outputKey": "internal_links"
            }
          ]
        },
        "options": {}
      },
      "type": "n8n-nodes-base.switch",
      "typeVersion": 3.2,
      "position": [
        -208,
        784
      ],
      "id": "72c37890-7054-48d8-a508-47ed981551d6",
      "name": "Switch"
    },
    {
      "parameters": {
        "method": "POST",
        "url": "https://api.dataforseo.com/v3/serp/google/organic/live/advanced",
        "authentication": "genericCredentialType",
        "genericAuthType": "httpBasicAuth",
        "sendBody": true,
        "specifyBody": "json",
        "jsonBody": "=[\n  {\n    \"keyword\": \"{{ $json.keyword.replace(/[:'\"\\\\/]/g, '') }}\",\n    \"location_code\": {{ $json.location_code }},\n    \"language_code\": \"{{ $json.language_code }}\",\n    \"depth\": 10,\n    \"group_organic_results\": true,\n    \"load_async_ai_overview\": true,\n    \"people_also_ask_click_depth\": 1\n  }\n]",
        "options": {
          "redirect": {
            "redirect": {
              "followRedirects": false
            }
          }
        }
      },
      "type": "n8n-nodes-base.httpRequest",
      "typeVersion": 4.2,
      "position": [
        384,
        512
      ],
      "id": "6203f722-b590-4a25-8953-8753a44eb3cb",
      "name": "SERP Google",
      "credentials": {
        "httpBasicAuth": {
          "id": "n5o00CCWcmHFeI1p",
          "name": "DataForSEO"
        }
      }
    },
    {
      "parameters": {
        "content": "## SERP Google",
        "height": 272,
        "width": 688,
        "color": 4
      },
      "type": "n8n-nodes-base.stickyNote",
      "typeVersion": 1,
      "position": [
        288,
        432
      ],
      "id": "81593217-034f-466d-9055-03ab6b2d7d08",
      "name": "Sticky Note3"
    },
    {
      "parameters": {
        "assignments": {
          "assignments": [
            {
              "id": "97ef7ee0-bc97-4089-bc37-c0545e28ed9f",
              "name": "platform",
              "value": "={{ $json.tasks[0].data.se }}",
              "type": "string"
            },
            {
              "id": "9299e6bb-bd36-4691-bc6c-655795a6226e",
              "name": "type",
              "value": "={{ $json.tasks[0].data.se_type }}",
              "type": "string"
            },
            {
              "id": "2dc26c8e-713c-4a59-a353-9d9259109e74",
              "name": "keyword",
              "value": "={{ $json.tasks[0].data.keyword }}",
              "type": "string"
            },
            {
              "id": "84c9be31-8f1d-4a67-9d13-897910d7ec18",
              "name": "results",
              "value": "={{ $json.tasks[0].result }}",
              "type": "array"
            }
          ]
        },
        "options": {}
      },
      "type": "n8n-nodes-base.set",
      "typeVersion": 3.4,
      "position": [
        592,
        512
      ],
      "id": "a916551a-009b-403f-b02e-3951d54d2407",
      "name": "Prepare SERP output"
    },
    {
      "parameters": {
        "content": "# Google Organic Search API\n\nThis API lets you retrieve real-time Google search results with a wide range of parameters and custom settings.  \nThe response includes structured data for all available SERP features, along with a direct URL to the search results page.  \n\n👉 [Documentation](https://docs.dataforseo.com/v3/serp/overview/)\n",
        "height": 272,
        "width": 496,
        "color": 4
      },
      "type": "n8n-nodes-base.stickyNote",
      "typeVersion": 1,
      "position": [
        976,
        432
      ],
      "id": "87672b01-7477-4b43-9ccc-523ef8d91c64",
      "name": "Sticky Note17"
    },
    {
      "parameters": {
        "method": "POST",
        "url": "https://api.dataforseo.com/v3/serp/google/ai_mode/live/advanced",
        "authentication": "genericCredentialType",
        "genericAuthType": "httpBasicAuth",
        "sendBody": true,
        "specifyBody": "json",
        "jsonBody": "=[\n  {\n    \"keyword\": \"{{ $json.keyword }}\",\n    \"location_code\": {{ $json.location_code }},\n    \"language_code\": \"{{ $json.language_code }}\",\n    \"device\": \"mobile\",\n    \"os\": \"android\"\n  }\n]",
        "options": {
          "redirect": {
            "redirect": {}
          }
        }
      },
      "type": "n8n-nodes-base.httpRequest",
      "typeVersion": 4.2,
      "position": [
        384,
        800
      ],
      "id": "fb0001c4-d590-45b3-a3d0-cac7174741d3",
      "name": "AI Mode",
      "credentials": {
        "httpBasicAuth": {
          "id": "n5o00CCWcmHFeI1p",
          "name": "DataForSEO"
        }
      }
    },
    {
      "parameters": {
        "content": "## AI Mode",
        "height": 272,
        "width": 512,
        "color": 6
      },
      "type": "n8n-nodes-base.stickyNote",
      "typeVersion": 1,
      "position": [
        288,
        720
      ],
      "id": "2cea3312-31f8-4ff0-b385-5b76b836274c",
      "name": "Sticky Note11"
    },
    {
      "parameters": {
        "assignments": {
          "assignments": [
            {
              "id": "b822f458-ebf2-4a37-9906-b6a2606e6106",
              "name": "keyword",
              "value": "={{ $json.tasks[0].data.keyword }}",
              "type": "string"
            },
            {
              "id": "10484675-b107-4157-bc7e-b942d8cdb5d2",
              "name": "result",
              "value": "={{ $json.tasks[0].result[0].items }}",
              "type": "array"
            }
          ]
        },
        "options": {}
      },
      "type": "n8n-nodes-base.set",
      "typeVersion": 3.4,
      "position": [
        592,
        800
      ],
      "id": "6b1e7239-ee2b-4457-8acb-17ce87415729",
      "name": "Prepare AI Mode Output"
    },
    {
      "parameters": {
        "content": "# Google AI Mode API\n\nThis API provides AI-generated search result summaries and insights from Google.  \nIt returns detailed explanations, overviews, and related information based on search queries, with parameters to customize the AI overview.  \n\n👉 [Documentation](https://docs.dataforseo.com/v3/serp/google/ai_mode/overview/)\n",
        "height": 272,
        "width": 496,
        "color": 6
      },
      "type": "n8n-nodes-base.stickyNote",
      "typeVersion": 1,
      "position": [
        800,
        720
      ],
      "id": "d761dc57-e35d-4052-a360-71170a155f7b",
      "name": "Sticky Note18"
    },
    {
      "parameters": {
        "content": "## Input",
        "height": 384,
        "width": 544,
        "color": 7
      },
      "type": "n8n-nodes-base.stickyNote",
      "typeVersion": 1,
      "position": [
        -528,
        672
      ],
      "id": "db90385e-f921-4a9c-89f3-53fc5825b207",
      "name": "Sticky Note"
    },
    {
      "parameters": {
        "assignments": {
          "assignments": [
            {
              "id": "b865f4a0-b4c3-4dde-bf18-3da933ab21af",
              "name": "platform",
              "value": "={{ $json.platform }}",
              "type": "string"
            },
            {
              "id": "476e07ca-ccf6-43d4-acb4-4cc905464314",
              "name": "type",
              "value": "={{ $json.type }}",
              "type": "string"
            },
            {
              "id": "f1a14eb8-9f10-4198-bbc7-17091532b38e",
              "name": "keyword",
              "value": "={{ $json.keyword }}",
              "type": "string"
            },
            {
              "id": "181791a0-1d88-481c-8d98-a86242bb2135",
              "name": "results",
              "value": "={{ $json.results[0].items }}",
              "type": "array"
            }
          ]
        },
        "options": {}
      },
      "type": "n8n-nodes-base.set",
      "typeVersion": 3.4,
      "position": [
        800,
        512
      ],
      "id": "83fef061-5e0b-417c-b1f6-d34eb712fac6",
      "name": "Sort Results"
    },
    {
      "parameters": {
        "content": "## Internal Links",
        "height": 272,
        "width": 272,
        "color": 5
      },
      "type": "n8n-nodes-base.stickyNote",
      "typeVersion": 1,
      "position": [
        288,
        1024
      ],
      "id": "9246601a-f133-4ca3-aac8-989cb45e6cd2",
      "name": "Sticky Note7"
    },
    {
      "parameters": {
        "method": "POST",
        "url": "https://api.firecrawl.dev/v2/map",
        "sendHeaders": true,
        "headerParameters": {
          "parameters": [
            {
              "name": "Authorization",
              "value": "Bearer your-firecrawl-apikey"
            }
          ]
        },
        "sendBody": true,
        "specifyBody": "json",
        "jsonBody": "={\n    \"url\": \"https://{{ $json.url }}\",\n    \"limit\": 400,\n    \"includeSubdomains\": false,\n    \"sitemap\": \"include\"\n  }",
        "options": {}
      },
      "type": "n8n-nodes-base.httpRequest",
      "typeVersion": 4.2,
      "position": [
        368,
        1104
      ],
      "id": "fd6a33ae-6fb3-4331-ab6a-994048659116",
      "name": "Get Internal Links"
    },
    {
      "parameters": {
        "content": "# Firecrawl Map API\n\nThis endpoint maps a website from a single URL and returns the list of discovered URLs (titles and descriptions when available) — extremely fast and useful for selecting which pages to scrape or for quickly enumerating site links. ([Firecrawl][1])\n\nIt supports a `search` parameter to find relevant pages inside a site, `location`/`languages` options to emulate country/language (uses proxies when available), and SDK + cURL examples in the docs,\n\n👉 [Documentation](https://docs.firecrawl.dev/features/map)\n\n[1]: https://docs.firecrawl.dev/features/map \"Map | Firecrawl\"\n",
        "height": 272,
        "width": 624,
        "color": 5
      },
      "type": "n8n-nodes-base.stickyNote",
      "typeVersion": 1,
      "position": [
        560,
        1024
      ],
      "id": "08457204-93ff-4586-a76e-03907118be3c",
      "name": "Sticky Note24"
    }
  ],
  "pinData": {
    "When Executed by Another Workflow": [
      {
        "json": {
          "function": "serp_search",
          "keyword": "villanyszerelő Largo Florida",
          "url": null,
          "location_code": 2840,
          "language_code": "hu"
        }
      }
    ]
  },
  "connections": {
    "When Executed by Another Workflow": {
      "main": [
        [
          {
            "node": "Switch",
            "type": "main",
            "index": 0
          }
        ]
      ]
    },
    "Switch": {
      "main": [
        [
          {
            "node": "SERP Google",
            "type": "main",
            "index": 0
          }
        ],
        [
          {
            "node": "AI Mode",
            "type": "main",
            "index": 0
          }
        ],
        [
          {
            "node": "Get Internal Links",
            "type": "main",
            "index": 0
          }
        ]
      ]
    },
    "SERP Google": {
      "main": [
        [
          {
            "node": "Prepare SERP output",
            "type": "main",
            "index": 0
          }
        ]
      ]
    },
    "AI Mode": {
      "main": [
        [
          {
            "node": "Prepare AI Mode Output",
            "type": "main",
            "index": 0
          }
        ]
      ]
    },
    "Prepare SERP output": {
      "main": [
        [
          {
            "node": "Sort Results",
            "type": "main",
            "index": 0
          }
        ]
      ]
    },
    "Sort Results": {
      "main": [
        []
      ]
    }
  },
  "active": false,
  "settings": {
    "executionOrder": "v1"
  },
  "versionId": "6fce16d1-aa28-4939-9c2d-930d11c1e17f",
  "meta": {
    "instanceId": "1ee7b11b3a4bb285563e32fdddf3fbac26379ada529b942ee7cda230735046a1"
  },
  "id": "VjpOW2V2aNV9HpQJ",
  "tags": []
}
```

## 🔗 Nodes Used

Google Drive, Gmail, Google Docs, Call n8n Workflow Tool, n8n Form Trigger, Think Tool

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
