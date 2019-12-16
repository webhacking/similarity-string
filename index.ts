const similarity = (s1: string, s2: string): number => {
    let longer = s1;
    let shorter = s2;

    if (s1.length < s2.length) {
        longer = s2;
        shorter = s1;
    }

    const longerLength = longer.length;

    if (longerLength === 0) {
        return 1.0;
    }

    return (longerLength - distance(longer, shorter)) / parseFloat(longerLength.toString());
};

const similarityPercent = (s1: string, s2: string): number => {
    return Math.round(similarity(s1, s2) * 10000)/100;
};

const distance = (s1: string, s2: string) => {
    s1 = s1.toLowerCase();
    s2 = s2.toLowerCase();
    const costs = [];
    for (let i = 0; i <= s1.length; i++) {
        let lastValue = i;
        for (let j = 0; j <= s2.length; j++) {
            if (i == 0) {
                costs[j] = j;
            } else {
                if (j > 0) {
                    let newValue = costs[j - 1];
                    if (s1.charAt(i - 1) != s2.charAt(j - 1)) {
                        newValue = Math.min(Math.min(newValue, lastValue), costs[j]) + 1;
                    }
                    costs[j - 1] = lastValue;
                    lastValue = newValue;
                }
            }
        }
        if (i > 0) {
            costs[s2.length] = lastValue;
        }
    }
    return costs[s2.length];
};


export {similarityPercent};
