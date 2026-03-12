# 🔬 Synchronize MySQL database schemas to Pinecone with OpenAI embeddings

> ⚡ **158 views** · 🔬 [Document Extraction & Analysis](../)

## Description

This workflow synchronizes MySQL database table schemas with a vector database in a controlled, idempotent manner.
Each database table is indexed as a single vector to preserve complete schema context for AI-based retrieval and reasoning.
The workflow prevents duplicate vectors and automatically handles schema changes by detecting differences and re-indexing only when required.

### How it works
- The workflow starts with a manual trigger and loads global configuration values.
- All database tables are discovered and processed one by one inside a loop.
- For each table, a normalized schema representation is generated, and a deterministic hash is calculated.
- A metadata table is checked to determine whether a vector already exists for the table.
- If a vector exists, the stored schema hash is compared with the current hash to detect schema changes.
- When a schema change is detected, the existing vector and metadata are deleted.
- The updated table schema is embedded as a single vector (without chunking) and upserted into the vector database.
- Vector identifiers and schema hashes are persisted for future executions.

### Setup steps
- Set the MySQL database name using mysql_database_name.
- Configure the Pinecone index name using pinecone_index.
- Set the vector namespace using vector_namespace.
- Configure the Pinecone index host using vector_index_host.
- Add your Pinecone API key using pinecone_apikey.
- Select the embedding model using embedding_model.
- Configure text processing options:
    - chunk_size
    - chunk_overlap
- Set the metadata table identifier using dataTable_Id.
- Save and run the workflow manually to perform the initial schema synchronization.

### Limitations
- This workflow indexes database table schemas only. Table data (rows) are not embedded or indexed.
- Each table is stored as a single vector. Very large or highly complex schemas may approach model token limits depending on the selected embedding model.
- Schema changes are detected using a hash-based comparison. Non-structural changes that do not affect the schema representation will not trigger re-indexing.

## 🔗 Nodes Used

HTTP Request, MySQL, Embeddings OpenAI, Recursive Character Text Splitter, Pinecone Vector Store, Default Data Loader

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
