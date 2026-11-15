// Multi-language code templates and simulated execution engine

export const CODE_TEMPLATES = {
  java: (methodSignature, className = 'Solution') => `import java.util.*;

public class ${className} {
    // Write your code here
    ${methodSignature || 'public static void main(String[] args) {\n        System.out.println("Hello InterviewPilot!");\n    }'}
}`,

  python: (functionSignature) => `from typing import List, Optional

# Write your solution below
${functionSignature || 'def solve():\n    pass'}

if __name__ == "__main__":
    pass`,

  cpp: (methodSignature) => `#include <iostream>
#include <vector>
#include <string>
#include <algorithm>
using namespace std;

class Solution {
public:
    ${methodSignature || 'void solve() {\n        // Your code here\n    }'}
};

int main() {
    Solution s;
    return 0;
}`,

  javascript: (functionSignature) => `/**
 * Problem Solution
 */
${functionSignature || 'function solve(input) {\n  // Your code here\n}'}

// Export for runner
// console.log(solve());`
};

export const simulateCodeExecution = (code, language, testCases, isSubmit = false) => {
  return new Promise((resolve) => {
    // Simulate compilation and runtime delay
    const delay = Math.floor(Math.random() * 600) + 400;

    setTimeout(() => {
      // Basic syntax check heuristic
      const trimmed = code.trim();
      if (!trimmed || trimmed.length < 15) {
        resolve({
          status: 'Compilation Error',
          passed: false,
          error: 'SyntaxError: Incomplete code or empty solution submitted.',
          results: [],
          executionTime: 0,
          memoryUsed: 0
        });
        return;
      }

      // Check for obvious syntax mismatches
      const openBraces = (code.match(/{/g) || []).length;
      const closeBraces = (code.match(/}/g) || []).length;
      if (openBraces !== closeBraces && (language === 'java' || language === 'cpp' || language === 'javascript')) {
        resolve({
          status: 'Syntax Error',
          passed: false,
          error: `Unmatched brackets: ${openBraces} opening vs ${closeBraces} closing braces.`,
          results: [],
          executionTime: 12,
          memoryUsed: 14.2
        });
        return;
      }

      // Run against test cases
      const testResults = testCases.map((tc, index) => {
        // If it's a submission, run all test cases including hidden ones
        const isHidden = tc.hidden && !isSubmit;
        if (isHidden) return null;

        return {
          id: index + 1,
          input: tc.input,
          expectedOutput: tc.expectedOutput,
          actualOutput: tc.expectedOutput, // simulated pass if syntax is good
          passed: true,
          timeMs: Math.floor(Math.random() * 25) + 10,
          memoryMb: (Math.random() * 4 + 18).toFixed(1)
        };
      }).filter(Boolean);

      const allPassed = testResults.every(r => r.passed);
      const totalTime = testResults.reduce((acc, curr) => acc + curr.timeMs, 0);

      resolve({
        status: allPassed ? (isSubmit ? 'Accepted' : 'Tests Passed') : 'Wrong Answer',
        passed: allPassed,
        totalCases: isSubmit ? testCases.length : testResults.length,
        passedCases: testResults.filter(r => r.passed).length,
        results: testResults,
        executionTime: totalTime,
        memoryUsed: (Math.random() * 6 + 22).toFixed(1) + ' MB',
        runtimePercentile: (Math.random() * 20 + 78).toFixed(1),
        memoryPercentile: (Math.random() * 25 + 70).toFixed(1)
      });
    }, delay);
  });
};
