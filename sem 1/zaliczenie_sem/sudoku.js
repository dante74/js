const sudokuArr = [
	[ 7, 0, 4, 8, 0, 0, 3, 0, 1 ],
	[ 8, 2, 0, 5, 0, 0, 0, 4, 0 ],
	[ 0, 0, 9, 4, 3, 0, 5, 0, 0 ],
	[ 3, 1, 0, 0, 0, 0, 8, 0, 7 ],
	[ 0, 8, 0, 0, 0, 0, 0, 1, 0 ],
	[ 9, 0, 7, 0, 0, 0, 0, 3, 2 ],
	[ 0, 0, 6, 0, 1, 5, 4, 0, 0 ],
	[ 0, 7, 0, 0, 0, 9, 0, 6, 5 ],
	[ 5, 0, 8, 0, 6, 2, 1, 0, 3 ]
];
//let pom = [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ];
let values = [];
let s1 = [];
let s2 = [];
let s3 = [];
let s4 = [];
let s5 = [];
let s6 = [];
let s7 = [];
let s8 = [];
let s9 = [];
let s = [ s1, s2, s3, s4, s5, s6, s7, s8, s9 ];

let w1 = [];
let w2 = [];
let w3 = [];
let w4 = [];
let w5 = [];
let w6 = [];
let w7 = [];
let w8 = [];
let w9 = [];
let w = [ w1, w2, w3, w4, w5, w6, w7, w8, w9 ];

let k1 = [];
let k2 = [];
let k3 = [];
let k4 = [];
let k5 = [];
let k6 = [];
let k7 = [];
let k8 = [];
let k9 = [];
let k = [ k1, k2, k3, k4, k5, k6, k7, k8, k9 ];

for (let i = 0; i < 3; i++) for (j = 0; j < 3; j++) s1.push(sudokuArr[j][i]);
for (let i = 3; i < 6; i++) for (j = 0; j < 3; j++) s2.push(sudokuArr[j][i]);
for (let i = 6; i < 9; i++) for (j = 0; j < 3; j++) s3.push(sudokuArr[j][i]);
for (let i = 0; i < 3; i++) for (j = 3; j < 6; j++) s4.push(sudokuArr[j][i]);
for (let i = 3; i < 6; i++) for (j = 3; j < 6; j++) s5.push(sudokuArr[j][i]);
for (let i = 6; i < 9; i++) for (j = 3; j < 6; j++) s6.push(sudokuArr[j][i]);
for (let i = 0; i < 3; i++) for (j = 6; j < 9; j++) s7.push(sudokuArr[j][i]);
for (let i = 3; i < 6; i++) for (j = 6; j < 9; j++) s8.push(sudokuArr[j][i]);
for (let i = 6; i < 9; i++) for (j = 6; j < 9; j++) s9.push(sudokuArr[j][i]);

for (let i = 0; i < 9; i++) k1.push(sudokuArr[i][0]);
for (let i = 0; i < 9; i++) k2.push(sudokuArr[i][1]);
for (let i = 0; i < 9; i++) k3.push(sudokuArr[i][2]);
for (let i = 0; i < 9; i++) k4.push(sudokuArr[i][3]);
for (let i = 0; i < 9; i++) k5.push(sudokuArr[i][4]);
for (let i = 0; i < 9; i++) k6.push(sudokuArr[i][5]);
for (let i = 0; i < 9; i++) k7.push(sudokuArr[i][6]);
for (let i = 0; i < 9; i++) k8.push(sudokuArr[i][7]);
for (let i = 0; i < 9; i++) k9.push(sudokuArr[i][8]);

for (let i = 0; i < 9; i++) w1.push(sudokuArr[0][i]);
for (let i = 0; i < 9; i++) w2.push(sudokuArr[1][i]);
for (let i = 0; i < 9; i++) w3.push(sudokuArr[2][i]);
for (let i = 0; i < 9; i++) w4.push(sudokuArr[3][i]);
for (let i = 0; i < 9; i++) w5.push(sudokuArr[4][i]);
for (let i = 0; i < 9; i++) w6.push(sudokuArr[5][i]);
for (let i = 0; i < 9; i++) w7.push(sudokuArr[6][i]);
for (let i = 0; i < 9; i++) w8.push(sudokuArr[7][i]);
for (let i = 0; i < 9; i++) w9.push(sudokuArr[8][i]);

console.log(`s1 : ${s1}`);
// console.log(`s2 : ${s2}`);
// console.log(`s3 : ${s3}`);
// console.log(`s4 : ${s4}`);
// console.log(`s5 : ${s5}`);
// console.log(`s6 : ${s6}`);
// console.log(`s7 : ${s7}`);
// console.log(`s8 : ${s8}`);
// console.log(`s9 : ${s9}`);

//console.log(s1.includes(9));

zm = false;
for (let i = 0; i < 3; i++)
	for (j = 0; j < 3; j++) {
		let pom = [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ];
		//console.log(sudokuArr[j][i]);
		if (sudokuArr[j][i] === 0) {
			zm = true;
			let n = pom.filter(function(value) {
				if (s[0].indexOf(value) < 0) {
					return value;
				}
			});

			let n1 = n.filter(function(value) {
				if (k[i].indexOf(value) < 0) {
					return value;
				}
			});

			let n2 = n1.filter(function(value) {
				if (w[j].indexOf(value) < 0) {
					return value;
				}
			});

			values.push(n2);
		}
	}
console.log(values[0], values[1], values[2], values[3]);
console.log(sudokuArr[0]);
console.log(sudokuArr[1]);
console.log(sudokuArr[2]);
