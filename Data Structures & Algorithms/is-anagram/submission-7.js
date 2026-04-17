class Solution {
    isAnagram(s, t) {
        if (s.length !== t.length) return false;
        const map = new Map();
        for (let letter of s) {
            if (map.has(letter)) {
                let frequency = map.get(letter);
                map.set(letter, frequency + 1);
            } else {
                map.set(letter, 1);
            }
        }
        console.log(map);

        for (let letter of t) {
            if (map.has(letter)) {
                let newFrequency = map.get(letter) - 1;
                if (newFrequency < 0) {
                    return false;
                }
                map.set(letter, newFrequency);
            } else {
                return false;
            }
        }
        console.log(map);
        return true;
    }
}
