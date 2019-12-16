# similarity-text
A library implementing different string similarity and distance measures using Javascript.

Calculates the similarity between strings x and y using levenshtein distance.

Mathematically, the Levenshtein distance between two strings
`a` and `b` (of length `|a|` and `|b|` respectively) is given by
![Levenshtein](https://wikimedia.org/api/rest_v1/media/math/render/svg/4cf357d8f2135035207088d2c7b890fb4b64e410)
where

![Levenshtein](https://wikimedia.org/api/rest_v1/media/math/render/svg/f0a48ecfc9852c042382fdc33c19e11a16948e85)

where 
![Levenshtein](https://wikimedia.org/api/rest_v1/media/math/render/svg/52512ede08444b13838c570ba4a3fc71d54dbce9)
is the indicator function equal to `0` when
![Levenshtein](https://wikimedia.org/api/rest_v1/media/math/render/svg/231fda9ee578f0328c5ca28088d01928bb0aaaec)
and equal to 1 otherwise, and
![Levenshtein](https://wikimedia.org/api/rest_v1/media/math/render/svg/bdc0315678caad28648aafedb6ebafb16bd1655c)
is the distance between the first `i` characters of `a` and the first 
`j` characters of `b`.

Note that the first element in the minimum corresponds to 
deletion (from `a` to `b`), the second to insertion and 
the third to match or mismatch, depending on whether the 
respective symbols are the same.



## Installation

```
npm install similarity-text
```

## Usage

```javascript

import {similarityPercent} from 'similarity-text';

const percent1 = similarityPercent('영준아 학교가야지', '영준아 밥먹어야지');
const percent2 = similarityPercent('朝に目が覚めると、何故か泣いている', '見ていた 初め 夢は');
const percent3 = similarityPercent('Please don’t eat me!! I have a wife and kids. Eat them!', 'If something’s hard to do, then it’s not worth doing');

console.log('percent1', percent1);
console.log('percent2', percent2);
console.log('percent2', percent3);

// Output

// percent1 66.67
// percent2 0
// percent2 16.36
```


## Contributing

1. Fork it ( https://github.com/webhacking/similarity-text/fork )
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create a new Pull Request


Bug reports and pull requests are welcome on GitHub at https://github.com/webhacking/similarity-text.
