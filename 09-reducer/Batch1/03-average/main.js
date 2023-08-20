const scores = [
    { score: 90, subject: 'HTML', weight: 0.2 },
    { score: 95, subject: 'CSS', weight: 0.3 },
    { score: 85, subject: 'JavaScript', weight: 0.5 }
];

// AVG by Weight = SUM (score * weight) / SUM (weight)
// const result = scores.reduce ((acc,items) => acc + items.score * items.weight,0)

// #2 result == {sum : 90*0.2 + 95*0.3 + 85*0.5, totalW: (0.2 + 0.3 + 0.5)}
const initial = {sum: 0, total: 0};
// acc = {sum:...,total:...}
// cur = {score:..., subject:..., weight:...}
const summarizeObj = scores.reduce((a,c) => {
    a.sum += c.score * c.weight;
    a.total += c.weight;
    return a;
}, initial)
// console.log(result)
console.log(summarizeObj)