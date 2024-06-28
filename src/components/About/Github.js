import React, { useEffect, useState } from "react";
import GitHubCalendar from "react-github-calendar";
import { Row, Col } from "react-bootstrap";
import { Octokit } from "@octokit/rest";

function Github() {
  const [topLanguages, setTopLanguages] = useState([]);

  useEffect(() => {
    const fetchTopLanguages = async () => {
      const octokit = new Octokit();
      let languageCount = {};

      const repos = await octokit.repos.listForUser({ username: "Matthew-Gallardo" });

      for (const repo of repos.data) {
        const languages = await octokit.repos.listLanguages({
          owner: "Matthew-Gallardo",
          repo: repo.name,
        });

        for (const [language, count] of Object.entries(languages.data)) {
          if (language !== "HTML" && language !== "Jupyter Notebook") {
            if (languageCount[language]) {
              languageCount[language] += count;
            } else {
              languageCount[language] = count;
            }
          }
        }
      }

      const totalBytes = Object.values(languageCount).reduce((acc, count) => acc + count, 0);
      const sortedLanguages = Object.entries(languageCount)
        .sort((a, b) => b[1] - a[1])
        .slice(0, 5)
        .map(([language, count]) => [language, ((count / totalBytes) * 100).toFixed(2)]);

      setTopLanguages(sortedLanguages);
    };

    fetchTopLanguages();
  }, []);

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
      <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
        Days I <strong className="purple">Code</strong>
      </h1>
      <GitHubCalendar
        username="Matthew-Gallardo"
        blockSize={15}
        blockMargin={5}
        color="#c084f5"
        fontSize={16}
      />
      <Col style={{ marginTop: "20px", textAlign: "center" }}>
        <h2 className="project-heading">
          Top <strong className="purple">Languages</strong>
        </h2>
        <ul style={{ listStyleType: "none", padding: 0 }}>
          {topLanguages.map(([language, percentage]) => (
            <li key={language} style={{ fontSize: "18px" }}>
              {language}: {percentage}%
            </li>
          ))}
        </ul>
      </Col>
    </Row>
  );
}

export default Github;
