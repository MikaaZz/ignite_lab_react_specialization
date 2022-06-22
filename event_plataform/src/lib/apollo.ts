import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
   uri: 'https://api-sa-east-1.graphcms.com/v2/cl4otm51s10q001xscuc7ex7d/master' ,
   cache: new InMemoryCache()
})