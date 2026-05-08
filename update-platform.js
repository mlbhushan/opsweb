const fs = require('fs');
const path = require('path');

const platformDir = path.join(__dirname, 'src', 'app', 'platform');

const relatedModules = [
  { title: "Field Execution", href: "/platform/field-execution", description: "Ensure every job is completed" },
  { title: "Scheduling & Dispatch", href: "/platform/scheduling", description: "Right crew, right job, right time" },
  { title: "Inspections", href: "/platform/inspections", description: "Audit-ready digital forms" },
];

const relatedModulesStr = JSON.stringify(relatedModules, null, 2).replace(/\n/g, '\n  ');

function updateFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');

  if (!content.includes('ModulePageData')) {
    return;
  }

  let modified = false;

  // Add heroImage if missing
  if (!content.includes('heroImage:')) {
    content = content.replace(
      /(body:\s*".*?",)/,
      `$1\n  heroImage: "https://images.unsplash.com/photo-1581092921461-eab62e97a780?auto=format&fit=crop&w=1400&q=80",`
    );
    modified = true;
  }

  // Add problemImage, solutionImage, relatedModules if missing
  if (!content.includes('problemImage:')) {
    const imagesAndModules = `
  problemImage: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=1200&q=80",
  solutionImage: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=80",
  relatedModules: ${relatedModulesStr},
};`;
    
    // Replace the end of the data object
    content = content.replace(/\n};\n+(export default function )/, imagesAndModules + '\n\n$1');
    modified = true;
  }

  if (modified) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Updated: ${filePath}`);
  }
}

function traverseDir(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      traverseDir(fullPath);
    } else if (file === 'page.tsx') {
      updateFile(fullPath);
    }
  }
}

traverseDir(platformDir);
console.log('Done');
