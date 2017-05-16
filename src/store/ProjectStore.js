class ProjectStore {
  static getProjectStore() {
    return [
      {
        name: "Recommendation Engine",
        description: "",
        technologies: ["Java", "DropWizard", "HBase", "Redis"]
      },
      {
        name: "Content Ingestion System",
        description: "",
        technologies: ["Java", "NodeJS", "Elastic", "DropWizard", "Kafka"]
      },
      {
        name: "Flink Aggregations",
        description: "",
        technologies: ["Java", "Flink", "Kafka", "MongoDB", "Hadoop"]
      },
      {
        name: "History Reconstruction",
        gitUrl: "https://github.com/jainnidhi703/HistoryReconstruction",
        description: "",
        technologies: ["Java", "Lucene"]
      },
      {
        name: "Open Source Contribution",
        projectUrl: "https://okular.kde.org/",
        description: "",
        technologies: ["Qt","C++"]
      }
    ];
  }
}

export default ProjectStore;
