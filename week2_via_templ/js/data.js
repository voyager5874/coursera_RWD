// this file contains the data we need



var taskList = {
    tasks: [{
            caption: "Web",
            picture: "images/web1.jpg",
            progress: "99",
            reference: "details.html#web",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore ad fugiat natus non aperiam ullam similique aspernatur facere reiciendis. Voluptatibus vel quae eligendi, consequatur quis inventore obcaecati hic! Nobis animi similique quisquam aspernatur excepturi accusamus modi distinctio id, ipsum architecto quibusdam alias nisi velit maiores dolore consequatur ad nemo deserunt.",
            books: [{
                author: "Al Anderson and Ryan Benedetti",
                title: "Networking",
                publisher: "O'Reilly",
                series: "Head first"
            }, {
                author: "Freeman",
                title: "Design patterns"
            }],
            courses: [{
                provider: "Coursera",
                title: "responsive web design",
                type: "MOOC",
                reference: "#"
            }, {
                provider: "Udacity",
                title: "Classic arcade",
                type: "MOOC",
                reference: "#"
            }],
            subtopics: [{
                title: "DOM",
                reference: "#"
            }, { title: "JSON", reference: "#" }],
            websites: [{
                title: "CanIUse",
                reference: "#",
                topic: "compatibility"
            }, {
                title: "CanIUse",
                reference: "#",
                topic: "compatibility"
            }],

            person: {
                name: "Jone Doette",
                photo: "images/avatar1.jpg",
                department: "developers",
                position: "team lead"
            }
        },

        {
            caption: "javascript",
            picture: "images/js_logo.jpg",
            progress: "30",
            reference: "details.html#javascript",
            description: " JavaScript is a high-level, dynamic, untyped, and interpreted programming language.[6] It has been standardized in the ECMAScript language specification.[7] Alongside HTML and CSS, it is one of the three core technologies of World Wide Web content production; the majority of websites employ it and it is supported by all modern Web browsers without plug-ins.[6] JavaScript is prototype-based with first-class functions, making it a multi-paradigm language, supporting object-oriented,[8] imperative, and functional programming styles.[6] It has an API for working with text, arrays, dates and regular expressions, but does not include any I/O, such as networking, storage, or graphics facilities, relying for these upon the host environment in which it is embedded.Although there are strong outward similarities between JavaScript and Java, including language name, syntax, and respective standard libraries, the two are distinct languages and differ greatly in their design. JavaScript was influenced by programming languages such as Self and Scheme",
            person: {
                name: "J. Feinman",
                photo: "images/avatar1.jpg",
                department: "developers",
                position: "UX designer"
            },




            books: [{
                author: "Eric Freeman and Elisabeth Robson",
                title: "JavaScript Programming",
                publisher: "O'Reilly",
                series: "Head first"
            }, {
                author: "Addy Osmani",
                title: "Learning JavaScript Design Patterns",
                publisher: "O'Reilly",
                series: "Head first"
            }],
            courses: [{
                provider: "Udacity",
                title: "Continue JavaScript Testing",
                type: "MOOC",
                reference: "#"
            }, {
                provider: "Udacity",
                title: "Object-Oriented JavaScript",
                type: "MOOC",
                reference: "#"
            }],
            subtopics: [{
                title: "DOM",
                reference: "#"
            }, {
                title: "JSON",
                reference: "#"
            }],
            websites: [{
                title: "CanIUse",
                reference: "#",
                topic: "compatibility"
            }, {
                title: "CanIUse",
                reference: "#",
                topic: "compatibility"
            }]









        }, //javascript object end

        {
            name: "git",
            caption: "git",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea, aliquid. Quos magni libero, et officia facere, expedita accusamus voluptatum cupiditate accusantium magnam delectus repudiandae tenetur doloremque fugiat qui aperiam, quisquam veniam eaque animi deserunt. Dignissimos at, voluptas ex illo soluta.",
            picture: "images/git_logo.jpg",
            progress: "15",
            reference: "details.html#git",
            person: {
                name: "Douglas Crockford",
                photo: "images/avatar1.jpg",
                department: "developers",
                position: "manager"
            },
            books: [{
                author: "Eric Freeman and Elisabeth Robson",
                title: "Pragmatic guide to git",
                publisher: "O'Reilly",
                series: "Head first"
            }, {
                author: "Addy Osmani",
                title: "Learning JavaScript Design Patterns",
                publisher: "O'Reilly",
                series: "Head first"
            }]

        }

    ]
}
