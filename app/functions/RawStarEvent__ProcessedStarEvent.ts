/* Filename: app/functions/RawStarEvent__ProcessedStarEvent.ts */
import { RawStarEvent, ProcessedStarEvent } from "../datamodels/RawStarEvent";

// REPLACE THE EXISTING run() FUNCTION WITH THE CODE BELOW:
export default async function run(source: RawStarEvent): Promise<ProcessedStarEvent | null> {
	// Drop events that are not created or have a date
  if (source.action == 'deleted' || !source.starred_at) {
    return null;
  }
  // Enrich data from GitHub API
  const languageMap = await getUserLanguage(source.sender.repos_url);
  // Return the filtered and transformed fields
  return {
    starred_at: new Date(source.starred_at), // Convert string to date
    username: source.sender.login,
    languages: Array.from(languageMap, ([language, bytes]) => ({ language, bytes })),    
  }
} 

// ....... helper function code to call the GitHub API ......... // 

async function getUserLanguage(repoUrl: string): Promise<Map<string, number>> {
  const repositories = await callGitHubAPI(repoUrl);
  // Maps between the language and the number of bytes of code in the repository
  const languageCounts = new Map<string, number>();
  for (const repo of repositories) {
    // Calls the API per repository to get language counts
    const languages = await callGitHubAPI(repo.languages_url);
    for (const [language, count] of Object.entries(languages as GitHubLanguage)) {
        // Sum the counts for each language
        languageCounts.set(language, (languageCounts.get(language) || 0) + count);
    }
  }
  return languageCounts;
}

async function callGitHubAPI(url: string): Promise<any> {
    // GitHub requires auth for more than 60 requests per hour
    const response = await fetch(url);
    return await response.json();
}

interface GitHubLanguage {
  [key: string]: number;
}
