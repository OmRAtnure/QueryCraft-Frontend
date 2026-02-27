import { BookOpen, ChevronRight, Clock, Tag } from "@/components/icons";
import { useState } from "react";

const tutorials = [
  {
    id: 1,
    title: "Introduction to SQL",
    category: "Basics",
    readTime: "5 min",
    content: `SQL (Structured Query Language) is the standard language for managing and manipulating relational databases. It allows you to create, read, update, and delete data stored in tables.

**Why Learn SQL?**
- SQL is used by nearly every company that stores data
- It's the foundation for data analysis, backend development, and business intelligence
- SQL skills are highly sought after in the job market

**Key Concepts:**
- **Database**: A structured collection of data organized into tables
- **Table**: A set of rows and columns, similar to a spreadsheet
- **Row (Record)**: A single entry in a table
- **Column (Field)**: A specific attribute of a record
- **Primary Key**: A unique identifier for each row in a table

SQL is declarative — you tell the database *what* you want, not *how* to get it.`,
  },
  {
    id: 2,
    title: "SELECT Statements",
    category: "Queries",
    readTime: "7 min",
    content: `The SELECT statement is the most commonly used SQL command. It retrieves data from one or more tables.

**Basic Syntax:**
\`\`\`sql
SELECT column1, column2
FROM table_name;
\`\`\`

**Select All Columns:**
\`\`\`sql
SELECT * FROM employees;
\`\`\`

**Select Specific Columns:**
\`\`\`sql
SELECT first_name, last_name, email
FROM employees;
\`\`\`

**Using Aliases:**
\`\`\`sql
SELECT first_name AS "First Name", last_name AS "Last Name"
FROM employees;
\`\`\`

**DISTINCT — Remove Duplicates:**
\`\`\`sql
SELECT DISTINCT department
FROM employees;
\`\`\`

**Tips:**
- Always select only the columns you need for better performance
- Use aliases to make output more readable
- DISTINCT can be slow on large datasets — use it wisely`,
  },
  {
    id: 3,
    title: "Filtering with WHERE",
    category: "Queries",
    readTime: "8 min",
    content: `The WHERE clause filters rows based on conditions, returning only the data you need.

**Basic Syntax:**
\`\`\`sql
SELECT * FROM employees
WHERE department = 'Engineering';
\`\`\`

**Comparison Operators:**
- \`=\` Equal to
- \`<>\` or \`!=\` Not equal to
- \`>\` Greater than
- \`<\` Less than
- \`>=\` Greater than or equal
- \`<=\` Less than or equal

**Logical Operators:**
\`\`\`sql
-- AND: Both conditions must be true
SELECT * FROM employees
WHERE department = 'Engineering' AND salary > 80000;

-- OR: At least one condition must be true
SELECT * FROM employees
WHERE department = 'Engineering' OR department = 'Design';

-- NOT: Negates a condition
SELECT * FROM employees
WHERE NOT department = 'HR';
\`\`\`

**Special Operators:**
\`\`\`sql
-- BETWEEN: Range of values
SELECT * FROM orders WHERE amount BETWEEN 100 AND 500;

-- IN: Match any value in a list
SELECT * FROM employees WHERE department IN ('Engineering', 'Design');

-- LIKE: Pattern matching
SELECT * FROM employees WHERE name LIKE 'J%';  -- starts with J
SELECT * FROM employees WHERE email LIKE '%@gmail.com';  -- ends with @gmail.com

-- IS NULL: Check for null values
SELECT * FROM employees WHERE manager_id IS NULL;
\`\`\``,
  },
  {
    id: 4,
    title: "Sorting & Limiting Results",
    category: "Queries",
    readTime: "5 min",
    content: `Control the order and number of results returned by your queries.

**ORDER BY — Sorting Results:**
\`\`\`sql
-- Ascending (default)
SELECT * FROM employees ORDER BY last_name ASC;

-- Descending
SELECT * FROM employees ORDER BY salary DESC;

-- Multiple columns
SELECT * FROM employees ORDER BY department, last_name;
\`\`\`

**LIMIT — Restrict Number of Rows:**
\`\`\`sql
-- Get the top 10 highest-paid employees
SELECT * FROM employees
ORDER BY salary DESC
LIMIT 10;
\`\`\`

**OFFSET — Skip Rows (Pagination):**
\`\`\`sql
-- Get rows 11-20
SELECT * FROM employees
ORDER BY id
LIMIT 10 OFFSET 10;
\`\`\`

**Combining Everything:**
\`\`\`sql
SELECT first_name, last_name, salary
FROM employees
WHERE department = 'Engineering'
ORDER BY salary DESC
LIMIT 5;
\`\`\`

This query finds the top 5 highest-paid engineers.`,
  },
  {
    id: 5,
    title: "JOINs — Combining Tables",
    category: "Advanced",
    readTime: "10 min",
    content: `JOINs let you combine data from two or more tables based on related columns.

**INNER JOIN — Only Matching Rows:**
\`\`\`sql
SELECT employees.name, departments.name AS department
FROM employees
INNER JOIN departments ON employees.dept_id = departments.id;
\`\`\`

**LEFT JOIN — All Left + Matching Right:**
\`\`\`sql
SELECT employees.name, departments.name
FROM employees
LEFT JOIN departments ON employees.dept_id = departments.id;
\`\`\`
Returns all employees, even those without a department.

**RIGHT JOIN — All Right + Matching Left:**
\`\`\`sql
SELECT employees.name, departments.name
FROM employees
RIGHT JOIN departments ON employees.dept_id = departments.id;
\`\`\`
Returns all departments, even those without employees.

**FULL OUTER JOIN — All Rows From Both:**
\`\`\`sql
SELECT employees.name, departments.name
FROM employees
FULL OUTER JOIN departments ON employees.dept_id = departments.id;
\`\`\`

**When to Use Which JOIN:**
| JOIN Type | Use Case |
|-----------|----------|
| INNER | Only want matching data from both tables |
| LEFT | Want all records from the primary table |
| RIGHT | Want all records from the secondary table |
| FULL OUTER | Want everything from both tables |`,
  },
  {
    id: 6,
    title: "INSERT, UPDATE & DELETE",
    category: "Data Manipulation",
    readTime: "8 min",
    content: `Beyond reading data, SQL lets you add, modify, and remove records.

**INSERT — Adding New Rows:**
\`\`\`sql
INSERT INTO employees (first_name, last_name, email, department)
VALUES ('Jane', 'Doe', 'jane@company.com', 'Engineering');

-- Insert multiple rows
INSERT INTO employees (first_name, last_name, department)
VALUES
  ('Alice', 'Smith', 'Design'),
  ('Bob', 'Jones', 'Marketing');
\`\`\`

**UPDATE — Modifying Existing Rows:**
\`\`\`sql
UPDATE employees
SET salary = 95000, department = 'Engineering'
WHERE id = 42;
\`\`\`

⚠️ **Always use a WHERE clause with UPDATE!** Without it, every row gets updated.

**DELETE — Removing Rows:**
\`\`\`sql
DELETE FROM employees
WHERE id = 42;
\`\`\`

⚠️ **Always use a WHERE clause with DELETE!** Without it, all rows are deleted.

**Safe Practice:**
Before running UPDATE or DELETE, first run a SELECT with the same WHERE clause to verify which rows will be affected:
\`\`\`sql
-- Check first
SELECT * FROM employees WHERE department = 'Temp';
-- Then delete
DELETE FROM employees WHERE department = 'Temp';
\`\`\``,
  },
  {
    id: 7,
    title: "Aggregate Functions & GROUP BY",
    category: "Advanced",
    readTime: "9 min",
    content: `Aggregate functions perform calculations across rows and return a single result.

**Common Aggregate Functions:**
\`\`\`sql
SELECT COUNT(*) FROM employees;          -- Number of rows
SELECT SUM(salary) FROM employees;       -- Total salary
SELECT AVG(salary) FROM employees;       -- Average salary
SELECT MIN(salary) FROM employees;       -- Lowest salary
SELECT MAX(salary) FROM employees;       -- Highest salary
\`\`\`

**GROUP BY — Aggregate Per Group:**
\`\`\`sql
SELECT department, COUNT(*) AS employee_count, AVG(salary) AS avg_salary
FROM employees
GROUP BY department;
\`\`\`

**HAVING — Filter Groups:**
\`\`\`sql
SELECT department, AVG(salary) AS avg_salary
FROM employees
GROUP BY department
HAVING AVG(salary) > 80000;
\`\`\`

**Important:** WHERE filters rows *before* grouping, HAVING filters groups *after* aggregation.

**Full Example:**
\`\`\`sql
SELECT department, COUNT(*) AS total, ROUND(AVG(salary), 2) AS avg_sal
FROM employees
WHERE hire_date > '2020-01-01'
GROUP BY department
HAVING COUNT(*) >= 5
ORDER BY avg_sal DESC;
\`\`\`

This finds departments with 5+ employees hired after 2020, sorted by average salary.`,
  },
];

const categories = ["All", ...Array.from(new Set(tutorials.map((t) => t.category)))];

const Tutorials = () => {
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered = activeCategory === "All" ? tutorials : tutorials.filter((t) => t.category === activeCategory);
  const selected = tutorials.find((t) => t.id === selectedId);

  return (
    <div className="space-y-6 animate-fade-in">
      <div>
        <h1 className="text-2xl font-heading font-bold text-foreground">SQL Tutorials</h1>
        <p className="text-muted-foreground mt-1">Step-by-step text guides to master SQL from the ground up.</p>
      </div>

      {/* Category filters */}
      <div className="flex flex-wrap gap-2">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => { setActiveCategory(cat); setSelectedId(null); }}
            className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-200 ${
              activeCategory === cat
                ? "bg-primary text-primary-foreground shadow-soft"
                : "bg-muted text-muted-foreground hover:bg-muted/80"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid lg:grid-cols-[340px_1fr] gap-6">
        {/* Tutorial list */}
        <div className="space-y-2 max-h-[calc(100vh-240px)] overflow-auto pr-1">
          {filtered.map((t) => (
            <button
              key={t.id}
              onClick={() => setSelectedId(t.id)}
              className={`w-full text-left rounded-xl border p-4 transition-all duration-200 ${
                selectedId === t.id
                  ? "border-primary bg-primary/5 shadow-soft"
                  : "border-border bg-card hover:shadow-card hover:-translate-y-0.5"
              }`}
            >
              <div className="flex items-start justify-between gap-2">
                <div className="flex-1 min-w-0">
                  <h3 className="font-heading font-semibold text-foreground text-sm truncate">{t.title}</h3>
                  <div className="flex items-center gap-3 mt-1.5 text-xs text-muted-foreground">
                    <span className="inline-flex items-center gap-1"><Tag className="w-3 h-3" />{t.category}</span>
                    <span className="inline-flex items-center gap-1"><Clock className="w-3 h-3" />{t.readTime}</span>
                  </div>
                </div>
                <ChevronRight className={`w-4 h-4 text-muted-foreground shrink-0 mt-0.5 transition-transform ${selectedId === t.id ? "text-primary rotate-90" : ""}`} />
              </div>
            </button>
          ))}
        </div>

        {/* Content area */}
        <div className="rounded-2xl border border-border bg-card p-6 md:p-8 shadow-card min-h-[400px]">
          {selected ? (
            <div className="animate-fade-in">
              <div className="flex items-center gap-3 mb-1">
                <span className="px-2.5 py-0.5 rounded-full bg-primary/10 text-primary text-xs font-medium">{selected.category}</span>
                <span className="text-xs text-muted-foreground inline-flex items-center gap-1"><Clock className="w-3 h-3" />{selected.readTime}</span>
              </div>
              <h2 className="text-xl md:text-2xl font-heading font-bold text-foreground mt-2 mb-5">{selected.title}</h2>
              <div className="prose prose-sm max-w-none text-foreground/90 leading-relaxed">
                {selected.content.split("\n").map((line, i) => {
                  if (line.startsWith("```sql")) return <div key={i} className="mt-3" />;
                  if (line.startsWith("```")) return <div key={i} className="mb-3" />;
                  if (line.startsWith("**") && line.endsWith("**")) {
                    return <h3 key={i} className="font-heading font-bold text-foreground mt-5 mb-2 text-base">{line.replace(/\*\*/g, "")}</h3>;
                  }
                  if (line.startsWith("- ")) {
                    return <li key={i} className="ml-4 text-sm text-muted-foreground list-disc">{renderInline(line.slice(2))}</li>;
                  }
                  if (line.startsWith("| ")) {
                    return <p key={i} className="text-sm font-mono text-muted-foreground">{line}</p>;
                  }
                  if (line.startsWith("⚠️")) {
                    return <p key={i} className="text-sm text-accent font-medium bg-accent/10 px-3 py-2 rounded-lg mt-2">{line}</p>;
                  }
                  if (line.trim().startsWith("SELECT") || line.trim().startsWith("INSERT") || line.trim().startsWith("UPDATE") || line.trim().startsWith("DELETE") || line.trim().startsWith("FROM") || line.trim().startsWith("WHERE") || line.trim().startsWith("ORDER") || line.trim().startsWith("LIMIT") || line.trim().startsWith("GROUP") || line.trim().startsWith("HAVING") || line.trim().startsWith("INNER") || line.trim().startsWith("LEFT") || line.trim().startsWith("RIGHT") || line.trim().startsWith("FULL") || line.trim().startsWith("JOIN") || line.trim().startsWith("SET") || line.trim().startsWith("VALUES") || line.trim().startsWith("--") || line.trim().startsWith("ON ")) {
                    return <p key={i} className="font-mono text-xs bg-muted/80 px-3 py-0.5 text-foreground/80">{line}</p>;
                  }
                  if (line.trim() === "") return <div key={i} className="h-2" />;
                  return <p key={i} className="text-sm text-muted-foreground leading-relaxed">{renderInline(line)}</p>;
                })}
              </div>
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center h-full text-center py-16">
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <BookOpen className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-heading font-bold text-foreground mb-1">Select a tutorial</h3>
              <p className="text-sm text-muted-foreground max-w-xs">Choose a tutorial from the list to start reading and learning SQL concepts.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

function renderInline(text: string) {
  const parts = text.split(/(`[^`]+`|\*\*[^*]+\*\*)/g);
  return parts.map((part, i) => {
    if (part.startsWith("`") && part.endsWith("`")) {
      return <code key={i} className="px-1.5 py-0.5 rounded bg-muted text-xs font-mono text-primary">{part.slice(1, -1)}</code>;
    }
    if (part.startsWith("**") && part.endsWith("**")) {
      return <strong key={i} className="font-semibold text-foreground">{part.slice(2, -2)}</strong>;
    }
    return <span key={i}>{part}</span>;
  });
}

export default Tutorials;
