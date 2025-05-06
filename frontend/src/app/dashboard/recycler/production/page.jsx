import React from "react";
import styles from "./production.module.css";
import Card from "../../../../Components/dashboard/Card";

const OverviewCard = ({ icon, title, value }) => {
  return (
    <div className={styles.overviewCard}>
      <div className={styles.overviewIcon}>{icon}</div>
      <div className={styles.overviewContent}>
        <h3>{title}</h3>
        <div className={styles.overviewValue}>{value}</div>
      </div>
    </div>
  );
};

const BatchItem = ({ batch }) => {
  return (
    <div className={styles.batchItem}>
      <div className={styles.batchHeader}>
        <div className={styles.batchInfo}>
          <h3>{batch.id}</h3>
          <span className={styles.batchType}>{batch.type}</span>
        </div>
        <div
          className={`${styles.batchStatus} ${
            batch.status === "In Progress"
              ? styles.statusInProgress
              : batch.status === "Completed"
              ? styles.statusCompleted
              : styles.statusPending
          }`}
        >
          {batch.status}
        </div>
      </div>
      <div className={styles.batchProgress}>
        <div className={styles.progressLabel}>
          <span>Progress</span>
          <span>{batch.progress}%</span>
        </div>
        <div className={styles.progressBar}>
          <div
            className={styles.progressFill}
            style={{ width: `${batch.progress}%` }}
          ></div>
        </div>
      </div>
      <div className={styles.batchDetails}>
        {["inputDetails", "outputDetails", "processingDetails"].map(
          (detailType, index) => (
            <div key={index} className={styles.detailColumn}>
              {batch[detailType].map((detail, idx) => (
                <div key={idx} className={styles.detailItem}>
                  <span className={styles.detailLabel}>{detail.label}</span>
                  <span className={styles.detailValue}>{detail.value}</span>
                </div>
              ))}
            </div>
          )
        )}
      </div>
      <div className={styles.batchActions}>
        <button className={styles.actionButton}>View Details</button>
        <button className={styles.actionButton}>Update Status</button>
        <button className={styles.actionButton}>Quality Check</button>
      </div>
    </div>
  );
};

const MetricCard = ({ title, metrics }) => {
  return (
    <div className={styles.metricCard}>
      <h3>{title}</h3>
      <div className={styles.metricDetails}>
        {metrics.map((metric, index) => (
          <div key={index} className={styles.metricItem}>
            <span className={styles.metricLabel}>{metric.label}</span>
            <div className={styles.metricBar}>
              <div
                className={styles.metricFill}
                style={{ width: `${metric.percentage}%` }}
              ></div>
            </div>
            <span className={styles.metricValue}>{metric.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

const ResourceCard = ({ icon, title, value, trend, period }) => {
  return (
    <div className={styles.resourceCard}>
      <div className={styles.resourceIcon}>{icon}</div>
      <div className={styles.resourceContent}>
        <h3>{title}</h3>
        <div className={styles.resourceValue}>{value}</div>
        <div className={styles.resourceComparison}>
          <span className={styles.resourceTrend}>{trend}</span>
          <span className={styles.resourcePeriod}>{period}</span>
        </div>
      </div>
    </div>
  );
};

const RecyclerProductionPage = () => {
  const overviewCards = [
    { icon: "♻️", title: "Active Production Batches", value: "4" },
    { icon: "⏱️", title: "Avg. Processing Time", value: "3.2 hours" },
    { icon: "📦", title: "Today's Output", value: "2.8 tons" },
    { icon: "🔍", title: "Quality Pass Rate", value: "98.2%" },
  ];

  const batches = [
    {
      id: "Batch #PET-2025-0142",
      type: "PET Bottles → Clear PET Flakes",
      status: "In Progress",
      progress: 75,
      inputDetails: [
        { label: "Input Material", value: "PET Bottles (Clear)" },
        { label: "Input Quantity", value: "2.5 tons" },
        { label: "Start Time", value: "Today, 08:30 AM" },
      ],
      outputDetails: [
        { label: "Output Material", value: "PET Flakes (Clear)" },
        { label: "Expected Output", value: "2.2 tons" },
        { label: "Est. Completion", value: "Today, 02:30 PM" },
      ],
      processingDetails: [
        { label: "Processing Line", value: "Line 2" },
        { label: "Operator", value: "James Okonkwo" },
        { label: "Quality Target", value: "Grade A (Food)" },
      ],
    },
  ];

  const qualityMetrics = [
    {
      title: "PET Flakes (Clear)",
      metrics: [
        { label: "Purity", percentage: 98, value: "98%" },
        { label: "Moisture", percentage: 95, value: "0.5%" },
        { label: "Color", percentage: 90, value: "90%" },
      ],
    },
  ];

  const resourceCards = [
    {
      icon: "💧",
      title: "Water Usage",
      value: "12,450 liters",
      trend: "↓ 8%",
      period: "vs. last week",
    },
  ];

  return (
    <div className={styles.production}>
      <div className={styles.pageHeader}>
        <h1>Production Management</h1>
        <p>Track and manage your recycling production processes</p>
        <div className={styles.headerActions}>
          <button className={styles.primaryButton}>
            Start New Production Batch
          </button>
          <button className={styles.secondaryButton}>
            View Production History
          </button>
        </div>
      </div>

      <div className={styles.overviewCards}>
        {overviewCards.map((card, index) => (
          <OverviewCard
            key={index}
            icon={card.icon}
            title={card.title}
            value={card.value}
          />
        ))}
      </div>

      <div className={styles.activeBatches}>
        <Card title="Active Production Batches">
          <div className={styles.batchList}>
            {batches.map((batch, index) => (
              <BatchItem key={index} batch={batch} />
            ))}
          </div>
        </Card>
      </div>

      <div className={styles.qualityMetrics}>
        <Card title="Quality Metrics">
          <div className={styles.metricsGrid}>
            {qualityMetrics.map((metric, index) => (
              <MetricCard key={index} title={metric.title} metrics={metric.metrics} />
            ))}
          </div>
        </Card>
      </div>

      <div className={styles.resourceUsage}>
        <Card title="Resource Usage">
          <div className={styles.resourceGrid}>
            {resourceCards.map((card, index) => (
              <ResourceCard
                key={index}
                icon={card.icon}
                title={card.title}
                value={card.value}
                trend={card.trend}
                period={card.period}
              />
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
};

export default RecyclerProductionPage;