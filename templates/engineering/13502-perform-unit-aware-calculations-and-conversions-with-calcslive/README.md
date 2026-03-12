# ⚒️ Perform unit-aware calculations and conversions with CalcsLive

> ⚡ **0 views** · ⚒️ [Engineering](../)

## Description

## What this workflow does

This template demonstrates how to perform **unit-aware calculations** with automatic unit conversion using the CalcsLive community node. It shows three calculation patterns:

1. **Speed calculation**: Convert distance and time into velocity (km → km/h)
2. **Cylinder volume**: Calculate volume from diameter and height (cm → Liters)
3. **Chained calculations**: Pass output from one calculation as input to another (Volume → Mass)

## Workflow Screenshot
![demoworkflow.png](fileId:4524)

## CalcsLive Articles Used

You can view and customize each calculation article in the CalcsLive editor:

| Calculation | Article ID | Link |
|-------------|------------|------|
| Speed Calc | 3M6P9TF5P-3XA | [Open in Editor](https://calcslive.com/editor/3M6P9TF5P-3XA) |
| Cylinder Volume | 3M6P9TF5P-3XA | [Open in Editor](https://calcslive.com/editor/3M6P9TF5P-3XA) |
| Mass Calc | 3M6PBGU7S-3CA | [Open in Editor](https://calcslive.com/editor/3M6PBGU7S-3CA) |

**Note:** 
- Speed and Cylinder Volume use the **same multi-purpose article** (3M6P9TF5P-3XA), demonstrating how one article can serve multiple calculation needs. 
- Meanwhile, Cylinder Volume and Mass Calc are **chained together as composables** - the volume output feeds directly into the mass calculation.  
This pattern offers both flexibility and power for complex workflows.

## Seamless Data Flow

An implicit but powerful feature: **full unit freedom - input data flows seamlessly through the workflow**. The "Set" nodes prepare data that CalcsLive nodes consume directly via expressions. CalcsLive then delivers outputs in your specified units, ready to feed downstream nodes. Both inputs and outputs integrate naturally with n8n's data model - no transformation needed.

## Why use CalcsLive?

- **570+ units** across 67+ categories with automatic conversion
- **No formula coding** - use pre-built calculation articles
- **Chain calculations** - output from one calc feeds into another
- **Unit flexibility** - input in any unit, get output in your preferred unit

## Prerequisites

1. Install the CalcsLive community node: `@calcslive/n8n-nodes-calcslive`
2. Get an API key from [calcslive.com](https://www.calcslive.com) (free tier available)
3. Create CalcsLive API credentials in n8n

## How to use

1. Import this workflow
2. Configure your CalcsLive API credentials
3. Click "Execute workflow" to see the calculations run
4. Modify the input values in the "Set" nodes to test different scenarios

## Example use cases

- **E-commerce**: Calculate shipping costs based on package dimensions and weight
- **Manufacturing**: Convert between metric and imperial units in production workflows
- **IoT**: Process sensor data with proper unit handling
- **Engineering**: Chain multiple physics calculations together

## Resources

- [CalcsLive - n8n Integration](https://calcslive.com/help/api-integration#n8n-integration)
- [npm Package](https://www.npmjs.com/package/@calcslive/n8n-nodes-calcslive)
- [GitHub Repository](https://github.com/calcslive/n8n-nodes-calcslive)

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)

---

## 💡 Pro Tip

If you need GitHub data beyond what the REST API gives you, [ScraperNode](https://scrapernode.com/github) has a [repository scraper](https://scrapernode.com/github/scrapers/repositories) that extracts metadata at scale without token rate limits.
