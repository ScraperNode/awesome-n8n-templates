# ⚒️ Advanced retry and delay logic

> ⚡ **622 views** · ⚒️ [Engineering](../)

## Description

## Advanced Retry and Delay Logic

This template provides a robust solution for handling API rate limits and temporary service outages in n8n workflows. It overcomes the limitations of the default node retry settings, which cap retries at 5 and delays at 5 seconds. By using a custom loop with a `Set`, `If`, and `Wait` node, this workflow gives you complete control over the number of retries and the delay between them.

### Instructions:

1. Replace the placeholder **HTTP Request** node with your target node (the one that might fail).
2. In the initial **Set Fields** node, modify the `max_tries` value to set the total number of attempts for your workflow.
3. Adjust the `delay_seconds` value to define the initial delay between retries.
4. Optionally, configure the `Edit Fields` node to implement exponential backoff by adjusting the `delay_seconds` expression (e.g., `{{$json.delay_seconds * 2}}`).

For a more detailed breakdown and tutorial of this template, you can find additional information [here](https://n8nplaybook.com/post/2025/06/mastering-custom-retry-and-delay-logic-in-n8n/).

## 🔗 Nodes Used

HTTP Request, Stop and Error

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
