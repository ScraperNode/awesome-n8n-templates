# ⚒️ Vector database as a big data analysis tool for AI agents [3/3 - anomaly]

> ⚡ **3,312 views** · ⚒️ [Engineering](../)

## Description

# Vector Database as a Big Data Analysis Tool for AI Agents

Workflows from the webinar ["Build production-ready AI Agents with Qdrant and n8n"](https://www.youtube.com/watch?v=_BQTnXpuH-E).

This series of workflows shows how to build big data analysis tools for production-ready AI agents with the help of vector databases. These pipelines are adaptable to any dataset of images, hence, many production use cases.

1. [Uploading (image) datasets to Qdrant](https://n8n.io/workflows/2654-uploading-image-datasets-to-qdrant-13-anomaly12-knn/)
2. [Set up meta-variables for anomaly detection in Qdrant](https://n8n.io/workflows/2655-set-up-cluster-centresandthresholds-for-anomaly-detection-23-anomaly/)
3. **[Anomaly detection tool](https://n8n.io/workflows/2656-anomaly-images-detection-tool-33-anomaly/)**
4. [KNN classifier tool](https://n8n.io/workflows/2657-knn-images-classifier-tool-22-knn/)

### For anomaly detection
1. The first pipeline to upload an image dataset to Qdrant.
2. The second pipeline is to set up cluster (class) centres & cluster (class) threshold scores needed for anomaly detection.
**3. This is the third pipeline --- the anomaly detection tool, which takes any image as input and uses all preparatory work done with Qdrant to detect if it's an anomaly to the uploaded dataset.**

### For KNN (k nearest neighbours) classification
1. The first pipeline to upload an image dataset to Qdrant.
2. The second is the KNN classifier tool, which takes any image as input and classifies it on the uploaded to Qdrant dataset.

### To recreate both
You'll have to upload [crops](https://www.kaggle.com/datasets/mdwaquarazam/agricultural-crops-image-classification) and [lands](https://www.kaggle.com/datasets/apollo2506/landuse-scene-classification) datasets from Kaggle to your own Google Storage bucket, and re-create APIs/connections to [Qdrant Cloud](https://qdrant.tech/documentation/quickstart-cloud/) (you can use [Free Tier](https://cloud.qdrant.io/login) cluster), [Voyage AI API](https://www.voyageai.com/) & Google Cloud Storage. 

## [This workflow] Anomaly Detection Tool
This is the tool that can be used directly for anomalous images (crops) detection. 
It takes as input (any) **image URL** and returns a **text message** telling if whatever this image depicts is anomalous to the crop dataset stored in Qdrant. 

* An Image URL is received via the *Execute Workflow Trigger*, which is used to generate embedding vectors using the Voyage AI Embeddings API.
* The returned vectors are used to query the Qdrant collection to determine if the given crop is known by comparing it to **threshold scores** of each image class (crop type).
* If the image scores lower than all thresholds, then the image is considered an anomaly for the dataset.

## 🔗 Nodes Used

HTTP Request, Execute Workflow Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
