const readline = require('readline');
const { promisify } = require('util');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
const question = promisify(rl.question).bind(rl);
class A3 {
    //Q1
    reverseString(string) {
        string = string.split('');
        if (string)
            return string.reverse().join('');
        else
            return null;
    }
    // q2
    pallindrome(string) {
        if (string == this.reverseString(string))
            return true;
        return false;
    }
    //q3
    combinations(string) {
        let array = [];
        let s1 = string.split('');
        console.log(s1)
        let len = s1.length;
        console.log(len);
        for (let k = 1; k <= len; k++) {
            for (let i = 0; i < len; i++) {
                let str = '';
                let j = i;
                while (j < len) {
                    str += s1[j];
                    j++;
                    if (str.length == k)
                        array.push(str);
                }
            }
        }
        return array.toString();
    }
    //q4
    alphabeticalorder(string) {
        return string.split('').sort().join('');
    }
    //q5
    firstLetterConversion(string) {
        let array = string.split(' ');
        for (let i = 0; i < array.length; i++) {
            array[i] = [...array[i]];
            array[i][0] = array[i][0].toUpperCase();
            array[i] = array[i].join('');
        }
        return array.join(' ');
    }
    //q6 
    longestString(string) {
        let array = string.split(' ');
        let max_length = 0;
        let max_string = null;
        array.forEach(x => {
            let len = x.length;
            if (len > max_length) {
                max_length = len;
                max_string = x;
            }
        })
        return max_string;
    }
    //q7
    countVowels(string) {
        let regex = new RegExp('[aeiou]', 'g');
        let count = string.match(regex);
        return count.length;
    }
    //q8
    isPrime(n) {
        for (let i = 2; i < n; i++) {
            if (n % i == 0)
                return false;
        }
        return true;
    }
    //q9
    getType(x) {
        //null returns object - known bug.
        if (x === null) return null;
        return typeof x;
    }
    //q10
    getIdentityMatrix(n) {
        const matrix = [];
        for (let i = 0; i < n; i++) {
            const row = new Array(n).fill(0);
            row[i] = 1;
            matrix.push(row);
        }
        return matrix;

    }
    //11
    secondExtreme(a) {
        let first_min = Math.min(...a);
        let first_max = Math.max(...a);
        let first_index = a.indexOf(first_min);
        a.splice(first_index, 1);
        let first_max_index = a.indexOf(first_max);
        a.splice(first_max_index, 1);
        let second_min = Math.min(...a);
        let second_max = Math.max(...a);
        return second_min + "," + second_max;
    }
    //12
    isPerfect(n) {
        let divisors = [];
        let sum = 0;
        for (let i = 1; i < n; i++) {
            if (n % i == 0)
                sum += i;
        }
        if (sum == n)
            return true;
        else
            return false;
    }
    //13
    factors(n) {
        let factors = [];
        for (let i = 1; i <= n; i++) {
            if (n % i == 0)
                factors.push(i);
        }
        return factors;
    }
    //14
    divideIntoCoins(n) {
        let coins = [25, 10, 5, 2, 1];
        let count = [];
        let disp = '';
        for (let i in coins)
            count[coins[i]] = 0;
        let i = 0;
        while (n > 0) {
            count[coins[i]] += parseInt(n / coins[i]);
            n = n - count[coins[i]] * coins[i];
            if (n < coins[i])
                i++;
        }
        Object.keys(count).sort().reverse().forEach(x => {
            let index = count[x];
            for (let i = 1; i <= index; i++)
                disp += x + ", ";
        }
        );
        return disp;
    }
    async computeExp() {
        let b, n;
        // rl.question('enter the base \n', d => {
        //     b = parseInt(d);
        //     rl.question('enter the exponent or index \n', e => {
        //         n = parseInt(e);
        //         rl.close();
        //     });

        // });
        try {
            b = await question('enter the base \n');
            n = await question('enter the exponent\n');
            return b ** n;
        }
        finally {
            await rl.close();
            return b ** n;
        }
    }
    //16
    uniquech(string) {
        let array = string.split('');
        let set = new Set(array);
        return [...set].join('');
    }
    //17
    getLetterCount(string) {
        let count = [];
        let array = string.split('');
        for (let i = 0; i < array.length; i++) {
            if (Object.keys(count).includes(array[i]))
                count[array[i]] += 1;
            else
                count[array[i]] = 1;
        }
        Object.keys(count).forEach(x =>
            console.log(x + ":" + count[x])
        )
    }
    //18 
    binarySearch(arr, val) {
        let left = 0;
        let right = arr.length - 1;
        let mid;
        while (left <= right) {
            mid = parseInt((left + right) / 2);
            if (arr[mid] == val)
                return mid;
            else if (val > arr[mid])
                left = mid + 1;
            else
                right = mid - 1;
        }
        return -1;
    }
    //19
    largerElements(arr, n) {
        let largerarr = [];
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] > n) largerarr.push(arr[i]);
        }
        return largerarr;

    }
    //20
    generateRandomId(n) {
        let string = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        let result = '';
        for (let i = 0; i < n; i++) {
            let random = Math.floor(Math.random() * string.length);
            console.log(random);
            result += string.charAt(random);
        }
        return result;
    }
    getSubsets(arr, subsetLength) {
        const result = [];

        function helper(start, subset) {
            if (subset.length === subsetLength) {
                result.push([...subset]);
                return;
            }

            for (let i = start; i < arr.length; i++) {
                subset.push(arr[i]);
                helper(i + 1, subset);
                subset.pop();
            }
        }

        helper(0, []);
        return result;
    }
    countLetter(string, ch) {
        let regex = new RegExp(ch, "gi");
        let result = string.match(regex);
        return result.length;

    }
    getFirstNonRepeat(string) {
        let array = string.split('');
        for (let i = 0; i < array.length; i++) {
            if (this.countLetter(string, array[i]) == 1)
                return array[i];
        }
    }
    bubbleSort(arr) {
        for (let i = 0; i < arr.length; i++) {
            for (let j = 0; j < arr.length; j++) {
                if (arr[i] > arr[j]) {
                    let temp = arr[i];
                    arr[i] = arr[j];
                    arr[j] = temp;
                }
            }

        }
        return arr;
    }
    longestCountryName(country_list) {
        let max = 0;
        let country = null;
        country_list.forEach(x => {
            if (max < x.length) {
                max = x.length;
                country = x;
            }
        }
        )
        return country;
    }
    longestUniqueSubstring(str) {
        let n = str.length;
        let longest = 0;
        let start = 0;
        let end = 0;
        let charIndexMap = new Map();

        while (end < n) {
            let currentChar = str[end];

            if (charIndexMap.has(currentChar)) {
                start = Math.max(charIndexMap.get(currentChar) + 1, start);
            }

            charIndexMap.set(currentChar, end);
            longest = Math.max(longest, end - start + 1);
            end++;
        }

        return longest;
    }
    longestUniqueSubstring(str) {
        let n = str.length;
        let longest = 0;
        let start = 0;
        let end = 0;
        let startOfLongest = 0;
        let charIndexMap = new Map();

        while (end < n) {
            let currentChar = str[end];

            if (charIndexMap.has(currentChar)) {
                start = Math.max(charIndexMap.get(currentChar) + 1, start);
            }

            charIndexMap.set(currentChar, end);

            if (end - start + 1 > longest) {
                longest = end - start + 1;
                startOfLongest = start;
            }

            end++;
        }

        return str.substring(startOfLongest, startOfLongest + longest);
    }
    longestPalindrome(s) {
        if (s.length === 0) return "";

        let start = 0;
        let end = 0;

        function expandAroundCenter(left, right) {
            while (left >= 0 && right < s.length && s[left] === s[right]) {
                left--;
                right++;
            }
            return [left + 1, right - 1];
        }

        for (let i = 0; i < s.length; i++) {
            let [left1, right1] = expandAroundCenter(i, i);     // Odd length palindromes
            let [left2, right2] = expandAroundCenter(i, i + 1); // Even length palindromes

            if (right1 - left1 > end - start) {
                start = left1;
                end = right1;
            }

            if (right2 - left2 > end - start) {
                start = left2;
                end = right2;
            }
        }

        return s.substring(start, end + 1);
    }
    processFunction(func, value) {
        return func(value);
    }
    getFunctionName(func) {
        return func.name;
    }

}
let obj = new A3();
console.log(obj.pallindrome('racecar'));
console.log(obj.reverseString('automobile'));
console.log(obj.alphabeticalorder('webmaster'));
console.log(obj.firstLetterConversion('the quick brown fox'));
console.log(obj.longestString('Web Development Tutorial'));
console.log(obj.countVowels('The quick brown fox'));
console.log(obj.isPrime(22));
console.log(obj.getType(undefined));
console.log(obj.getIdentityMatrix(5));
console.log(obj.secondExtreme([1, 2, 3, 4, 5]));
console.log(obj.isPerfect(8128));
console.log(obj.factors(12));
console.log(obj.divideIntoCoins(46));
obj.computeExp().then(d => {
    console.log(d)
    console.log(obj.uniquech("thequickbrownfoxjumpsoverthelazydog"))
    obj.getLetterCount("thequickbrownfxjmpsvlazydg");
    console.log(obj.binarySearch([3, 4, 5, 6, 7, 8], 8));
    console.log(obj.largerElements([5, 12, 1, 4, 2, 35, 545, 64], 20));
    console.log(obj.generateRandomId(20));
    console.log(obj.getSubsets([1, 2, 3], 2));
    console.log(obj.countLetter('microsoft.com', 'o'));
    console.log(obj.getFirstNonRepeat('abacddbec'));
    console.log(obj.bubbleSort([12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213]));
    console.log(obj.longestCountryName(["Australia", "Germany", "United States of America"]));
    console.log(obj.longestUniqueSubstring("abcabcbb"));
    console.log(obj.longestPalindrome("bananas"));
    console.log(obj.processFunction((x) => x * x, 2));
    console.log(obj.getFunctionName(obj.processFunction));
});
