#!/usr/bin/env node

// Import dependencies
import chalk from "chalk";
import boxen from "boxen";

// ---- Resume data (edit this for yourself) ----
const resume = {
  name: "Sumit Sengar",
  title: "Full Stack Developer",
  location: "Bangalore, India",
  linkedin: "https://linkedin.com/in/sengarsumit",
  email: "sengarsumit45@gmail.com",
  summary: "Backend-focused full-stack developer skilled in Node.js, Spring Boot, React.",
  skills: ["Java", "Node.js", "Spring Boot", "React", "MongoDB", "MySQL", "Docker"],
  experience: [
    {
      role: "Technical Support Engineer",
      company: "Learnyst",
      period: "Feb 2025 - July 2025",
      bullets: [
        "Handling backend issues",
        "API debugging",
        "CI/CD pipeline support"
      ]
    },
    {
      role: "Software Developer",
      company: "Accenture",
      period: "2023 - 2025",
      bullets: [
        "Built REST APIs in Java/Spring Boot",
        "Worked on React frontends",
        "Integrated with MySQL and MongoDB"
      ]
    }
  ],
  education: [
    {
      degree: "B.Tech — Information Technology",
      school: "GGSIPU",
      year: "2024",
      grade: "8.8 CGPA"
    }
  ]
};
// ---- end resume data ----

// Print header box
function printHeader() {
  const name = chalk.bold.white(resume.name);
  const title = chalk.green(resume.title);
  const link = chalk.cyan(resume.linkedin);
  const email = chalk.yellow(resume.email);
  const loc = chalk.magenta(resume.location);

  const header = `${name} — ${title}\n${loc}\n${link} • ${email}`;
  console.log(boxen(header, { padding: 1, margin: 1, borderStyle: "round" }));
}

// Print section with title
function printSection(title, content) {
  console.log(chalk.bold.underline(title));
  console.log(content + "\n");
}

// Print list (with bullets)
function printList(items) {
  items.forEach(it => console.log(" • " + it));
  console.log("");
}

// Main printer
function main() {
  printHeader();

  printSection("Summary", resume.summary);

  printSection("Skills", resume.skills.join(" • "));

  const expContent = resume.experience.map(exp => {
    const bullets = exp.bullets.map(b => "   - " + b).join("\n");
    return `${chalk.bold(exp.role)} at ${chalk.italic(exp.company)} (${exp.period})\n${bullets}`;
  }).join("\n\n");
  printSection("Experience", expContent);

  const eduContent = resume.education.map(e =>
    `${chalk.bold(e.degree)}, ${e.school} — ${e.year} (${e.grade})`
  ).join("\n");
  printSection("Education", eduContent);
}

// Run main
main();
