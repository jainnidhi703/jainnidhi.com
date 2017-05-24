export default [
  {
    name: "Recommendation Engine",
    description: "Recommendation Engine serves feed based on the combination of consumption and default items evaluated by a set of rules. It also builds user's preference aggregating views, clicks, favorites, etc.",
    technologies: ["Java", "DropWizard", "HBase", "Redis"],
  },
  {
    name: "Flink Aggregations",
    description: "Batch and Stream jobs(Lambda Architecture) to aggregate the app events, build user profile and extract out necessary information such as installs, clicks, etc",
    technologies: ["Java", "Flink", "Kafka", "MongoDB", "Hadoop"]
  },
  {
    name: "Content Ingestion System",
    description: "Multilingual content is tagged and enriched with metadata such as newspapers, language, publisher, similar items, etc",
    technologies: ["Java", "NodeJS", "Elastic", "DropWizard", "Kafka"]
  },
  {
    name: "jainnidhi.com",
    gitUrl: "https://github.com/jainnidhi703/jainnidhi.com",
    description: "Responsive single page personal website",
    technologies: ["React", "CSS"]
  },
  {
    name: "History Reconstruction",
    gitUrl: "https://github.com/jainnidhi703/HistoryReconstruction",
    description: "Summarize News documents in a chronologically sorted order using Lucene to find similarity scores",
    technologies: ["Java", "Lucene"]
  },
  {
    name: "Open Source Contribution",
    projectUrl: "https://okular.kde.org/",
    projectUrlText: "Okular KDE",
    description: "Worked on issues related to audio support in epub for Okular KDE",
    technologies: ["Qt", "C++"]
  }
];
