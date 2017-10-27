$(document).ready(function() {

    // your code will go here
    $.ajax(
        {
            url: "https://www.codeschool.com/users/ylapp.json",
            dataType: "jsonp",
            success: function(result) { showCourses(result.courses.completed); },
            error: function(error) { showError(); }
        }).done(function (){
            $("div.courseDetails").on("click", function(){
                //var url = $(this).data("url");
                //location.href = url;
                // window.open(url, '_blank');
        });
    });


    function showCourses(courses)
    {
        var badges = $("#badges");

        $.each(courses, function (index, course)
        {
            var div = $("<div class='courseDetails' data-url='" + course.url + "'></div>").addClass("course");
            div.append("<h4 class='courseTitle'>" + course.title + "</h4>");
            div.append("<img src='" + course.badge + "'>");
            div.append("<a href='" + course.url + "' target='_blank'>See course</a>");

            badges.append(div);
        });
    }

    function showError()
    {
        var badges = $("#badges");
        badges.append("<p>Failed to retrieve badges. Try refreshing the page");
    }
});