$().ready(function() {
    $("#valiform").validate({
        rules:{
            // PERSONAL DETAILS 
            first_name: {
                required: true,
                lettersonly: true
            },
            last_name:{
                required: true,
                minlength: 3
            },
            email:{
                required: true,
                email: true
            },
            phone_number:{
                required: true,
                minlength: 10,
                maxlength:10
            },
            whatsapp_number:{
                required: true,
                minlength: 10,
                maxlength:10
            },
            dob: "required",
            Portfolio:{
                required: true,
                url: true
            },
            LinkedIn:{
                required: true,
                url: true
            },
            Twitter:{
                required: true,
                url: true
            },
            Instagram:{
                required: true,
                url: true
            },
            Facebook:{
                required: true,
                url: true
            },

            //EDUCATION DETAILS
            Course :{
                required: true,
                minlength: 2
            },
            institution_name :{
                required: true,
                minlength: 5
            },
            grade :{
                required: true,
                minlength: 1,
                maxlength:5
            },
            passing_year :{
                required: true,
                minlength: 4,
                maxlength:4
            },
            pgCourse :{
                required: true,
                minlength: 2
            },
            pginstitution_name :{
                required: true,
                minlength: 5
            },
            pggrade :{
                required: true,
                minlength: 1,
                maxlength:5
            },
            pgpassing_year :{
                required: true,
                minlength: 4,
                maxlength:4
            },

            //WORK EXPERIENCE
            // Designation:{
            //     required: true,
            //     minlength: 5
            // },
            // company_name:{
            //     required: true,
            //     minlength: 5
            // },
            // startdate:"required",
            // end_date:"required",
            // job_description:{
            //     required: true,
            //     minlength: 10
            // },
            // offerletter:"required",






            messages: {
                first_name: "Please enter your first name",
                last_name:{
                required: "Please enter your last name",
                minlength: "Last name must be at least 3 charaters "
            },
            email:{
                required: "Please enter your email",
                email: "Please enter valid email"
            },
            phone_number:{
                required: "Please enter your phone number",
                minlength: "Invalid phone number",
                maxlength:"Invalid phone number"
            },
            whatsapp_number:{
                required: "Please enter your phone number",
                minlength: "Invalid phone number",
                maxlength:"Invalid phone number"
            },
            dob: "Please enter your DOB",
            Portfolio:{
                required: "Please provide your Portfolio link",
                url: "Invalid url"
            },
            LinkedIn:{
                required: "Please provide your LinkedIn link",
                url: "Invalid url"
            },
            Twitter:{
                required: "Please provide your Twitter link",
                url: "Invalid url"
            },
            Instagram:{
                required: "Please provide your Instagram link",
                url: "Invalid url"
            },
            Facebook:{
                required: "Please provide your Facebook link",
                url: "Invalid url"
            },
            Course :{
                required: "Please provide your Course name",
                minlength: "Invalid course name"
            },
            institution_name :{
                required: "Please provide your institution name",
                minlength: "Invalid institution name"
            },
            grade :{
                required: "Please provide your cgpa/ percentage name",
                minlength: "Invalid cgpa/ percentage"
            },
            passing_year :{
                required: "Please provide your passing year",
                minlength: "Invalid passing year"
            },
            pgCourse :{
                required: "Please provide your Course name",
                minlength: "Invalid course name"
            },
            pginstitution_name :{
                required: "Please provide your institution name",
                minlength: "Invalid institution name"
            },
            pggrade :{
                required: "Please provide your cgpa/ percentage name",
                minlength: "Invalid cgpa/ percentage"
            },
            pgpassing_year :{
                required: "Please provide your passing year",
                minlength: "Invalid passing year"
            },
            }
        }
    })
})