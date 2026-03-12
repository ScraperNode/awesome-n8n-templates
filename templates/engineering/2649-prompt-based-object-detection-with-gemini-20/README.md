# ⚒️ Prompt-based object detection with Gemini 2.0

> ⚡ **3,197 views** · ⚒️ [Engineering](../)

## Description

This n8n template demonstrates how to get started with Gemini 2.0's new Bounding Box detection capabilities in your workflows.

The key difference being this enables prompt-based object detection for images which is pretty powerful for things like contextual search over an image. eg. "Put a bounding box around all adults with children in this image" or "Put a bounding box around cars parked out of bounds of a parking space".

## How it works
* An image is downloaded via the HTTP node and an "Edit Image" node is used to extract the file's width and height.
* The image is then given to the Gemini 2.0 API to parse and return coordinates of the bounding box of the requested subjects. In this demo, we've asked for the AI to identify all bunnies.
* The coordinates are then rescaled with the original image's width and height to correctl align them.
* Finally to measure the accuracy of the object detection, we use the "Edit Image" node to draw the bounding boxes onto the original image.

## How to use
* Really up to the imagination! Perhaps a form of grounding for evidence based workflows or a higher form of image search can be built.

## Requirements
* Google Gemini for LLM

## Customising the workflow
* This template is just a demonstration of an experimental version of Gemini 2.0. It is recommended to wait for Gemini 2.0 to come out of this stage before using in production.

## 🔗 Nodes Used

Edit Image, HTTP Request

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
