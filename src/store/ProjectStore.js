class ProjectStore {
  static getProjectStore() {
    return [
      { name: "Recommendation Engine" },
      { name: "Content Ingestion System" },
      { name: "Flink Aggregations" },
      {
        name: "History Reconstruction",
        gitUrl: "https://github.com/jainnidhi703/HistoryReconstruction"
      },
      {
        name: "Open Source Contribution",
        projectUrl: "https://okular.kde.org/"
      }
    ];
  }
}

export default ProjectStore;
