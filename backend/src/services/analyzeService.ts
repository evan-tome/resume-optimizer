export function analyzeResume(resumeText: string, jobText: string) {
    const resumeWords = new Set(resumeText.toLowerCase().split(/\s+/));

    const jobWords = jobText.toLowerCase().split(/\s+/);

    let matchCount = 0;
    
    for (const word of jobWords) {
        if (resumeWords.has(word)) {
            matchCount++;
        }
    }

    const score = (matchCount / jobWords.length) * 100;

    return {
        score: Math.round(score),
        matchedKeyords: matchCount,
        totalKeywords: jobWords.length,
        missingKeywords: jobWords.filter(word => !resumeWords.has(word))
    };
}