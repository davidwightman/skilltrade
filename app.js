// if (user1.learn[0] === user2.teach[0] && user1.teach[0] === user2.learn[0]) {
// 	console.log("we have a match")
// }

// for (var i = 0; i < user1.learn.length; i++) {
//     console.log(user1.learn[i]);
//     //Do something
// }



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

//users have itmes in arrays that they can teach and learn
const user1 = {teach: ['guitar', 'accordian', 'dance', 'poetry', 'JavaScript', 'bmx', 'basketball'],
	learn: ['painting', 'fiddle', 'bass', 'saxophone', 'fishing', 'piano']}

const user2 = {teach: ['cooking', 'time management', 'painting', 'clock making', 'fishing', 'piano'],
	learn: ['running', 'JavaScript', 'guitar', 'trumpet', 'audio engineering', 'writing', 'book making']}

const user3 = {teach: ['book making', 'cooking', 'public speaking', 'swimming', 'time management'],
	learn: ['piano', 'running', 'JavaScript', 'guitar']}

const user4 = {teach: ['JavaScript', 'driving', 'drums'],
	learn: ['time management', 'bass', 'basic electronics', 'guitar']}

//intersection function finds the commonalities
var intersection = function(a, b) {
	var sorted_a = a.concat().sort();
    var sorted_b = b.concat().sort();
    var common = [];
    var a_i = 0;
    var b_i = 0;

    while (a_i < a.length && b_i < b.length) {
        if (sorted_a[a_i] === sorted_b[b_i]) {
            common.push(sorted_a[a_i]);
            a_i++;
            b_i++;
        } else if (sorted_a[a_i] < sorted_b[b_i]) {
            a_i++;
        } else {
            b_i++;
        }
    }
    //return common with correct use of "and" and ","
    if (common.length === 0){
    	return ("nothing on their learn list")
    } else if (common.length === 1) {
        return common
    } else if (common.length === 2) {
        return common.join(' and ');
    } else if (common.length > 2) {
        return common.slice(0, -1).join(', ') + ', and ' + common.slice(-1);
    }
}

// switch() {
//     case oneandtwo:
//         var oneteachtwo = intersection(user1.teach, user2.learn)
// 		var twoteachone = intersection(user2.teach, user1.learn)
//         break;
//     case oneandthree:
//         var oneteachtwo = intersection(user1.teach, user3.learn)
// 		var twoteachone = intersection(user3.teach, user1.learn)
//         break;
//     case oneandfour:
        //var oneteachtwo = intersection(user1.teach, user4.learn)
		//var twoteachone = intersection(user4.teach, user1.learn)
//         break;
//     case twoandthree:
//         var oneteachtwo = intersection(user2.teach, user3.learn)
// 		var twoteachone = intersection(user3.teach, user2.learn)
//         break
//     case twoandfour:
         var oneteachtwo = intersection(user2.teach, user4.learn)
 		var twoteachone = intersection(user4.teach, user2.learn)
//         break
//     default:
//         var oneteachtwo = intersection(user3.teach, user4.learn)
// 		var twoteachone = intersection(user4.teach, user3.learn)
// }

// var oneteachtwo = intersection(user1.teach, user2.learn)
// var twoteachone = intersection(user2.teach, user1.learn)

console.log("User 1 can teach User 2 " + oneteachtwo + ". User 2 can teach User 1 " + twoteachone + ".");

// intersect_1teach2(user1.teach, user2.learn) 
// intersect_2teach1(user2.teach, user1.learn)


 // if (match1 != null && match2 != null) {
 // 	console.log("we have a match!")
 // }