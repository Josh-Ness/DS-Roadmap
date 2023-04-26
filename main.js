const data = [
    // Programming Languages
    { id: "Python", group: 1 },
    { id: "R", group: 1 },
    { id: "SQL", group: 1 },
  
    // Data Cleaning and Preprocessing
    { id: "Data wrangling", group: 2 },
    { id: "Handling missing data", group: 2 },
    { id: "Feature engineering", group: 2 },
    { id: "Feature scaling", group: 2 },
  
    // Data Visualization
    { id: "Matplotlib", group: 3 },
    { id: "Seaborn", group: 3 },
    { id: "Plotly", group: 3 },
    { id: "ggplot2", group: 3 },
    { id: "Tableau", group: 3 },
  
    // Statistics and Probability
    { id: "Descriptive statistics", group: 4 },
    { id: "Inferential statistics", group: 4 },
    { id: "Probability distributions", group: 4 },
    { id: "Hypothesis testing", group: 4 },
    { id: "Bayesian statistics", group: 4 },
  
    // Machine Learning
    { id: "Supervised learning", group: 5 },
    { id: "Unsupervised learning", group: 5 },
    { id: "Reinforcement learning", group: 5 },
    { id: "Model evaluation and validation", group: 5 },
    { id: "Ensemble methods", group: 5 },
  
    // Deep Learning
    { id: "Artificial Neural Networks", group: 6 },
    { id: "Convolutional Neural Networks", group: 6 },
    { id: "Recurrent Neural Networks", group: 6 },
    { id: "Autoencoders", group: 6 },
    { id: "Generative Adversarial Networks", group: 6 },
  
    // Natural Language Processing
    { id: "Text preprocessing", group: 7 },
    { id: "Text classification", group: 7 },
    { id: "Sentiment analysis", group: 7 },
    { id: "Topic modeling", group: 7 },
    { id: "Named Entity Recognition", group: 7 },
  
    // Time Series Analysis
    { id: "Time series decomposition", group: 8 },
    { id: "Autoregression models", group: 8 },
    { id: "Moving average models", group: 8 },
    { id: "Exponential smoothing state space models", group: 8 },
    { id: "Forecasting", group: 8 },
  
    // Data Engineering
    { id: "Data storage (SQL, NoSQL)", group: 9 },
    { id: "Data pipelines", group: 9 },
    { id: "Data integration", group: 9 },
    { id: "Data warehousing", group: 9 },
    { id: "ETL processes", group: 9 },
  
    // Big Data Technologies
    { id: "Hadoop", group: 10 },
    { id: "Spark", group: 10 },
    { id: "Kafka", group: 10 },
    { id: "Hive", group: 10 },
    { id: "Pig", group: 10 },

        // Natural Language Processing
    { source: "Text preprocessing", target: "Text classification", value: 1 },
    { source: "Text preprocessing", target: "Sentiment analysis", value: 1 },
    { source: "Text classification", target: "Topic modeling", value: 1 },
    { source: "Sentiment analysis", target: "Named Entity Recognition", value: 1 },

    // Time Series Analysis
    { source: "Time series decomposition", target: "Autoregression models", value: 1 },
    { source: "Time series decomposition", target: "Moving average models", value: 1 },
    { source: "Autoregression models", target: "Exponential smoothing state space models", value: 1 },
    { source: "Moving average models", target: "Forecasting", value: 1 },

    // Data Engineering
    { source: "Data storage (SQL, NoSQL)", target: "Data pipelines", value: 1 },
    { source: "Data pipelines", target: "Data integration", value: 1 },
    { source: "Data integration", target: "Data warehousing", value: 1 },
    { source: "Data warehousing", target: "ETL processes", value: 1 },

    // Big Data Technologies
    { source: "Hadoop", target: "Spark", value: 1 },
    { source: "Hadoop", target: "Kafka", value: 1 },
    { source: "Spark", target: "Hive", value: 1 },
    { source: "Kafka", target: "Pig", value: 1 },
  ];
  
  const links = [
      // Programming Languages
  { source: "Python", target: "Data wrangling", value: 1 },
  { source: "Python", target: "Matplotlib", value: 1 },
  { source: "Python", target: "Seaborn", value: 1 },
  { source: "Python", target: "Plotly", value: 1 },
  { source: "Python", target: "Supervised learning", value: 1 },
  { source: "Python", target: "Unsupervised learning", value: 1 },
  { source: "Python", target: "Reinforcement learning", value: 1 },
  { source: "Python", target: "Artificial Neural Networks", value: 1 },

  { source: "R", target: "Data wrangling", value: 1 },
  { source: "R", target: "ggplot2", value: 1 },
  { source: "R", target: "Supervised learning", value: 1 },
  { source: "R", target: "Unsupervised learning", value: 1 },
  { source: "R", target: "Reinforcement learning", value: 1 },

  // Data Cleaning and Preprocessing
  { source: "Data wrangling", target: "Handling missing data", value: 1 },
  { source: "Handling missing data", target: "Feature engineering", value: 1 },
  { source: "Feature engineering", target: "Feature scaling", value: 1 },

  // Data Visualization
  { source: "Matplotlib", target: "Seaborn", value: 1 },
  { source: "Matplotlib", target: "Plotly", value: 1 },
  { source: "Seaborn", target: "Plotly", value: 1 },
  { source: "ggplot2", target: "Tableau", value: 1 },

  // Statistics and Probability
  { source: "Descriptive statistics", target: "Inferential statistics", value: 1 },
  { source: "Descriptive statistics", target: "Probability distributions", value: 1 },
  { source: "Inferential statistics", target: "Hypothesis testing", value: 1 },
  { source: "Probability distributions", target: "Hypothesis testing", value: 1 },
  { source: "Hypothesis testing", target: "Bayesian statistics", value: 1 },

  // Machine Learning
  { source: "Supervised learning", target: "Model evaluation and validation", value: 1 },
  { source: "Unsupervised learning", target: "Model evaluation and validation", value: 1 },
  { source: "Reinforcement learning", target: "Model evaluation and validation", value: 1 },
  { source: "Model evaluation and validation", target: "Ensemble methods", value: 1 },

  // Deep Learning
  { source: "Artificial Neural Networks", target: "Convolutional Neural Networks", value: 1 },
  { source: "Artificial Neural Networks", target: "Recurrent Neural Networks", value: 1 },
  { source: "Convolutional Neural Networks", target: "Autoencoders", value: 1 },
  { source: "Recurrent Neural Networks", target: "Autoencoders", value: 1 },
  { source: "Autoencoders", target: "Generative Adversarial Networks", value: 1 },


  ];
  
  const width = 1000;
  const height = 800;
  
  const color = d3.scaleOrdinal(d3.schemeCategory10);
  
  const simulation = d3
    .forceSimulation(data)
    .force(
      "link",
      d3.forceLink(links).id((d) => d.id)
    )
    .force("charge", d3.forceManyBody().strength(-500))
    .force("center", d3.forceCenter(width / 2, height / 2));
  
  const svg = d3
    .select("body")
    .append("svg")
    .attr("width", width)
    .attr("height", height);
  
  const link = svg
    .selectAll("line")
    .data(links)
    .join("line")
    .attr("stroke", "#999")
    .attr("stroke-opacity", 0.6)
    .attr("stroke-width", (d) => Math.sqrt(d.value));
  
  const node = svg
    .selectAll("circle")
    .data(data)
    .join("circle")
    .attr("r", 15)
    .attr("fill", (d) => color(d.group))
    .call(drag(simulation));
  
  node.append("title").text((d) => d.id);
  
  simulation.on("tick", () => {
    link
      .attr("x1", (d) => d.source.x)
      .attr("y1", (d) => d.source.y)
      .attr("x2", (d) => d.target.x)
      .attr("y2", (d) => d.target.y);
  
    node.attr("cx", (d) => d.x).attr("cy", (d) => d.y);
  });
  
  function drag(simulation) {
    function dragstarted(event) {
      if (!event.active) simulation.alphaTarget(0.3).restart();
      event.subject.fx = event.subject.x;
      event.subject.fy = event.subject.y;
    }
  
    function dragged(event) {
      event.subject.fx = event.x;
      event.subject.fy = event.y;
    }
  
    function dragended(event) {
      if (!event.active) simulation.alphaTarget(0);
      event.subject.fx = null;
      event.subject.fy = null;
    }
  
    return d3.drag()
      .on("start", dragstarted)
      .on("drag", dragged)
      .on("end", dragended);
  }
  