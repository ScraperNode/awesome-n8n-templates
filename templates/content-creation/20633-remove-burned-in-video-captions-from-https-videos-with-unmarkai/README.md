# 🎬 Remove burned-in video captions from HTTPS videos with UnMarkAI

> ⚡ **1 views** · 🎬 [Content Creation & Video](../)

## Description

## Quick overview
Prepare authorized videos for caption replacement, localization, or product-copy updates. This manual UnMarkAI workflow imports a direct HTTPS video, removes burned-in captions or text, and returns a temporary download link. The template is free; API processing is billed separately.

## How it works
1. Start manually and load Configure Video settings for the source URL, original dimensions, removal regions, request key, and polling limits.
2. Validate the HTTPS URL, dimensions, region coordinates, and required request key before proceeding.
3. Keep execute_paid_job=false to return a no-request preview of the intended API calls.
4. When paid processing is enabled, import the video URL and poll upload status until it is ready or a bounded limit is reached.
5. Create one UnMarkAI text-removal job. Separate stable idempotency keys are used for the POST requests; automatic retries are off.
6. Poll the job within bounded limits, then return its temporary result link. Download promptly and inspect the entire clip for missed text, softened detail, and motion artifacts.

## Setup
1. Create your own n8n Header Auth credential: header Name must be Authorization; Value must be Bearer YOUR_API_KEY, replacing the placeholder with your key and keeping the space after Bearer. Select it on all four HTTP Request nodes. The key needs jobs:read and jobs:write.
2. Open Configure Video. Set your direct public HTTPS video-file URL, actual source dimensions, and removal coordinates in original-video pixels. The supplied 12-second, 1280 × 720 tutorial settings belong only to that source.
3. Keep execute_paid_job=false for preview. Check current API rates and wallet balance, choose a unique request_key for this exact video and settings, then set execute_paid_job=true only when ready for separately billed processing.

## Requirements
- An UnMarkAI API account/key, API wallet funds or credits, and permission to modify the video. Input must be a directly downloadable public HTTPS video file; video-platform webpages are not supported.

## Customization
- Choose one selected region, up to three non-overlapping regions, or full-frame removal. Use source-video pixel coordinates and replace the tutorial configuration for each new source.

## Additional info
This is an UnMarkAI-affiliated template, not an n8n endorsement. A live API flow passed; its output was not visually reviewed. Results vary with the source and settings.

The template is free; UnMarkAI API processing is separately billed. There is no dollar spending cap. Stopping local polling does not cancel remote processing or prevent billing. Inspect existing uploads/jobs before retrying; idempotency protection is not permanent. Keep execution data and signed result URLs private.

[API setup guide](https://unmarkai.net/video-text-removal-api/) · [API documentation](https://unmarkai.net/dashboard/api/docs/)

The [published tutorial case](https://unmarkai.net/examples/remove-text-from-video/tutorial-captions/) is an existing demonstration, not the output of the n8n Cloud test. Footage: [Sururi Ballıdağ Director on Pexels](https://www.pexels.com/video/woodworking-by-machine-13691885/) under the [Pexels License](https://www.pexels.com/license/); demonstration captions were added by UnMarkAI. Video files are linked, not redistributed.

## 🔗 Nodes Used

HTTP Request

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
