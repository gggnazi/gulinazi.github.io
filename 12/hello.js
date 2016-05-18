var students = {
	name:"abc",
	age: 20,
	major:"广告学",
	sayHello:function() {
		console.log("你好!");
    }
}

console.log(student.name);
console.log(student.major);
console.log(student.age);
student.sayHello();

for (var i in student) {
	console.log(i + "=" + student[i]);
}
