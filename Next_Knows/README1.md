
<!-- **************** use router **************** -->


. This hook is particularly useful for handling navigation, accessing route parameters, and programmatically redirecting users within your Next.js application.

<!-- const router=useRoute(); -->

The router object provides various properties and methods that allow you to interact with the router and handle navigation

-> router.pathname: Returns the current route's path.
-> router.query: Returns the query string parameters of the current route.
-> router.asPath: Returns the actual path (including query string) shown in the browser.
-> router.push(): Method to programmatically navigate to a new page.
-> router.replace(): Method to replace the current page without adding it to the browser's history stack.
-> router.reload(): Method to reload the current page.
-> router.back(): Method to navigate back to the previous page in the browser's history.
