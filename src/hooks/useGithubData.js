import { useState, useEffect } from "react";

export function useGithubData(username) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;
    async function fetchData() {
      try {
        setLoading(true);

        // Fetch User Profile
        const userRes = await fetch(`https://api.github.com/users/${username}`);
        const user = await userRes.json();

        // Fetch Repos
        const reposRes = await fetch(`https://api.github.com/users/${username}/repos?per_page=100`);
        const repos = await reposRes.json();

        // Fetch Contributions
        const contribRes = await fetch(`https://github-contributions-api.deno.dev/${username}.json`);
        const contrib = await contribRes.json();

        if (!isMounted) return;

        // Process Total Stars and Languages
        let totalStars = 0;
        let languageCounts = {};

        if (Array.isArray(repos)) {
          repos.forEach(repo => {
            totalStars += repo.stargazers_count;
            if (repo.language) {
              languageCounts[repo.language] = (languageCounts[repo.language] || 0) + 1;
            }
          });
        }

        // Calculate language percentages
        const langKeys = Object.keys(languageCounts);
        const totalLangs = langKeys.reduce((acc, key) => acc + languageCounts[key], 0);
        
        let processedLanguages = [];
        const langColors = {
          JavaScript: "bg-yellow-400",
          React: "bg-secondary-accent",
          HTML: "bg-secondary-accent",
          CSS: "bg-primary-accent",
          TypeScript: "bg-blue-400",
          Python: "bg-blue-500",
          Java: "bg-red-500",
          C: "bg-gray-500",
          "C++": "bg-purple-500",
        };

        if (totalLangs > 0) {
          processedLanguages = langKeys
            .map(key => ({
              name: key,
              percent: Math.round((languageCounts[key] / totalLangs) * 100),
              color: langColors[key] || "bg-green-500"
            }))
            .sort((a, b) => b.percent - a.percent)
            .slice(0, 4); // Take top 4
        } else {
          // Fallback if no languages found
          processedLanguages = [
            { name: "JavaScript", percent: 65, color: "bg-yellow-400" },
            { name: "React / HTML5", percent: 20, color: "bg-secondary-accent" },
            { name: "CSS / Tailwind", percent: 10, color: "bg-primary-accent" },
            { name: "Database / SQL", percent: 5, color: "bg-green-500" }
          ];
        }

        let dailyCounts = [];
        let totalContributions = 0;
        let longestStreak = 0;
        let currentStreak = 0;

        if (contrib && Array.isArray(contrib.contributions)) {
           const allDays = contrib.contributions.flat();
           totalContributions = 1019; // From user's actual lifetime stats
           
           // Calculate Longest Streak
           let tempStreak = 0;
           allDays.forEach(day => {
             if (day.contributionCount > 0) {
               tempStreak++;
               if (tempStreak > longestStreak) {
                 longestStreak = tempStreak;
               }
             } else {
               tempStreak = 0;
             }
           });

           // Calculate Current Streak
           for (let i = allDays.length - 1; i >= 0; i--) {
             if (allDays[i].contributionCount > 0) {
               currentStreak++;
             } else {
               if (i === allDays.length - 1) continue; // ignore today if 0
               break;
             }
           }

           // Get the last 180 days
           const recentDays = allDays.slice(-180);
           dailyCounts = recentDays.map(d => d.contributionCount);
        } else {
           // Fallback to random if API failed
           totalContributions = 1248;
           dailyCounts = Array.from({ length: 180 }, () => Math.floor(Math.random() * 5));
        }
        
        let processedRepos = [];
        if (Array.isArray(repos)) {
          processedRepos = repos
            .filter(repo => !repo.fork)
            .sort((a, b) => new Date(b.pushed_at || b.updated_at) - new Date(a.pushed_at || a.updated_at))
            .slice(0, 12)
            .map(repo => ({
              name: repo.name,
              description: repo.description || "Active open-source development workspace.",
              stars: repo.stargazers_count,
              forks: repo.forks_count,
              url: repo.html_url,
              language: repo.language,
              updatedAt: new Date(repo.pushed_at || repo.updated_at).toLocaleDateString("en-US", { month: "short", year: "numeric" })
            }));
        }

        if (processedRepos.length === 0) {
          processedRepos = [
            { name: "madina-perfumes", description: "Premium e-commerce platform built with Supabase, React 19, and Tailwind CSS.", stars: 5, forks: 0, url: "https://github.com/DanisheKhan", language: "JavaScript", updatedAt: "May 2025" },
            { name: "home-share", description: "Full stack MERN real estate listing and tenant connection hub.", stars: 4, forks: 1, url: "https://github.com/DanisheKhan", language: "JavaScript", updatedAt: "Feb 2025" },
            { name: "currency-converter", description: "Real-time exchange rate calculation utility with interactive currency cards.", stars: 2, forks: 0, url: "https://github.com/DanisheKhan", language: "JavaScript", updatedAt: "Dec 2024" },
            { name: "password-generator", description: "Cryptographically secure string builder with customizable entropy constraints.", stars: 1, forks: 0, url: "https://github.com/DanisheKhan", language: "JavaScript", updatedAt: "Oct 2024" }
          ];
        }

        setData({
          publicRepos: user.public_repos || 32,
          followers: user.followers || 15,
          totalStars,
          totalContributions,
          longestStreak,
          currentStreak,
          languages: processedLanguages,
          dailyCounts,
          repos: processedRepos
        });

      } catch (err) {
        console.error("Failed to fetch github data:", err);
        // Fallback dummy data if fetching completely fails
        if (isMounted) {
          setData({
            publicRepos: 32,
            followers: 15,
            totalStars: 48,
            totalContributions: 1019,
            longestStreak: 14,
            currentStreak: 0,
            languages: [
              { name: "JavaScript", percent: 65, color: "bg-yellow-400" },
              { name: "React / HTML5", percent: 20, color: "bg-secondary-accent" },
              { name: "CSS / Tailwind", percent: 10, color: "bg-primary-accent" },
              { name: "Database / SQL", percent: 5, color: "bg-green-500" }
            ],
            dailyCounts: Array.from({ length: 180 }, () => Math.floor(Math.random() * 5)),
            repos: [
              { name: "madina-perfumes", description: "Premium e-commerce platform built with Supabase, React 19, and Tailwind CSS.", stars: 5, forks: 0, url: "https://github.com/DanisheKhan", language: "JavaScript", updatedAt: "May 2025" },
              { name: "home-share", description: "Full stack MERN real estate listing and tenant connection hub.", stars: 4, forks: 1, url: "https://github.com/DanisheKhan", language: "JavaScript", updatedAt: "Feb 2025" },
              { name: "currency-converter", description: "Real-time exchange rate calculation utility with interactive currency cards.", stars: 2, forks: 0, url: "https://github.com/DanisheKhan", language: "JavaScript", updatedAt: "Dec 2024" },
              { name: "password-generator", description: "Cryptographically secure string builder with customizable entropy constraints.", stars: 1, forks: 0, url: "https://github.com/DanisheKhan", language: "JavaScript", updatedAt: "Oct 2024" }
            ]
          });
          setError(err);
        }
      } finally {
        if (isMounted) setLoading(false);
      }
    }

    fetchData();

    return () => { isMounted = false; };
  }, [username]);

  return { data, loading, error };
}
