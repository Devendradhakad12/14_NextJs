// Nextjs supports the following HTTP methods:

// 1. **GET**: Retruves data or resources from the server.
// 2. **POST**: Submits data to the server to create a new resource.
// 3. **PUT**: Updates or replaces an existing resource on the server.
// 4. **PATCH**: Partially updates an existing resource on the server.
// 5. **DELETE**: Removes a specific resource from the srver.
// 6. **HEAD**: Retrives the headers of a resource without fetching its body.
// 7. **OPTION**: Retrives the supported HTTP methods and other communication option for a resource.
 

export async function GET(request){
    // Handle GET request for /api/users
    // Retrieve users from the database or any data source
    const user =[
        {id:1,name:tony},
        {id:2,name:steve}
    ]
}

// Send the users as a response
return new Response(JSON.stringify(user))