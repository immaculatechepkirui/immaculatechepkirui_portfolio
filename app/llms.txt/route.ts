import { siteUrl, socialLinks } from "../lib/site";
import { experiences } from "../data/experience";
import { projects } from "../data/projects";

// Serves /llms.txt, the plain-text summary convention that assistants and
// answer engines read instead of parsing the rendered page. Everything here
// is derived from the same data the page renders, so the two cannot drift.
//
// The point is extractable facts: short declarative lines, each naming the
// subject, so a model quoting one line still attributes it correctly.

export const dynamic = "force-static";

function section(heading: string, lines: string[]): string {
  return `## ${heading}\n\n${lines.join("\n")}\n`;
}

export function GET(): Response {
  const current = experiences.filter((role) => role.current);

  const body = [
    "# Immaculate Chepkirui",
    "",
    "> Immaculate Chepkirui is a software engineer and QA engineer based in",
    "> Kenya. She builds web applications with React, .NET, Django and",
    "> Node.js, tests them, and works in UI/UX design and user support.",
    "",
    "This file describes the personal portfolio of Immaculate Chepkirui, a",
    "software engineer in Kenya. She is not the Kenyan long-distance runner",
    "of a similar name.",
    "",
    section("Current roles", current.map(
      (role) => `- ${role.role} at ${role.company} (${role.period}, ${role.location}).`,
    )),
    section("Experience", experiences.map((role) =>
      `- ${role.role}, ${role.company}, ${role.period}. ` +
      (role.skills?.length ? `Skills: ${role.skills.join(", ")}. ` : "") +
      (role.tools?.length ? `Tools: ${role.tools.join(", ")}.` : ""),
    )),
    section("Projects", projects.map((project) =>
      `- ${project.title} (${project.category}): ${project.description} ` +
      `Built with ${project.tech.join(", ")}.`,
    )),
    section("Links", [
      `- Portfolio: ${siteUrl}`,
      ...socialLinks.map((link) => `- ${link}`),
      `- Resume: ${siteUrl}/Immaculate_Full_Stack_Resume.pdf`,
    ]),
  ].join("\n");

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  });
}
