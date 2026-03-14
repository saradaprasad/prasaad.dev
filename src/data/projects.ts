export type Project = {
  title: string;
  description: string;
  tags: string[];
  status: "Live" | "In progress" | "Coming soon";
  url: string;
};

export const sections: { title: string; items: Project[] }[] = [
  {
    title: "Data Engineering",
    items: [
      {
        title: "Streaming cost simulator",
        description:
          "Model the cost of Kafka/Kinesis pipelines before you deploy. Partitions, retention, consumer groups — priced out.",
        tags: ["Python", "Streamlit"],
        status: "Coming soon",
        url: "",
      },
      {
        title: "Schema evolution tester",
        description:
          "Validate Avro/Protobuf schema changes against a registry and surface breaking changes before they hit production.",
        tags: ["Python", "Confluent Schema Registry"],
        status: "Coming soon",
        url: "",
      },
      {
        title: "Pipeline completeness tracker",
        description:
          "Track partition-level freshness and completeness across S3-based data lakes. Alert before downstream jobs read stale data.",
        tags: ["Python", "AWS CDK", "DynamoDB"],
        status: "Coming soon",
        url: "",
      },
    ],
  },
  {
    title: "AI/ML",
    items: [
      {
        title: "RAG pipeline with observability",
        description:
          "End-to-end retrieval-augmented generation — chunking, embedding, vector search — with latency and quality metrics baked in.",
        tags: ["Python", "LangChain", "Pinecone", "OpenTelemetry"],
        status: "In progress",
        url: "",
      },
      {
        title: "Feature store from scratch",
        description:
          "Offline + online feature serving with point-in-time correctness. Training-serving parity without the vendor lock-in.",
        tags: ["Python", "Redis", "Parquet", "FastAPI"],
        status: "Coming soon",
        url: "",
      },
      {
        title: "ML evaluation framework",
        description:
          "Automated model evaluation pipeline — versioned test sets, metric tracking, regression gates before deployment.",
        tags: ["Python", "MLflow", "Pandas"],
        status: "Coming soon",
        url: "",
      },
    ],
  },
];

/** Projects to show on homepage (first 3 featured) */
const featuredTitles = [
  "RAG pipeline with observability",
  "Feature store from scratch",
  "Streaming cost simulator",
];

export const featuredProjects = featuredTitles
  .map((title) => sections.flatMap((s) => s.items).find((p) => p.title === title))
  .filter(Boolean) as Project[];

export const statusColor = (s: string) =>
  s === "Live"
    ? "bg-emerald-500/10 text-emerald-600"
    : s === "In progress"
      ? "bg-blue-500/10 text-blue-500"
      : "bg-[var(--codebg)] text-[var(--subtle)]";
