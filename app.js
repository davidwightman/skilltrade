// if (user1.learn[0] === user2.teach[0] && user1.teach[0] === user2.learn[0]) {
// 	console.log("we have a match")
// }


// for (var i = 0; i < user1.learn.length; i++) {
//     console.log(user1.learn[i]);
//     //Do something
// }

const user1 = {teach: ['guitar', 'accordian', 'dance', 'poetry', 'JavaScript'],
	learn: ['painting', 'fiddle', 'bass', 'saxophone', 'fishing']}

const user2 = {teach: ['cooking', 'time management', 'painting'],
	learn: ['piano', 'running', 'JavaScript', 'guitar']}

const user3 = {teach: ['book making', 'cooking', 'public speaking', 'swimming', 'time management'],
	learn: ['piano', 'running', 'JavaScript', 'guitar']}

const user4 = {teach: ['JavaScript', 'driving', 'drums'],
	learn: ['time management', 'bass', 'basic electronics', 'guitar']}


// function intersect_1teach2(a, b) {
//     var sorted_a = a.concat().sort();
//     var sorted_b = b.concat().sort();
//     var common = [];
//     var a_i = 0;
//     var b_i = 0;

//     while (a_i < a.length
//            && b_i < b.length)
//     {
//         if (sorted_a[a_i] === sorted_b[b_i]) {
//             common.push(sorted_a[a_i]);
//             a_i++;
//             b_i++;
//         }
//         else if(sorted_a[a_i] < sorted_b[b_i]) {
//             a_i++;
//         }
//         else {
//             b_i++;
//         }
//     }
//     console.log("User 1 will be able to teach User 2 " + common.join(", ") + ".")
// }

// function intersect_2teach1(a, b) {
//     var sorted_a = a.concat().sort();
//     var sorted_b = b.concat().sort();
//     var common = [];
//     var a_i = 0;
//     var b_i = 0;

//     while (a_i < a.length
//            && b_i < b.length)
//     {
//         if (sorted_a[a_i] === sorted_b[b_i]) {
//             common.push(sorted_a[a_i]);
//             a_i++;
//             b_i++;
//         }
//         else if(sorted_a[a_i] < sorted_b[b_i]) {
//             a_i++;
//         }
//         else {
//             b_i++;
//         }
//     }
//     console.log("User 2 will be able to teach User 1 " + common.join(", ") + ".")
// }

var intersection = function(a, b) {
	var sorted_a = a.concat().sort();
    var sorted_b = b.concat().sort();
    var common = [];
    var a_i = 0;
    var b_i = 0;

    while (a_i < a.length
           && b_i < b.length)
    {
        if (sorted_a[a_i] === sorted_b[b_i]) {
            common.push(sorted_a[a_i]);
            a_i++;
            b_i++;
        }
        else if(sorted_a[a_i] < sorted_b[b_i]) {
            a_i++;
        }
        else {
            b_i++;
        }
    }
    return common.join(", ") 
}

var oneteachtwo = intersection(user1.teach, user2.learn)
var twoteachone = intersection(user2.teach, user1.learn)

console.log("User 1 can teach User 2 " + oneteachtwo);
console.log("User 2 can teach User 1 " + twoteachone);

// intersect_1teach2(user1.teach, user2.learn) 
// intersect_2teach1(user2.teach, user1.learn)


 // if (match1 != null && match2 != null) {
 // 	console.log("we have a match!")
 // }

	// 