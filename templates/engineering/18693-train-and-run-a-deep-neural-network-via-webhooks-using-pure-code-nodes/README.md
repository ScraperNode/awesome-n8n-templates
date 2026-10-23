# ⚒️ Train and run a deep neural network via webhooks using pure code nodes

> ⚡ **3 views** · ⚒️ [Engineering](../)

## Description

## Quick overview
This workflow exposes two webhooks to train and run inference for a 3-hidden-layer neural network built entirely with n8n Code and Merge nodes, persisting learned weights in workflow static data and returning class probabilities, predictions, and evaluation metrics.

## How it works
1. Receives a POST request on `/train` with epochs, learning rate, and an optional dataset to train the network.
2. Runs a vectorized forward and backpropagation pass in JavaScript, updates weights and biases with gradient descent, and stores them in n8n workflow static data.
3. Receives a POST request on `/predict` containing one or more 8‑dimensional feature vectors (and optional `trueClass` labels).
4. Computes a feedforward pass through three ReLU hidden layers (9 neurons per layer) using the stored weights (or deterministic fallback weights if none are trained).
5. Produces 4 output logits, applies a temperature-scaled softmax to return probabilities, predicted class, and confidence.
6. Calculates per-sample cross-entropy loss and batch accuracy using `trueClass` (when provided) and responds with the prediction results as JSON.

## Setup
1. Activate the workflow and copy the production webhook URLs for `POST /train` and `POST /predict`.
2. Send training data to `/train` (or rely on the default dataset) to initialize and persist weights in workflow static data.
3. Send inference requests to `/predict` as JSON containing `x: [8 numbers]` (optionally add `sampleId` and `trueClass: 1..4`) and review the JSON response for probabilities, predictions, loss, and accuracy.

## 🔗 Nodes Used

Webhook

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
