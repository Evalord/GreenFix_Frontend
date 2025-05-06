import { Link } from "react-router-dom";
import "./process.css";

export default function Processes() {
  const processes = [
    {
      name: "Collection (Collector 1)",
      description: "Record waste collection from buildings to MRF",
      icon: (
        <div className="process-icon bg-emerald">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
            />
          </svg>
        </div>
      ),
      href: "/processes/collection-collector1",
    },
    {
      name: "Collection (Collector 2)",
      description: "Record waste collection from MRF to recycling centers",
      icon: (
        <div className="process-icon bg-teal">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
            />
          </svg>
        </div>
      ),
      href: "/processes/collection-collector2",
    },
    {
      name: "Recycling",
      description: "Track and manage recycling processes",
      icon: (
        <div className="process-icon bg-blue">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 12h6m-6 4h6m-6-8h6m-6 12h6m-6-16h6"
            />
          </svg>
        </div>
      ),
      href: "/processes/recycling",
    },
    {
      name: "Manufacturing",
      description: "Monitor manufacturing of recycled products",
      icon: (
        <div className="process-icon bg-orange">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 10h11M9 21V3m0 0L3 10m6-7l6 7"
            />
          </svg>
        </div>
      ),
      href: "/processes/manufacturing",
    },
    {
      name: "Distribution",
      description: "Track distribution of recycled products",
      icon: (
        <div className="process-icon bg-purple">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 10h11M9 21V3m0 0L3 10m6-7l6 7"
            />
          </svg>
        </div>
      ),
      href: "/processes/distribution",
    },
    {
      name: "Inhabitants",
      description: "Manage waste generation by inhabitants",
      icon: (
        <div className="process-icon bg-amber">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 10h11M9 21V3m0 0L3 10m6-7l6 7"
            />
          </svg>
        </div>
      ),
      href: "/processes/inhabitants",
    },
  ];

  const processFlow = [
    {
      title: "Waste Generation",
      description: "Households & Businesses",
      icon: (
        <div className="step-icon bg-emerald">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
            />
          </svg>
        </div>
      ),
    },
    {
      title: "Collection (Collector 1)",
      description: "Buildings to MRF",
      icon: (
        <div className="step-icon bg-teal">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
            />
          </svg>
        </div>
      ),
    },
    {
      title: "Collection (Collector 2)",
      description: "MRF to Recycling Centers",
      icon: (
        <div className="step-icon bg-blue">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
            />
          </svg>
        </div>
      ),
    },
    {
      title: "Recycling",
      description: "Material Recovery",
      icon: (
        <div className="step-icon bg-purple">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 12h6m-6 4h6m-6-8h6m-6 12h6m-6-16h6"
            />
          </svg>
        </div>
      ),
    },
    {
      title: "Manufacturing",
      description: "New Products",
      icon: (
        <div className="step-icon bg-orange">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 10h11M9 21V3m0 0L3 10m6-7l6 7"
            />
          </svg>
        </div>
      ),
    },
    {
      title: "Distribution",
      description: "To Market",
      icon: (
        <div className="step-icon bg-amber">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 10h11M9 21V3m0 0L3 10m6-7l6 7"
            />
          </svg>
        </div>
      ),
    },
  ];

  return (
    <div className="processes-container">
      <div className="processes-header">
        <h1>Processes</h1>
        <p>Manage all waste recycling processes through our integrated platform</p>
      </div>

      <div className="processes-grid">
        {processes.map((process) => (
          <Link key={process.name} to={process.href} className="process-card">
            {process.icon}
            <h3 className="process-title">{process.name}</h3>
            <p className="process-description">{process.description}</p>
          </Link>
        ))}
      </div>

      <div className="process-flow">
        <h2 className="process-flow-header">Circular Economy Process Flow</h2>
        <div className="process-step-container">
          {processFlow.map((step, index) => (
            <div key={index} className="process-step">
              {step.icon}
              <h3 className="step-title">{step.title}</h3>
              <p className="step-description">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}