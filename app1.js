

//users have itmes in arrays that they can teach and learn

const levelNames = [null, "begining", "novice", "intermediate", "advanced", "extremely advanced"]

const user1 = {
    teach: [{'guitar': 5}, {'accordian': 5}, {'dance': 3}, {'poetry': 4}, {'JavaScript': 5}, {'bmx': 5}, {'basketball': 5}],
	learn: [{'painting': 1}, {'fiddle': 2}, {'bass': 3}, {'saxophone': 4}, {'fishing': 5}, {'piano': 5}]
}

const user2 = {
    teach: [{'cooking': 3}, {'time management': 4}, {'painting': 5}, {'clock making':3}, {'fishing': 5}, {'piano': 2}],
	learn: [{'running': 5}, {'JavaScript': 3}, {'guitar': 4}, {'trumpet': 1}, {'audio engineering': 2}, {'writing': 5}, {'book making': 1}]
}

const user3 = {
    teach: [{'book making': 1}, {'cooking': 5}, {'public speaking': 4}, {'swimming': 3}, {'time management': 2}],
	learn: [{'piano': 1}, {'running': 4}, {'JavaScript': 3}, {'guitar': 5}]
}

const user4 = {
    teach: [{'JavaScript': 5}, {'driving': 5}, {'drums': 2}],
	learn: [{'time management': 4}, {'bass': 2}, {'basic electronics': 1}, {'guitar': 4}]
}

const user5 = {
    teach: [{'coffee': 5}],
    learn: [{'tea brewing': 5}]
};

const users = [user1, user2, user3, user4, user5];

var compare = (x, y) => Object.keys(x)[0].localeCompare(Object.keys(y)[0])

users.forEach((user, index) => {

    console.log();
    console.log('finding a teacher for user #' + (index + 1));

    findTeacherFor(user);  

    console.log();
});

function findTeacherFor(user) {

    users.forEach((teacher, index) => {

        // you can't teach yourself, or can you?
        if (teacher === user) return;

        var aCanTeachB = findTeachable(teacher, user);
        if (aCanTeachB.length === 0) return;

        var bCanTeachA = findTeachable(user, teacher);
        if (bCanTeachA.length === 0) return;

        console.log('teacher number #' + (index + 1));
        console.log(`User A can teach ${formatSkills(aCanTeachB)} to user B, and user B can teach ${formatSkills(bCanTeachA)} to user A.`);
    });
}

function findTeachable(userA, userB) {

    var a = userA.teach.concat().sort(compare);
    var b = userB.learn.concat().sort(compare);
    var common = [];

    var a_i = 0;
    var b_i = 0;

    var order;

    while (a_i < a.length && b_i < b.length) {

        order = compare(a[a_i], b[b_i]);

        if (order === 0) {
            common.push(a[a_i]);
            a_i++;
            b_i++;
        } else if (order < 0) {
            a_i++;
        } else {
            b_i++;
        }
    }

    return common;
}




// const users = [user1, user2, user3, user4, user5];

function formatSkills(common) {
    //returns each level name with skill
    common = common.map(object => {
        var skill = Object.keys(object)[0];
        var level = object[skill];
        return levelNames[level] + " " + skill
    })
    
    //return common with correct use of "and" and ","
    if (common.length === 0){
        return ("nothing on their learn list")
    } else if (common.length === 1) {
        return common[0]
    } else if (common.length === 2) {
        return common.join(' and ');
    } else if (common.length > 2) {
        return common.slice(0, -1).join(', ') + ', and ' + common.slice(-1);
      
    }
}
