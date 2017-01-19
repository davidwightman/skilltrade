// const user1 = {learn: ['guitar', 'accordian', 'dance'],
// 	teach: ['tap', 'tap', 'piano']
// }

// const user2 = {learn: ['tap', 'accordian', 'dance'],
// 	teach: ['guitar', 'running', 'piano']
// }

// if (user1.learn[0] === user2.teach[0] && user1.teach[0] === user2.learn[0]) {
// 	console.log("we have a match")
// }


// for (var i = 0; i < user1.learn.length; i++) {
//     console.log(user1.learn[i]);
//     //Do something
// }

function intersect_arrays(a, b) {
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
    console.log(common.join(", "))
}

const user1teach = ['guitar', 'accordian', 'dance', 'poetry', 'JavaScript']; //modified for additional match
const user1learn = ['painting', 'fiddle', 'bass', 'saxophone', 'fishing'];
const user2teach = ['cooking', 'time management', 'painting'];
const user2learn = ['piano', 'running', 'JavaScript', 'guitar'];
//var match1 = 
intersect_arrays(user1teach, user2learn) 
//var match2 = 
intersect_arrays(user2teach, user1learn)

 // if (match1 != null && match2 != null) {
 // 	console.log("we have a match!")
 // }

	// 