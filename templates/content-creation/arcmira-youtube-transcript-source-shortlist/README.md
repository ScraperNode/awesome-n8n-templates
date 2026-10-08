# Arcmira: YouTube transcript source shortlist

[Arcmira](https://arcmira.com) · [API documentation](https://arcmira.com/docs) · [Original workflow and verification](https://github.com/arcmira/integrations/tree/master/examples/n8n-source-shortlist)

Find up to three spoken passages about a topic in indexed YouTube videos. Return timestamps, source links and coverage notes for editorial review. This manually triggered workflow uses only built-in n8n nodes; it does not generate or publish content.

## Setup

1. Import [workflow.json](workflow.json) into n8n.
2. Create an HTTP Bearer Auth credential with your own [Arcmira API key](https://arcmira.com/docs/authentication), then select it in **Search Arcmira**. Keep the key out of workflow fields and exports.
3. Set the topic and publication-date window in **Search input**. The `before` date is exclusive; choose a window available under your plan.
4. Execute once and inspect **Build source shortlist**. Preserve `requested_window`, `applied_window`, `partial`, `search_index` and `note` with the returned candidates.

An Arcmira account is required; limited free access and paid plans are available. See [plans and usage](https://arcmira.com/docs/usage-and-billing). The workflow makes one search request with `limit=3`, without pagination, retries, transcript retrieval or media downloads. Errors stop execution.

## Verification and limits

The unchanged JSON ran on n8n 2.41.3 on October 7, 2026, returning three passages. It was not replayed for this contribution; browser-editor import remains untested. Search covers indexed material, not every video. Verify quotes, speaker attribution, playback and reuse rights before publication; timestamps are navigation hints, not validated cut boundaries.

Copyright 2026 Arcmira. The workflow and these instructions retain [Apache-2.0](LICENSE); this does not license third-party content or hosted-service access.
